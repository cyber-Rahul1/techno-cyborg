import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import clientPromise from "@/lib/mongodb";
import { sendEnquiryEmails } from "@/lib/mailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Check honeypot spam trap
    if (body.website_trap && body.website_trap.length > 0) {
      return NextResponse.json({ success: true, message: "Enquiry received." }, { status: 200 });
    }

    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      const formattedErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please verify your submitted inputs.",
          errors: formattedErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    const enquiryRecord = {
      fullName: data.fullName,
      companyName: data.companyName,
      email: data.email,
      phone: data.phone,
      projectType: data.projectType,
      projectRequirements: data.projectRequirements,
      expectedTimeline: data.expectedTimeline,
      additionalInformation: data.additionalInformation || null,
      submissionDate: new Date(),
      enquiryStatus: "NEW",
      createdAt: new Date().toISOString(),
    };

    // If MongoDB is configured, save enquiry securely
    let dbPersisted = false;
    if (clientPromise) {
      try {
        const client = await clientPromise;
        const dbName = process.env.MONGODB_DB_NAME || "techno_cyborg";
        const db = client.db(dbName);
        await db.collection("enquiries").insertOne(enquiryRecord);
        dbPersisted = true;
      } catch (dbErr) {
        console.error("Database persistence warning:", dbErr);
      }
    } else {
      // Local development fallback log when credentials are not yet configured
      console.log(
        "[DEVELOPMENT MODE] Contact enquiry received (configure MONGODB_URI to persist to database):",
        JSON.stringify(enquiryRecord, null, 2)
      );
    }

    const enquiryId = `TC-${Date.now()}`;

    // Dispatch email notifications via Nodemailer
    const emailResult = await sendEnquiryEmails({
      fullName: data.fullName,
      companyName: data.companyName,
      email: data.email,
      phone: data.phone,
      projectType: data.projectType,
      projectRequirements: data.projectRequirements,
      expectedTimeline: data.expectedTimeline,
      additionalInformation: data.additionalInformation,
      enquiryId,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out. Your project enquiry has been successfully received. Our consultancy team will review your requirements and follow up.",
        enquiryId,
        persisted: dbPersisted || !process.env.MONGODB_URI,
        emailDispatched: emailResult.success,
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    console.error("Error processing project enquiry:", err);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your enquiry. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}

import { z } from "zod";
import { PROJECT_TYPE_OPTIONS, TIMELINE_OPTIONS } from "./data";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." })
    .max(100, { message: "Full name cannot exceed 100 characters." })
    .trim(),
  companyName: z
    .string()
    .min(2, { message: "Company name must be at least 2 characters." })
    .max(120, { message: "Company name cannot exceed 120 characters." })
    .trim(),
  email: z
    .string()
    .email({ message: "Please enter a valid business email address." })
    .max(150, { message: "Email cannot exceed 150 characters." })
    .trim()
    .toLowerCase(),
  phone: z
    .string()
    .min(7, { message: "Please provide a valid phone number with area code." })
    .max(25, { message: "Phone number is too long." })
    .regex(/^[0-9+\s\-()]+$/, { message: "Phone number contains invalid characters." })
    .trim(),
  projectType: z.enum(PROJECT_TYPE_OPTIONS, {
    message: "Please select a valid project type.",
  }),
  projectRequirements: z
    .string()
    .min(15, { message: "Please provide details on your requirements (at least 15 characters)." })
    .max(3000, { message: "Requirements cannot exceed 3000 characters." })
    .trim(),
  expectedTimeline: z.enum(TIMELINE_OPTIONS, {
    message: "Please select an expected timeline.",
  }),
  additionalInformation: z
    .string()
    .max(2000, { message: "Additional information cannot exceed 2000 characters." })
    .optional()
    .or(z.literal("")),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy to submit your enquiry.",
  }),
  website_trap: z.string().max(0).optional(), // Honeypot field for spam prevention
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

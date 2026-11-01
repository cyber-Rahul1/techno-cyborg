"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import { PROJECT_TYPE_OPTIONS, TIMELINE_OPTIONS } from "@/lib/data";

interface ContactFormProps {
  initialService?: string;
}

export default function ContactForm({ initialService }: ContactFormProps) {
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [confirmationDetails, setConfirmationDetails] = useState<{
    enquiryId?: string;
    message?: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      projectType: (initialService as (typeof PROJECT_TYPE_OPTIONS)[number]) || "Software Project Onboarding",
      projectRequirements: "",
      expectedTimeline: "Within 1 Month",
      additionalInformation: "",
      privacyConsent: false,
      website_trap: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Failed to submit enquiry. Please verify inputs."
        );
      }

      setSubmissionStatus("success");
      setConfirmationDetails({
        enquiryId: result.enquiryId,
        message: result.message,
      });
      reset();
    } catch (err: unknown) {
      console.error("Submission failed:", err);
      setSubmissionStatus("error");
      const message = err instanceof Error ? err.message : "An unexpected error occurred. Please try again.";
      setErrorMessage(message);
    }
  };

  return (
    <div className="w-full rounded-2xl bg-[#101522]/90 border border-white/[0.08] p-6 sm:p-8 lg:p-10 shadow-2xl shadow-indigo-950/40 relative">
      <div className="mb-8">
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
          Project Inquiry Form
        </h3>
        <p className="text-xs sm:text-sm text-slate-400">
          Share your project details with us, and let&apos;s explore the next steps together.
        </p>
      </div>

      {submissionStatus === "success" && (
        <div className="mb-6 p-6 rounded-xl bg-[#080B12] border border-cyan-500/40 text-center animate-in fade-in duration-300">
          <CheckCircle2 className="w-12 h-12 text-[#22D3EE] mx-auto mb-3" />
          <h4 className="font-heading text-lg font-bold text-white mb-2">
            Enquiry Received Successfully
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 mb-4 max-w-md mx-auto">
            {confirmationDetails?.message ||
              "Thank you for contacting Techno Cyborg Private Limited. Our consultancy team has received your project parameters and will contact you promptly."}
          </p>
          {confirmationDetails?.enquiryId && (
            <p className="font-mono text-xs text-indigo-400 mb-5">
              Reference ID: {confirmationDetails.enquiryId}
            </p>
          )}
          <button
            type="button"
            onClick={() => setSubmissionStatus("idle")}
            className="px-5 py-2 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      )}

      {submissionStatus === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-500/50 flex items-start gap-3 text-red-200">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div className="text-xs">
            <p className="font-semibold text-red-300 mb-1">Submission Notice</p>
            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Anti-spam honeypot */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          {...register("website_trap")}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Full Name <span className="text-cyan-400">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              {...register("fullName")}
              className={`w-full px-4 py-3 rounded-xl bg-[#080B12] border text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 transition-all ${
                errors.fullName
                  ? "border-red-500 focus:ring-red-500"
                  : "border-white/[0.08] focus:border-indigo-500 focus:ring-indigo-500"
              }`}
            />
            {errors.fullName && (
              <p className="text-xs text-red-400 mt-1">{errors.fullName.message}</p>
            )}
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Company Name <span className="text-cyan-400">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your company or organization name"
              {...register("companyName")}
              className={`w-full px-4 py-3 rounded-xl bg-[#080B12] border text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 transition-all ${
                errors.companyName
                  ? "border-red-500 focus:ring-red-500"
                  : "border-white/[0.08] focus:border-indigo-500 focus:ring-indigo-500"
              }`}
            />
            {errors.companyName && (
              <p className="text-xs text-red-400 mt-1">{errors.companyName.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Email Address */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Email Address <span className="text-cyan-400">*</span>
            </label>
            <input
              type="email"
              placeholder="work.email@company.com"
              {...register("email")}
              className={`w-full px-4 py-3 rounded-xl bg-[#080B12] border text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 transition-all ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-white/[0.08] focus:border-indigo-500 focus:ring-indigo-500"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Phone Number <span className="text-cyan-400">*</span>
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000 or +91 98765 43210"
              {...register("phone")}
              className={`w-full px-4 py-3 rounded-xl bg-[#080B12] border text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 transition-all ${
                errors.phone
                  ? "border-red-500 focus:ring-red-500"
                  : "border-white/[0.08] focus:border-indigo-500 focus:ring-indigo-500"
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-400 mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Project Type */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Project Type <span className="text-cyan-400">*</span>
            </label>
            <select
              {...register("projectType")}
              className={`w-full px-4 py-3 rounded-xl bg-[#080B12] border text-sm text-white focus:outline-none focus:ring-1 transition-all ${
                errors.projectType
                  ? "border-red-500 focus:ring-red-500"
                  : "border-white/[0.08] focus:border-indigo-500 focus:ring-indigo-500"
              }`}
            >
              {PROJECT_TYPE_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="bg-[#101522] text-white">
                  {opt}
                </option>
              ))}
            </select>
            {errors.projectType && (
              <p className="text-xs text-red-400 mt-1">{errors.projectType.message}</p>
            )}
          </div>

          {/* Expected Timeline */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Expected Timeline <span className="text-cyan-400">*</span>
            </label>
            <select
              {...register("expectedTimeline")}
              className={`w-full px-4 py-3 rounded-xl bg-[#080B12] border text-sm text-white focus:outline-none focus:ring-1 transition-all ${
                errors.expectedTimeline
                  ? "border-red-500 focus:ring-red-500"
                  : "border-white/[0.08] focus:border-indigo-500 focus:ring-indigo-500"
              }`}
            >
              {TIMELINE_OPTIONS.map((time) => (
                <option key={time} value={time} className="bg-[#101522] text-white">
                  {time}
                </option>
              ))}
            </select>
            {errors.expectedTimeline && (
              <p className="text-xs text-red-400 mt-1">
                {errors.expectedTimeline.message}
              </p>
            )}
          </div>
        </div>

        {/* Project Requirements */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
            Project Requirements <span className="text-cyan-400">*</span>
          </label>
          <textarea
            rows={4}
            placeholder="Please outline your project scope, core objectives, current challenges, and expectations..."
            {...register("projectRequirements")}
            className={`w-full px-4 py-3 rounded-xl bg-[#080B12] border text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 transition-all ${
              errors.projectRequirements
                ? "border-red-500 focus:ring-red-500"
                : "border-white/[0.08] focus:border-indigo-500 focus:ring-indigo-500"
            }`}
          />
          {errors.projectRequirements && (
            <p className="text-xs text-red-400 mt-1">
              {errors.projectRequirements.message}
            </p>
          )}
        </div>

        {/* Additional Information */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
            Additional Information (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="Any specific architectural preferences, constraints, or existing documentation..."
            {...register("additionalInformation")}
            className="w-full px-4 py-3 rounded-xl bg-[#080B12] border border-white/[0.08] text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
          />
        </div>

        {/* Privacy consent checkbox */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              {...register("privacyConsent")}
              className="mt-0.5 rounded bg-[#080B12] border-white/20 text-[#6366F1] focus:ring-[#6366F1] focus:ring-offset-0"
            />
            <span className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300">
              I consent to Techno Cyborg Private Limited processing my information to review this inquiry in accordance with the{" "}
              <Link
                href="/privacy-policy"
                target="_blank"
                className="text-cyan-400 underline hover:text-cyan-300"
              >
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          {errors.privacyConsent && (
            <p className="text-xs text-red-400 mt-1">
              {errors.privacyConsent.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={submissionStatus === "loading"}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#22D3EE] hover:opacity-95 transition-all shadow-lg shadow-indigo-600/30 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
          >
            {submissionStatus === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting Project Enquiry...
              </>
            ) : (
              <>
                Submit Project Enquiry
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

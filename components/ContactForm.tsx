"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const subjects = [
  "General Enquiry",
  "Membership — Starter",
  "Membership — Pro",
  "Membership — Elite",
  "Personal Training",
  "Group Classes",
  "Gym Tour",
  "Corporate Membership",
  "Other",
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (data.phone && !/^[+\d\s\-().]{7,20}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!data.subject) {
    errors.subject = "Please select a subject.";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required.";
  } else if (data.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }

  return errors;
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");

  const [formData, setFormData] = useState<FormData>(() => {
    let initialSubject = "";
    if (plan) {
      const match = subjects.find(s => s.toLowerCase().includes(plan.toLowerCase()));
      if (match) initialSubject = match;
    }
    return {
      name: "",
      email: "",
      phone: "",
      subject: initialSubject,
      message: "",
    };
  });


  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Re-validate the field if it's been touched
    if (touched[name as keyof FormData]) {
      const fieldErrors = validate({ ...formData, [name]: value });
      setErrors((prev) => ({
        ...prev,
        [name]: fieldErrors[name as keyof FormData],
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldErrors = validate(formData);
    setErrors((prev) => ({
      ...prev,
      [name]: fieldErrors[name as keyof FormData],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");

    try {
      const formPayload = {
        "form-name": "contact",
        ...formData,
      };

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formPayload as Record<string, string>).toString(),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setStatus("success");
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 border border-primary/30 rounded-md bg-primary/5">
        <svg
          className="w-16 h-16 text-primary mb-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="font-heading text-2xl mb-3">MESSAGE SENT</h3>
        <p className="text-muted-foreground max-w-sm">
          Thank you for getting in touch. A member of the Forge Fitness team will
          respond within one business day.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
            setTouched({});
            setErrors({});
          }}
          className="mt-8 text-sm text-primary hover:underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Full Name <span className="text-primary" aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={!!errors.name}
          placeholder="Your full name"
          className={`w-full bg-[#1a1a1a] border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary ${
            errors.name ? "border-red-500" : "border-border"
          }`}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email + Phone row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address <span className="text-primary" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
            placeholder="you@example.com"
            className={`w-full bg-[#1a1a1a] border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary ${
              errors.email ? "border-red-500" : "border-border"
            }`}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone{" "}
            <span className="text-muted-foreground text-xs font-normal">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            aria-invalid={!!errors.phone}
            placeholder="+1 (212) 555-0000"
            className={`w-full bg-[#1a1a1a] border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary ${
              errors.phone ? "border-red-500" : "border-border"
            }`}
          />
          {errors.phone && (
            <p id="phone-error" role="alert" className="mt-1.5 text-xs text-red-400">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject <span className="text-primary" aria-hidden="true">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          aria-invalid={!!errors.subject}
          className={`w-full bg-[#1a1a1a] border rounded-md px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary appearance-none ${
            errors.subject ? "border-red-500" : "border-border"
          } ${!formData.subject ? "text-muted-foreground/50" : ""}`}
        >
          <option value="" disabled>
            Select a subject
          </option>
          {subjects.map((s) => (
            <option key={s} value={s} className="bg-[#1a1a1a] text-foreground">
              {s}
            </option>
          ))}
        </select>
        {errors.subject && (
          <p id="subject-error" role="alert" className="mt-1.5 text-xs text-red-400">
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message <span className="text-primary" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={!!errors.message}
          placeholder="Tell us about your training goals or ask any questions..."
          className={`w-full bg-[#1a1a1a] border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary resize-none ${
            errors.message ? "border-red-500" : "border-border"
          }`}
        />
        <div className="flex justify-between items-start mt-1.5">
          {errors.message ? (
            <p id="message-error" role="alert" className="text-xs text-red-400">
              {errors.message}
            </p>
          ) : (
            <span />
          )}
          <span className="text-xs text-muted-foreground ml-auto">
            {formData.message.length} chars
          </span>
        </div>
      </div>

      {/* Error Message */}
      {status === "error" && (
        <p role="alert" className="text-sm text-red-500 text-center">
          There was a problem sending your message. Please try again.
        </p>
      )}

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          "SEND MESSAGE"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        We typically respond within one business day.
        <br />
        Fields marked with <span className="text-primary">*</span> are required.
      </p>
    </form>
  );
}

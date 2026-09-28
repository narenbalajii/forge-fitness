const fs = require('fs');

const formContent = `"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

type FormData = {
  "Full Name": string;
  "Email": string;
  "Phone": string;
  "Subject": string;
  "Message": string;
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

  if (!data["Full Name"].trim()) {
    errors["Full Name"] = "Name is required.";
  }

  if (!data["Email"].trim()) {
    errors["Email"] = "Email address is required.";
  } else if (!/^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/.test(data["Email"])) {
    errors["Email"] = "Please enter a valid email address.";
  }

  if (data["Phone"] && !/^[+\\d\\s\\-().]{7,20}$/.test(data["Phone"])) {
    errors["Phone"] = "Please enter a valid phone number.";
  }

  if (!data["Subject"]) {
    errors["Subject"] = "Please select a subject.";
  }

  if (!data["Message"].trim()) {
    errors["Message"] = "Message is required.";
  } else if (data["Message"].trim().length < 20) {
    errors["Message"] = "Message must be at least 20 characters.";
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
      "Full Name": "",
      "Email": "",
      "Phone": "",
      "Subject": initialSubject,
      "Message": "",
    };
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const name = e.target.name as keyof FormData;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const fieldErrors = validate({ ...formData, [name]: value });
      setErrors((prev) => ({
        ...prev,
        [name]: fieldErrors[name],
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const name = e.target.name as keyof FormData;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldErrors = validate(formData);
    setErrors((prev) => ({
      ...prev,
      [name]: fieldErrors[name],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      "Full Name": true,
      "Email": true,
      "Phone": true,
      "Subject": true,
      "Message": true,
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
        body: new URLSearchParams(formPayload).toString(),
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
      <div className="bg-[#1a1a1a] border border-border rounded-lg p-8 text-center flex flex-col items-center justify-center min-h-[400px]">
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
            setFormData({ "Full Name": "", "Email": "", "Phone": "", "Subject": "", "Message": "" });
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
        <label htmlFor="Full Name" className="block text-sm font-medium mb-2">
          Full Name <span className="text-primary" aria-hidden="true">*</span>
        </label>
        <input
          id="Full Name"
          name="Full Name"
          type="text"
          autoComplete="name"
          value={formData["Full Name"]}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-describedby={errors["Full Name"] ? "name-error" : undefined}
          aria-invalid={!!errors["Full Name"]}
          placeholder="Your full name"
          className={\`w-full bg-[#1a1a1a] border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary \${
            errors["Full Name"] ? "border-red-500" : "border-border"
          }\`}
        />
        {errors["Full Name"] && (
          <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-400">
            {errors["Full Name"]}
          </p>
        )}
      </div>

      {/* Email + Phone row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="Email" className="block text-sm font-medium mb-2">
            Email Address <span className="text-primary" aria-hidden="true">*</span>
          </label>
          <input
            id="Email"
            name="Email"
            type="email"
            autoComplete="email"
            value={formData["Email"]}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-describedby={errors["Email"] ? "email-error" : undefined}
            aria-invalid={!!errors["Email"]}
            placeholder="you@example.com"
            className={\`w-full bg-[#1a1a1a] border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary \${
              errors["Email"] ? "border-red-500" : "border-border"
            }\`}
          />
          {errors["Email"] && (
            <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-400">
              {errors["Email"]}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="Phone" className="block text-sm font-medium mb-2">
            Phone{" "}
            <span className="text-muted-foreground text-xs font-normal">(optional)</span>
          </label>
          <input
            id="Phone"
            name="Phone"
            type="tel"
            autoComplete="tel"
            value={formData["Phone"]}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-describedby={errors["Phone"] ? "phone-error" : undefined}
            aria-invalid={!!errors["Phone"]}
            placeholder="+1 (212) 555-0000"
            className={\`w-full bg-[#1a1a1a] border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary \${
              errors["Phone"] ? "border-red-500" : "border-border"
            }\`}
          />
          {errors["Phone"] && (
            <p id="phone-error" role="alert" className="mt-1.5 text-xs text-red-400">
              {errors["Phone"]}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="Subject" className="block text-sm font-medium mb-2">
          Subject <span className="text-primary" aria-hidden="true">*</span>
        </label>
        <select
          id="Subject"
          name="Subject"
          value={formData["Subject"]}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-describedby={errors["Subject"] ? "subject-error" : undefined}
          aria-invalid={!!errors["Subject"]}
          className={\`w-full bg-[#1a1a1a] border rounded-md px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary appearance-none \${
            errors["Subject"] ? "border-red-500" : "border-border"
          } \${!formData["Subject"] ? "text-muted-foreground/50" : ""}\`}
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
        {errors["Subject"] && (
          <p id="subject-error" role="alert" className="mt-1.5 text-xs text-red-400">
            {errors["Subject"]}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="Message" className="block text-sm font-medium mb-2">
          Message <span className="text-primary" aria-hidden="true">*</span>
        </label>
        <textarea
          id="Message"
          name="Message"
          rows={6}
          value={formData["Message"]}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-describedby={errors["Message"] ? "message-error" : undefined}
          aria-invalid={!!errors["Message"]}
          placeholder="Tell us about your training goals or ask any questions..."
          className={\`w-full bg-[#1a1a1a] border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary resize-none \${
            errors["Message"] ? "border-red-500" : "border-border"
          }\`}
        />
        <div className="flex justify-between items-start mt-1.5">
          {errors["Message"] ? (
            <p id="message-error" role="alert" className="text-xs text-red-400">
              {errors["Message"]}
            </p>
          ) : (
            <span />
          )}
          <span className="text-xs text-muted-foreground ml-auto">
            {formData["Message"].length} chars
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
`;

fs.writeFileSync('components/ContactForm.tsx', formContent);
console.log("ContactForm.tsx updated.");

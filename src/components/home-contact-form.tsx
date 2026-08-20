"use client";

import { useState, type FormEvent } from "react";

const SERVICE_OPTIONS = [
  "Energy",
  "Mining",
  "Financial Services",
  "Hospitality, Food & Beverage",
  "HR/Change Management",
  "Real Estate",
  "Call Centre Services",
  "IT & Software Development",
  "Corporate Law",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function HomeContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="block" aria-label="Contact form" onSubmit={handleSubmit}>
      <p className="block pb-6">
        <span className="block relative text-color-007">
          <input
            className="w-full h-11.5 border-b-2 border-solid border-b-surface inline-block relative p-2.5 overflow-clip text-color-006 text-sm leading-6 bg-color-005 cursor-text"
            aria-required="true"
            name="FullName"
            placeholder="*Enter your name and surname"
            type="text"
            required
            minLength={2}
            maxLength={50}
          />
        </span>
      </p>
      <p className="block pb-6">
        <span className="block relative text-color-007">
          <input
            className="w-full h-11.5 border-b-2 border-solid border-b-surface inline-block relative p-2.5 overflow-clip text-color-006 text-sm leading-6 bg-color-005 cursor-text"
            aria-required="true"
            name="Email"
            placeholder="*Enter your contact email address"
            type="email"
            required
            maxLength={400}
          />
        </span>
      </p>
      <p className="block pb-6">
        <span className="block relative text-color-007">
          <input
            className="w-full h-11.5 border-b-2 border-solid border-b-surface inline-block relative p-2.5 overflow-clip text-color-006 text-sm leading-6 bg-color-005 cursor-text"
            name="Number"
            placeholder="Enter your contact number"
            type="tel"
            maxLength={400}
          />
        </span>
      </p>
      <p className="block pb-6">
        <span className="block relative text-color-007">
          <select
            className="w-full h-[2.5625rem] border-b-2 border-solid border-b-surface inline-block relative p-2.5 items-center text-color-006 text-sm leading-[1.0625rem] bg-color-005 cursor-default"
            aria-required="true"
            name="Service"
            defaultValue=""
            required
          >
            <option value="" disabled>
              *Select a service
            </option>
            {SERVICE_OPTIONS.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </span>
      </p>
      <p className="block pb-6">
        <span className="block relative text-color-007">
          <textarea
            className="w-full h-70.5 border-b-2 border-solid border-b-surface inline-block relative max-w-full p-5 overflow-auto text-color-006 text-sm leading-6 whitespace-pre-wrap [overflow-wrap:break-word] bg-color-005 cursor-text"
            name="YourMessage"
            placeholder="Type your message"
            maxLength={255}
          />
        </span>
      </p>
      <p className="block">
        <input
          className="w-23.5 h-[3.0625rem] inline-block py-[0.9375rem] px-5.5 rounded-[200px] overflow-clip text-background font-semibold leading-[1.1875rem] text-center capitalize bg-primary cursor-pointer disabled:opacity-60"
          type="submit"
          value={status === "submitting" ? "Sending…" : "Submit"}
          disabled={status === "submitting"}
        />
      </p>
      {status === "success" && (
        <p className="mt-4 text-sm text-color-006">Thanks — your message has been sent. We&apos;ll be in touch soon.</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm text-accent">
          Something went wrong sending your message. Please email us directly at sales@hammerandanvil.co.za.
        </p>
      )}
    </form>
  );
}

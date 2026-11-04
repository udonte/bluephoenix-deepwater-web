"use client";

import { useState, type FormEvent } from "react";
import { SERVICES } from "@/lib/data";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border-2 border-black bg-[#f6f6f6] p-10 text-center">
        <div className="mx-auto mb-4 h-[3px] w-10 bg-[#ff513b]" />
        <h3 className="font-display text-2xl font-bold uppercase tracking-[0.04em] text-black">
          Enquiry Received
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#626262]">
          Thank you for contacting Blue Phoenix Marine. Our 24/7 operations desk has received your
          project details and will respond promptly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn-sharp-black mt-6"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-neutral-200 bg-white p-8 sm:p-10"
    >
      <h3 className="font-display text-2xl font-bold uppercase tracking-[0.04em] text-black">
        Request Operational Support / Quote
      </h3>
      <div className="mt-3 mb-6 h-[3px] w-8 bg-[#ff513b]" />
      <p className="mb-8 text-sm text-[#626262]">
        Provide your vessel, port, or offshore project requirements below for immediate dispatch to
        our UK or West African teams.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-[11px] font-bold uppercase tracking-[0.18em] text-black"
          >
            Your Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Capt. / Superintendent Name"
            className="mt-2 w-full border border-neutral-300 bg-white px-4 py-3 text-sm text-black placeholder:text-neutral-400 focus:border-black focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-[11px] font-bold uppercase tracking-[0.18em] text-black"
          >
            Company / Vessel Name *
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            placeholder="Shipping Line or Vessel IMO"
            className="mt-2 w-full border border-neutral-300 bg-white px-4 py-3 text-sm text-black placeholder:text-neutral-400 focus:border-black focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-[11px] font-bold uppercase tracking-[0.18em] text-black"
          >
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="operations@company.com"
            className="mt-2 w-full border border-neutral-300 bg-white px-4 py-3 text-sm text-black placeholder:text-neutral-400 focus:border-black focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-[11px] font-bold uppercase tracking-[0.18em] text-black"
          >
            Direct Phone / WhatsApp *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+44 / +234 / +233..."
            className="mt-2 w-full border border-neutral-300 bg-white px-4 py-3 text-sm text-black placeholder:text-neutral-400 focus:border-black focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-[11px] font-bold uppercase tracking-[0.18em] text-black"
          >
            Service Required
          </label>
          <select
            id="service"
            name="service"
            className="mt-2 w-full border border-neutral-300 bg-white px-4 py-3 text-sm text-black focus:border-black focus:outline-none"
          >
            <option value="">Select a marine service...</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>
                [{s.categoryLabel}] {s.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="region"
            className="block text-[11px] font-bold uppercase tracking-[0.18em] text-black"
          >
            Operating Port / Region
          </label>
          <select
            id="region"
            name="region"
            className="mt-2 w-full border border-neutral-300 bg-white px-4 py-3 text-sm text-black focus:border-black focus:outline-none"
          >
            <option value="lagos">Lagos, Nigeria</option>
            <option value="takoradi">Takoradi / Tema / Accra, Ghana</option>
            <option value="lome">Lomé Anchorage, Togo</option>
            <option value="uk">United Kingdom / International</option>
            <option value="other">Other West African Port</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="message"
          className="block text-[11px] font-bold uppercase tracking-[0.18em] text-black"
        >
          Project Scope / Vessel Particulars *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Please include vessel type, LOA/beam, classification society, port ETA, and required scope of work..."
          className="mt-2 w-full border border-neutral-300 bg-white px-4 py-3 text-sm text-black placeholder:text-neutral-400 focus:border-black focus:outline-none"
        />
      </div>

      <div className="mt-8">
        <button type="submit" className="btn-sharp-black w-full">
          Send Operational Enquiry
        </button>
      </div>
    </form>
  );
}

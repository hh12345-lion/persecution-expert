"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SITE_EMAIL } from "@/lib/constants";

const inputClass =
  "w-full min-w-0 max-w-full border-0 border-b border-rule bg-transparent px-0 py-3 text-base text-body placeholder:text-body/35 focus:border-ember focus:outline-none focus:ring-0 min-h-[44px]";
const labelClass = "mb-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/55";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      fullName: String(data.get("name") ?? "").trim(),
      organisation: String(data.get("law_firm") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: "",
      persecutionGround: "",
      countryOfOrigin: "",
      proceedings: "",
      funding: "",
      summary: String(data.get("summary") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) router.push("/thank-you");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="min-w-0 w-full space-y-6">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="min-w-0">
        <label className={labelClass} htmlFor="name">
          Name *
        </label>
        <input id="name" name="name" required autoComplete="name" className={inputClass} placeholder="Your full name" />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="law_firm">
          Firm *
        </label>
        <input
          id="law_firm"
          name="law_firm"
          required
          autoComplete="organization"
          className={inputClass}
          placeholder="Law firm or chambers"
        />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="email">
          Email *
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          className={inputClass}
          placeholder="you@firm.co.uk"
        />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="summary">
          Case note *
        </label>
        <textarea
          id="summary"
          name="summary"
          required
          rows={3}
          placeholder="Ground, country, hearing stage — a few lines is enough."
          className={`${inputClass} min-h-[88px] resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong. Email{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-medium underline">
            {SITE_EMAIL}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-[44px] w-full items-center justify-center bg-ember px-6 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-ember-deep disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Send instruction"}
      </button>
    </form>
  );
}

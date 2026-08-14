"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SITE_EMAIL } from "@/lib/constants";

const inputClass =
  "w-full min-w-0 max-w-full border border-rule bg-panel px-3 py-3 text-base text-ink placeholder:text-body/40 focus:border-ember focus:outline-none min-h-[44px]";
const labelClass = "mb-1.5 block text-[12px] font-medium text-ink";

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
      _gotcha: String(data.get("_gotcha") ?? "").trim(),
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
    <form onSubmit={handleSubmit} className="min-w-0 w-full space-y-5">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="min-w-0">
        <label className={labelClass} htmlFor="name">
          Name *
        </label>
        <input id="name" name="name" required autoComplete="name" className={inputClass} />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="law_firm">
          Firm *
        </label>
        <input id="law_firm" name="law_firm" required autoComplete="organization" className={inputClass} />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="email">
          Email *
        </label>
        <input id="email" type="email" name="email" required autoComplete="email" className={inputClass} />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="summary">
          Case note *
        </label>
        <textarea
          id="summary"
          name="summary"
          required
          rows={4}
          placeholder="Ground, country, hearing stage — a few lines is enough."
          className={`${inputClass} min-h-[96px] resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-ember" role="alert">
          Something went wrong. Email{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="underline">
            {SITE_EMAIL}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-[44px] w-full items-center justify-center bg-ember px-6 py-3 text-sm font-semibold text-white hover:bg-ember-deep disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Refer a case"}
      </button>
    </form>
  );
}

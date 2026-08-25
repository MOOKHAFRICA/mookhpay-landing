import { useState } from "react";

const SNIPPET = [
  "curl https://api.mookhpay.com/v1/charges \\",
  '  -H "Authorization: Bearer sk_test_..." \\',
  "  -d amount=10000 \\",
  "  -d currency=kes \\",
  "  -d method=mpesa \\",
  "  -d phone=254798984828",
].join("\n");

export default function Developers() {
  const [copied, setCopied] = useState(false);

  const copySnippet = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(SNIPPET).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section
      id="developers"
      className="grid grid-cols-1 items-center gap-10 py-6 lg:grid-cols-[1fr_1.15fr] lg:gap-16"
    >
      <div className="flex flex-col items-start gap-5">
        <span className="font-mono text-xs uppercase tracking-wider text-[#818287]">
          Developers
        </span>
        <h2 className="max-w-md font-display text-[32px] font-medium leading-[1.1] tracking-[-1.28px] text-[#122022] md:text-[40px] md:tracking-[-1.6px]">
          One request, any rail.
        </h2>
        <p className="max-w-md text-base leading-[26px] tracking-[-0.64px] text-[#818287]">
          REST, idempotent and webhook-driven. Test keys work the moment you
          sign up — no sales call, no sandbox request form.
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <a
            href="https://mookhpay.docs.apiary.io/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-xl bg-black px-6 py-2 text-base tracking-[-0.64px] text-white transition-colors hover:bg-gray-900"
          >
            API reference
          </a>
          <a
            href="https://mookhpay.docs.apiary.io/#introduction/onboarding"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-xl bg-[#EFEFEF] px-6 py-2 text-base tracking-[-0.64px] text-[#111827] shadow-card transition-colors hover:bg-gray-200"
          >
            Onboarding guide
          </a>
        </div>
      </div>

      <div className="overflow-hidden rounded-[20px] border border-[#E3E3E3] bg-white shadow-card">
        <div className="flex items-center gap-3 border-b border-[#E3E3E3] bg-[#FBFBFB] px-5 py-3 sm:px-6">
          <span className="font-mono text-xs tracking-tight text-[#111827]">
            POST /v1/charges
          </span>
          <span className="flex-1" />
          <button
            type="button"
            onClick={copySnippet}
            className={`rounded-full px-4 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider transition-colors ${
              copied
                ? "bg-sal-green text-black"
                : "bg-[#EFEFEF] text-[#111827] shadow-card hover:bg-gray-200"
            }`}
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <pre className="overflow-x-auto bg-[#111827] p-5 font-mono text-sm leading-[1.65] tracking-tight text-white sm:p-6">
          {SNIPPET}
        </pre>
        <div className="flex items-center gap-3 border-t border-[#E3E3E3] bg-[#FBFBFB] px-5 py-3 sm:px-6">
          <span className="rounded-full bg-sal-green px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-black">
            200 OK
          </span>
          <span className="font-mono text-xs tracking-tight text-[#818287]">
            charge.pending → webhook in ~4s
          </span>
        </div>
      </div>
    </section>
  );
}

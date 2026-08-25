import { BASE } from "../config/site";

export default function Pricing() {
  return (
    <section id="pricing" className="flex flex-col gap-5 py-6">
      <span className="font-mono text-xs uppercase tracking-wider text-[#818287]">
        Pricing
      </span>
      <div className="flex items-center gap-4">
        <h2 className="font-display text-[32px] font-medium leading-[1.1] tracking-[-1.28px] text-[#122022] md:text-[40px] md:tracking-[-1.6px]">
          Pay only for what you collect.
        </h2>
        {/* PINCH — the Salimia hand for fees and micro-amounts */}
        <img
          src={`${BASE}/hands/pinch.png`}
          alt=""
          className="h-16 w-auto"
          style={{ transform: "rotate(-15deg)" }}
        />
      </div>
      <p className="max-w-2xl text-base leading-[26px] tracking-[-0.64px] text-[#818287]">
        No minimum costs, no lock-in contracts, no hidden fees. Settlement to
        mobile wallet within 24 hours, to bank within 48 hours of request.
      </p>
    </section>
  );
}

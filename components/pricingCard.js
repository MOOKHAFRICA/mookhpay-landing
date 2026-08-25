import { useState } from "react";

// Rates verified against the previous published table; PayPal stays 8%.
const RATES = [
  {
    method: "M-Pesa",
    type: "Mobile money",
    region: "Kenya",
    rate: "2%",
    group: "Mobile",
  },
  {
    method: "Bonga Points",
    type: "Loyalty",
    region: "Kenya",
    rate: "2%",
    group: "Mobile",
  },
  {
    method: "MTN MoMo",
    type: "Mobile money",
    region: "Uganda",
    rate: "3%",
    group: "Mobile",
  },
  {
    method: "Airtel Money",
    type: "Mobile money",
    region: "Uganda, Rwanda",
    rate: "3%",
    group: "Mobile",
  },
  {
    method: "Visa, Mastercard, Amex",
    type: "Card",
    region: "Global",
    rate: "4%",
    group: "Cards",
  },
  {
    method: "PayPal",
    type: "Wallet",
    region: "Global",
    rate: "8%",
    group: "Cards",
  },
];

const TABS = [
  { key: "All", label: "All methods" },
  { key: "Mobile", label: "Mobile money" },
  { key: "Cards", label: "Cards & wallets" },
];

export default function PricingCard() {
  const [filter, setFilter] = useState("All");
  const rows = RATES.filter((r) => filter === "All" || r.group === filter);

  return (
    <div className="flex flex-col gap-4">
      <div className="self-start rounded-full bg-[#EFEFEF] p-1 shadow-card sm:self-end">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setFilter(t.key)}
            className={`rounded-full px-4 py-2 text-sm tracking-[-0.56px] transition-colors sm:px-5 ${
              filter === t.key
                ? "bg-[#FCFCFC] font-medium text-[#111827] shadow-card"
                : "text-[#818287] hover:text-[#111827]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-[24px] border border-[#E3E3E3] bg-white shadow-card">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead className="border-b border-[#D0D7DE] bg-[#FBFBFB]">
              <tr>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-tight text-[#818287] sm:px-6">
                  Payment method
                </th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-tight text-[#818287] sm:px-6">
                  Type
                </th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-tight text-[#818287] sm:px-6">
                  Region
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-tight text-[#818287] sm:px-6">
                  Per transaction
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr
                  key={r.method}
                  className="border-b border-[#D0D7DE] transition-colors hover:bg-gray-50"
                >
                  <td className="px-4 py-3 text-sm font-medium leading-[26px] tracking-[-0.56px] text-[#111827] sm:px-6 sm:text-base sm:tracking-[-0.64px]">
                    {r.method}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs tracking-tight text-[#818287] sm:px-6">
                    {r.type}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs tracking-tight text-[#818287] sm:px-6">
                    {r.region}
                  </td>
                  <td className="px-4 py-3 text-right sm:px-6">
                    <span className="inline-block rounded-full bg-sal-green px-3 py-1 font-display text-sm font-medium text-black">
                      {r.rate}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap items-center gap-4 px-4 py-4 sm:px-6">
          <span className="font-mono text-xs tracking-tight text-[#818287]">
            Processing over KES 5M a month?
          </span>
          <span className="flex-1" />
          <a
            href="mailto:info@mookhpay.com"
            className="inline-flex items-center rounded-xl bg-[#EFEFEF] px-5 py-2 text-sm tracking-[-0.56px] text-[#111827] shadow-card transition-colors hover:bg-gray-200"
          >
            Request a quote
          </a>
        </div>
      </div>
    </div>
  );
}

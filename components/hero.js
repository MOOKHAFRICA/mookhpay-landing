import Shape from "./shape";
import { BASE } from "../config/site";

// Mock data for the dashboard preview — mirrors the real admin dashboard
// (StatsCard pattern from salimia-me/admin-dashboard).
const STAT_CARDS = [
  {
    title: "Revenue Balance",
    value: "KES 482,150",
    change: "+12.4%",
    up: true,
  },
  { title: "Total Volume", value: "KES 1.2M", change: "+8.1%", up: true },
  { title: "Total Transactions", value: "3,214", change: "-2.3%", up: false },
];

const CHART_POINTS =
  "4,68 44,56 84,62 124,44 164,48 204,32 244,38 284,20";

const TrendIcon = ({ up }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    style={up ? undefined : { transform: "scaleY(-1)" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.59961 5.6C9.15778 5.6 8.79961 5.24183 8.79961 4.8C8.79961 4.35817 9.15778 4 9.59961 4H13.5996C14.0414 4 14.3996 4.35817 14.3996 4.8V8.8C14.3996 9.24183 14.0414 9.6 13.5996 9.6C13.1578 9.6 12.7996 9.24183 12.7996 8.8V6.73137L9.36529 10.1657C9.05288 10.4781 8.54634 10.4781 8.23392 10.1657L6.39961 8.33137L2.96529 11.7657C2.65288 12.0781 2.14634 12.0781 1.83392 11.7657C1.5215 11.4533 1.5215 10.9467 1.83392 10.6343L5.83392 6.63431C6.14634 6.3219 6.65288 6.3219 6.96529 6.63431L8.79961 8.46863L11.6682 5.6H9.59961Z"
      fill="#111827"
    />
  </svg>
);

function StatCard({ title, value, change, up }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 rounded-[20px] border-b border-[#E3E3E3] bg-white p-3 sm:p-4">
      <div className="flex items-center justify-between gap-2 self-stretch">
        <span className="text-xs font-medium tracking-[-0.48px] text-[#111827] sm:text-sm sm:tracking-[-0.56px]">
          {title}
        </span>
        <div className="flex flex-shrink-0 items-center gap-1 rounded-[48px] bg-[#EFEFEF] px-2 py-1">
          <span className="text-[10px] font-semibold uppercase tracking-[-0.48px] text-[#111827]">
            30d
          </span>
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path
              d="M4.32248 5.01074L7 7.68231L9.67752 5.01074L10.5 5.83319L7 9.33319L3.5 5.83319L4.32248 5.01074Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div className="flex min-w-0 items-center justify-between gap-2 self-stretch">
        <span className="truncate font-display text-lg font-medium tracking-[-0.8px] text-[#122022] sm:text-2xl sm:tracking-[-1.12px]">
          {value}
        </span>
        <div
          className={`flex flex-shrink-0 items-center gap-1 rounded-lg px-2 ${
            up ? "bg-[#CFE9BC]" : "bg-[#FFB8DE]"
          }`}
        >
          <span className="whitespace-nowrap text-xs font-medium leading-[26px] tracking-[-0.48px] text-[#111827]">
            {change}
          </span>
          <TrendIcon up={up} />
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[24px] border-b border-[#E3E3E3] bg-white p-8 shadow-card md:p-16">
      {/* Salimia motif: one shape per surface, hand at native crop over it */}
      <div className="pointer-events-none absolute -right-16 -top-20 hidden w-[300px] lg:block xl:w-[380px]">
        <Shape
          shape="star"
          w={505}
          h={502}
          fill="yellow"
          className="w-full"
          style={{ transform: "rotate(15deg)" }}
        />
        <img
          src={`${BASE}/hands/thumbs-up.png`}
          alt=""
          className="absolute left-1/2 top-1/2 w-[55%] -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="relative flex flex-col items-start gap-6">
        <h1 className="max-w-4xl font-display text-5xl font-normal leading-[0.95] tracking-[-0.06em] text-[#122022] md:text-[72px] lg:max-w-2xl lg:text-[80px] xl:max-w-3xl">
          The payments solution for small businesses.
        </h1>
        <p className="max-w-2xl text-lg font-medium leading-[26px] tracking-[-0.72px] text-[#111827] md:text-xl">
          Accept online payments today. Grow your business with trusted,
          effortless payments.
        </p>
        <p className="max-w-2xl text-base tracking-[-0.64px] text-[#818287]">
          Request payments in seconds and keep full control of your financial
          data inside a feature-packed merchant dashboard.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="mailto:info@mookhpay.com"
            className="inline-flex items-center rounded-xl bg-black px-6 py-2 text-base tracking-[-0.64px] text-white transition-colors hover:bg-gray-900"
          >
            Get started
          </a>
          <a
            href="https://mookhpay.docs.apiary.io/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-xl bg-[#EFEFEF] px-6 py-2 text-base tracking-[-0.64px] text-[#111827] shadow-card transition-colors hover:bg-gray-200"
          >
            Read the docs
          </a>
        </div>
      </div>

      {/* Dashboard preview — mirrors the real merchant dashboard */}
      <div className="relative mt-12 rounded-[20px] border border-[#E3E3E3] bg-[#EFEFEF] p-3 shadow-card sm:p-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-3">
          <span className="whitespace-nowrap rounded-[20px] bg-black px-4 py-1.5 text-xs font-medium tracking-[-0.48px] text-white shadow-md sm:text-sm">
            Dashboard
          </span>
          <span className="whitespace-nowrap rounded-[20px] bg-[#FCFCFC] px-4 py-1.5 text-xs font-medium tracking-[-0.48px] text-[#111827] shadow-md sm:text-sm">
            Transactions
          </span>
          <span className="whitespace-nowrap rounded-[20px] bg-[#FCFCFC] px-4 py-1.5 text-xs font-medium tracking-[-0.48px] text-[#111827] shadow-md sm:text-sm">
            Ledger
          </span>
          <span className="hidden whitespace-nowrap rounded-[20px] bg-[#FCFCFC] px-4 py-1.5 text-xs font-medium tracking-[-0.48px] text-[#111827] shadow-md sm:inline sm:text-sm">
            Reports
          </span>
        </div>

        <p className="pb-2 text-xs font-medium tracking-[-0.48px] text-[#111827] sm:text-sm sm:tracking-[-0.56px]">
          Revenue Metrics
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {STAT_CARDS.map((c) => (
            <StatCard key={c.title} {...c} />
          ))}
        </div>

        <div className="mt-3 rounded-[20px] border-b border-[#E3E3E3] bg-white p-4">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-medium tracking-[-0.48px] text-[#111827] sm:text-sm sm:tracking-[-0.56px]">
              Transaction Volume Trend
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#818287]">
              Last 30 days
            </span>
          </div>
          <svg
            viewBox="0 0 288 88"
            preserveAspectRatio="none"
            className="mt-2 h-20 w-full sm:h-24"
            aria-hidden="true"
          >
            {[20, 44, 68].map((y) => (
              <line
                key={y}
                x1="4"
                y1={y}
                x2="284"
                y2={y}
                stroke="#E3E3E3"
                strokeDasharray="3 3"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            ))}
            <polyline
              points={CHART_POINTS}
              fill="none"
              stroke="#111827"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

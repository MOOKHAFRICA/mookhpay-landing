import Shape from "./shape";

const BULLETS = [
  "Test keys issued at signup — no sandbox request form",
  "Idempotent charges and signed webhooks",
  "Settle every market into one currency",
  "Only pay when a transaction succeeds",
];

const FEATURES = [
  {
    id: "feature-2",
    n: "01",
    shape: { shape: "ellipse", w: 281, h: 283, fill: "lilac" },
    title: "Payment links",
    body: "A customised link you paste into a chat or a bio — for a group fund, a chama, or a storefront order.",
    cta: {
      label: "See an example",
      href: "https://checkout.mookhpay.com/link/yourbrandname",
      external: true,
    },
  },
  {
    id: "feature-1",
    n: "02",
    shape: { shape: "star", w: 505, h: 502, fill: "green" },
    title: "Quick integration",
    body: "Drop-in checkout, REST API and pre-built tools, documented in one place.",
    cta: {
      label: "Read the docs",
      href: "https://mookhpay.docs.apiary.io/",
      external: true,
    },
  },
  {
    id: "feature-3",
    n: "03",
    shape: { shape: "polygon", w: 524, h: 671, fill: "blue" },
    title: "Realtime dashboard",
    body: "Watch collections land as they happen and withdraw whenever you want, from any device.",
    cta: { label: "Take a tour", href: "#signup", external: false },
  },
  {
    id: "feature-4",
    n: "04",
    shape: { shape: "rect", w: 399, h: 336, fill: "orange" },
    title: "One settlement currency",
    body: "Collect across markets and settle in the currency you choose, at a favourable forex rate.",
    cta: { label: "See the rates", href: "#pricing", external: false },
  },
];

export default function Features() {
  return (
    <section className="grid grid-cols-1 gap-10 py-6 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col items-start gap-5">
        <span className="font-mono text-xs uppercase tracking-wider text-[#818287]">
          Key features
        </span>
        <h2 className="max-w-md font-display text-[32px] font-medium leading-[1.1] tracking-[-1.28px] text-[#122022] md:text-[40px] md:tracking-[-1.6px]">
          Integrate once, collect everywhere.
        </h2>
        <p className="max-w-md text-base leading-[26px] tracking-[-0.64px] text-[#818287]">
          Four things, done properly. Nothing you have to book a sales call to
          switch on.
        </p>
        <ul className="mt-2 flex flex-col gap-3">
          {BULLETS.map((b) => (
            <li key={b} className="flex items-baseline gap-3">
              <span className="inline-block h-1.5 w-1.5 shrink-0 -translate-y-0.5 rounded-full bg-sal-green ring-1 ring-black/10" />
              <span className="text-base tracking-[-0.64px] text-[#111827]">
                {b}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {FEATURES.map((f) => (
          <div
            key={f.id}
            id={f.id}
            className="relative flex flex-col overflow-hidden rounded-[20px] border-b border-[#E3E3E3] bg-white p-6 shadow-card transition-shadow hover:shadow-md"
          >
            <div className="pointer-events-none absolute right-5 top-5 h-10 w-10">
              <Shape
                {...f.shape}
                className="h-full w-full"
                style={{ transform: "rotate(15deg)" }}
              />
            </div>
            <span className="font-mono text-xs tracking-wider text-[#818287]">
              {f.n}
            </span>
            <h3 className="mt-3 max-w-[85%] font-display text-xl font-medium tracking-[-0.8px] text-[#122022]">
              {f.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-6 tracking-[-0.56px] text-[#818287]">
              {f.body}
            </p>
            <a
              href={f.cta.href}
              target={f.cta.external ? "_blank" : undefined}
              rel={f.cta.external ? "noreferrer" : undefined}
              className="mt-4 text-sm font-medium tracking-[-0.56px] text-[#122022] underline underline-offset-4 hover:text-black"
            >
              {f.cta.label} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

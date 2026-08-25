import Shape from "./shape";

export default function Service() {
  return (
    <section className="relative overflow-hidden rounded-[20px] border-b border-[#E3E3E3] bg-sal-cream p-8 shadow-card md:p-14">
      {/* Cream = editorial surface; one shape per surface, bled off-canvas */}
      <div className="pointer-events-none absolute -bottom-24 -right-16 w-[220px] opacity-70">
        <Shape
          shape="ellipse"
          w={507}
          h={494}
          fill="blue"
          className="w-full"
          style={{ transform: "rotate(-15deg)" }}
        />
      </div>

      <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
        <h2 className="font-display text-[28px] font-medium leading-tight tracking-[-1.12px] text-[#122022] md:text-[32px] md:tracking-[-1.28px]">
          Everything you need to get paid, nothing you don&apos;t.
        </h2>
        <div>
          <p className="text-base font-medium tracking-[-0.64px] text-[#111827]">
            You&apos;re in good hands.
          </p>
          <p className="mt-2 max-w-lg text-base leading-[26px] tracking-[-0.64px] text-[#111827]/60">
            We believe payment experiences should be seamless for users and
            free from artificial barriers imposed by closed ecosystems.
          </p>
          <a
            href="#pricing"
            className="mt-4 inline-block text-base font-medium tracking-[-0.64px] text-[#122022] underline underline-offset-4 hover:text-black"
          >
            View pricing »
          </a>
        </div>
      </div>
    </section>
  );
}

import Shape from "./shape";

export default function Cta() {
  return (
    <section
      id="signup"
      className="relative overflow-hidden rounded-[24px] border-b border-[#E3E3E3] bg-white p-10 shadow-card md:p-16"
    >
      {/* One shape per surface — apricot star bleeding off the left edge */}
      <div className="pointer-events-none absolute -bottom-20 -left-16 w-[240px] opacity-80">
        <Shape
          shape="star"
          w={505}
          h={502}
          fill="orange"
          className="w-full"
          style={{ transform: "rotate(-15deg)" }}
        />
      </div>

      <div className="relative flex flex-col items-center gap-5 text-center">
        <h2 className="max-w-xl font-display text-[32px] font-medium leading-[1.1] tracking-[-1.28px] text-[#122022] md:text-[44px] md:tracking-[-1.6px]">
          Start collecting payments today.
        </h2>
        <p className="max-w-lg text-base leading-[26px] tracking-[-0.64px] text-[#818287]">
          Create an account, share your first payment link in minutes, and pay
          nothing until money moves.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:info@mookhpay.com"
            className="inline-flex items-center rounded-xl bg-black px-6 py-2 text-base tracking-[-0.64px] text-white transition-colors hover:bg-gray-900"
          >
            Get started
          </a>
          <a
            href="mailto:info@mookhpay.com"
            className="inline-flex items-center rounded-xl bg-[#EFEFEF] px-6 py-2 text-base tracking-[-0.64px] text-[#111827] shadow-card transition-colors hover:bg-gray-200"
          >
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}

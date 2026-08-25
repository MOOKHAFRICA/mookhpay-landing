import Link from "next/link";
import { NextSeo } from "next-seo";
import { BASE } from "../config/site";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#EFEFEF] p-4 md:p-6 lg:p-8">
      <NextSeo
        title="Login | mookh.pay"
        description="Login to  Mookh.pay to access all the cool features we have in store for you and your business."
        canonical="https://mookhpay.com/login"
        openGraph={{
          url: "https://mookhpay.com/login",
          title: "Login | mookh.pay",
          description:
            "Login to  Mookh.pay to access all the cool features we have in store for you and your business.",
        }}
      />

      <main className="mx-auto flex max-w-[1512px] flex-col gap-4 lg:min-h-[calc(100vh-4rem)] lg:flex-row">
        <section className="flex flex-1 flex-col justify-center rounded-[20px] border-b border-[#E3E3E3] bg-white p-8 shadow-card md:p-14">
          <Link href="/" className="inline-block">
            <img
              src={`${BASE}/logo.svg`}
              alt="Mookhpay"
              className="h-14 w-auto"
            />
          </Link>
          <h1 className="mt-10 font-display text-4xl font-normal leading-[0.95] tracking-[-0.06em] text-[#122022] sm:text-[52px] lg:text-[64px]">
            The payments solution for small businesses.
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-6 tracking-[-0.56px] text-[#818287]">
            Giving our clients an efficient way to request payments while
            providing full control over their financial data within our
            feature-packed merchant dashboard. Accept online payments today.
            Grow your business with trusted effortless payments.
          </p>
          {/* PEACE — the Salimia hand for sign-off */}
          <img
            src={`${BASE}/hands/peace.png`}
            alt=""
            className="mt-10 h-28 w-auto self-start"
            style={{ transform: "rotate(-15deg)" }}
          />
        </section>

        <section className="flex flex-1 flex-col justify-center rounded-[20px] border-b border-[#E3E3E3] bg-white p-8 shadow-card md:p-14">
          <div className="mx-auto w-full max-w-md">
            <h2 className="font-display text-[28px] font-medium tracking-[-1.12px] text-[#122022]">
              Log in
            </h2>
            <p className="mt-2 text-base tracking-[-0.64px] text-[#818287]">
              Sign in to start your session
            </p>

            <div className="mt-8">
              <input
                className="w-full rounded-xl border-0 bg-[#EFEFEF] px-4 py-3 text-[#6B6F7A] placeholder-[#6B6F7A] focus:outline-none focus:ring-2 focus:ring-black/10"
                type="text"
                placeholder="youremail@mail.com"
              />
            </div>
            <div className="mt-4">
              <input
                className="w-full rounded-xl border-0 bg-[#EFEFEF] px-4 py-3 text-[#6B6F7A] placeholder-[#6B6F7A] focus:outline-none focus:ring-2 focus:ring-black/10"
                type="password"
                placeholder="Password"
              />
            </div>

            <div className="mt-6 flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm tracking-[-0.56px] text-[#111827]">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-[#D0D7DE] text-black focus:ring-black/10"
                />
                Remember me
              </label>
              <button
                className="rounded-xl bg-black px-8 py-2 text-base tracking-[-0.64px] text-white transition-colors hover:bg-gray-900"
                type="submit"
              >
                Log In
              </button>
            </div>

            <p className="mt-8 text-sm tracking-[-0.56px] text-[#818287]">
              <a href="#" className="underline underline-offset-4 hover:text-[#111827]">
                Forgot your password?
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

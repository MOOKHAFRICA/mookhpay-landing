import { useState } from "react";
import Link from "next/link";
import axios from "axios";

import { SENDGRID_KEY } from "./../config/constants";
import { BASE } from "./../config/site";

const COLUMN_HEAD =
  "font-mono text-xs font-semibold uppercase tracking-wider text-[#818287]";
const COLUMN_LINK =
  "text-sm tracking-[-0.56px] text-[#111827] hover:text-black hover:underline hover:underline-offset-4";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setSubscribing] = useState(false);
  const [isSubscribed, setSubscribed] = useState(false);
  const [isError, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribing(true);

    axios
      .post(
        "https://api.sendgrid.com/v3/contactdb/recipients",
        JSON.stringify([{ email }]),
        {
          headers: {
            Authorization: `Bearer ${SENDGRID_KEY}`,
            "content-type": "application/json",
          },
        }
      )
      .then(() => {
        setSubscribed(true);
        setSubscribing(false);
        setEmail("");
      })
      .catch((error) => {
        setError(true);
        setSubscribing(false);
        console.error(error);
      });
  };

  const yearNow = new Date().getFullYear();

  return (
    <footer className="rounded-[20px] border-t border-[#E3E3E3] bg-white p-6 shadow-card md:p-10">
      <div className="flex items-center gap-4">
        <h2 className="font-display text-[28px] font-medium tracking-[-1.12px] text-[#122022]">
          You&apos;re in good hands.
        </h2>
        {/* OK — the Salimia hand for "all good" */}
        <img
          src={`${BASE}/hands/ok.png`}
          alt=""
          className="h-16 w-auto"
          style={{ transform: "rotate(15deg)" }}
        />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex flex-col items-start gap-4">
          <Link href="/">
            <img
              src={`${BASE}/logo.svg`}
              alt="Mookhpay"
              className="h-10 w-auto"
            />
          </Link>
          <p className="max-w-[34ch] text-sm leading-6 tracking-[-0.56px] text-[#818287]">
            Payment infrastructure for East African businesses. Built by Mookh
            Africa Ltd.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className={COLUMN_HEAD}>Developers</span>
          <a
            className={COLUMN_LINK}
            href="https://mookhpay.docs.apiary.io/"
            target="_blank"
            rel="noreferrer"
          >
            API reference
          </a>
          <a
            className={COLUMN_LINK}
            href="https://mookhpay.docs.apiary.io/#introduction/onboarding"
            target="_blank"
            rel="noreferrer"
          >
            Guides
          </a>
          <a
            className={COLUMN_LINK}
            href="https://mookhpay.docs.apiary.io/#introduction/payment-methods-(active)"
            target="_blank"
            rel="noreferrer"
          >
            Payment methods
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <span className={COLUMN_HEAD}>Company</span>
          <Link className={COLUMN_LINK} href="/#pricing">
            Pricing
          </Link>
          <Link className={COLUMN_LINK} href="/terms">
            Terms
          </Link>
          <Link className={COLUMN_LINK} href="/privacy">
            Privacy &amp; cookies
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <span className={COLUMN_HEAD}>Contact</span>
          <a className={COLUMN_LINK} href="tel:+254798984828">
            +254 798 984 828
          </a>
          <a className={COLUMN_LINK} href="mailto:info@mookhpay.com">
            info@mookhpay.com
          </a>
          <a
            className={COLUMN_LINK}
            href="https://twitter.com/MookhAfrica"
            target="_blank"
            rel="noreferrer"
          >
            @MookhAfrica
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mt-10 flex flex-col gap-3 border-t border-[#E3E3E3] pt-8 lg:flex-row lg:items-center lg:gap-6">
          <p className="text-base font-medium tracking-[-0.64px] text-[#111827]">
            Receive the latest updates from our team
          </p>
          <input
            className="w-full rounded-xl border-0 bg-[#EFEFEF] px-4 py-2 text-[#6B6F7A] placeholder-[#6B6F7A] focus:outline-none focus:ring-2 focus:ring-black/10 lg:max-w-sm"
            type="email"
            placeholder="E-mail Address"
            aria-label="E-mail address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="subscribeEmail"
          />
          <button
            type="submit"
            className={`rounded-xl px-6 py-2 text-base tracking-[-0.64px] transition-colors ${
              isError
                ? "bg-sal-pink text-black hover:opacity-90"
                : isSubscribed
                ? "bg-sal-green text-black"
                : "bg-black text-white hover:bg-gray-900"
            }`}
          >
            {isSubscribing ? (
              "Subscribing..."
            ) : isError ? (
              <>Something went wrong &#x2715;</>
            ) : isSubscribed ? (
              <>Subscribed &#x2713;</>
            ) : (
              "Subscribe"
            )}
          </button>
        </div>
      </form>

      <div className="mt-8 border-t border-[#E3E3E3] pt-5">
        <p className="font-mono text-xs tracking-tight text-[#818287]">
          {`© Mookh Africa Ltd ${yearNow}.`}
        </p>
      </div>
    </footer>
  );
}

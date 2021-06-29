import { useState } from "react";
import Link from "next/link";
import axios from "axios";

import { SENDGRID_KEY } from "./../config/constants";
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
    <footer className=" mt-10 mb-14 w-screen">
      <div className="container ">
        <div className="mx-8">
          <h1 className="text-blck font-medium text-2xl">
            You're in good hands.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-14 mx-8">
          <div>
            <div>
              <p className="text-black font-medium text-lg">Developers</p>
            </div>
            <div className="pt-2">
              <Link href="https://mookhpay.docs.apiary.io/">
                <a className="text-cwc-grey text-base mt-3" target="_blank">
                  API Reference
                </a>
              </Link>
            </div>
            <div className="pt-2">
              <Link
                href="https://mookhpay.docs.apiary.io/#introduction/onboarding"
                target="_blank"
              >
                <a className="text-cwc-grey text-base mt-3" target="_blank">
                  Guides
                </a>
              </Link>
            </div>
            {/* <div className="pt-2">
              <Link href="/#">
                <a className="text-cwc-grey text-base mt-3">Packages</a>
              </Link>
            </div> */}
            {/* <div className="pt-2">
              <Link href="/#">
                <a className="text-cwc-grey text-base mt-3">Changelog</a>
              </Link>
            </div> */}
          </div>
          <div>
            <div>
              <p className="mt-7 md:mt-0 text-black  text-lg font-medium">
                Help
              </p>
            </div>
            <div className="pt-2">
              <Link href="https://mookhpay.docs.apiary.io/#introduction/payment-methods-(active)">
                <a className="text-cwc-grey text-base mt-3" target="_blank">
                  Request API
                </a>
              </Link>
            </div>
            <div className="pt-2">
              <Link href="https://mookhpay.docs.apiary.io/#reference/0/api-login">
                <a className="text-cwc-grey text-base mt-3" target="_blank">
                  Documentation
                </a>
              </Link>
            </div>
          </div>

          <div>
            <div>
              <p className="mt-6 md:mt-0 text-black font-medium text-lg">
                Contact Us
              </p>
            </div>
            <div>
              <p className="text-cwc-grey text-base mt-3">+254 798 984 828</p>
            </div>
            <div>
              <p className="text-cwc-grey text-base mt-3">info@mookhpay.com</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="lg:flex space-x-4 md:space-x-16 mt-10 lg:mt-24">
            <div className="invisible lg:visible mx-8">
              <p className="text-black  font-semibold">
                Receive the latest <br />
                updates from our team
              </p>
            </div>
            <div>
              <input
                className="focus:ring-cwc-blue focus:border-cwc-blue mb-3 lg:mb-0 w-auto lg:w-full pr-20 md:pr-40 border border-gray-300"
                type="email"
                placeholder="E-mail Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="subscribeEmail"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-cwc-blue text-white md:font-bold py-2 px-8 md:px-12 rounded-md"
                type="submit"
              >
                {isSubscribing ? (
                  "Subscribing..."
                ) : isError ? (
                  <>Something went wrong &#x2715;</>
                ) : isSubscribed ? (
                  <>Subcribed &#x2713;</>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>
          </div>
        </form>

        <div className="mt-10 mb-10 border-b border-gray-600 opacity-20 xlg:mr-28">
          <hr />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 mt-6">
          <div className="mb-4 mx-auto">
            <Link href="/">
              <img src="logo.png" className="logo-footer  object-center" />
            </Link>
          </div>
          <div className="mb-2 mx-8">
            <p className="text-cwc-grey text-base underline">
              <Link href="/terms">
                <a>Terms and Conditions</a>
              </Link>
            </p>
          </div>
          <div className="mb-6 mx-8">
            <p className="text-cwc-grey text-base underline">
              <Link href="/privacy">
                <a>Privacy & Cookie Policy</a>
              </Link>
            </p>
          </div>
          <div className="mx-8">
            <p className="text-black font-medium text-base">
              {`© Mookh Africa Ltd ${yearNow}.`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

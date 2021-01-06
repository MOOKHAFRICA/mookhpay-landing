import { useState } from "react";
import Link from "next/link";
import NavBar from "./nav";
import HeroSection from "./hero";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-black pb-12">
      <header className="lg:container lg:mx-auto md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
        <div className="flex items-center justify-between mb-4 md:mb-0">
          <h1 className="leading-none text-2xl text-white font-bold">
            <Link href="/">
              <a className="no-underline text-white">
                mookh.<span className="text-cwc-blue">Pay</span>
              </a>
            </Link>
          </h1>

          <button
            className="cursor-pointer px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white md:hidden block"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="fill-current text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              )}
            </svg>
          </button>
        </div>

        <NavBar isOpen={isOpen} />
        <div className="mb-4 md:mb-0">
          <ul className="hidden list-reset md:flex lg:space-x-10">
            <li className="md:ml-4">
              <Link href="/login">
                <a className="block no-underline text-base font-semibold py-2 text-white md:p-0">
                  Log In
                </a>
              </Link>
            </li>
            <li className="md:ml-4">
              <a
                className="block py-4 text-base font-semibold text-cwc-blue md:p-0"
                href="/register"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </header>
      <HeroSection />
    </div>
  );
}

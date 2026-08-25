import { useState } from "react";
import Link from "next/link";
import NavBar from "./nav";
import { BASE } from "../config/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 md:gap-4">
      <div className="flex w-full items-center justify-between md:w-auto">
        <Link href="/" className="shrink-0">
          <img
            src={`${BASE}/logo.svg`}
            alt="Mookhpay"
            className="h-10 w-auto"
          />
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-xl bg-white p-2 shadow-card md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-5 w-5 fill-current text-[#111827]"
            xmlns="http://www.w3.org/2000/svg"
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
    </header>
  );
}

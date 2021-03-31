import { useState } from "react";
import Link from "next/link";
import NavBar from "./nav";
import HeroSection from "./hero";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="lg:container lg:mx-auto md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
      <div className="flex items-center justify-between mb-4 md:mb-0">
        <h1 className="leading-none text-2xl text-white font-bold">
          <Link href="/">
            <a className="no-underline text-white">
              <img src="/logo1.png" className="logo-img" />
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
    </header>
  );
}

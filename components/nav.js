import Link from "next/link";

const pill =
  "flex items-center gap-2 px-4 sm:px-6 py-2 rounded-[20px] text-sm sm:text-base font-medium tracking-[-0.64px] text-[#111827] transition-colors md:bg-[#FCFCFC] md:shadow-md md:hover:bg-white";

const menuPanel =
  "absolute left-0 z-50 mt-2 hidden w-64 rounded-xl border border-[#E3E3E3] bg-white p-1 shadow-lg group-hover:block";

const menuItem =
  "block rounded-lg px-4 py-2 text-sm tracking-[-0.56px] text-[#111827] hover:bg-gray-50";

const Chevron = () => (
  <svg
    className="h-4 w-4 text-[#818287]"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export default function NavBar({ isOpen }) {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } w-full rounded-lg border border-[#E3E3E3] bg-white p-2 shadow-md md:flex md:w-auto md:items-center md:gap-3 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
    >
      <nav>
        <ul className="md:flex md:items-center md:gap-3">
          <li className="group relative">
            <button type="button" className={pill}>
              <span>Features</span>
              <Chevron />
            </button>
            <ul className={menuPanel}>
              <li>
                <Link className={menuItem} href="/#feature-1">
                  Quick Integration
                </Link>
              </li>
              <li>
                <Link className={menuItem} href="/#feature-2">
                  Payment Links
                </Link>
              </li>
              <li>
                <Link className={menuItem} href="/#feature-3">
                  Realtime Dashboard
                </Link>
              </li>
              <li>
                <Link className={menuItem} href="/#feature-4">
                  One Settlement Currency
                </Link>
              </li>
            </ul>
          </li>
          <li className="group relative">
            <button type="button" className={pill}>
              <span>Developers</span>
              <Chevron />
            </button>
            <ul className={menuPanel}>
              <li>
                <a
                  className={menuItem}
                  href="https://mookhpay.docs.apiary.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  className={menuItem}
                  href="https://mookhpay.docs.apiary.io/#introduction/onboarding"
                  target="_blank"
                  rel="noreferrer"
                >
                  Guides
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link className={pill} href="/#pricing">
              Pricing
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-2 border-t border-[#E3E3E3] pt-2 md:mt-0 md:border-0 md:pt-0">
        <ul className="md:flex md:items-center md:gap-3">
          <li>
            <a
              href="mailto:info@mookhpay.com"
              className="flex items-center px-4 sm:px-6 py-2 rounded-[20px] text-sm sm:text-base font-medium tracking-[-0.64px] transition-colors md:bg-black md:text-white md:shadow-md md:hover:bg-gray-900"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

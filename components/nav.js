import Link from "next/link";
export default function NavBar({ isOpen }) {
  return (
    <>
      <nav>
        <ul
          id="menu"
          className={` ${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-20 md:items-center`}
        >
          <li className="relative dropdown md:ml-4">
            <button
              type="button"
              className="inline-flex items-center py-3 text-base font-semibold text-white opacity-100"
            >
              <span>Features</span>

              <svg
                className="w-5 h-5 ml-2 text-white visible"
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
            </button>

            <ul className="absolute z-10 hidden w-screen max-w-sm -ml-4 text-white transform dropdown-menu bg-cwc-featuresbg rounded-xl mx-3">
              <li className="">
                <a
                  className="block px-4 py-2 whitespace-no-wrap  hover:bg-cwc-blue rounded-t"
                  href="#feature-1"
                >
                  Quick Integration
                </a>
              </li>
              <li className="">
                <a
                  className="block px-4 py-2 whitespace-no-wrap hover:bg-cwc-blue rounded-b"
                  href="#feature-2"
                >
                  Unique Payment Links
                </a>
              </li>
              <li className="">
                <a
                  className="block px-4 py-2 whitespace-no-wrap hover:bg-cwc-blue rounded-b"
                  href="#feature-3"
                >
                  Realtime Dashboard
                </a>
              </li>
              <li className="">
                <a
                  className="block px-4 py-2 whitespace-no-wrap  hover:bg-cwc-blue rounded-b"
                  href="#feature-4"
                >
                  Multiple Payment Methods
                </a>
              </li>
            </ul>
          </li>
          <li className="relative dropdown md:ml-4">
            <button
              type="button"
              className="inline-flex items-center py-3 text-base font-semibold text-white opacity-100"
            >
              <span>Developers</span>

              <svg
                className="w-5 h-5 ml-2 text-white visible"
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
            </button>

            <ul className="absolute z-10 hidden w-screen max-w-sm -ml-4 text-white transform dropdown-menu  rounded-xl bg-cwc-featuresbg mx-3">
              <li className="">
                <a
                  className="block px-4 py-2 whitespace-no-wrap rounded-t hover:bg-cwc-blue"
                  href="https://mookhpay.docs.apiary.io/"
                  target="_blank"
                >
                  API Reference
                </a>
              </li>
              <li className="">
                <a
                  className="block px-4 py-2 whitespace-no-wrap rounded-b hover:bg-cwc-blue"
                  href="https://mookhpay.docs.apiary.io/#introduction/onboarding"
                  target="_blank"
                >
                  Guides
                </a>
              </li>
              {/* <li className="">
                <a
                  className="block px-4 py-2 whitespace-no-wrap bg-gray-500 rounded-b hover:bg-gray-800"
                  href="#"
                >
                  Packages
                </a>
              </li> */}
              {/* <li className="">
                <a
                  className="block px-4 py-2 whitespace-no-wrap bg-gray-500 rounded-b hover:bg-gray-800"
                  href="#"
                >
                  Changelog
                </a>
              </li> */}
            </ul>
          </li>
          <li className="relative md:ml-4">
            <a
              className="block py-3 text-base font-semibold text-white no-underline md:p-0"
              href="#pricing"
            >
              Pricing
            </a>
          </li>
        </ul>
      </nav>
      <div className="relative mb-4 md:mb-0 lg:mr-6">
        <ul
          className={` ${
            isOpen ? "block" : "hidden"
          } list-reset md:flex md:space-x-10`}
        >
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
    </>
  );
}

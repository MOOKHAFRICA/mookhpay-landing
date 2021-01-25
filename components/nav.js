export default function NavBar({ isOpen }) {
  return (
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

          <ul className="absolute z-10 hidden w-screen max-w-sm -ml-4 text-white transform dropdown-menu">
            <li className="">
              <a
                className="block px-4 py-2 whitespace-no-wrap bg-gray-500 rounded-t hover:bg-gray-800"
                href="#"
              >
                Quick Integration
              </a>
            </li>
            <li className="">
              <a
                className="block px-4 py-2 whitespace-no-wrap bg-gray-500 hover:bg-gray-800"
                href="#"
              >
                Unique Payment Links
              </a>
            </li>
            <li className="">
              <a
                className="block px-4 py-2 whitespace-no-wrap bg-gray-500 rounded-b hover:bg-gray-800"
                href="#"
              >
                Realtime Dashboard
              </a>
            </li>
            <li className="">
              <a
                className="block px-4 py-2 whitespace-no-wrap bg-gray-500 rounded-b hover:bg-gray-800"
                href="#"
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

          <ul className="absolute z-10 hidden w-screen max-w-sm -ml-4 text-white transform dropdown-menu">
            <li className="">
              <a
                className="block px-4 py-2 whitespace-no-wrap bg-gray-500 rounded-t hover:bg-gray-800"
                href="https://mookhpay.docs.apiary.io/"
                target="_blank"
              >
                API Reference
              </a>
            </li>
            <li className="">
              <a
                className="block px-4 py-2 whitespace-no-wrap bg-gray-500 hover:bg-gray-800"
                href="https://mookhpay.docs.apiary.io/#introduction/onboarding"
                target="_blank"
              >
                Guides
              </a>
            </li>
            <li className="">
              <a
                className="block px-4 py-2 whitespace-no-wrap bg-gray-500 rounded-b hover:bg-gray-800"
                href="#"
              >
                Packages
              </a>
            </li>
            <li className="">
              <a
                className="block px-4 py-2 whitespace-no-wrap bg-gray-500 rounded-b hover:bg-gray-800"
                href="#"
              >
                Changelog
              </a>
            </li>
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
        <li className="relative md:ml-4">
          <a
            className="block py-3 text-base font-semibold text-white no-underline md:p-0"
            href="#"
          >
            Company
          </a>
        </li>
      </ul>
    </nav>
  );
}

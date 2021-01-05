export default function NavBar({ isOpen }) {
  return (
    <nav>
      <ul
        className={` ${
          isOpen ? "block" : "hidden"
        } md:flex md:space-x-14 md:items-center" id="menu"`}
      >
        <li className="dropdown relative md:ml-4">
          <button
            type="button"
            className="text-white py-3 inline-flex items-center text-base font-semibold opacity-100 "
          >
            <span>Features</span>

            <svg
              className="ml-2 h-5 w-5 text-white invisible lg:visible"
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

          <ul className="absolute dropdown-menu hidden z-10 -ml-4 transform w-screen max-w-sm text-white">
            <li className="">
              <a
                className="rounded-t bg-gray-500 hover:bg-gray-800 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Quick Integration
              </a>
            </li>
            <li className="">
              <a
                className="bg-gray-500 hover:bg-gray-800 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Unique Payment Links
              </a>
            </li>
            <li className="">
              <a
                className="rounded-b bg-gray-500 hover:bg-gray-800 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Realtime Dashboard
              </a>
            </li>
            <li className="">
              <a
                className="rounded-b bg-gray-500 hover:bg-gray-800 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Multiple Payment Methods
              </a>
            </li>
          </ul>
        </li>
        <li className="dropdown relative md:ml-4">
          <button
            type="button"
            className="text-white py-3 inline-flex items-center text-base font-semibold opacity-100"
          >
            <span>Developers</span>

            <svg
              className="ml-2 h-5 w-5 text-white invisible lg:visible"
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

          <ul className="absolute dropdown-menu hidden z-10 -ml-4 transform w-screen max-w-sm text-white">
            <li className="">
              <a
                className="rounded-t bg-gray-500 hover:bg-gray-800 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                API Reference
              </a>
            </li>
            <li className="">
              <a
                className="bg-gray-500 hover:bg-gray-800 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Guides
              </a>
            </li>
            <li className="">
              <a
                className="rounded-b bg-gray-500 hover:bg-gray-800 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Packages
              </a>
            </li>
            <li className="">
              <a
                className="rounded-b bg-gray-500 hover:bg-gray-800 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Changelog
              </a>
            </li>
          </ul>
        </li>
        <li className="md:ml-4">
          <a
            className="text-white py-3 inline-flex items-center text-base font-semibold opacity-100"
            href="#"
          >
            Pricing
          </a>
        </li>
        <li className="md:ml-4">
          <button
            type="button"
            className="group text-white py-3 inline-flex items-center text-base font-semibold"
          >
            <span>Company</span>

            <svg
              className="ml-2 h-5 w-5 text-white invisible lg:visible"
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
        </li>
      </ul>
    </nav>
  );
}

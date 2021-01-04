export default function NavBar() {
  return (
    <div className="flex justify-between items-center px-6 py-2 sm:px-6 md:justify-start md:space-x-10 container mx-auto">
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <h1 className="leading-none text-2xl text-white font-bold">
          <a className="no-underline text-white" href="/">
            Mookh.<span className="text-cwc-blue">Pay</span>
          </a>
        </h1>

        <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
          <svg
            className="fill-current text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />
      </div>

      <nav>
        <ul className="list-reset md:flex md:space-x-14 md:items-center">
          <li className="dropdown relative md:ml-4">
            <button
              type="button"
              className="text-white py-3 inline-flex items-center text-base font-semibold opacity-100"
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
              className="block no-underline py-3 text-white text-base font-semibold md:p-0"
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
      <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <a
          href="/login"
          className="whitespace-nowrap text-base font-semibold text-white"
        >
          Log in
        </a>
        <a
          href="/register"
          className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 shadow-sm text-base font-semibold text-cwc-blue"
        >
          Sign up
        </a>
      </div>
    </div>
  );
}

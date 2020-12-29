export default function NavBar() {
  return (
    <div className="flex justify-between items-center px-6 py-2 sm:px-6 md:justify-start md:space-x-10">
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <a href="#">
          <h1 className="text-white font-semibold opacity-100 text-xl">
            mookh.<span className="text-cwc-blue">pay</span>
          </h1>
        </a>
      </div>

      <nav className="hidden md:flex space-x-10">
        <div className="relative">
          <button
            type="button"
            className="group text-white inline-flex items-center text-base font-semibold opacity-100"
          >
            <span>Features</span>

            <svg
              className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
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
        </div>

        <div className="relative">
          <button
            type="button"
            className="group text-white inline-flex items-center text-base font-semibold focus:outline-none"
          >
            <span>Developers</span>

            <svg
              className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
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
        </div>

        <a href="#" className="text-base font-semibold text-white">
          {" "}
          Pricing{" "}
        </a>

        <div className="relative">
          <button
            type="button"
            className="group text-white inline-flex items-center text-base font-semibold focus:outline-none"
          >
            <span>Company</span>

            <svg
              className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
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
        </div>
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

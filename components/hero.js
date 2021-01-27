export default function HeroSection() {
  return (
    <div className="container mx-auto">
      <div className="mx-8 lg:mx-0">
        <h2 className="font-semibold text-3xl text-white opacity-90 mt-32">
          The payments solution for small businesses.
        </h2>
        <p className="font-semibold text-lg text-white opacity-90 mt-16">
          Accept online payments today. Grow your business with
          <br />
          trusted effortless payments.
          <a href="https://mookhpay.docs.apiary.io/" target="_blank">
            <span className="text-cwc-blue"> Get Started</span>
          </a>
        </p>

        <div>
          <p className="font-semibold text-lg mt-20 text-cwc-grey hover:text-white">
            Giving our clients an efficient way to request payments while
            providing full control
            <br />
            over their financial data within our feature-packed merchant
            dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
          <div>
            <div className="mb-8 md:mb-0">
              <button
                type="button"
                className="group text-white inline-flex text-base font-bold focus:outline-none"
              >
                <svg
                  className="text-cwc-blue"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 28 24"
                  width="24px"
                  height="20px"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
                <span className="px-2">Increased efficiency</span>
              </button>
              <p className="text-cwc-grey px-8 mt-4">
                Mookhpay helps you to run your business as efficiently as
                possible, with features that make your payments straightforward,
                effective and easy to navigate.
              </p>
            </div>
          </div>
          <div>
            <div className="mb-8 md:mb-0">
              <button
                type="button"
                className="group text-white inline-flex text-base font-bold focus:outline-none"
              >
                <svg
                  className="text-cwc-blue"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 28 24"
                  width="24px"
                  height="20px"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
                <span className="px-2">Honest pricing</span>
              </button>
              <p className="text-cwc-grey px-8 mt-4">
                No minimum costs, no lock-in contracts, no hidden fees. With
                Mookhpay, you only pay for successful transactions.
              </p>
            </div>
          </div>
          <div>
            <div>
              <button
                type="button"
                className="group text-white inline-flex text-base font-bold focus:outline-none"
              >
                <svg
                  className="text-cwc-blue"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 28 24"
                  width="24px"
                  height="20px"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
                <span className="px-2">Multiple payment methods</span>
              </button>
              <p className="text-cwc-grey px-8 mt-4">
                You can build your business wherever you want. Whether you want
                to grow internationally or focus on a specific market, we
                support all major payment methods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

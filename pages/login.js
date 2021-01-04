import Head from "next/head";
export default function Home() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <Head>
        <title>mookh.pay</title>
        <meta
          name="viewport"
          content="user-scalable=no, width=device-width, initial-scale=1.0,  minimum-scale=1, maximum-scale=1"
        ></meta>
        <meta charSet="utf-8" />
        <title>Login - Mookh.pay</title>
        <meta
          name="description"
          content="Login to  Mookh.pay to access all the cool features we have in store for you and your business."
        />
        {/* Open Graph */}
        <meta property="og:title" content="Login - Mookh.pay" key="ogtitle" />
        <meta
          property="og:description"
          content="Login to  Mookh.pay to access all the cool features we have in store for you and your business."
          key="ogdesc"
        />
        <meta property="og:url" content="mookhpay.com/login" key="ogurl" />
        <meta property="og:site_name" content="mookh.pay" key="ogsitename" />

        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@MookhAfrica" key="twhandle" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="h-screen w-screen grid grid-cols-1 md:grid-cols-1 lg:flex">
          <div className="bg-cwc-loginbg h-20 lg:h-full w-full">
            <div className="mx-6 lg:mt-72">
              <h1 className="text-white font-extrabold text-2xl pt-6 lg:pt-0">
                <a href="/">
                  mookh.
                  <span className="text-cwc-blue font-extrabold text-2xl">
                    pay
                  </span>
                </a>
              </h1>
              <p className="invisible lg:visible text-white font-medium text-xl opacity-60 mt-10">
                The payments solution for small <br />
                businesses.
              </p>
              <p className="invisible lg:visible text-white text-sm opacity-60 mt-10">
                Giving our clients an efficient way to request payments while
                providing full control over <br />
                their financial data within our feature-packed merchant
                dashboard. Accept online <br />
                payments today. Grow your business with trusted effortless
                payments.
              </p>
            </div>
          </div>
          <div className="h-3/4 lg:h-full bg-black w-full">
            <div className="mb-80 mx-6 lg:mt-64 lg:mx-60">
              <p className="text-white text-base pt-24 lg:pt-0">
                Sign in to start your session
              </p>
              <div className="mt-8">
                <input
                  className="bg-cwc-logininputbg text-white focus:ring-cwc-blue focus:border-cwc-blue w-full pl-4 pr-12 rounded-md"
                  type="text"
                  placeholder="youremail@mail.com"
                />
              </div>
              <div className="mt-5">
                <input
                  className="bg-cwc-logininputbg text-white focus:ring-cwc-blue focus:border-cwc-blue w-full pl-4 pr-12 rounded-md"
                  type="password"
                />
              </div>
              <div className="mt-8">
                <button
                  type="button"
                  className="group text-white space-x-2 inline-flex focus:outline-none"
                >
                  <span>Remember me</span>

                  <svg
                    className="text-cwc-blue"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 28 20"
                    width="20px"
                    height="20px"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </button>
                <button
                  className="text-white bg-cwc-blue px-11 py-2 rounded-md"
                  type="submit"
                >
                  Log In
                </button>
              </div>
              <div className="mt-8">
                <p className="text-cwc-grey underline">
                  <a href="#">Forgot your password?</a>
                </p>
              </div>
              <div className="flex mx-4 space-x-2 pt-72 lg:invisible">
                <div className="text-cwc-grey">
                  <a href="#">Contact Us</a>
                </div>
                <div className="text-cwc-grey">
                  <a href="#">Privacy</a>
                </div>
                <div className="text-cwc-grey">
                  <a href="#">Legal</a>
                </div>
                <div className="text-cwc-grey">
                  <a href="#">Worldwide</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

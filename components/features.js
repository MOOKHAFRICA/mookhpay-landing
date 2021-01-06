export default function Feature() {
  return (
    <div className="pb-24 w-screen">
      <div>
        <h1 className="container mx-8 lg:mx-auto text-white font-bold text-2xl pt-10 pb-8">
          Key Features
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8   container mx-auto">
        <div className="bg-cwc-loginbg hover:bg-gradient-to-r from-cwc-fone to-cwc-tone rounded-3xl p-8 lg:p-12 opacity-80">
          <p className="text-cwc-blue font-bold pb-2">
            <a href="#"> Get Started </a>
          </p>

          <p className="text-white text-xl lg:text-2xl font-extrabold mb-2">
            Quick Integration
          </p>
          <p className="text-white font-normal opacity-90">
            We've created a developer page to get started <br />
            quickly. Use any of our pre-developed tools, or learn <br />
            more about Mookhpay by reading the <br />
            documentation.
          </p>
          <div className="mt-4">
            <a
              href="https://mookhpay.docs.apiary.io/"
              target="_blank"
              className="bg-cwc-featuresbtnbg text-white mt-3 mb-4 lg:mb-0 lg:mt-0 py-3 px-6 rounded-md font-medium mr-6"
            >
              Documentation
            </a>
            <button className="text-white font-medium py-2 px-8 border border-white rounded-sm mt-6">
              API Request
            </button>
          </div>
        </div>
        <div className="bg-cwc-loginbg hover:bg-gradient-to-r from-cwc-fone to-cwc-tone rounded-3xl p-8 lg:p-12 opacity-80">
          <p className="text-cwc-blue font-bold pb-2">
            <a href="#"> Get Started </a>
          </p>

          <p className="text-white text-xl lg:text-2xl font-extrabold mb-2">
            Unique Payment Links
          </p>
          <p className="text-white font-normal opacity-70">
            You can have a unique, customized payment link to <br />
            collect payments. These links are ideal for collecting <br />
            donations or direct business payments via multiple <br />
            payment channels.
          </p>
          <div className="mt-4">
            <button className="text-white font-medium py-2 px-4 border border-white rounded-sm">
              View Example
            </button>
          </div>
        </div>
        <div className="bg-cwc-loginbg hover:bg-gradient-to-r from-cwc-fone to-cwc-tone rounded-3xl p-8 lg:p-12 opacity-80">
          <p className="text-cwc-blue font-bold pb-2">
            <a href="#"> Get Started </a>
          </p>

          <p className="text-white text-xl lg:text-2xl font-extrabold mb-2">
            Realtime Dashboard
          </p>
          <p className="text-white font-normal opacity-90">
            You can monitor all your transactions in real-time and make
            withdrawals on your collections at any time. from the convenience of
            your preferred internet-connected device.
          </p>
        </div>
        <div className="bg-cwc-loginbg hover:bg-gradient-to-r from-cwc-fone to-cwc-tone rounded-3xl p-8 lg:p-12 opacity-80">
          <p className="text-cwc-blue font-bold pb-2">
            <a href="#"> Get Started </a>
          </p>

          <p className="text-white text-xl lg:text-2xl font-extrabold mb-2">
            Multiple Payment Methods
          </p>
          <p className="text-white font-normal opacity-70">
            We are able to settle to you all your collections into a single
            currency you prefer at a favorable forex rate. Settlement to Mobile
            Wallet is within 24 hours and to bank is within 48 hours of
            withdrawal request.
          </p>
        </div>
      </div>
    </div>
  );
}

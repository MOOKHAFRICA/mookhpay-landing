export default function Footer() {
  return (
    <footer className="mx-8 mt-10 mb-14 w-screen">
      <div className="container mx-auto">
        <div>
          <h1 className="text-blck font-black text-2xl">
            You're in good hands.
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-14">
          <div>
            <div>
              <p className="text-black font-black text-lg">Features</p>
            </div>
            <div>
              <p className="text-cwc-grey text-base mt-3">Payments</p>
            </div>
            <div>
              <p className="text-cwc-grey text-base mt-3">Checkout Process</p>
            </div>
            <div>
              <p className="text-cwc-grey text-base mt-3">Security</p>
            </div>
          </div>

          <div>
            <div>
              <p className="text-black font-black text-lg">Developers</p>
            </div>
            <div>
              <p className="text-cwc-grey text-base mt-3">API Reference</p>
            </div>
            <div>
              <p className="text-cwc-grey text-base mt-3">Guides</p>
            </div>
            <div>
              <p className="text-cwc-grey text-base mt-3">Packages</p>
            </div>
            <div>
              <p className="text-cwc-grey text-base mt-3">Changelog</p>
            </div>
          </div>

          <div>
            <div>
              <p className="mt-7 md:mt-0 text-black font-black text-lg">Help</p>
            </div>
            <div>
              <p className="text-cwc-grey text-base mt-3">Request API</p>
            </div>
            <div>
              <p className="text-cwc-grey text-base mt-3">Documentation</p>
            </div>
            <div>
              <p className="text-cwc-grey text-base mt-3">Logo Assets</p>
            </div>
          </div>

          <div>
            <div>
              <p className="mt-6 md:mt-0 text-black font-black text-lg">
                Contact Us
              </p>
            </div>
            <div>
              <p className="text-cwc-grey text-base mt-3">+254 798 984 826</p>
            </div>
            <div>
              <p className="text-cwc-grey text-base mt-3">info@mookhpay.com</p>
            </div>
            <div>
              <p className="text-cwc-grey text-base mt-3">Team</p>
            </div>

            <div>
              <p className="text-cwc-grey text-base mt-3">Careers</p>
            </div>
          </div>
        </div>
        <div className="lg:flex space-x-4 md:space-x-16 mt-10 lg:mt-24">
          <div className="invisible lg:visible">
            <p className="text-black font-black">
              Receive the latest <br />
              updates from our team
            </p>
          </div>
          <div>
            <input
              className="focus:ring-cwc-blue focus:border-cwc-blue mb-3 lg:mb-0 w-auto lg:w-full pr-20 md:pr-40"
              type="text"
              placeholder="E-mail Address"
            />
          </div>
          <div>
            <button
              className="bg-cwc-blue text-white md:font-bold py-2 px-8 md:px-12 rounded-md"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-10 mb-10 border border-gray-600 opacity-20 xlg:mr-28">
          <hr />
        </div>
        <div className="grid text-center lg:text-justify grid-cols-1 lg:grid-cols-4 mt-6">
          <div className="mb-4">
            <h1 className="text-black font-black text-3xl">
              mookh.
              <span className="text-cwc-blue font-black text-3xl">pay</span>
            </h1>
          </div>
          <div className="mb-2">
            <p className="text-cwc-grey text-base underline">
              <a href="#">Terms and Conditions</a>
            </p>
          </div>
          <div className="mb-6">
            <p className="text-cwc-grey text-base underline">
              <a href="#">Privacy & Cookie Policy</a>
            </p>
          </div>
          <div>
            <p className="text-black font-black text-base">
              © Mookh Africa Ltd.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

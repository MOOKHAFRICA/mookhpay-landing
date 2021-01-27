export default function PricingCard() {
  return (
    <div className="w-screen">
      <div className="container mx-auto">
        <div className="bg-cwc-featuresbg hover:bg-gradient-to-r from-cwc-fone to-cwc-tone rounded-3xl p-12 pb-24 opacity-80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div>
                <p className="text-white font-extrabold text-lg lg:text-xl">
                  Payment Method
                </p>
              </div>
              <div>
                <p className="text-white opacity-70 lg:text-lg mt-8 mb-6 font-extrabold">
                  Mobile Payments
                </p>
              </div>
              <div>
                <p className="text-white font-extrabold uppercase mb-3 lg:mb-11">
                  mtn
                </p>
              </div>
              <div>
                <p className="text-white font-extrabold">Airtel</p>
              </div>
              <div>
                <p className="text-white font-extrabold mt-3">M-Pesa</p>
              </div>
              <div>
                <p className="text-white font-extrabold mt-3">Bonga Points</p>
              </div>
            </div>

            <div>
              <div>
                <p className="text-white font-extrabold text-lg mt-12 md:mt-0 lg:text-xl">
                  Region
                </p>
              </div>
              <div className="mt-4 md:mt-32 lg:mt-20">
                <div>
                  <p className="text-white opacity-70 font-extrabold mt-3">
                    Uganda
                  </p>
                </div>
                <div>
                  <p className="text-white opacity-70 font-extrabold mt-3">
                    Rwanda
                  </p>
                </div>
                <div>
                  <p className="text-white opacity-70 font-extrabold mt-3">
                    Uganda
                  </p>
                </div>
                <div>
                  <p className="text-white opacity-70 font-extrabold mt-3">
                    Kenya
                  </p>
                </div>
                <div>
                  <p className="text-white opacity-70 font-extrabold mt-3">
                    Kenya
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div>
                <p className="pb-5 mt-8 md:mt-0 lg:pb-0 text-white font-extrabold text-lg lg:text-xl">
                  Cost per transaction
                </p>
              </div>
              <div className="md:mt-20">
                <div>
                  <p className="text-white font-extrabold">3%</p>
                </div>
                <div>
                  <p className="text-white font-extrabold mt-3">3%</p>
                </div>
                <div>
                  <p className="text-white font-extrabold mt-3">3%</p>
                </div>
                <div>
                  <p className="text-white font-extrabold mt-3">2%</p>
                </div>
                <div>
                  <p className="text-white font-extrabold mt-3">2%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 mb-10 border border-gray-500 text-white opacity-20">
            <hr />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div>
                <p className="text-white opacity-70 lg:text-lg mb-6 lg:pb-6 font-extrabold">
                  Card Payments
                </p>
              </div>
              <div>
                <p className="text-white opacity-70 font-extrabold md:mb-9 lg:mb-0 mt-3">
                  Visa, Mastercard, Ammex
                </p>
              </div>
              <div>
                <p className="text-white opacity-70 font-extrabold md:mb-9 lg:mb-0 mt-3">
                  Paypal
                </p>
              </div>
            </div>

            <div className="md:mt-20 lg:mt-12">
              <div className="visible md:invisible">
                <p className="text-white font-extrabold text-lg mb-4 md:mb-0 mt-12 md:mt-0 lg:text-xl">
                  Region
                </p>
              </div>
              <div>
                <p className="text-white opacity-70 font-extrabold md:mb-9 lg:mb-0 ">
                  Global
                </p>
              </div>

              <div>
                <p className="text-white opacity-70 font-extrabold mt-3">
                  Global
                </p>
              </div>
            </div>

            <div className="mt-20 lg:mt-12">
              <div className="visible md:invisible">
                <p className="pb-5 md:mt-8 lg:mt-0 lg:pb-0 text-white font-extrabold text-lg lg:text-xl">
                  Cost per transaction
                </p>
              </div>
              <div>
                <p className="text-white font-extrabold mt-3">4%</p>
              </div>

              <div>
                <p className="text-white font-extrabold mt-3">5%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

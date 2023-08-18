export default function PricingCard() {
  return (
    <div className="w-screen">
      <div className="container mx-auto -w-auto">
        <div className="bg-cwc-featuresbg hover:bg-gradient-to-r from-cwc-fone to-cwc-tone rounded-3xl p-12 pb-24 opacity-80">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div>
                <p className="text-white font-extrabold md:text-lg lg:text-xl text-xs">
                  Payment Method
                </p>
              </div>
              <div>
                <p className="text-white opacity-70 lg:text-lg mt-8 mb-6 font-extrabold md:text-lg text-xs">
                  Mobile Payments
                </p>
              </div>
              <div>
                <p className="text-white font-extrabold uppercase md:mb-3 mb-8 lg:mb-11 md:text-lg text-xs">
                  mtn
                </p>
              </div>
              <div>
                <p className="text-white font-extrabold md:text-lg text-xs">
                  Airtel
                </p>
              </div>
              <div>
                <p className="text-white font-extrabold mt-3 md:text-lg text-xs">
                  M-Pesa
                </p>
              </div>
              <div>
                <p className="text-white font-extrabold mt-3 md:text-lg text-xs">
                  Bonga Points
                </p>
              </div>
            </div>

            <div>
              <div>
                <p className="text-white font-extrabold  md:mt-12 mt-0 lg:text-xl md:text-lg text-xs">
                  Region
                </p>
              </div>
              <div className="mt-28 md:mt-32 lg:mt-5">
                <div>
                  <p className="text-white opacity-70 font-extrabold mt-3 md:text-lg text-xs">
                    Uganda
                  </p>
                </div>
                <div>
                  <p className="text-white opacity-70 font-extrabold mt-3 md:text-lg text-xs">
                    Rwanda
                  </p>
                </div>
                <div>
                  <p className="text-white opacity-70 font-extrabold mt-3 md:text-lg text-xs">
                    Uganda
                  </p>
                </div>
                <div>
                  <p className="text-white opacity-70 font-extrabold mt-3 md:text-lg text-xs">
                    Kenya
                  </p>
                </div>
                <div>
                  <p className="text-white opacity-70 font-extrabold mt-3 md:text-lg text-xs ">
                    Kenya
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div>
                <p className="pb-5 md:mt-8 mt-0 lg:pb-0 text-white font-extrabold  lg:text-xl md:text-lg text-xs">
                  Cost per transaction
                </p>
              </div>
              <div className="md:mt-8 mt-20">
                <div>
                  <p className="text-white font-extrabold md:text-lg text-xs">
                    3%
                  </p>
                </div>
                <div>
                  <p className="text-white font-extrabold mt-3 md:text-lg text-xs">
                    3%
                  </p>
                </div>
                <div>
                  <p className="text-white font-extrabold mt-3 md:text-lg text-xs">
                    3%
                  </p>
                </div>
                <div>
                  <p className="text-white font-extrabold mt-3 md:text-lg text-xs">
                    2%
                  </p>
                </div>
                <div>
                  <p className="text-white font-extrabold mt-3 md:text-lg text-xs">
                    2%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 mb-10 border border-gray-500 text-white opacity-20">
            <hr />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div>
                <p className="text-white opacity-70 lg:text-lg mb-6 lg:pb-6 font-extrabold md:text-lg text-xs">
                  Card Payments
                </p>
              </div>
              <div>
                <p className="text-white opacity-70 font-extrabold md:mb-9 lg:mb-0 mt-3 md:text-lg text-xs">
                  Visa, Mastercard, Amex
                </p>
              </div>
              <div>
                <p className="text-white opacity-70 font-extrabold md:mb-9 lg:mb-0 mt-3 md:text-lg text-xs">
                  Paypal
                </p>
              </div>
            </div>

            <div className="md:mt-20 lg:mt-0 mt-0">
              <div className="visible md:invisible mt-0">
                <p className="text-white font-extrabold  mb-4 md:mb-0 md:mt-12 mt-2 lg:text-xl md:text-lg text-xs">
                  Region
                </p>
              </div>
              <div className="md:mt-0 mt-10">
                <p className="text-white opacity-70 font-extrabold md:mb-9 lg:mb-0  md:text-lg text-xs">
                  Global
                </p>
              </div>

              <div>
                <p className="text-white opacity-70 font-extrabold mt-3 md:text-lg text-xs">
                  Global
                </p>
              </div>
            </div>

            <div className="md:mt-20 lg:mt-12 mt-0 ">
              <div className="visible md:invisible">
                <p className="pb-5 md:mt-8 lg:mt-0 lg:pb-0 text-white font-extrabold  lg:text-xl md:text-lg text-xs">
                  Cost per transaction
                </p>
              </div>
              <div>
                <p className="text-white font-extrabold md:mt-0 mt-3 md:text-lg text-xs">
                  4%
                </p>
              </div>

              <div>
                <p className="text-white font-extrabold mt-3 md:text-lg text-xs">
                  8%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

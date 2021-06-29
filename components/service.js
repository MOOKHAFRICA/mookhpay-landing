export default function Service() {
  return (
    <div className="container mx-auto">
      <div className=" grid grid-cols-1  md:grid-cols-2 pb-16 gap-4 pt-8 mx-8 -w-auto">
        <div>
          <p className="text-black font-bold text-3xl opacity-90">
            A service built by <br />
            a tech company,
            <br />
            not a bank.
          </p>
        </div>
        <div className="">
          <p className="text-black font-bold text-base opacity-90 mb-2 ">
            You're in good hands.
          </p>
          <p className="text-cwc-grey font-semibold text-base opacity-90 mb-2">
            We believe payment experiences should be seamless for users and{" "}
            <br />
            free from artificial barriers imposed by closed ecosystems.
          </p>
          <p className="text-cwc-blue font-semibold text-base">
            <a href="#pricing">View pricing »</a>
          </p>
        </div>
      </div>
    </div>
  );
}

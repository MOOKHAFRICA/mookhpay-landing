export default function Service() {
  return (
    <section className="container mx-8 lg:mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-40 pt-8 pb-12">
      <div>
        <p className="text-black font-bold text-3xl opacity-90">
          A service built by <br />
          a tech company,
          <br />
          not a bank.
        </p>
      </div>
      <div className="col-span-2">
        <p className="text-black font-bold text-base opacity-90 mb-2">
          You're in good hands.
        </p>
        <p className="text-cwc-grey font-semibold text-base opacity-90 mb-2">
          We believe payment experiences should be seamless for users and <br />
          free from artificial barriers imposed by closed ecosystems.
        </p>
        <p className="text-cwc-blue font-semibold text-base">
          <a href="#">View pricing »</a>
        </p>
      </div>
    </section>
  );
}

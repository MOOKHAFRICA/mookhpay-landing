export default function Pricing() {
  return (
    <div className="container mx-8 lg:mx-auto grid grid-cols-1 md:grid-cols-2 pb-16">
      <div>
        <p className="text-white text-2xl font-extrabold mb-4">Pricing</p>
        <p className="text-white font-normal opacity-70">
          No minimum costs, no lock-in contracts, no hidden fees. You only pay
          <br />
          for successful transactions.
        </p>
      </div>
      <div>
        <p className="text-cwc-blue font-bold mb-4">
          <a href="#">Special conditions? Request a quote »</a>
        </p>
        <p className="text-white font-normal opacity-70">
          Settlement to Mobile Wallet is within 24 hours and to bank <br />
          is within 48 hours of withdrawal request.
        </p>
      </div>
    </div>
  );
}

import Head from "next/head";
import Footer from "./../components/footer";
import Header from "./../components/header";
import Service from "./../components/service";
import Features from "./../components/features";
import Pricing from "./../components/pricing";
import PricingCard from "./../components/pricingCard";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <main className="w-screen">
        <Header />
        <Service />
        <section className="bg-black pb-28 wx-auto">
          <Features />
          <Pricing />
          <PricingCard />
        </section>
      </main>
      <Footer />
    </div>
  );
}

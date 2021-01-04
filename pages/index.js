import Head from "next/head";
import Footer from "./../components/footer";
import Header from "./../components/header";
import Service from "./../components/service";
import Features from "./../components/features";
import Pricing from "./../components/pricing";
import PricingCard from "./../components/pricingCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>mookh.pay</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
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

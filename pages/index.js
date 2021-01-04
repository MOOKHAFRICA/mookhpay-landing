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
      <Head>
        <title>mookh.pay</title>
        <meta
          name="viewport"
          content="user-scalable=no, width=device-width, initial-scale=1.0,  minimum-scale=1, maximum-scale=1"
        ></meta>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

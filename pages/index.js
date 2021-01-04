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
        <meta charSet="utf-8" />
        <title>Home - Mookh.pay</title>
        <meta
          name="description"
          content="Online payment processing for internet businesses. Mookh.pay is a suite of payment APIs that powers commerce for online businesses of all sizes, including fraud prevention, and subscription management. Use Mookh.pay’s payment platform to accept and process payments online for easy-to-use commerce solutions."
        />
        {/* Open Graph */}
        <meta property="og:title" content="Login - Mookh.pay" key="ogtitle" />
        <meta
          property="og:description"
          content="Online payment processing for internet businesses. Mookh.pay is a suite of payment APIs that powers commerce for online businesses of all sizes, including fraud prevention, and subscription management. Use Mookh.pay’s payment platform to accept and process payments online for easy-to-use commerce solutions."
          key="ogdesc"
        />
        <meta property="og:url" content="mookhpay.com/login" key="ogurl" />
        <meta property="og:site_name" content="mookh.pay" key="ogsitename" />

        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@MookhAfrica" key="twhandle" />

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

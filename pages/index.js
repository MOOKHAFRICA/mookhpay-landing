import Footer from "./../components/footer";
import Header from "./../components/header";
import HeroSection from "./../components/hero";
import Service from "./../components/service";
import Features from "./../components/features";
import Developers from "./../components/developers";
import Pricing from "./../components/pricing";
import PricingCard from "./../components/pricingCard";
import Cta from "./../components/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EFEFEF] p-4 md:p-6 lg:px-8 lg:py-[22px]">
      <div className="mx-auto flex max-w-[1512px] flex-col gap-4">
        <Header />
        <main className="flex flex-col gap-4">
          <HeroSection />
          <Service />
          <Features />
          <Developers />
          <Pricing />
          <PricingCard />
          <Cta />
        </main>
        <Footer />
      </div>
    </div>
  );
}

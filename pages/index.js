import Footer from "./../components/footer";
import Header from "./../components/header";
import HeroSection from "./../components/hero";
import Service from "./../components/service";
import Features from "./../components/features";
import Pricing from "./../components/pricing";
import PricingCard from "./../components/pricingCard";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <main className="w-screen">
        <div className="relative bg-black pb-28 ">
          <svg
            className="absolute invisible pb-12 ml-52 lg:visible left-20  2xl:left-464 "
            width="1109.951"
            height="493.198"
            style={{
              top: "-72px",
            }}
            viewBox="0 0 1109.951 473.198"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <linearGradient
                id="a"
                x1="0.845"
                y1="-0.02"
                x2="0.106"
                y2="1.065"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="#06123a" />
                <stop offset="1" stopColor="#175cb7" />
              </linearGradient>
            </defs>
            <path
              style={{
                opacity: "0.66",
                fill: "url(#a)",
              }}
              className="a"
              d="M681.014,452.917H61.319c-64.082,0-97.068-76.665-53.006-123.194l243.1-256.717a125.5,125.5,0,0,1,55.589-58.7l11.155-11.78A73.006,73.006,0,0,1,421.665,0H973.124a125,125,0,0,1,125,125V327.917a125,125,0,0,1-125,125Z"
              transform="translate(11.827 20.281)"
            />
          </svg>
          <Header />
          <HeroSection />
        </div>

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

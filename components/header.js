import NavBar from "./nav";
import HeroSection from "./hero";
export default function Header() {
  return (
    <header className="w-screen bg-black pb-12">
      <NavBar />
      <HeroSection />
    </header>
  );
}

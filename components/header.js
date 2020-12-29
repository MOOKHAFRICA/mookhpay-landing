import NavBar from "./nav";
import HeroSection from "./hero";
export default function Header() {
  return (
    <header className="relative bg-black pb-12 w-screen ">
      <NavBar />
      <HeroSection />
    </header>
  );
}

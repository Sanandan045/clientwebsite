import CompanySection from "../components/home/CompanySection";
import FeaturedProductsSection from "../components/home/FeaturedProductsSection";
import HeroSection from "../components/home/HeroSection";

export default function HomePage() {
  return (
    <main id="top">
      <HeroSection />
      <FeaturedProductsSection />
      <CompanySection />
    </main>
  );
}

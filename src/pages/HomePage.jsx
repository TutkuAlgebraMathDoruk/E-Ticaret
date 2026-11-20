import HeroCarousel from "../components/HeroCarousel";
import PromoCards from "../components/PromoCards";
import BestsellerSection from "../components/BestsellerSection";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      <HeroCarousel />
      <PromoCards />
      <BestsellerSection />
      {/* Sıradaki parça: Most Popular bölümü buraya gelecek */}
    </div>
  );
}
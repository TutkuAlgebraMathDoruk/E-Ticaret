import HeroCarousel from "../components/HeroCarousel";
import PromoCards from "../components/PromoCards";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      <HeroCarousel />
      <PromoCards />
      {/* Sıradaki parça: Furniture + Bestseller Products bölümü buraya gelecek */}
    </div>
  );
}
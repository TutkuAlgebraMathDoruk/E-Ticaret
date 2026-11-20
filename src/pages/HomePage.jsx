import HeroCarousel from "../components/HeroCarousel";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      <HeroCarousel />
      {/* Sıradaki parça: Editor's Pick bölümü buraya eklenecek */}
    </div>
  );
}
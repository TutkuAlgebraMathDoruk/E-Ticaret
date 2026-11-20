import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import carousel2 from "../assets/carousel 2 (1).png";
import carousel3 from "../assets/carousel-3.jpg";

const slides = [
  {
    id: 1,
    image: carousel3, // Mavi arka planlı ana sayfa görseli
    title: "NEW COLLECTION",
    description:
      "We know how large objects will act, but things on a small scale.",
    buttonText: "Start Now",
    buttonLink: "/shop",
    bgColor: "bg-sky-500",
    desktopAlign: "md:items-start md:text-left",
  },
  {
    id: 2,
    image: carousel2, // Kırmızı arka planlı yemek görseli
    title: "GROCERIES DELIVERY",
    description:
      "We know how large objects will act, but things on a small scale.",
    buttonText: "Start Now",
    buttonLink: "/shop",
    bgColor: "bg-red-700",
    desktopAlign: "md:items-center md:text-center",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const activeSlide = slides[currentIndex];

  return (
    <section
      className={`relative w-full max-w-[90rem] h-[38rem] md:h-[44.75rem] max-h-[44.75rem] mx-auto flex items-center justify-between overflow-hidden transition-colors duration-500 ${activeSlide.bgColor}`}
    >
      {/* Arka Plan Görseli + Okunabilirlik Katmanı */}
      <img
        src={activeSlide.image}
        alt={activeSlide.title}
        className="absolute inset-0 w-full h-full object-cover object-center select-none"
      />
      <div className="absolute inset-0 bg-black/15" />

      {/* Sol Ok */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Önceki Slayt"
        className="relative z-20 ml-2 md:ml-8 p-2 text-white hover:scale-110 transition-transform focus:outline-none"
      >
        <ChevronLeft className="w-8 h-8 md:w-12 md:h-12 stroke-[1.5]" />
      </button>

      {/* Orta İçerik Kutusu: Başlık + Açıklama + Start Now Butonu */}
      <div
        className={`relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center text-center ${activeSlide.desktopAlign} gap-6 text-white`}
      >
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide leading-tight max-w-xs md:max-w-xl">
          {activeSlide.title}
        </h1>

        <p className="text-sm md:text-lg font-normal text-white/95 max-w-xs md:max-w-md leading-relaxed">
          {activeSlide.description}
        </p>

        <Link
          to={activeSlide.buttonLink}
          className="bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm md:text-base px-9 py-3.5 rounded-md transition-colors shadow-sm"
        >
          {activeSlide.buttonText}
        </Link>
      </div>

      {/* Sağ Ok */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Sonraki Slayt"
        className="relative z-20 mr-2 md:mr-8 p-2 text-white hover:scale-110 transition-transform focus:outline-none"
      >
        <ChevronRight className="w-8 h-8 md:w-12 md:h-12 stroke-[1.5]" />
      </button>

      {/* Alt Çizgi Göstergeleri */}
      <div className="absolute bottom-6 inset-x-0 z-20 flex items-center justify-center gap-1.5">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slayt ${index + 1}`}
            className={`h-2 w-12 md:w-16 transition-opacity ${
              index === currentIndex
                ? "bg-white opacity-100"
                : "bg-white opacity-50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
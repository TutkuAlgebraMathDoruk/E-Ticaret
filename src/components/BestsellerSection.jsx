import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import furnitureImg from "../assets/j.png";
import prod1 from "../assets/k1.png";
import prod2 from "../assets/k2.png";
import prod3 from "../assets/k3.png";

const categories = ["Men", "Women", "Accessories"];

const products = [
  { id: 1, image: prod1 },
  { id: 2, image: prod2 },
  { id: 3, image: prod3 },
  { id: 4, image: prod1 },
  { id: 5, image: prod2 },
  { id: 6, image: prod3 },
];

export default function BestsellerSection({
  bannerImage = furnitureImg,
  bannerBg = "bg-amber-400",
  imagePosition = "object-bottom",
  reverse = false,
}) {
  const [activeCategory, setActiveCategory] = useState("Men");

  const handlePrevCategory = () => {
    const currentIndex = categories.indexOf(activeCategory);
    const prevIndex =
      currentIndex === 0 ? categories.length - 1 : currentIndex - 1;
    setActiveCategory(categories[prevIndex]);
  };

  const handleNextCategory = () => {
    const currentIndex = categories.indexOf(activeCategory);
    const nextIndex =
      currentIndex === categories.length - 1 ? 0 : currentIndex + 1;
    setActiveCategory(categories[nextIndex]);
  };

  return (
    <section className="w-full max-w-[90rem] mx-auto bg-white py-12 md:h-[55.9375rem] md:max-h-[55.9375rem] flex items-stretch">
      {/* reverse prop'u true olduğunda masaüstünde afiş sağa, ürünler sola geçer */}
      <div
        className={`w-full max-w-6xl mx-auto px-6 flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-stretch gap-8`}
      >
        {/* Afiş Sütunu */}
        <aside
          className={`relative w-full md:w-[34%] min-h-[28rem] md:min-h-0 md:h-full ${bannerBg} overflow-hidden flex flex-col justify-start p-8`}
        >
          <img
            src={bannerImage}
            alt="Furniture"
            className={`absolute inset-0 w-full h-full object-cover ${imagePosition} select-none pointer-events-none`}
          />
          <div className="relative z-10 flex flex-col gap-1">
            <h2 className="text-sm font-bold text-slate-800 tracking-wide uppercase">
              FURNITURE
            </h2>
            <span className="text-sm font-bold text-slate-500">5 Items</span>
          </div>
        </aside>

        {/* Ürün Listesi Sütunu */}
        <div className="w-full md:w-[66%] flex flex-col justify-between gap-6">
          {/* Üst Başlık, Kategori Sekmeleri ve Oklar */}
          <div className="w-full pb-4 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <h2 className="text-base font-bold text-slate-800 tracking-tight uppercase">
              BESTSELLER PRODUCTS
            </h2>

            <div className="flex items-center gap-6 text-sm font-bold">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`transition-colors ${
                    activeCategory === category
                      ? "text-sky-500"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrevCategory}
                aria-label="Önceki Kategori"
                className="w-11 h-11 rounded-full border border-slate-200 text-slate-400 hover:border-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNextCategory}
                aria-label="Sonraki Kategori"
                className="w-11 h-11 rounded-full border border-slate-400 text-slate-700 hover:border-slate-700 hover:text-slate-900 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* CSS Grid kullanmadan Flexbox ile 3x2 Ürün Dizilimi */}
          <div className="w-full flex-1 flex flex-col sm:flex-row sm:flex-wrap items-center justify-between content-around gap-y-6">
            {products.map((item) => (
              <ProductCard key={item.id} image={item.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
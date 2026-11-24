import { Download } from "lucide-react";
import popularProductImg from "../assets/N1.png"; // Sol karttaki paket ürün görseli
import popularBannerImg from "../assets/N3.png"; // Sağdaki sarı arka planlı görsel

const colorDots = [
  "bg-sky-500",
  "bg-emerald-700",
  "bg-orange-400",
  "bg-slate-800",
];

export default function MostPopularSection() {
  return (
    <section className="w-full max-w-[90rem] mx-auto bg-white py-12">
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-stretch">
        
        {/* Sol Sütun: Gri Arka Planlı Most Popular Kartı */}
        <div className="w-full md:w-[34%] bg-neutral-50 px-8 py-12 flex flex-col items-center justify-center text-center gap-5">
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight uppercase">
            MOST POPULAR
          </h2>

          <p className="text-sm font-normal text-slate-500 leading-relaxed max-w-xs">
            We focus on ergonomics and meeting you where you work. It&apos;s
            only a keystroke away.
          </p>

          <div className="w-full max-w-[15rem] h-56 flex items-center justify-center my-2">
            <img
              src={popularProductImg}
              alt="English Department"
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <div className="flex flex-col items-center gap-2.5">
            <h3 className="text-sm font-bold text-slate-800">
              English Department
            </h3>

            <div className="flex items-center justify-center gap-2 text-sm font-bold text-slate-500">
              <Download className="w-4 h-4" />
              <span>15 Sales</span>
            </div>

            <div className="flex items-center justify-center gap-1.5 pt-1 text-base font-bold">
              <span className="text-slate-400">$16.48</span>
              <span className="text-emerald-700">$6.48</span>
            </div>

            {/* 4'lü Renk Seçenek Noktaları */}
            <div className="flex items-center justify-center gap-1.5 pt-1">
              {colorDots.map((bgClass, index) => (
                <span
                  key={index}
                  className={`w-4 h-4 rounded-full ${bgClass}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sağ Sütun: Büyük Görsel */}
        <div className="w-full md:w-[66%] min-h-[26rem] md:min-h-[42rem] bg-amber-400 overflow-hidden flex">
          <img
            src={popularBannerImg}
            alt="Most Popular Banner"
            className="w-full h-full object-cover object-center select-none"
          />
        </div>

      </div>
    </section>
  );
}
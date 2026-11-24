import { Link } from "react-router-dom";
import prodO1 from "../assets/O1.png";
import prodO2 from "../assets/O2.png";
import prodO3 from "../assets/O3.png";
import prodO4 from "../assets/O4.png";

const rowProducts = [
  { id: 1, image: prodO1 },
  { id: 2, image: prodO2 },
  { id: 3, image: prodO3 },
  { id: 4, image: prodO4 },
];

export default function PopularProductsRow() {
  return (
    <section className="w-full max-w-[90rem] mx-auto bg-neutral-50 py-12 md:h-[38.75rem] md:max-h-[38.75rem] flex items-center">
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col justify-center gap-6">
        
        {/* Üst Başlık ve İnce Çizgi */}
        <div className="w-full pb-6 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight uppercase">
            BESTSELLER PRODUCTS
          </h2>
        </div>

        {/* Flexbox ile 4'lü Ürün Dizilimi */}
        <div className="w-full flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap items-stretch justify-between gap-6">
          {rowProducts.map((item) => (
            <Link
              key={item.id}
              to="/shop"
              className="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(25%-1.125rem)] flex flex-col items-start text-left group"
            >
              {/* Beyaz Ürün Görsel Kutusu */}
              <div className="w-full h-[17.5rem] bg-white flex items-center justify-center p-4 overflow-hidden">
                <img
                  src={item.image}
                  alt="Graphic Design"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Sola Hizalı Ürün Bilgileri */}
              <div className="w-full flex flex-col items-start gap-2.5 pt-6 pb-4 px-6">
                <h3 className="text-base font-bold text-slate-800 group-hover:text-sky-500 transition-colors">
                  Graphic Design
                </h3>

                <p className="text-sm font-bold text-slate-500">
                  English Department
                </p>

                <div className="flex items-center gap-1.5 pt-1 text-base font-bold">
                  <span className="text-slate-400">$16.48</span>
                  <span className="text-emerald-700">$6.48</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
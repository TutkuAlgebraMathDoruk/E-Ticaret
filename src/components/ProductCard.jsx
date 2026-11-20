import { Link } from "react-router-dom";

export default function ProductCard({
  image,
  title = "Graphic Design",
  department = "English Department",
  oldPrice = "$16.48",
  newPrice = "$6.48",
  linkUrl = "/shop",
}) {
  return (
    <Link
      to={linkUrl}
      className="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] bg-white flex flex-col items-center text-center group"
    >
      {/* Ürün Görsel Alanı */}
      <div className="w-full h-44 flex items-center justify-center p-2 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Ürün Bilgileri */}
      <div className="flex flex-col items-center gap-2 pt-4 pb-3 px-2">
        <h3 className="text-base font-bold text-slate-800 group-hover:text-sky-500 transition-colors">
          {title}
        </h3>

        <p className="text-sm font-bold text-slate-500">{department}</p>

        <div className="flex items-center justify-center gap-1.5 pt-1 text-sm font-bold">
          <span className="text-slate-400">{oldPrice}</span>
          <span className="text-emerald-700">{newPrice}</span>
        </div>
      </div>
    </Link>
  );
}
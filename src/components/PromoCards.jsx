import { Link } from "react-router-dom";
import banner1 from "../assets/h5-baner-1 1.png";
import banner2 from "../assets/h5-baner-2 1.png";
import banner3 from "../assets/h5-baner-3 1.png";

const promoCards = [
  {
    id: 1,
    subtitle: "Your Space",
    title: "Unique\nLife",
    linkText: "Explore Items",
    linkUrl: "/shop",
    image: banner1,
  },
  {
    id: 2,
    subtitle: "Ends Today",
    title: "Elements\nStyle",
    linkText: "Explore Items",
    linkUrl: "/shop",
    image: banner2,
  },
  {
    id: 3,
    subtitle: "Ends Today",
    title: "Elements\nStyle",
    linkText: "Explore Items",
    linkUrl: "/shop",
    image: banner3,
  },
];

export default function PromoCards() {
  return (
    <section className="w-full max-w-[90rem] mx-auto bg-neutral-50 py-12 md:py-0 md:h-[24.5rem] md:max-h-[24.5rem] flex items-center">
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-stretch justify-between gap-6">
        {promoCards.map((card) => (
          <article
            key={card.id}
            className="relative flex-1 min-h-[14.5rem] md:h-[14.5rem] bg-white border border-neutral-100 px-8 py-8 flex flex-col justify-center overflow-hidden shadow-sm"
          >
            {card.image && (
              <img
                src={card.image}
                alt={card.title.replace("\n", " ")}
                className="absolute inset-0 w-full h-full object-contain object-right select-none pointer-events-none"
              />
            )}

            <div className="relative z-10 flex flex-col items-start gap-3 max-w-[10rem]">
              <span className="text-xs md:text-sm font-medium text-slate-500">
                {card.subtitle}
              </span>

              <h3 className="text-xl md:text-2xl font-bold text-slate-800 leading-snug whitespace-pre-line">
                {card.title}
              </h3>

              <Link
                to={card.linkUrl}
                className="text-xs font-semibold text-slate-800 hover:text-sky-500 hover:underline mt-1"
              >
                {card.linkText}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
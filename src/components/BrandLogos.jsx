import brand1 from "../assets/P-1.png";
import brand2 from "../assets/P-2.png";
import brand3 from "../assets/P-3.png";
import brand4 from "../assets/P-4.png";
import brand5 from "../assets/P-5.png";
import brand6 from "../assets/P-6.png";

const brands = [
  { id: 1, name: "Hooli", image: brand1 },
  { id: 2, name: "Lyft", image: brand2 },
  { id: 3, name: "Pied Piper", image: brand3 },
  { id: 4, name: "Stripe", image: brand4 },
  { id: 5, name: "AWS", image: brand5 },
  { id: 6, name: "Reddit", image: brand6 },
];

export default function BrandLogos() {
  return (
    <section className="w-full max-w-[90rem] mx-auto bg-neutral-50 py-14">
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-10">
        {brands.map((brand) => (
          <div key={brand.id} className="flex items-center justify-center">
            <img
              src={brand.image}
              alt={brand.name}
              className="h-9 md:h-11 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity select-none"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
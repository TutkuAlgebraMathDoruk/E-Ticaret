import { Link } from "react-router-dom";
import { Phone, MapPin, Mail } from "lucide-react";
import social1 from "../assets/Vector.png";
import social2 from "../assets/Vector (1).png";
import social3 from "../assets/Vector (2).png";

const footerColumns = [
  {
    title: "Company Info",
    links: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    title: "Legal",
    links: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    title: "Features",
    links: [
      "Business Marketing",
      "User Analytic",
      "Live Chat",
      "Unlimited Support",
    ],
  },
  {
    title: "Resources",
    links: ["IOS & Android", "Watch a Demo", "Customers", "API"],
  },
];

const socialLinks = [
  { id: 1, name: "Facebook", url: "https://facebook.com", icon: social1 },
  { id: 2, name: "Instagram", url: "https://instagram.com", icon: social2 },
  { id: 3, name: "Twitter", url: "https://twitter.com", icon: social3 },
];

export default function Footer() {
  return (
    <footer className="w-full max-w-[1440px] lg:h-[488px] mx-auto bg-[#252B42] text-white py-12 lg:py-0 flex items-center">
      <div className="w-full max-w-6xl mx-auto px-6 h-full flex flex-col justify-between py-10 gap-10 lg:gap-0">
        
        {/* Üst Satır: Başlık + Contact Us Butonu */}
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Consulting Agency For Your Business
            </h2>
            <p className="text-sm font-normal text-neutral-300">
              the quick fox jumps over the lazy dog
            </p>
          </div>

          <Link
            to="/contact"
            className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold px-10 py-3.5 rounded-[5px] transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Orta Satır: 5 Sütunlu Linkler ve İletişim Bilgileri */}
        <div className="w-full flex flex-col md:flex-row flex-wrap lg:flex-nowrap items-start justify-between gap-8">
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4 min-w-[140px]">
              <h3 className="text-base font-bold text-white">{col.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="text-sm font-bold text-neutral-300 hover:text-sky-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 5. Sütun: Get In Touch */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold text-white">Get In Touch</h3>
            <ul className="flex flex-col gap-3 text-sm font-bold text-neutral-300">
              <li className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-sky-400 shrink-0" />
                <span>(480) 555-0103</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-6 h-6 text-sky-400 shrink-0" />
                <span>4517 Washington Ave.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-sky-400 shrink-0" />
                <span>debra.holt@example.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Satır: Telif Yazısı ve Sosyal Medya Görselleri */}
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
          <p className="text-sm font-bold text-neutral-300">
            Made With Love By Finland All Right Reserved
          </p>

          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="hover:opacity-80 transition-opacity flex items-center justify-center"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-6 h-6 object-contain select-none"
                />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
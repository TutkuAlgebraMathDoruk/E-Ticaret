import { Link } from "react-router-dom";
import { Clock, BarChart2, ChevronRight } from "lucide-react";
import post1 from "../assets/S1.png";
import post2 from "../assets/S2.png";
import post3 from "../assets/S3.png";

const posts = [
  { id: 1, image: post1 },
  { id: 2, image: post2 },
  { id: 3, image: post3 },
];

export default function FeaturedPosts() {
  return (
    <section className="w-full max-w-[1440px] lg:h-[994px] mx-auto bg-white py-20 lg:py-0 flex items-center">
      <div className="w-full max-w-[1050px] mx-auto px-6 flex flex-col items-center justify-center gap-16">
        
        {/* Üst Başlık Alanı */}
        <div className="flex flex-col items-center text-center gap-2.5">
          <span className="text-sm font-bold text-sky-500 tracking-wide">
            Practice Advice
          </span>
          <h2 className="text-4xl font-bold text-slate-800 tracking-tight">
            Featured Posts
          </h2>
        </div>

        {/* Flexbox ile 3'lü Blog Kartları */}
        <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-7">
          {posts.map((post) => (
            <article
              key={post.id}
              className="w-full lg:w-[calc(33.333%-1.17rem)] bg-white border border-neutral-100 shadow-sm flex flex-col group"
            >
              {/* Üst Görsel ve NEW Etiketi */}
              <div className="relative w-full h-[300px] overflow-hidden">
                <img
                  src={post.image}
                  alt="Loudest à la Madison #1"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-5 left-5 bg-red-500 text-white text-xs font-bold uppercase px-2.5 py-1 rounded-[3px] shadow-sm">
                  NEW
                </span>
              </div>

              {/* Alt İçerik Kutusu */}
              <div className="flex-1 p-6 flex flex-col justify-between gap-4 text-left">
                <div className="flex flex-col gap-3">
                  {/* Etiketler */}
                  <div className="flex items-center gap-4 text-xs font-normal">
                    <span className="text-sky-400">Google</span>
                    <span className="text-slate-500">Trending</span>
                    <span className="text-slate-500">New</span>
                  </div>

                  {/* Kart Başlığı */}
                  <h3 className="text-xl font-normal text-slate-800 leading-snug">
                    Loudest à la Madison #1 <br />
                    (L&apos;integral)
                  </h3>

                  {/* Açıklama */}
                  <p className="text-sm font-normal text-slate-500 leading-relaxed">
                    We focus on ergonomics and meeting you where you work.
                    It&apos;s only a keystroke away.
                  </p>
                </div>

                <div className="flex flex-col gap-4 pt-2">
                  {/* Tarih ve Yorum Sayısı */}
                  <div className="flex items-center justify-between py-3 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-sky-500" />
                      <span>22 April 2021</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <BarChart2 className="w-4 h-4 text-emerald-700" />
                      <span>10 comments</span>
                    </div>
                  </div>

                  {/* Learn More Linki */}
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-sky-500 transition-colors"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-5 h-5 text-sky-500" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
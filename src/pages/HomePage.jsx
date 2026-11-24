import HeroCarousel from "../components/HeroCarousel";
import PromoCards from "../components/PromoCards";
import BestsellerSection from "../components/BestsellerSection";
import MostPopularSection from "../components/MostPopularSection";
import PopularProductsRow from "../components/PopularProductsRow";
import BrandLogos from "../components/BrandLogos";
import FeaturedPosts from "../components/FeaturedPosts";
import donutBanner from "../assets/M1.jpg";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* Üst Slider */}
      <HeroCarousel />

      {/* 3'lü Kampanya Kartları */}
      <PromoCards />

      {/* 1. Bestseller: Sol sarı afiş (j.png) + Sağ 6'lı ürün listesi */}
      <BestsellerSection />

      {/* 2. Bestseller: Sol 6'lı ürün listesi + Sağ pembe donut afişi (M1.jpg) */}
      <BestsellerSection
        bannerImage={donutBanner}
        bannerBg="bg-sky-200"
        imagePosition="object-center"
        reverse
      />

      {/* Most Popular Bölümü (N1.png ve N3.png) */}
      <MostPopularSection />

      {/* 4'lü Bestseller Ürün Satırı (O1.png - O4.png) */}
      <PopularProductsRow />

      {/* 6'lı Marka Logoları (P-1.png - P-6.png) */}
      <BrandLogos />

      {/* Featured Posts Blog Bölümü (S1.png - S3.png) */}
      <FeaturedPosts />
    </div>
  );
}
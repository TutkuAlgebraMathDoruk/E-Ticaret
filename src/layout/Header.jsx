import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Search,
  ShoppingCart,
  Heart,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full max-w-[90rem] mx-auto bg-white border-b border-slate-100 md:sticky md:top-0 z-50">
      <div className="w-full max-w-7xl mx-auto px-6 py-5 md:py-0 md:h-[5.6875rem] flex flex-col md:flex-row md:items-center md:justify-between">
        
        {/* Üst Satır: Bandage Logosu + Mobil Sağ İkonlar */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link
            to="/"
            className="text-2xl font-bold text-slate-800 tracking-tight"
          >
            Bandage
          </Link>

          {/* Sadece Mobilde Görünen Sağ Üst İkonlar (Search, Cart, Hamburger) */}
          <div className="flex items-center gap-5 text-slate-700 md:hidden">
            <button type="button" aria-label="Ara">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/cart" aria-label="Sepet">
              <ShoppingCart className="w-5 h-5" />
            </Link>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menüyü Aç veya Kapat"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobil Açılır Menü (Home, Product, Pricing, Contact) */}
        {isMenuOpen && (
          <nav className="flex flex-col items-center gap-6 py-10 text-2xl font-medium text-slate-500 md:hidden">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-slate-800"
            >
              Home
            </Link>
            <Link
              to="/shop"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-slate-800"
            >
              Product
            </Link>
            <Link
              to="/pricing"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-slate-800"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-slate-800"
            >
              Contact
            </Link>
          </nav>
        )}

        {/* Masaüstü Orta Navigasyon Linkleri */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-500">
          <Link to="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <Link
            to="/shop"
            className="flex items-center gap-1 text-slate-800 hover:text-slate-900 transition-colors"
          >
            <span>Shop</span>
            <ChevronDown className="w-4 h-4" />
          </Link>
          <Link to="/about" className="hover:text-slate-900 transition-colors">
            About
          </Link>
          <Link to="/blog" className="hover:text-slate-900 transition-colors">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-slate-900 transition-colors">
            Contact
          </Link>
          <Link to="/pages" className="hover:text-slate-900 transition-colors">
            Pages
          </Link>
        </nav>

        {/* Masaüstü Sağ Kısım: Login / Register + İkonlar */}
        <div className="hidden md:flex items-center gap-5 text-sky-500 text-sm font-semibold">
          <Link
            to="/login"
            className="flex items-center gap-1.5 hover:text-sky-600"
          >
            <User className="w-4 h-4" />
            <span>Login / Register</span>
          </Link>

          <button type="button" aria-label="Ara" className="hover:text-sky-600">
            <Search className="w-4 h-4" />
          </button>

          <Link
            to="/cart"
            className="flex items-center gap-1 hover:text-sky-600"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="text-xs font-normal">1</span>
          </Link>

          <Link
            to="/wishlist"
            className="flex items-center gap-1 hover:text-sky-600"
          >
            <Heart className="w-4 h-4" />
            <span className="text-xs font-normal">1</span>
          </Link>
        </div>

      </div>
    </header>
  );
}
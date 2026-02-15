import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/ChatGPT Image 23. Nov. 2025, 00_27_42_1763854074668.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="bg-secondary border-b border-border fixed top-0 w-full z-50"
      style={{ color: "#ddd" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🔹 NAVBAR YÜKSEKLİĞİ BURADA AYARLANIYOR */}
        <div className="flex justify-between items-center h-16 md:h-20 lg:h-24 gap-8  overflow-hidden">
          {/* Logo + text */}
          <Link
            href="/"
            className="flex items-center space-x-3"
            data-testid="nav-logo"
          >
            {/* 🔹 LOGO BOYUTU BURADA AYARLANIYOR */}
            <img
              src={logoImage}
              alt="Envoedu Germany – Yurtdışı Eğitim Danışmanlığı"
              className="h-40 md:h-52 lg:h-60 w-auto"
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="hover:text-accent transition-colors whitespace-nowrap"
              style={{ color: "#ddd" }}
              data-testid="nav-home"
            >
              Ana Sayfa
            </Link>
            <Link
              href="/services"
              className="hover:text-accent transition-colors whitespace-nowrap"
              style={{ color: "#ddd" }}
              data-testid="nav-services"
            >
              Hizmetler
            </Link>
            <Link
              href="/universities"
              className="hover:text-accent transition-colors whitespace-nowrap"
              style={{ color: "#ddd" }}
              data-testid="nav-universities"
            >
              Üniversiteler
            </Link>
            <Link
              href="/process"
              className="hover:text-accent transition-colors whitespace-nowrap"
              style={{ color: "#ddd" }}
              data-testid="nav-process"
            >
              Süreç
            </Link>
            <Link
              href="/about"
              className="hover:text-accent transition-colors whitespace-nowrap"
              style={{ color: "#ddd" }}
              data-testid="nav-about"
            >
              Hakkımızda
            </Link>
            <Link
              href="/faq"
              className="hover:text-accent transition-colors whitespace-nowrap"
              style={{ color: "#ddd" }}
              data-testid="nav-faq"
            >
              Sıkça Sorulan Sorular
            </Link>
            <Link
              href="/contact"
              className="hover:text-accent transition-colors whitespace-nowrap"
              style={{ color: "#ddd" }}
              data-testid="nav-contact"
            >
              İletişim
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="nav-menu-button"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            className="md:hidden py-4 border-t border-border"
            data-testid="nav-mobile-menu"
          >
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="hover:text-accent transition-colors"
                style={{ color: "#ddd" }}
                data-testid="mobile-nav-home"
              >
                Ana Sayfa
              </Link>
              <Link
                href="/services"
                className="hover:text-accent transition-colors"
                style={{ color: "#ddd" }}
                data-testid="mobile-nav-services"
              >
                Hizmetler
              </Link>
              <Link
                href="/universities"
                className="hover:text-accent transition-colors"
                style={{ color: "#ddd" }}
                data-testid="mobile-nav-universities"
              >
                Üniversiteler
              </Link>
              <Link
                href="/process"
                className="hover:text-accent transition-colors"
                style={{ color: "#ddd" }}
                data-testid="mobile-nav-process"
              >
                Süreç
              </Link>
              <Link
                href="/about"
                className="hover:text-accent transition-colors"
                style={{ color: "#ddd" }}
                data-testid="mobile-nav-about"
              >
                Hakkımızda
              </Link>
              <Link
                href="/contact"
                className="hover:text-accent transition-colors"
                style={{ color: "#ddd" }}
                data-testid="mobile-nav-contact"
              >
                İletişim
              </Link>
              <Link
                href="/faq"
                className="hover:text-accent transition-colors"
                style={{ color: "#ddd" }}
                data-testid="mobile-nav-faq"
              >
                SSS
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

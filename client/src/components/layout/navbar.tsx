import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/ChatGPT Image 23. Nov. 2025, 00_30_20_1763854282475.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="bg-secondary border-b border-border fixed top-0 w-full z-50"
      style={{ color: "#ddd" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 gap-16">
          <Link
            href="/"
            className="flex items-center space-x-3"
            data-testid="nav-logo"
          >
            <img src={logoImage} alt="Envoedu Germany" className="h-20 w-auto" />
          </Link>

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
            {/* Yeni: Başarı Hikayeleri */}
            <Link
              href="/#testimonials"
              className="hover:text-accent transition-colors whitespace-nowrap"
              style={{ color: "#ddd" }}
              data-testid="nav-testimonials"
            >
              Hakkımızda
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

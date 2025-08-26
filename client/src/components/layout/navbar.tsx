import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, GraduationCap } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-secondary text-secondary-foreground/80 border-b border-border fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2" data-testid="nav-logo">
            <GraduationCap className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-secondary-foreground/90">EduConsult Germany</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-secondary-foreground/70 hover:text-accent transition-colors" data-testid="nav-home">
              Ana Sayfa
            </Link>
            <Link href="/services" className="text-secondary-foreground/70 hover:text-accent transition-colors" data-testid="nav-services">
              Hizmetler
            </Link>
            <Link href="/universities" className="text-secondary-foreground/70 hover:text-accent transition-colors" data-testid="nav-universities">
              Üniversiteler
            </Link>
            <Link href="/process" className="text-secondary-foreground/70 hover:text-accent transition-colors" data-testid="nav-process">
              Süreç
            </Link>
            <Link href="/about" className="text-secondary-foreground/70 hover:text-accent transition-colors" data-testid="nav-about">
              Hakkımızda
            </Link>
            <Link href="/contact" className="text-secondary-foreground/70 hover:text-accent transition-colors" data-testid="nav-contact">
              İletişim
            </Link>
          </div>

          <div className="hidden md:flex space-x-2 text-sm text-secondary-foreground/60">
            <span>TR</span>
            <span>|</span>
            <span>DE</span>
            <span>|</span>
            <span>EN</span>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="nav-menu-button"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border" data-testid="nav-mobile-menu">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-secondary-foreground/70 hover:text-accent transition-colors" data-testid="mobile-nav-home">
                Ana Sayfa
              </Link>
              <Link href="/services" className="text-secondary-foreground/70 hover:text-accent transition-colors" data-testid="mobile-nav-services">
                Hizmetler
              </Link>
              <Link href="/universities" className="text-secondary-foreground/70 hover:text-accent transition-colors" data-testid="mobile-nav-universities">
                Üniversiteler
              </Link>
              <Link href="/process" className="text-secondary-foreground/70 hover:text-accent transition-colors" data-testid="mobile-nav-process">
                Süreç
              </Link>
              <Link href="/about" className="text-secondary-foreground/70 hover:text-accent transition-colors" data-testid="mobile-nav-about">
                Hakkımızda
              </Link>
              <Link href="/contact" className="text-secondary-foreground/70 hover:text-accent transition-colors" data-testid="mobile-nav-contact">
                İletişim
              </Link>
              <div className="flex space-x-2 text-sm text-secondary-foreground/60 pt-4 border-t border-border">
                <span>TR</span>
                <span>|</span>
                <span>DE</span>
                <span>|</span>
                <span>EN</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

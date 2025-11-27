import { GraduationCap } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <GraduationCap className="text-2xl text-accent" />
              <span className="text-xl font-bold">Envoedu Germany</span>
            </div>
            <p
              className="text-secondary-foreground/80 mb-4"
              data-testid="footer-description"
            >
              Almanya'da eğitim hayalinizi gerçeğe dönüştüren güvenilir
              ortağınız.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Bilgi</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-link-about"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-link-success-stories"
                >
                  Başarı Hikayeleri
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-link-faq"
                >
                  SSS
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <div className="space-y-2 text-secondary-foreground/80">
              <p data-testid="footer-phone">+90 212 123 45 67</p>
              <a
                href="mailto:info@envoedugermany.com"
                className="hover:text-accent transition-colors block"
                data-testid="footer-email"
              >
                info@envoedugermany.com
              </a>
              <p data-testid="footer-location">İstanbul, Türkiye</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p
            className="text-secondary-foreground/60 text-sm"
            data-testid="footer-copyright"
          >
            © 2020 Envoedu Germany. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6 text-sm text-secondary-foreground/60 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="hover:text-accent transition-colors"
              data-testid="footer-link-privacy"
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="/terms"
              className="hover:text-accent transition-colors"
              data-testid="footer-link-terms"
            >
              Kullanım Şartları
            </Link>
            <Link
              href="/cookies"
              className="hover:text-accent transition-colors"
              data-testid="footer-link-cookies"
            >
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

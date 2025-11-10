import { GraduationCap } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <GraduationCap className="text-2xl text-accent" />
              <span className="text-xl font-bold">EnvoEdu Germany</span>
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
            <h3 className="text-lg font-semibold mb-4">Hizmetler</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-service-consultation"
                >
                  Üniversite Danışmanlığı
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-service-application"
                >
                  Başvuru Hazırlığı
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-service-visa"
                >
                  Vize İşlemleri
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-service-language"
                >
                  Dil Eğitimi
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Bilgi</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-link-about"
                >
                  Hakkımızda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-link-success-stories"
                >
                  Başarı Hikayeleri
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-link-blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors"
                  data-testid="footer-link-faq"
                >
                  SSS
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <div className="space-y-2 text-secondary-foreground/80">
              <p data-testid="footer-phone">+90 212 123 45 67</p>
              <p data-testid="footer-email">info@educonsult.com.tr</p>
              <p data-testid="footer-location">İstanbul, Türkiye</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p
            className="text-secondary-foreground/60 text-sm"
            data-testid="footer-copyright"
          >
            © 2024 EnvoEdu Germany. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6 text-sm text-secondary-foreground/60 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-accent transition-colors"
              data-testid="footer-link-privacy"
            >
              Gizlilik Politikası
            </a>
            <a
              href="#"
              className="hover:text-accent transition-colors"
              data-testid="footer-link-terms"
            >
              Kullanım Şartları
            </a>
            <a
              href="#"
              className="hover:text-accent transition-colors"
              data-testid="footer-link-cookies"
            >
              Çerez Politikası
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

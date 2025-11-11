import { CalendarCheck, Play } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="hero-gradient text-foreground relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1
              className="text-5xl font-bold leading-tight text-primary"
              data-testid="hero-title"
            >
              Almanya'da Eğitim Hayalinizi
              <span className="text-secondary"> Gerçeğe</span> Dönüştürün
            </h1>
            <p
              className="text-xl text-foreground/80 leading-relaxed"
              data-testid="hero-description"
            >
              Sizler için özel olarak tasarlanmış kapsamlı danışmanlık
              hizmetleri ile Almanya'daki en iyi üniversitelere adım atın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button
                  className="bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2 w-full sm:w-auto"
                  data-testid="button-consultation"
                >
                  <CalendarCheck className="w-5 h-5" />
                  <span>Ücretsiz Danışmanlık Al</span>
                </button>
              </Link>
            </div>
            <div className="flex space-x-8 pt-4">
              <div className="text-center">
                <div
                  className="text-3xl font-bold"
                  data-testid="stat-universities"
                >
                  100+
                </div>
                <div className="text-sm text-foreground/70">
                  Üniversite Kabulü
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl font-bold"
                  data-testid="stat-success-rate"
                >
                  98%
                </div>
                <div className="text-sm text-foreground/70">Başarı Oranı</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Students studying in German university"
              className="rounded-xl shadow-2xl w-full h-auto"
              data-testid="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

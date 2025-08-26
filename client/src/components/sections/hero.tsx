import { CalendarCheck, Play } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="hero-gradient text-foreground relative" style={{
      backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold leading-tight text-primary" data-testid="hero-title">
              Almanya'da Eğitim Hayalinizi
              <span className="text-secondary"> Gerçeğe</span> Dönüştürün
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed" data-testid="hero-description">
              Türk öğrenciler için özel olarak tasarlanmış kapsamlı danışmanlık hizmetleri ile Almanya'daki en iyi üniversitelere adım atın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2 w-full sm:w-auto" data-testid="button-consultation">
                  <CalendarCheck className="w-5 h-5" />
                  <span>Ücretsiz Danışmanlık Al</span>
                </button>
              </Link>
              <button className="border-2 border-gray-500 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-500 hover:text-white transition-colors flex items-center justify-center space-x-2 w-full sm:w-auto" data-testid="button-success-stories">
                <Play className="w-5 h-5" />
                <span>Başarı Hikayelerini İzle</span>
              </button>
            </div>
            <div className="flex space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold" data-testid="stat-students">500+</div>
                <div className="text-sm text-foreground/70">Başarılı Öğrenci</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" data-testid="stat-universities">50+</div>
                <div className="text-sm text-foreground/70">Partner Üniversite</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" data-testid="stat-success-rate">98%</div>
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
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg shadow-lg" data-testid="hero-notification">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-black border-2 border-card"></div>
                  <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-card"></div>
                  <div className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-card"></div>
                </div>
                <div className="text-sm font-medium text-card-foreground">Bu ay 24 öğrenci kaydoldu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

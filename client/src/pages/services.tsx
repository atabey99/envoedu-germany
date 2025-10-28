import ServiceCard from "@/components/ui/service-card";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";
import { GraduationCap, FileText, Languages, IdCard, Home, Handshake, Users, Award, Clock, Globe } from "lucide-react";

const mainServices = [
  {
    icon: GraduationCap,
    title: "Üniversite Seçimi",
    description: "Profilinize en uygun Almanya üniversitelerini belirleyip başvuru stratejinizi oluşturuyoruz.",
    features: [],
    color: "primary" as const
  },
  {
    icon: FileText,
    title: "Başvuru Hazırlığı", 
    description: "Motivasyon mektubu, CV ve gerekli belgelerinizi profesyonel olarak hazırlıyoruz.",
    features: [],
    color: "accent" as const
  },
  {
    icon: Languages,
    title: "Dil Eğitimi",
    description: "Almanca seviyenizi geliştirin ve dil sınavlarına hazırlanın.",
    features: [],
    color: "secondary" as const
  },
  {
    icon: IdCard,
    title: "Vize İşlemleri",
    description: "Vize sürecinizi baştan sona yönetiyoruz.",
    features: [],
    color: "primary" as const
  }
];

const additionalServices = [
  {
    icon: Users,
    title: "Ailevilerine Destek",
    description: "Öğrenci ailelerine yönelik bilgilendirme ve destek hizmetleri",
    features: ["Aile bilgilendirmeleri", "Veli toplantıları", "İletişim desteği"]
  },
  {
    icon: Award,
    title: "Burs Danışmanlığı", 
    description: "Alman üniversitelerindeki burs fırsatlarını değerlendirin",
    features: ["Burs araştırması", "Başvuru desteği", "Takip hizmetleri"]
  },
  {
    icon: Clock,
    title: "Acil Durum Desteği",
    description: "Almanya'da karşılaştığınız acil durumlarda 7/24 destek",
    features: ["24/7 iletişim hattı", "Acil durum müdahalesi", "Yerel destek ağı"]
  },
  {
    icon: Globe,
    title: "Kültürel Adaptasyon",
    description: "Alman kültürüne uyum sağlamanız için rehberlik",
    features: ["Kültür eğitimi", "Sosyal aktiviteler", "Mentorluk programı"]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Navbar />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6" data-testid="services-page-title">
            Hizmetlerimiz
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" data-testid="services-page-description">
            Almanya'da eğitim yolculuğunuzun her adımında kapsamlı destek sunuyoruz. 
            Başvuru sürecinden mezuniyetinize kadar yanınızdayız.
          </p>
        </div>

        {/* Main Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center" data-testid="main-services-title">
            Ana Hizmetlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-muted rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center" data-testid="additional-services-title">
            Ek Destek Hizmetleri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border" data-testid={`additional-service-${index}`}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3" data-testid={`additional-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`additional-service-description-${index}`}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center" data-testid={`additional-service-feature-${index}-${featureIndex}`}>
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Service Packages */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center" data-testid="service-packages-title">
            Hizmet Paketleri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Temel Paket",
                price: "₺5,999",
                description: "Başvuru sürecinde temel destek",
                features: ["Üniversite seçimi", "Başvuru hazırlığı", "E-mail desteği", "3 aylık takip"]
              },
              {
                name: "Kapsamlı Paket", 
                price: "₺9,999",
                description: "Tam destek ve danışmanlık",
                features: ["Tüm temel hizmetler", "Vize danışmanlığı", "Telefon desteği", "6 aylık takip", "Yerleşim desteği"],
                popular: true
              },
              {
                name: "Premium Paket",
                price: "₺14,999", 
                description: "VIP hizmet ve kişisel mentor",
                features: ["Tüm hizmetler", "Kişisel mentor", "7/24 destek", "12 aylık takip", "Kariyer danışmanlığı", "Aile desteği"]
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative bg-card p-8 rounded-xl border ${pkg.popular ? 'border-primary ring-2 ring-primary/20' : 'border-border'}`} data-testid={`service-package-${index}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      En Popüler
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2" data-testid={`package-name-${index}`}>{pkg.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-2" data-testid={`package-price-${index}`}>{pkg.price}</div>
                  <p className="text-muted-foreground mb-6" data-testid={`package-description-${index}`}>{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm" data-testid={`package-feature-${index}-${featureIndex}`}>
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${pkg.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-muted text-foreground hover:bg-muted/80'}`} data-testid={`package-button-${index}`}>
                  Paketi Seç
                </button>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

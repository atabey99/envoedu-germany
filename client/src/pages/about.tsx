import { Award, Shield, Clock, Globe, Users, Target, Heart, Star } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";

const teamMembers = [
  {
    name: "Dr. Mehmet Yılmaz",
    title: "Kurucu & Baş Danışman",
    education: "Technical University of Munich - Doktora",
    experience: "15+ yıl Almanya eğitim danışmanlığı",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    name: "Ayşe Kaya",
    title: "Eğitim Danışmanı",
    education: "Heidelberg Üniversitesi - Yüksek Lisans",
    experience: "8+ yıl öğrenci rehberliği",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    name: "Can Özdemir",
    title: "Vize Uzmanı",
    education: "Humboldt Üniversitesi - Lisans",
    experience: "6+ yıl vize danışmanlığı",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    name: "Zehra Aktaş",
    title: "Dil Eğitmeni",
    education: "Goethe Institut - Almanca Öğretmenliği",
    experience: "10+ yıl Almanca eğitimi",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Navbar />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6" data-testid="about-page-title">
              Hakkımızda
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" data-testid="about-page-description">
              2014'ten beri Türk öğrencilerin Almanya'da eğitim hayallerini gerçekleştirmelerine 
              yardımcı oluyoruz. Deneyimli kadromuz ve güvenilir hizmetimizle binlerce öğrenciye ulaştık.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div className="space-y-8">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="about-mission-title">Misyonumuz</h2>
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-mission-description">
                  Türk öğrencilerin Almanya'da kaliteli eğitim alabilmeleri için kapsamlı, güvenilir ve 
                  kişiselleştirilmiş danışmanlık hizmetleri sunarak onların akademik ve kişisel gelişimlerine 
                  katkıda bulunmak.
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="about-vision-title">Vizyonumuz</h2>
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-vision-description">
                  Türkiye'nin en güvenilir ve başarılı Almanya eğitim danışmanlığı olmak. Her yıl daha fazla 
                  öğrencinin hayallerine kavuşmasına yardımcı ederek Türk-Alman eğitim köprüsünü güçlendirmek.
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="About us" 
                className="rounded-xl shadow-lg w-full h-auto" 
                data-testid="about-image"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border" data-testid="about-stats">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Başarılı Öğrenci</div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center" data-testid="why-choose-us-title">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Uzman Kadro",
                  description: "Almanya'da eğitim almış deneyimli danışmanlarımız",
                  color: "primary"
                },
                {
                  icon: Shield,
                  title: "Güvenilir Hizmet",
                  description: "Şeffaf süreç ve %98 başarı oranı garantisi",
                  color: "accent"
                },
                {
                  icon: Clock,
                  title: "7/24 Destek",
                  description: "Süreç boyunca kesintisiz destek ve takip",
                  color: "secondary"
                },
                {
                  icon: Globe,
                  title: "Geniş Ağ",
                  description: "50+ partner üniversite ve güçlü mezun ağı",
                  color: "primary"
                }
              ].map((feature, index) => (
                <div key={index} className="text-center space-y-4" data-testid={`feature-${index}`}>
                  <div className={`mx-auto w-16 h-16 bg-${feature.color}/10 rounded-xl flex items-center justify-center`}>
                    <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground" data-testid={`feature-title-${index}`}>{feature.title}</h3>
                  <p className="text-muted-foreground" data-testid={`feature-description-${index}`}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Story */}
          <div className="bg-muted rounded-2xl p-8 md:p-12 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="our-story-title">
                  Hikayemiz
                </h2>
                <div className="space-y-6 text-muted-foreground">
                  <p data-testid="story-paragraph-1">
                    EduConsult Germany, 2014 yılında Dr. Mehmet Yılmaz tarafından kuruldu. 
                    Kendisi de Almanya'da eğitim almış biri olarak, Türk öğrencilerin yaşadığı 
                    zorlukları çok iyi biliyordu.
                  </p>
                  <p data-testid="story-paragraph-2">
                    İlk yıllarda sadece birkaç öğrenciye hizmet verirken, şimdi yılda yüzlerce 
                    öğrencinin Almanya'daki üniversitelere yerleşmesine yardımcı oluyoruz.
                  </p>
                  <p data-testid="story-paragraph-3">
                    Bugün 15 kişilik uzman ekibimizle, başvuru sürecinden mezuniyete kadar 
                    her aşamada öğrencilerimizin yanındayız.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { year: "2014", title: "Kuruluş", desc: "İlk adım atıldı" },
                  { year: "2017", title: "Büyüme", desc: "Ekip genişletildi" },
                  { year: "2020", title: "Dijitalleşme", desc: "Online hizmetler" },
                  { year: "2024", title: "500+ Öğrenci", desc: "Başarı hikayeleri" }
                ].map((milestone, index) => (
                  <div key={index} className="bg-card p-4 rounded-lg text-center" data-testid={`milestone-${index}`}>
                    <div className="text-2xl font-bold text-primary mb-2" data-testid={`milestone-year-${index}`}>{milestone.year}</div>
                    <div className="font-semibold text-foreground mb-1" data-testid={`milestone-title-${index}`}>{milestone.title}</div>
                    <div className="text-sm text-muted-foreground" data-testid={`milestone-description-${index}`}>{milestone.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center" data-testid="team-title">
              Ekibimiz
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center space-y-4" data-testid={`team-member-${index}`}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                    data-testid={`team-member-image-${index}`}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground" data-testid={`team-member-name-${index}`}>{member.name}</h3>
                    <p className="text-primary font-medium" data-testid={`team-member-title-${index}`}>{member.title}</p>
                    <p className="text-sm text-muted-foreground" data-testid={`team-member-education-${index}`}>{member.education}</p>
                    <p className="text-sm text-muted-foreground" data-testid={`team-member-experience-${index}`}>{member.experience}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center" data-testid="values-title">
              Değerlerimiz
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Öğrenci Odaklılık",
                  description: "Her öğrencimizin benzersiz hikayesini anlar, kişiselleştirilmiş çözümler sunarız."
                },
                {
                  icon: Shield,
                  title: "Güvenilirlik",
                  description: "Şeffaf süreçler, dürüst iletişim ve tutarlı hizmet kalitesi ile güven inşa ederiz."
                },
                {
                  icon: Users,
                  title: "Ekip Çalışması",
                  description: "Deneyimli ekibimizle birlikte hareket ederek en iyi sonuçları elde ederiz."
                }
              ].map((value, index) => (
                <div key={index} className="text-center space-y-4" data-testid={`value-${index}`}>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground" data-testid={`value-title-${index}`}>{value.title}</h3>
                  <p className="text-muted-foreground" data-testid={`value-description-${index}`}>{value.description}</p>
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
import { useParams } from "wouter";
import { MapPin, Star, Globe, Calendar, BookOpen, Users, Award, Clock } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";

const universities = [
  {
    id: 0,
    name: "Technical University of Munich",
    city: "München",
    description: "Almanya'nın en iyi teknik üniversitelerinden biri",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    programs: ["Mühendislik", "Fen Bilimleri", "Bilgisayar Bilimleri"],
    ranking: 5,
    worldRanking: 54,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1868,
    students: 45000,
    internationalStudents: 12000,
    faculties: ["Mühendislik", "Doğa Bilimleri", "Matematik", "Bilgisayar Bilimleri", "Mimarlık"],
    admissionRequirements: [
      "Lise diploması veya dengi belge",
      "Almanca dil yeterlik belgesi (C1 seviye)",
      "İngilizce programlar için IELTS 6.5 veya TOEFL 90",
      "YÖS sınavı veya SAT",
      "Motivasyon mektubu"
    ],
    campusFacilities: [
      "Modern laboratuvarlar",
      "Büyük kütüphane kompleksi", 
      "Spor merkezleri",
      "Öğrenci yurtları",
      "Araştırma merkezleri",
      "Kafeterya ve restoranlar"
    ],
    scholarships: [
      "DAAD bursları",
      "Erasmus+ programı",
      "Üniversite içi başarı bursları",
      "Araştırma asistanlığı bursları"
    ]
  },
  {
    id: 1,
    name: "Heidelberg Üniversitesi",
    city: "Heidelberg", 
    description: "Almanya'nın en eski ve prestijli üniversitesi",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    programs: ["Tıp", "Hukuk", "Felsefe"],
    ranking: 5,
    worldRanking: 64,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1386,
    students: 30000,
    internationalStudents: 8000,
    faculties: ["Tıp", "Hukuk", "Felsefe", "Biyoloji", "Matematik", "Fizik"],
    admissionRequirements: [
      "Lise diploması veya dengi belge",
      "Almanca dil yeterlik belgesi (C1 seviye)",
      "Tıp için Numerus Clausus sınavı",
      "Hukuk için özel giriş sınavı",
      "Motivasyon mektubu ve CV"
    ],
    campusFacilities: [
      "Tarihi binalar",
      "Dünya çapında kütüphane",
      "Tıp fakültesi hastanesi",
      "Öğrenci yaşam merkezleri",
      "Botanik bahçesi",
      "Müze ve galerier"
    ],
    scholarships: [
      "Deutschland Stipendium",
      "DAAD bursları",
      "Baden-Württemberg bursları",
      "Doktora araştırma bursları"
    ]
  },
  {
    id: 2,
    name: "Humboldt Üniversitesi",
    city: "Berlin",
    description: "Berlin'in kalbi Unter den Linden'da",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    programs: ["İşletme", "Sosyoloji", "Tarih"],
    ranking: 4,
    worldRanking: 127,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1810,
    students: 35000,
    internationalStudents: 10000,
    faculties: ["İşletme", "Sosyal Bilimler", "Tarih", "Edebiyat", "Ekonomi", "Psikoloji"],
    admissionRequirements: [
      "Lise diploması veya dengi belge",
      "Almanca dil yeterlik belgesi (B2-C1 seviye)",
      "İşletme için GMAT veya GRE",
      "Akademik referans mektupları",
      "Kişisel beyan"
    ],
    campusFacilities: [
      "Merkezi kampüs",
      "Jacob-und-Wilhelm-Grimm-Zentrum kütüphanesi",
      "Öğrenci merkezleri",
      "Sanat galerisi",
      "Konferans salonları",
      "Cafe ve öğrenci alanları"
    ],
    scholarships: [
      "Humboldt bursları",
      "DAAD programları",
      "Berlin eyalet bursları",
      "Sosyal bilimler araştırma bursları"
    ]
  },
  {
    id: 3,
    name: "Max Planck Institute",
    city: "Göttingen",
    description: "Dünya çapında araştırma merkezi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    programs: ["Fizik", "Kimya", "Biyoloji"],
    ranking: 5,
    worldRanking: 35,
    tuition: "Araştırma Enstitüsü",
    language: ["İngilizce", "Almanca"],
    founded: 1911,
    students: 5000,
    internationalStudents: 3500,
    faculties: ["Fizik", "Kimya", "Biyoloji", "Matematik", "Araştırma Enstitüleri"],
    admissionRequirements: [
      "Lisans diploması (doktora için)",
      "İngilizce dil yeterlik belgesi (C1 seviye)",
      "Güçlü akademik geçmiş",
      "Araştırma önerisi",
      "Professör desteği"
    ],
    campusFacilities: [
      "En gelişmiş araştırma laboratuvarları",
      "Bilimsel kütüphaneler",
      "Konferans merkezleri",
      "Doktora öğrenci merkezleri",
      "Uluslararası misafirhane",
      "Gelişmiş teknoloji merkezleri"
    ],
    scholarships: [
      "Max Planck doktora bursları",
      "Uluslararası araştırma bursları",
      "IMPRS programları",
      "Post-doktora fellowships"
    ]
  },
  {
    id: 4,
    name: "RWTH Aachen",
    city: "Aachen",
    description: "Almanya'nın en büyük teknik üniversitesi",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    programs: ["Mühendislik", "Makine", "Elektrik"],
    ranking: 5,
    worldRanking: 145,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1870,
    students: 47000,
    internationalStudents: 15000,
    faculties: ["Makine Mühendisliği", "Elektrik Mühendisliği", "Bilgisayar Mühendisliği", "İnşaat Mühendisliği", "Kimya Mühendisliği"],
    admissionRequirements: [
      "Lise diploması veya dengi belge",
      "Almanca dil yeterlik belgesi (C1 seviye)",
      "Matematik ve Fen bilimleri ağırlıklı not ortalaması",
      "Mühendislik ön bilgi sınavı",
      "Motivasyon mektubu"
    ],
    campusFacilities: [
      "Endüstri ile entegre laboratuvarlar",
      "Teknik kütüphane",
      "Öğrenci proje merkezleri",
      "Startup incubator",
      "Spor kompleksleri",
      "Modern yurtlar"
    ],
    scholarships: [
      "RWTH mükemmellik bursları",
      "Mühendislik özel bursları",
      "Endüstri sponsorlu bursları",
      "DAAD teknik programları"
    ]
  },
  {
    id: 5,
    name: "Freie Universität Berlin",
    city: "Berlin",
    description: "Berlin'in liberal ve uluslararası üniversitesi",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    programs: ["Siyaset Bilimi", "Edebiyat", "Psikoloji"],
    ranking: 4,
    worldRanking: 138,
    tuition: "Devlet Üniversitesi - Ücretsiz", 
    language: ["Almanca", "İngilizce"],
    founded: 1948,
    students: 38000,
    internationalStudents: 11000,
    faculties: ["Siyaset Bilimi", "Edebiyat", "Psikoloji", "Sosyoloji", "Tarih", "Felsefe"],
    admissionRequirements: [
      "Lise diploması veya dengi belge",
      "Almanca dil yeterlik belgesi (B2-C1 seviye)",
      "Siyaset bilimi için özel sınav",
      "Psikoloji için Numerus Clausus",
      "Portfolyo (edebiyat için)"
    ],
    campusFacilities: [
      "Modern kampüs Dahlem'de",
      "Kapsamlı kütüphane sistemi",
      "Öğrenci yaşam merkezleri",
      "Sanat ve kültür merkezleri",
      "Uluslararası ofis",
      "Sosyal alanlar ve kafeler"
    ],
    scholarships: [
      "FU Berlin bursları",
      "Sosyal bilimler bursları",
      "Uluslararası öğrenci desteği",
      "Berlin akademik bursları"
    ]
  }
];

export default function UniversityDetail() {
  const params = useParams();
  const universityId = parseInt(params.id || "0");
  const university = universities.find(uni => uni.id === universityId);

  if (!university) {
    return (
      <div className="min-h-screen bg-background pt-16">
        <Navbar />
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Üniversite Bulunamadı</h1>
          <p className="text-muted-foreground">Aranan üniversite bulunamadı.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-16">
      <Navbar />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(university.ranking)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-accent fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({university.ranking}/5)</span>
                  </div>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Dünya Sıralaması #{university.worldRanking}
                  </div>
                </div>
                
                <h1 className="text-5xl font-bold text-foreground mb-4" data-testid="university-detail-title">
                  {university.name}
                </h1>
                
                <div className="flex items-center text-muted-foreground text-lg">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{university.city}, Almanya</span>
                </div>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {university.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {university.programs.map((program, index) => (
                    <span 
                      key={index} 
                      className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {program}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={university.image} 
                  alt={`${university.name} kampüsü`} 
                  className="w-full h-96 object-cover rounded-xl shadow-lg" 
                />
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-card p-6 rounded-xl border border-border text-center">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">{university.founded}</div>
              <div className="text-sm text-muted-foreground">Kuruluş Yılı</div>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border text-center">
              <Users className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">{university.students.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Toplam Öğrenci</div>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border text-center">
              <Globe className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">{university.internationalStudents.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Uluslararası Öğrenci</div>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border text-center">
              <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">{university.faculties.length}</div>
              <div className="text-sm text-muted-foreground">Fakülte Sayısı</div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Faculties */}
              <div className="bg-card p-8 rounded-xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <BookOpen className="w-6 h-6 mr-3 text-primary" />
                  Fakülteler
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {university.faculties.map((faculty, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{faculty}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Admission Requirements */}
              <div className="bg-card p-8 rounded-xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-accent" />
                  Başvuru Şartları
                </h2>
                <div className="space-y-3">
                  {university.admissionRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Campus Facilities */}
              <div className="bg-card p-8 rounded-xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-secondary" />
                  Kampüs Olanakları
                </h2>
                <div className="space-y-3">
                  {university.campusFacilities.map((facility, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scholarships */}
              <div className="bg-card p-8 rounded-xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-primary" />
                  Burs İmkanları
                </h2>
                <div className="space-y-3">
                  {university.scholarships.map((scholarship, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{scholarship}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-primary/5 p-8 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">Hızlı Bilgiler</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Eğitim Dili:</span>
                    <span className="text-foreground font-medium">{university.language.join(", ")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ücret:</span>
                    <span className="text-foreground font-medium">{university.tuition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Öğrenci Sayısı:</span>
                    <span className="text-foreground font-medium">{university.students.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl border border-border">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {university.name} hakkında daha fazla bilgi almak ister misiniz?
              </h3>
              <p className="text-muted-foreground mb-6">
                Uzman danışmanlarımızla ücretsiz görüşme ayarlayın
              </p>
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Danışmanlık Randevusu Al
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
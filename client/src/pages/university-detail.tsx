import { useParams } from "wouter";
import { useEffect } from "react";
import { MapPin, Star, Globe, Calendar, BookOpen, Users, Award, Clock } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";

const universities = [
  {
    id: 0,
    name: "Technical University of Munich",
    city: "München",
    description: "Almanya'nın en iyi teknik üniversitelerinden biri",
    programs: ["Mühendislik", "Fen Bilimleri", "Bilgisayar Bilimleri"],
    ranking: 5,
    worldRanking: 54,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1868,
    students: 45000,
    internationalStudents: 12000,
    coordinates: "48.1496,11.5678",
    address: "Arcisstraße 21, 80333 München, Germany",
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
    programs: ["Tıp", "Hukuk", "Felsefe"],
    ranking: 5,
    worldRanking: 64,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1386,
    students: 30000,
    internationalStudents: 8000,
    coordinates: "49.4093,8.7073",
    address: "Grabengasse 1, 69117 Heidelberg, Germany",
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
    programs: ["İşletme", "Sosyoloji", "Tarih"],
    ranking: 4,
    worldRanking: 127,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1810,
    students: 35000,
    internationalStudents: 10000,
    coordinates: "52.5200,13.4050",
    address: "Unter den Linden 6, 10117 Berlin, Germany",
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
    programs: ["Fizik", "Kimya", "Biyoloji"],
    ranking: 5,
    worldRanking: 35,
    tuition: "Araştırma Enstitüsü",
    language: ["İngilizce", "Almanca"],
    founded: 1911,
    students: 5000,
    internationalStudents: 3500,
    coordinates: "51.5330,9.9358",
    address: "Bunsenstraße 10, 37073 Göttingen, Germany",
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
    programs: ["Mühendislik", "Makine", "Elektrik"],
    ranking: 5,
    worldRanking: 145,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1870,
    students: 47000,
    internationalStudents: 15000,
    coordinates: "50.7753,6.0839",
    address: "Templergraben 55, 52062 Aachen, Germany",
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
    programs: ["Siyaset Bilimi", "Edebiyat", "Psikoloji"],
    ranking: 4,
    worldRanking: 138,
    tuition: "Devlet Üniversitesi - Ücretsiz", 
    language: ["Almanca", "İngilizce"],
    founded: 1948,
    students: 38000,
    internationalStudents: 11000,
    coordinates: "52.4537,13.2900",
    address: "Kaiserswerther Str. 16-18, 14195 Berlin, Germany",
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
  },
  {
    id: 6,
    name: "University of Erfurt",
    city: "Erfurt",
    description: "Liberal sanatlar ve sosyal bilimler odaklı reform üniversitesi",
    programs: ["Sosyal Bilimler", "Eğitim", "Hukuk", "Felsefe"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1379,
    students: 6000,
    internationalStudents: 500,
    coordinates: "50.9877,11.0065",
    address: "Nordhäuser Straße 63, 99089 Erfurt, Germany",
    faculties: ["Felsefe", "Eğitim Bilimleri", "Ekonomi/Hukuk/Sosyal Bilimler", "Katolik İlahiyat", "Max Weber Merkezi"],
    admissionRequirements: [
      "Lise diploması veya Abitur eşdeğeri",
      "Almanca dil yeterlik belgesi (DSH-2 veya TestDaF 4x4)",
      "İngilizce programlar için IELTS 6.0+ veya TOEFL",
      "Bazı programlar için özel yetenek sınavı",
      "Motivasyon mektubu ve CV",
      "Akademik referans mektupları"
    ],
    campusFacilities: [
      "Modern kampüs kompleksi",
      "Erfurt Üniversite Kütüphanesi",
      "Audimax ana konferans salonu",
      "Spor salonu ve beach volley sahası",
      "Öğrenci yaşam merkezleri",
      "Kampüs eğitim bahçesi",
      "Villa Martin (İlahiyat binası)",
      "Gotha Araştırma Merkezi",
      "Kafeler ve sosyal alanlar"
    ],
    scholarships: [
      "DAAD bursları",
      "Deutschland Stipendium",
      "PROMOS programı",
      "Thüringen eyalet bursları",
      "Erasmus+ değişim programları",
      "Araştırma asistanlığı bursları",
      "Uluslararası öğrenci destekleri"
    ]
  },
  {
    id: 7,
    name: "University of the Arts Berlin (UdK)",
    city: "Berlin",
    description: "Avrupa'nın en büyük ve en eski sanat üniversitelerinden biri",
    programs: ["Güzel Sanatlar", "Müzik", "Tasarım", "Sahne Sanatları"],
    ranking: 1,
    worldRanking: 42,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"],
    founded: 1696,
    students: 4000,
    internationalStudents: 1400,
    coordinates: "52.5057,13.3233",
    address: "Einsteinufer 43, 10587 Berlin, Germany",
    faculties: ["Güzel Sanatlar", "Mimarlık/Medya/Tasarım", "Müzik", "Sahne Sanatları"],
    admissionRequirements: [
      "Sanatsal kabul sınavı (not ortalaması önemsiz)",
      "Portfolio veya işitme kasetleri",
      "Almanca dil yeterlik belgesi (DSH/TestDaF)",
      "Alana özel yetenekler",
      "Yaratıcı portföy sunumu"
    ],
    campusFacilities: [
      "Charlottenburg'da ana kampüs",
      "En son teknoloji stüdyoları",
      "Konser salonları ve sergi alanları",
      "UNI.T tiyatrosu",
      "Ses-görüntü laboratuvarları",
      "600+ yıllık etkinlik merkezi",
      "Volkswagen-Bibliothek kütüphanesi"
    ],
    scholarships: [
      "Carolo-Wilhelmina bursları",
      "Deutschlandstipendium",
      "DAAD sanat bursları",
      "Berlin eyalet sanat destekleri",
      "Uluslararası öğrenci bursları"
    ]
  },
  {
    id: 8,
    name: "Bielefeld University",
    city: "Bielefeld",
    description: "Disiplinlerarası araştırma ve yenilikçi eğitim metodları ile tanınan reform üniversitesi",
    programs: ["Sosyal Bilimler", "Eğitim", "Doğa Bilimleri", "İşletme"],
    ranking: 3,
    worldRanking: 301,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1969,
    students: 25000,
    internationalStudents: 1969,
    coordinates: "52.0378,8.4930",
    address: "Universitätsstraße 25, 33615 Bielefeld, Germany",
    faculties: ["Dilbilim/Edebiyat", "Tarih/Felsefe/İlahiyat", "Sosyoloji", "Psikoloji/Spor", "Eğitim", "Hukuk", "İşletme/Ekonomi", "Matematik", "Fizik", "Kimya", "Biyoloji", "Teknoloji", "Halk Sağlığı"],
    admissionRequirements: [
      "Lise diploması veya dengi belge",
      "Almanca dil yeterlik belgesi (C1 seviye)",
      "Bazı programlar için Numerus Clausus",
      "İngilizce programlar için IELTS/TOEFL",
      "Motivasyon mektubu"
    ],
    campusFacilities: [
      "Tek bina kampüs konsepti (Avrupa'nın en büyük yapılarından)",
      "2.2 milyon ciltlik kütüphane",
      "Moderne laboratuvarlar",
      "Cognitive Interaction Technology Merkezi",
      "Laborschule deneysel okulu",
      "Kafeterya ve öğrenci hizmetleri"
    ],
    scholarships: [
      "Deutschlandstipendium",
      "DAAD bursları",
      "NRW eyalet bursları",
      "Araştırma bursları",
      "İlk nesil üniversite öğrencisi bursları"
    ]
  },
  {
    id: 9,
    name: "Ruhr University Bochum",
    city: "Bochum",
    description: "Almanya'nın ilk yeni tip üniversitelerinden, güçlü araştırma geleneği",
    programs: ["Mühendislik", "Doğa Bilimleri", "Tıp", "Sosyal Bilimler"],
    ranking: 2,
    worldRanking: 201,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1962,
    students: 42718,
    internationalStudents: 6512,
    coordinates: "51.4451,7.2617",
    address: "Universitätsstraße 150, 44801 Bochum, Germany",
    faculties: ["Matematik", "Fizik/Astronomi", "Kimya/Biyokimya", "Biyoloji/Biotekno", "Jeowissenschaften", "Makine", "Elektrik", "İnşaat", "Informatik", "Tıp", "Sportwiss", "Psikoloji", "Felsefe", "Tarih", "Arkeoloji", "Edebiyat", "Dilbilim", "Sosyal Bilim", "Hukuk", "İşletme", "Sosyoloji"],
    admissionRequirements: [
      "Lise diploması veya Abitur",
      "Almanca dil yeterlik belgesi (C1 seviye)",
      "İngilizce programlar için IELTS 6.5+",
      "Tıp için Numerus Clausus",
      "Program bazlı özel şartlar"
    ],
    campusFacilities: [
      "Merkezileştirilmiş kampüs tasarımı",
      "14 identik gökdelen binası",
      "Dünya standartlarında araştırma laboratuvarları",
      "Merkezi kütüphane",
      "50+ spor tesisi",
      "WORLDFACTORY start-up merkezi",
      "Üniversite hastanesi"
    ],
    scholarships: [
      "Deutschlandstipendium (€300/ay)",
      "RUB mükemmellik bursları",
      "DAAD araştırma bursları",
      "NRW eyalet bursları",
      "Endüstri sponsorlu bursları"
    ]
  },
  {
    id: 10,
    name: "University of Bonn",
    city: "Bonn",
    description: "1818'de kurulan, Nobel ödüllü mezunlarıyla ünlü excellence üniversitesi",
    programs: ["Sosyal Bilimler", "Doğa Bilimleri", "Hukuk", "Matematik"],
    ranking: 1,
    worldRanking: 89,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1818,
    students: 35000,
    internationalStudents: 4000,
    coordinates: "50.7374,7.1003",
    address: "Regina-Pacis-Weg 3, 53113 Bonn, Germany",
    faculties: ["Protestan İlahiyat", "Katolik İlahiyat", "Hukuk/Ekonomi", "Tıp", "Felsefe", "Matematik/Doğa Bilimleri", "Tarım"],
    admissionRequirements: [
      "Lise diploması veya Abitur eşdeğeri",
      "Almanca dil yeterlik belgesi (DSH-2/C1)",
      "İngilizce programlar için TOEFL 72+ veya IELTS 5.5+",
      "Bazı programlar için Numerus Clausus",
      "18 yaş minimum",
      "Program bazlı özel şartlar"
    ],
    campusFacilities: [
      "Barok saray ana binası",
      "Poppelsdorf Sarayı (1715-1753)",
      "250+ bina şehir genelinde",
      "Venusberg kampüsünde üniversite hastanesi",
      "6 Mükemmellik Kümesi",
      "Innovation Campus Bonn",
      "Kapsamlı kütüphane sistemi"
    ],
    scholarships: [
      "Deutschland Stipendium",
      "DAAD bursları",
      "Excellence üniversite bursları",
      "NRW araştırma bursları",
      "Bonn üniversite bursları",
      "Uluslararası doktora bursları"
    ]
  },
  {
    id: 11,
    name: "Brandenburg University of Technology Cottbus-Senftenberg",
    city: "Cottbus",
    description: "Teknoloji ve çevre odaklı genç teknik üniversite",
    programs: ["Mühendislik", "Çevre Teknolojisi", "Bilgisayar", "Mimarlık"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1991,
    students: 7300,
    internationalStudents: 2350,
    coordinates: "51.7606,14.3347",
    address: "Platz der Deutschen Einheit 1, 03046 Cottbus, Germany",
    faculties: ["Matematik/Bilgisayar/Fizik/Elektrik", "Çevre/Doğa Bilimleri", "Makine Mühendisliği", "Mimarlık/İnşaat/Kentplanlama", "İşletme/Hukuk/Sosyal", "Sağlık"],
    admissionRequirements: [
      "Lise diploması veya Abitur",
      "Almanca dil yeterlik belgesi (B2-C1)",
      "17+ İngilizce programlar mevcut",
      "Açık kabul (Numerus Clausus yok)",
      "Uluslararası öğrencilere garanti yurtluk"
    ],
    campusFacilities: [
      "Dual kampüs (Cottbus + Senftenberg)",
      "Modern çevre teknolojisi laboratuvarları",
      "Enerji araştırma merkezleri",
      "Yenilenebilir enerji tesisleri",
      "Öğrenci yaşam alanları",
      "Berlin'e 90 dakika mesafe"
    ],
    scholarships: [
      "DAAD bursları",
      "Brandenburg eyalet bursları",
      "Çevre teknolojisi araştırma bursları",
      "Deutschlandstipendium",
      "Lusatia dönüşüm bursları"
    ]
  },
  {
    id: 12,
    name: "University of Bremen",
    city: "Bremen",
    description: "Yenilikçi ve uluslararası odaklı araştırma üniversitesi",
    programs: ["Mühendislik", "Sosyal Bilimler", "Doğa Bilimleri", "İşletme"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1971,
    students: 20000,
    internationalStudents: 3000,
    coordinates: "53.1067,8.8517",
    address: "Bibliothekstraße 1, 28359 Bremen, Germany",
    faculties: ["Fizik/Elektrik", "Biyoloji/Kimya", "Matematik/Bilgisayar", "Üretim Müh", "Jeoloji", "Hukuk", "İşletme/Ekonomi", "Sosyal Bilimler", "Kültürel Çalışmalar", "Dilbilim/Edebiyat", "İnsan/Sağlık", "Eğitim"],
    admissionRequirements: [
      "Lise diploması veya Abitur",
      "Almanca dil yeterlik belgesi (C1)",
      "İngilizce programlar için C1 seviyesi",
      "Kabul oranı %17 (seçici)",
      "Psikoloji için yetenek sınavı",
      "MBA için 1 yıl iş deneyimi"
    ],
    campusFacilities: [
      "Yeşil teknoloji parkı kampüsü",
      "State and University Library Bremen",
      "5 yüksek profilli araştırma alanı",
      "Max Planck işbirliği",
      "Alfred Wegener Enstitüsü",
      "600+ partner üniversite",
      "Excellence Initiative üyesi"
    ],
    scholarships: [
      "Deutschland Stipendium",
      "DAAD Excellence bursları",
      "Bremen araştırma bursları",
      "Marin bilimler bursları",
      "Doktora araştırma bursları"
    ]
  },
  {
    id: 13,
    name: "Braunschweig University of Technology",
    city: "Braunschweig",
    description: "1745'te kurulan, Almanya'nın en eski teknik üniversitesi",
    programs: ["Mühendislik", "Teknoloji", "Doğa Bilimleri", "Mimarlık"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1745,
    students: 20000,
    internationalStudents: 3200,
    coordinates: "52.2742,10.5249",
    address: "Universitätsplatz 2, 38106 Braunschweig, Germany",
    faculties: ["Carl Friedrich (Matematik/Bilgisayar/İşletme)", "Yaşam Bilimleri", "Makine Mühendisliği", "Mimarlık/İnşaat/Çevre", "Beşeri/Eğitim", "Elektrik/Bilişim/Fizik"],
    admissionRequirements: [
      "Lise diploması veya Abitur",
      "Almanca dil yeterlik belgesi (C1)",
      "Kabul oranı %51",
      "75+ derece programı",
      "TU9 üyesi prestij",
      "15 Haziran başvuru tarihi"
    ],
    campusFacilities: [
      "Şehir merkezinde 200+ bina",
      "4 kampüs alanı",
      "TU9 birliği üyesi",
      "DLR, Helmholtz ortaklığı",
      "Fraunhofer enstitüleri",
      "Ücretsiz ulaşım",
      "90+ öğrenci derneği"
    ],
    scholarships: [
      "Carolo-Wilhelmina Scholarships",
      "Deutschlandstipendium (€300/ay)",
      "İlk nesil üniversite bursları",
      "DAAD araştırma bursları",
      "Fulbright programları"
    ]
  },
  {
    id: 14,
    name: "Chemnitz University of Technology",
    city: "Chemnitz",
    description: "1836'da kurulan, güçlü endüstri bağlantıları olan teknik üniversite",
    programs: ["Mühendislik", "Bilgisayar", "İşletme", "Doğa Bilimleri"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1836,
    students: 11400,
    internationalStudents: 3000,
    coordinates: "50.8136,12.9251",
    address: "Straße der Nationen 62, 09111 Chemnitz, Germany",
    faculties: ["Matematik", "Bilgisayar", "Makine Mühendisliği", "Elektrik/Bilişim", "Ekonomi/İşletme", "Doğa Bilimleri", "Beşeri Bilimler", "Davranış/Sosyal Bilimler"],
    admissionRequirements: [
      "Lise diploması veya Abitur",
      "Almanca dil yeterlik belgesi (C1)",
      "Kabul oranı %71",
      "15 uzaktan eğitim programı",
      "Kış/Yaz dönem başvuruları",
      "110+ partner şirket"
    ],
    campusFacilities: [
      "Çoklu kampüs yapısı",
      "MERGE Excellence Cluster",
      "MAIN Nanomembran Merkezi",
      "Smart Systems Campus",
      "TUClab Start-up ağı",
      "200+ spin-off şirketi",
      "SAXEED girişimci ağı"
    ],
    scholarships: [
      "Deutschlandstipendium",
      "DAAD teknoloji bursları",
      "Saksonya eyalet bursları",
      "COOL SILICON bursları",
      "Endüstri işbirliği bursları"
    ]
  },
  {
    id: 15,
    name: "Clausthal University of Technology",
    city: "Clausthal-Zellerfeld",
    description: "1775'te kurulan, dünyanın en eski madencilik bilim üniversitesi",
    programs: ["Maden Mühendisliği", "Metalurji", "Malzeme Bilimi", "Kimya Mühendisliği"],
    ranking: 4,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1775,
    students: 3500,
    internationalStudents: 1050,
    coordinates: "51.8067,10.3333",
    address: "Adolph-Roemer-Straße 2A, 38678 Clausthal-Zellerfeld, Germany",
    faculties: ["Enerji/Ham Maddeler", "Doğa Bilimleri/Malzeme", "Ekonomi/Matematik/Bilgisayar/Makine"],
    admissionRequirements: [
      "Lise diploması veya Abitur",
      "Kabul oranı %50 (açık kabul)",
      "Almanca programlar için DSH-2/TestDaF",
      "İngilizce programlar için IELTS/TOEFL",
      "Minimum not şartı yok",
      "75€ başvuru ücreti"
    ],
    campusFacilities: [
      "Kompakt kampüs tasarımı",
      "Harz Dağları'nda doğal manzara",
      "Energy Research Center Goslar",
      "Drilling Simulator Celle",
      "60+ spor aktivitesi merkezi",
      "Modern laboratuvarlar",
      "Merkezi kütüphane"
    ],
    scholarships: [
      "Almanya bursu programı (%8 öğrenci)",
      "DAAD uluslararası bursları",
      "Tarihi vakıf bursları",
      "İş-çalışma fırsatları",
      "Çin öğrenci özel programları"
    ]
  },
  {
    id: 16,
    name: "University of Cologne",
    city: "Köln",
    description: "1388'de kurulan, Almanya'nın en eski üniversitelerinden biri",
    programs: ["Hukuk", "İşletme", "Sosyal Bilimler", "Tıp"],
    ranking: 1,
    worldRanking: 157,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1388,
    students: 52204,
    internationalStudents: 5074,
    coordinates: "50.9289,6.9283",
    address: "Albertus-Magnus-Platz, 50923 Köln, Germany",
    faculties: ["İşletme/Ekonomi/Sosyal", "Tıp", "Hukuk", "Beşeri Bilimler", "Matematik/Doğa", "İnsan Bilimleri"],
    admissionRequirements: [
      "Üniversite giriş yeterliliği belgesi",
      "Almanca dil yeterlik belgesi (DSH-2)",
      "Kabul oranı %20 (çok seçici)",
      "İngilizce programlar için IELTS 5.5-7.0",
      "Uni-Assist değerlendirme süreci",
      "Başvuru ücreti yok"
    ],
    campusFacilities: [
      "Köln şehir merkezinde kampüs",
      "5.4 milyon ciltlik kütüphane sistemi",
      "5 Mükemmellik Kümesi",
      "Excellence Initiative üyesi",
      "300+ üniversite ortaklığı",
      "100+ öğrenci organizasyonu",
      "Üniversite hastanesi"
    ],
    scholarships: [
      "€300/ay üniversite bursları",
      "DAAD bursları",
      "Cologne Üniversite Vakfı",
      "Performans odaklı ödüller",
      "Engellilik destekleri"
    ]
  },
  {
    id: 17,
    name: "Technical University of Darmstadt",
    city: "Darmstadt",
    description: "1877'de kurulan, Avrupa'nın ilk otonom üniversitesi",
    programs: ["Mühendislik", "Bilgisayar", "Fizik", "Mimarlık"],
    ranking: 3,
    worldRanking: 253,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1877,
    students: 25000,
    internationalStudents: 4500,
    coordinates: "49.8728,8.6512",
    address: "Karolinenplatz 5, 64289 Darmstadt, Germany",
    faculties: ["Mimarlık", "Biyoloji", "Kimya", "İnşaat/Çevre", "Bilgisayar", "Elektrik", "Tarih/Sosyal", "İnsan Bilimleri", "Hukuk/Ekonomi", "Malzeme/Yer", "Matematik", "Makine", "Fizik"],
    admissionRequirements: [
      "Almanca Abitur veya dengi",
      "Kabul oranı %29 (orta seçici)",
      "İngilizce programlar için IELTS 7.0+",
      "Online TUCaN sistemi başvurusu",
      "APS sertifikası (bazı ülkeler)",
      "Studienkolleg hazırlık kursları"
    ],
    campusFacilities: [
      "5 kampüs lokasyonu",
      "164 bina 600 acre alanda",
      "August-Euler Airfield",
      "Dünyanın ilk elektrik mühendisliği fakültesi",
      "UNITE! Avrupa Üniversitesi ağı",
      "Excellence Cluster",
      "Modern araştırma merkezleri"
    ],
    scholarships: [
      "DAAD bursları",
      "Hükümet destekli programlar",
      "Özel vakıf bursları",
      "Kayıt ücreti €220/dönem",
      "Yaşam maliyeti €9,000-13,000/yıl"
    ]
  },
  {
    id: 18,
    name: "TU Dortmund University",
    city: "Dortmund",
    description: "1968'de kurulan genç ve dinamik teknik üniversite",
    programs: ["Mühendislik", "Doğa Bilimleri", "Sosyal Bilimler", "Öğretmenlik"],
    ranking: 3,
    worldRanking: 673,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1968,
    students: 34600,
    internationalStudents: 3806,
    coordinates: "51.4928,7.4125",
    address: "August-Schmidt-Straße 4, 44227 Dortmund, Germany",
    faculties: ["Matematik", "Fizik", "Informatik", "Elektrik", "Makine", "İnşaat", "Biyomedikal", "Kimya", "Eğitim", "Rehabilitasyon", "Sosyal", "Kültürel", "Spor", "Psikoloji", "Felsefe/Teoloji", "Sanat/Spor"],
    admissionRequirements: [
      "My Assist online portal başvurusu",
      "Kabul oranı %59",
      "GRE önerilir (zorunlu değil)",
      "Numerus Clausus rekabetçi programlarda",
      "Almanca dil yeterlik belgesi",
      "Sosyal katkı ücreti ~€350/dönem"
    ],
    campusFacilities: [
      "Kuzey ve Güney kampüsü",
      "H-Bahn otomatik monoray sistemi",
      "735 koltuklu ana auditorium",
      "Merkezi kütüphane",
      "Teknoloji transfer merkezi",
      "Çok sayıda kafeterya",
      "Öğrenci yurdu imkanları"
    ],
    scholarships: [
      "DAAD bursları",
      "Deutschlandstipendium",
      "Erasmus+ programları",
      "NRW eyalet bursları",
      "Araştırma asistanlığı bursları"
    ]
  },
  {
    id: 19,
    name: "TU Dresden",
    city: "Dresden",
    description: "1828'de kurulan Excellence University",
    programs: ["Mühendislik", "Doğa Bilimleri", "Tıp", "Sosyal Bilimler"],
    ranking: 1,
    worldRanking: 218,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1828,
    students: 32000,
    internationalStudents: 6400,
    coordinates: "51.0269,13.7275",
    address: "01069 Dresden, Germany",
    faculties: ["Matematik", "Fizik", "Kimya", "Biyoloji", "Psikoloji", "Hukuk", "Ekonomi", "Eğitim", "Makine", "Elektrik", "Bilgisayar", "İnşaat", "Çevre", "Ulaştırma", "Mimarlık", "Tıp", "Orman"],
    admissionRequirements: [
      "Lise diploması veya dengi",
      "Kabul oranı %46",
      "Almanca programlar için TestDaF/DSH",
      "İngilizce programlar için TOEFL 80+/IELTS 6.0+",
      "Başvuru ücreti €75",
      "Uni-assist değerlendirme"
    ],
    campusFacilities: [
      "5 okul altında 17 fakülte",
      "SLUB - 90+ milyon kaynaklı kütüphane",
      "Clusters of Excellence",
      "TU9 üyesi",
      "5 botanik bahçesi",
      "Üniversite hastanesi",
      "4,000 sanat eseri koleksiyonu"
    ],
    scholarships: [
      "DAAD bursları (€934/ay)",
      "Deutschlandstipendium (€300/ay)",
      "Heinrich Böll Scholarship",
      "Erasmus+ hareketlilik hibesi",
      "STIBET programı",
      "Motivasyon bursları"
    ]
  },
  {
    id: 20,
    name: "University of Duisburg-Essen",
    city: "Duisburg/Essen",
    description: "2003'te birleşen, Almanya'nın en genç büyük üniversitelerinden",
    programs: ["Mühendislik", "Doğa Bilimleri", "Tıp", "Sosyal Bilimler"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 2003,
    students: 43000,
    internationalStudents: 8600,
    coordinates: "51.4269,6.8000",
    address: "Universitätsstraße 2, 45141 Essen, Germany",
    faculties: ["Mühendislik", "Doğa Bilimleri", "Fizik", "Kimya", "Bilgisayar", "İşletme", "Ekonomi", "Beşeri Bilimler", "Tıp", "Sosyal Bilimler", "Eğitim", "Sanat/Kültür"],
    admissionRequirements: [
      "Alemanca Abitur dengi belge",
      "Lisans için 2.5 GPA, Yüksek lisans için 80-90%",
      "Almanca programlar için dil yeterliliği",
      "İngilizce programlar için TOEFL 100+/IELTS 7.5+",
      "Uluslararası öğrenciler için Mayıs 1/Kasım 1",
      "Dönem katkısı €312.40"
    ],
    campusFacilities: [
      "İki kampüs arasında servis otobüsü",
      "Fizik Almanya'da 1. sırada",
      "Nanosicence araştırma tesisleri",
      "Üniversite hastanesi",
      "Çoklu kütüphane sistemi",
      "100+ uluslararası ortaklık",
      "Botanik bahçesi"
    ],
    scholarships: [
      "Deutschlandstipendium",
      "UDE-Stipendium (€300/ay)",
      "Uluslararası öğrenci bursları",
      "DAAD bursları",
      "Campus konutu €250-450/ay"
    ]
  },
  {
    id: 21,
    name: "Heinrich Heine University Düsseldorf",
    city: "Düsseldorf",
    description: "1965'te kurulan, şairin adını taşıyan modern üniversite",
    programs: ["Tıp", "Hukuk", "İşletme", "Beşeri Bilimler"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1965,
    students: 36000,
    internationalStudents: 4680,
    coordinates: "51.1914,6.7944",
    address: "Universitätsstraße 1, 40225 Düsseldorf, Germany",
    faculties: ["Tıp", "Beşeri Bilimler", "Matematik/Doğa Bilimleri", "İşletme/Ekonomi", "Hukuk"],
    admissionRequirements: [
      "Kabul oranı %45",
      "IELTS/TOEFL kabul edilir",
      "Ocak 15 yaz/Temmuz 15 kış dönem",
      "Tavsiye mektupları gerekli",
      "85+ farklı kurs seçeneği",
      "Dönem hizmet ücreti €230"
    ],
    campusFacilities: [
      "Bilk bölgesinde üçgen kampüs",
      "Üniversite hastanesi ile birleşik",
      "130 hektar toplam alan",
      "6,000+ türde botanik bahçesi",
      "Student Service Center",
      "100+ spor çeşidi",
      "Üniversite orkestrası"
    ],
    scholarships: [
      "Üniversite ve dış kuruluş bursları",
      "DAAD bursları",
      "Leadership for Africa",
      "Fulbright programı",
      "Almanya'da top 5 burs sağlayıcı",
      "Aylık yaşam maliyeti €800-1,100"
    ]
  },
  {
    id: 22,
    name: "Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU)",
    city: "Erlangen/Nürnberg",
    description: "1743'te kurulan, Bavyera'nın ikinci en büyük üniversitesi",
    programs: ["Mühendislik", "Tıp", "Doğa Bilimleri", "İşletme"],
    ranking: 2,
    worldRanking: 232,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1743,
    students: 41000,
    internationalStudents: 8200,
    coordinates: "49.5967,11.0047",
    address: "Freyeslebenstrasse 1, 91058 Erlangen, Germany",
    faculties: ["Beşeri/Sosyal/İlahiyat", "İşletme/Ekonomi/Hukuk", "Tıp", "Doğa Bilimleri", "Mühendislik"],
    admissionRequirements: [
      "280 derece programı",
      "39+ İngilizce yüksek lisans",
      "50+ uluslararası öğrenci programı",
      "Minimal €150/dönem ücret",
      "Excellence Initiative statüsü",
      "200+ partner üniversite"
    ],
    campusFacilities: [
      "3 şehir kampüsü (Erlangen/Nürnberg/Fürth)",
      "5.4 milyon ciltlik kütüphane",
      "25 klinikle üniversite hastanesi",
      "Engineering Advanced Materials kümeleri",
      "Zollhof teknoloji inkübatörü",
      "Max Planck ortaklıkları",
      "€210+ milyon araştırma finansmanı"
    ],
    scholarships: [
      "DAAD Excellence bursları",
      "Deutschlandstipendium",
      "Bavyera eyalet bursları",
      "Endüstri işbirliği bursları",
      "Uluslararası değişim programları"
    ]
  },
  {
    id: 23,
    name: "Europa-Universität Flensburg",
    city: "Flensburg",
    description: "1946'da kurulan, Danimarka sınırındaki Avrupa odaklı üniversite",
    programs: ["Eğitim", "Avrupa Çalışmaları", "Çevre Bilimi", "Mühendislik"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1946,
    students: 5000,
    internationalStudents: 403,
    coordinates: "54.7850,9.4306",
    address: "Auf dem Campus 1, 24943 Flensburg, Germany",
    faculties: ["Sanat", "Eğitim", "Mühendislik"],
    admissionRequirements: [
      "Online başvuru portalı",
      "İngilizce yeterlik belgesi",
      "Öğretmen eğitimi odaklı",
      "Avrupa çalışmaları uzmanlığı",
      "80+ partner üniversite",
      "Yönetim ücreti €276.90 + €60 kayıt"
    ],
    campusFacilities: [
      "Flensburg Fjord manzaralı kampüs",
      "Audimax konferans salonu",
      "Merkezi kütüphane",
      "Spor ve fitness merkezi",
      "Öğrenci yurdu",
      "Kampüs kreşi",
      "Yüzme havuzu ve şapel"
    ],
    scholarships: [
      "DAAD bursları",
      "Avrupa değişim programları",
      "Erasmus+ finansmanı",
      "Uluslararası öğrenci destekleri",
      "Aylık minimum €850 bütçe"
    ]
  },
  {
    id: 24,
    name: "Goethe University Frankfurt",
    city: "Frankfurt am Main",
    description: "1914'te kurulan, Almanya'nın ilk 'vatandaş üniversitesi'",
    programs: ["İşletme", "Hukuk", "Sosyal Bilimler", "Doğa Bilimleri"],
    ranking: 2,
    worldRanking: 316,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1914,
    students: 48000,
    internationalStudents: 7600,
    coordinates: "50.1278,8.6631",
    address: "Theodor-W.-Adorno-Platz 1, 60323 Frankfurt am Main, Germany",
    faculties: ["Hukuk", "Ekonomi/İşletme", "Sosyal Bilimler", "Modern Diller", "Dilbilim/Kültür/Sanat", "Tıp", "Doğa Bilimleri", "Biyokimya/Kimya/Eczacılık", "Protestan İlahiyat", "Katolik İlahiyat", "Felsefe/Tarih", "Eğitim", "Psikoloji", "Jeobilimler/Coğrafya", "Bilgisayar/Matematik"],
    admissionRequirements: [
      "Kabul oranı ~%77",
      "Başvuru ücreti €75/€30",
      "Online üniversite portalı",
      "Program bazında özel şartlar",
      "136 ülkeden uluslararası öğrenci",
      "Dönem katkısı €300-€900"
    ],
    campusFacilities: [
      "4 ana kampüs (Westend ana merkez)",
      "Tarihi IG Farben Binası",
      "Riedberg doğa bilimleri kampüsü",
      "Niederrad tıp kampüsü",
      "Senckenberg merkezi kütüphanesi",
      "Frankfurt School mirası",
      "Avrupa Merkez Bankası yakınlığı"
    ],
    scholarships: [
      "DAAD bursları",
      "Aylık burslar uluslararası öğrencilere",
      "Doktora başlangıç bursları (€1,550/ay)",
      "Erasmus+ finansmanı",
      "Leadership for Africa",
      "Fulbright programları"
    ]
  },
  {
    id: 25,
    name: "European University Viadrina Frankfurt (Oder)",
    city: "Frankfurt (Oder)",
    description: "1991'de yeniden kurulan, Alman-Polonya sınırındaki Avrupa üniversitesi",
    programs: ["Hukuk", "İşletme", "Kültürel Çalışmalar", "Avrupa Çalışmaları"],
    ranking: 4,
    worldRanking: 701,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1991,
    students: 6000,
    internationalStudents: 2100,
    coordinates: "52.3471,14.5506",
    address: "Große Scharrnstraße 59, 15230 Frankfurt (Oder), Germany",
    faculties: ["Hukuk", "Ekonomi/İşletme Yönetimi", "Kültürel Çalışmalar"],
    admissionRequirements: [
      "Almanya'nın en küçük üniversitelerinden",
      "Uluslararası öğrenci oranı %25-40",
      "90+ ülkeden öğrenci",
      "Sınır ötesi işbirliği",
      "10 dakika yürüyüşle Almanya-Polonya",
      "250+ partner üniversite"
    ],
    campusFacilities: [
      "Ana bina Große Scharrnstraße",
      "Collegium Polonicum (Slubice/Polonya)",
      "Sınır ötesi kampüs konsepti",
      "Avrupa entegrasyonu odaklı",
      "Adam Mickiewicz Üniversitesi ortaklığı",
      "Frankfurt Institut of Transformational Studies"
    ],
    scholarships: [
      "DAAD Avrupa çalışmaları bursları",
      "Sınır araştırmaları bursları",
      "Transformasyon ekonomisi destekleri",
      "Erasmus+ değişim programları",
      "Avrupa çalışmaları özel bursları"
    ]
  },
  {
    id: 26,
    name: "TU Bergakademie Freiberg",
    city: "Freiberg",
    description: "1765'te kurulan, dünyanın en eski maden bilim üniversitesi",
    programs: ["Maden Mühendisliği", "Metalurji", "Jeoloji", "Malzeme Bilimi"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1765,
    students: 3471,
    internationalStudents: 1423,
    coordinates: "50.9167,13.3333",
    address: "Prüferstraße 4, 09599 Freiberg, Germany",
    faculties: ["Jeobilimler/Jeomühendislik", "Matematik/Bilgisayar/Doğa", "Malzeme Bilimi/Teknoloji", "Mühendislik", "Ekonomi", "Profesörlük (6. Fakülte)"],
    admissionRequirements: [
      "67 derece programı",
      "STEM programlarında %85 kayıt",
      "Çift diploma anlaşmaları",
      "Çin, Fransa, Gana, İtalya, Polonya",
      "Doktora derecelerinin %30'u yabancı",
      "Bilimsel dalış sertifikası imkanı"
    ],
    campusFacilities: [
      "Ore Dağları'nda kampüs",
      "Schlossplatzquartier merkezi",
      "Tarihi mimari + modern tesisler",
      "İndium ve Germanyum keşif yeri",
      "Alexander von Humboldt eski öğrenci",
      "1702'den beri burs geçmişi"
    ],
    scholarships: [
      "BAföG devlet desteği",
      "Burs vakfı programları",
      "Çalışarak okuma imkanları",
      "Tarihi vakıf bursları",
      "Uluslararası öğrenci destekleri"
    ]
  },
  {
    id: 27,
    name: "University of Hamburg",
    city: "Hamburg",
    description: "1919'da kurulan, Hamburg'un en büyük araştırma üniversitesi",
    programs: ["Hukuk", "İşletme", "Tıp", "Beşeri Bilimler"],
    ranking: 2,
    worldRanking: 191,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1919,
    students: 44000,
    internationalStudents: 4400,
    coordinates: "53.5683,9.9755",
    address: "Edmund-Siemers-Allee 1, 20146 Hamburg, Germany",
    faculties: ["Hukuk", "İşletme/Ekonomi/Sosyal", "Tıp", "Eğitim", "Beşeri Bilimler", "Matematik/Doğa", "Psikoloji/İnsan Hareketi", "Hamburg İş Okulu"],
    admissionRequirements: [
      "10,000 yeni öğrenci/yıl",
      "Numerus clausus programlar için GPA seçici",
      "149 farklı ana alan",
      "180+ derece programı",
      "Almanca dil yeterliliği",
      "Bazı İngilizce yüksek lisans programları"
    ],
    campusFacilities: [
      "Von-Melle-Park ana kampüsü",
      "Botanik bahçesi (Klein Flottbek)",
      "Hamburg Gözlemevi",
      "7 işbirliği araştırma merkezi",
      "4 Mükemmellik Kümesi (2019'dan beri)",
      "Zooloji ve Mineraloji müzeleri",
      "DESY tesisleri ortaklığı"
    ],
    scholarships: [
      "Uluslararası öğrenci bursları",
      "DAAD bursları",
      "Research assistantship programs",
      "Excellence University status benefits",
      "Çok sayıda external funding opportunities"
    ]
  },
  {
    id: 28,
    name: "University of Stuttgart",
    city: "Stuttgart",
    description: "1829'da kurulan, TU9 üyesi teknik üniversite",
    programs: ["Mühendislik", "Doğa Bilimleri", "Mimarlık", "İnsan Bilimleri"],
    ranking: 2,
    worldRanking: 312,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1829,
    students: 20898,
    internationalStudents: 5580,
    coordinates: "48.7425,9.1062",
    address: "Pfaffenwaldring 5c, 70569 Stuttgart, Germany",
    faculties: ["Mimarlık/Kent Planlama", "İnşaat/Çevre", "Kimya", "Enerji/Süreç/Bio", "Bilgisayar/Elektrik", "Havacılık/Jeodezi", "Mühendislik Tasarım", "Matematik/Fizik", "Beşeri Bilimler", "Yönetim/Ekonomi/Sosyal"],
    admissionRequirements: [
      "Minimum 2.8 GPA (4.0 üzerinden)",
      "Kabul oranı ~%53",
      "8-10% uluslararası lisans kabul",
      "IELTS skorları gerekli",
      "C@MPUS başvuru sistemi",
      "167 toplam program"
    ],
    campusFacilities: [
      "İki ana kampüs (Stadtmitte/Vaihingen)",
      "Merkezi kütüphane + 117 enstitü kütüphanesi",
      "Combined Heating and Power plant",
      "5 öğrenci yurdu (~3,000 daire)",
      "Modern spor tesisleri",
      "S-Bahn bağlantısı (Universität durağı)"
    ],
    scholarships: [
      "DAAD (ana burs sağlayıcı)",
      "Home country scholarships",
      "€213.50-€300/hafta yurt ücretleri",
      "International Office destekleri",
      "Endüstri işbirlikleri"
    ]
  },
  {
    id: 29,
    name: "Karlsruhe Institute of Technology (KIT)",
    city: "Karlsruhe",
    description: "2009'da kurulan (1825 köklü), Excellence University",
    programs: ["Mühendislik", "Doğa Bilimleri", "Bilgisayar", "Ekonomi"],
    ranking: 1,
    worldRanking: 98,
    tuition: "EU dışından €1,500/dönem",
    language: ["Almanca", "İngilizce"],
    founded: 2009,
    students: 25100,
    internationalStudents: 6000,
    coordinates: "49.0097,8.4044",
    address: "P.O. Box 3640, 76021 Karlsruhe, Germany",
    faculties: ["Mimarlık", "İnşaat/Jeoloji/Ekoloji", "Kimya/Süreç", "Kimya/Biyoloji", "Bilgisayar", "Ekonomi", "Elektrik/IT", "Beşeri/Sosyal", "Matematik", "Makine", "Fizik"],
    admissionRequirements: [
      "Kabul oranı %26 (çok seçici)",
      "Lisans 3 hafta, Yüksek lisans 4-5 hafta süre",
      "Kış dönemi: 15 Temmuz",
      "Yaz dönemi: 15 Ocak",
      "İngilizce programlar mevcut",
      "Excellence University statüsü"
    ],
    campusFacilities: [
      "Kampüs Kuzey + Kampüs Güney",
      "Ana Alman nükleer araştırma merkezi",
      "KATRIN nötrino deneyi",
      "€900 milyon yıllık bütçe",
      "120+ uzman araştırma enstitüsü",
      "10 tam donanımlı bilgisayar odası"
    ],
    scholarships: [
      "DAAD bursları",
      "Excellence Initiative finansmanı",
      "Carl Benz School programları",
      "HECTOR School business programları",
      "Uluslararası değişim bursları"
    ]
  },
  {
    id: 30,
    name: "University of Göttingen",
    city: "Göttingen",
    description: "1737'de kurulan, 47 Nobel ödüllü ile ilişkili",
    programs: ["Doğa Bilimleri", "Tıp", "Beşeri Bilimler", "Hukuk"],
    ranking: 2,
    worldRanking: 243,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1737,
    students: 28000,
    internationalStudents: 3080,
    coordinates: "51.5339,9.9386",
    address: "Wilhelmsplatz 1, 37073 Göttingen, Germany",
    faculties: ["Doğa Bilimleri (Kimya/Biyoloji/Fizik/Matematik)", "Tıp", "Beşeri/Sosyal", "Hukuk", "Ekonomi", "Tarım", "Orman/Ekoloji", "Jeobilim/Coğrafya", "İlahiyat"],
    admissionRequirements: [
      "210+ derece programı",
      "%11 uluslararası öğrenci",
      "535 profesör",
      "U15 araştırma üniversiteleri üyesi",
      "Göttingen Campus ittifakı",
      "7 araştırma merkezi ortaklığı"
    ],
    campusFacilities: [
      "Merkezi kampüs şehir merkezi yakını",
      "Güney matematik/bilgisayar fakültesi",
      "Kuzey doğa bilimleri merkezi",
      "Botanik bahçeleri",
      "Max Planck enstitüleri yakınlığı",
      "Merkezi kütüphane",
      "UNESCO Dünya Mirası şehir"
    ],
    scholarships: [
      "DAAD bursları",
      "U15 araştırma bursları",
      "Max Planck ortaklık bursları",
      "Göttingen Campus fonları",
      "Uluslararası değişim programları"
    ]
  },
  {
    id: 31,
    name: "University of Würzburg",
    city: "Würzburg",
    description: "1402'de kurulan, Röntgen'in X-ışını keşfettiği yer",
    programs: ["Tıp", "Doğa Bilimleri", "Beşeri Bilimler", "Hukuk"],
    ranking: 2,
    worldRanking: 416,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1402,
    students: 26787,
    internationalStudents: 1000,
    coordinates: "49.7832,9.9726",
    address: "Sanderring 2, 97070 Würzburg, Germany",
    faculties: ["Protestan İlahiyat", "Katolik İlahiyat", "Hukuk", "Ekonomi/İşletme", "Tıp", "Felsefe/Tarih", "Sosyal/Davranış", "Modern Diller", "Kültür", "Matematik/Fizik", "Kimya/Eczacılık", "Biyoloji", "Jeobilimler", "Psikoloji/Bilgisayar"],
    admissionRequirements: [
      "280 derece programı",
      "483 profesör",
      "U15 araştırma üniversiteleri",
      "14 Nobel ödüllü ilişkisi",
      "Coimbra Group üyesi",
      "€162.1 milyon dış fon"
    ],
    campusFacilities: [
      "Hubland Kampüsü (111 hektar)",
      "Eski Şehir tarihi binalar",
      "Tıp Kampüsü (Grombühl)",
      "Botanik Bahçesi (17. yy)",
      "29 ERC hibesi",
      "11 Leibniz Ödülü",
      "2 Mükemmellik Kümesi"
    ],
    scholarships: [
      "Uluslararası öğrenci burs programları",
      "4 Lisansüstü Okul",
      "Almanca dil kursları",
      "DAAD bursları",
      "Research excellence funding"
    ]
  },
  {
    id: 32,
    name: "University of Mannheim",
    city: "Mannheim",
    description: "1967'de kurulan, Almanya'da İşletme #1",
    programs: ["İşletme", "Ekonomi", "Sosyal Bilimler", "Hukuk"],
    ranking: 2,
    worldRanking: 416,
    tuition: "Uluslararası €1,500/dönem",
    language: ["Almanca", "İngilizce"],
    founded: 1967,
    students: 11640,
    internationalStudents: 1700,
    coordinates: "49.4836,8.4630",
    address: "L 1, 1 (Entrance B), 68161 Mannheim, Germany",
    faculties: ["İşletme Yönetimi", "Ekonomi", "Sosyal Bilimler", "Hukuk", "Beşeri Bilimler"],
    admissionRequirements: [
      "Kabul oranı %20-35 (seçici)",
      "Ücretsiz başvuru",
      "Yaz ve Kış dönem kabulü",
      "80+ lisans programı",
      "62+ toplam kurs",
      "APS sertifikası (Hindistan)"
    ],
    campusFacilities: [
      "Mannheim Sarayı'nda (1720-1760)",
      "6 hektar kampüs, 440m cephe",
      "Mannheim Business School (MBS)",
      "GESS Lisansüstü Okulu",
      "50+ öğrenci organizasyonu",
      "82 spor branşı",
      "Kampüs merkezinde konum"
    ],
    scholarships: [
      "Deutschland Scholarship",
      "DAAD Scholarship (€1,000)",
      "Konrad-Adenauer-Stiftung",
      "ASEM-DUO Exchange Grant",
      "Baden-Württemberg Scholarship",
      "~200 öğrenci/yıl burs alır"
    ]
  },
  {
    id: 33,
    name: "University of Konstanz",
    city: "Konstanz",
    description: "1966'da kurulan, 'Constance Gölü'nde Küçük Harvard'",
    programs: ["Doğa Bilimleri", "Beşeri Bilimler", "Hukuk"],
    ranking: 2,
    worldRanking: 250,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1966,
    students: 11500,
    internationalStudents: 1150,
    coordinates: "47.6900,9.1880",
    address: "Universitätsstraße 10, D-78464 Konstanz, Germany",
    faculties: ["Doğa Bilimleri", "Beşeri Bilimler", "Hukuk/Ekonomi/Siyaset"],
    admissionRequirements: [
      "100+ kurs programı",
      "100 ülkeden öğrenci",
      "Excellence University statüsü",
      "Times Under 50 List #7 (2016)",
      "İsviçre sınırından 4 km",
      "Constance Gölü kıyısında"
    ],
    campusFacilities: [
      "90,000 m² Gießberg kampüsü",
      "Mainauwald ormanı içinde",
      "24 saat açık kütüphane",
      "Botanik bahçesi",
      "2 yaya/bisiklet köprüsü",
      "Almanya'nın en güneyindeki üniversite",
      "Gölö manzaralı kampüs"
    ],
    scholarships: [
      "Excellence University fonları",
      "DAAD bursları",
      "220+ Avrupa ortaklığı",
      "Harvard/Yale işbirlikleri",
      "Uluslararası değişim programları",
      "Balsillie School ortaklığı"
    ]
  },
  {
    id: 34,
    name: "University of Tübingen",
    city: "Tübingen",
    description: "1477'de kurulan, Excellence University",
    programs: ["Tıp", "Hukuk", "İlahiyat", "Beşeri Bilimler"],
    ranking: 1,
    worldRanking: 150,
    tuition: "Uluslararası €1,500/dönem",
    language: ["Almanca", "İngilizce"],
    founded: 1477,
    students: 27665,
    internationalStudents: 4100,
    coordinates: "48.5200,9.0592",
    address: "Geschwister-Scholl-Platz, 72074 Tübingen, Germany",
    faculties: ["Protestan İlahiyat", "Katolik İlahiyat", "Hukuk", "Ekonomi/İşletme", "Tıp", "Felsefe/Tarih", "Sosyal/Davranış", "Modern Diller", "Kültür", "Matematik/Fizik", "Kimya/Eczacılık", "Biyoloji", "Jeobilimler", "Psikoloji/Bilgisayar"],
    admissionRequirements: [
      "200 çalışma programı",
      "450+ profesör, 2,000 asistan",
      "11 Nobel ödüllü ilişkisi",
      "4+ dönem Almanca gerekli",
      "Excellence University statüsü",
      "€199.80/dönem ek ücret"
    ],
    campusFacilities: [
      "Tarihi merkez (Beşeri bilimler)",
      "Morgenstelle Kampüsü (Doğa bilimleri)",
      "Klinikum (Tıp hastanesi)",
      "Cyber Valley (AI konsorsiyumu)",
      "Waldhäuser Ost yurdu (1,700 oda)",
      "Französisches Viertel yurdu (500 oda)",
      "UNESCO Dünya Mirası şehir"
    ],
    scholarships: [
      "DAAD bursları",
      "Excellence University funding",
      "Cyber Valley AI bursları",
      "Uluslararası değişim programları",
      "Hochschulsport facilities",
      "Research excellence grants"
    ]
  },
  {
    id: 35,
    name: "University of Regensburg",
    city: "Regensburg",
    description: "1962'de kurulan, Papa Benedict XVI'nın eski üniversitesi",
    programs: ["İlahiyat", "Hukuk", "Tıp", "Beşeri Bilimler"],
    ranking: 3,
    worldRanking: 745,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1962,
    students: 21000,
    internationalStudents: 1800,
    coordinates: "48.9922,12.0903",
    address: "Universitätsstraße 31, 93053 Regensburg, Germany",
    faculties: ["Katolik İlahiyat", "Hukuk", "İşletme/Ekonomi/YBS", "Tıp", "Felsefe/Sanat/Tarih", "Psikoloji/Eğitim/Spor", "Dil/Edebiyat/Kültür", "Matematik", "Fizik", "Biyoloji/Preklinik", "Kimya/Eczacılık"],
    admissionRequirements: [
      "158 disiplin programa",
      "90 ülkeden öğrenci",
      "%8 uluslararası öğrenci",
      "312 profesör",
      "13:1 öğrenci-öğretim üyesi oranı",
      "%60 kadın öğrenci"
    ],
    campusFacilities: [
      "Merkezi kampüs (150 hektar)",
      "Tuna Nehri'nin güneyinde",
      "Eski Şehir'e 15 dk otobüs",
      "Büyük merkezi Mensa",
      "3.15 milyon kitap kütüphane",
      "360 partner üniversite",
      "UNESCO Dünya Mirası şehir"
    ],
    scholarships: [
      "DAAD bursları",
      "Almanca yeterlik kursları",
      "360 partner üniversite değişim",
      "Papa Benedict XVI mirası",
      "Uluslararası ofis destekleri",
      "Bavyera eyalet bursları"
    ]
  },
  {
    id: 36,
    name: "Technical University of Berlin (TU Berlin)",
    city: "Berlin",
    description: "1879'da kurulan, TU9 üyesi teknik üniversite",
    programs: ["Mühendislik", "Doğa Bilimleri", "Bilgisayar", "İnsan Bilimleri"],
    ranking: 2,
    worldRanking: 145,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1879,
    students: 43000,
    internationalStudents: 10000,
    coordinates: "52.5119,13.3269",
    address: "Straße des 17. Juni 135, 10623 Berlin, Germany",
    faculties: ["Beşeri/Eğitim", "Matematik/Doğa", "Süreç Bilimleri", "Elektrik/Bilgisayar", "Makine/Ulaştırma", "Planlama/İnşaat/Çevre", "Ekonomi/Yönetim"],
    admissionRequirements: [
      "150+ derece programı",
      "20 İngilizce program",
      "110+ Almanca program",
      "%27 uluslararası öğrenci",
      "Minimum 2.7 GPA (değişim)",
      "A2 Almanca önerilir"
    ],
    campusFacilities: [
      "Ernst-Reuter-Platz merkez",
      "604,000 m² kampüs alanı",
      "Rosa Röhre (pembe boru) landmark",
      "Wedding/Dahlem ek lokasyonlar",
      "Berlin University Alliance",
      "Mükemmel ulaşım bağlantıları",
      "Brandenburg Kapısı yakınlığı"
    ],
    scholarships: [
      "DAAD bursları",
      "TU9 alliance benefits",
      "Berlin University Alliance",
      "Excellence University fonları",
      "Endüstri işbirliği bursları",
      "10 Nobel ödüllü mezun"
    ]
  },
  {
    id: 37,
    name: "University of Freiburg",
    city: "Freiburg im Breisgau",
    description: "1457'de kurulan, Almanya'nın 5. en eski üniversitesi",
    programs: ["Tıp", "Hukuk", "Doğa Bilimleri", "Beşeri Bilimler"],
    ranking: 2,
    worldRanking: 125,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1457,
    students: 24500,
    internationalStudents: 4459,
    coordinates: "47.9978,7.8426",
    address: "Friedrichstr. 39, 79098 Freiburg, Germany",
    faculties: ["İlahiyat", "Hukuk", "Tıp", "Felsefe", "Modern Diller", "Matematik/Doğa", "Beşeri Bilimler", "Uygulamalı Bilimler", "Çevre/Doğa Kaynakları", "Teknik", "Ekonomi/Davranış"],
    admissionRequirements: [
      "240 derece programı",
      "Kabul oranı ~%33",
      "120+ ülkeden öğrenci",
      "23 Nobel ödüllü ilişkisi",
      "440 profesör, 32 junior profesör",
      "2019-2023: 16 ERC hibesi"
    ],
    campusFacilities: [
      "3 büyük kampüs",
      "Üniversite Merkezi (tarihi merkez)",
      "Enstitüler Bölgesi (bilim fakülteleri)",
      "Mühendislik Kampüsü",
      "Üniversite Tıp Merkezi (1,600 yatak)",
      "Sürdürülebilirlik odağı (50+ profesörlük)",
      "EPICUR üniversite ittifakı"
    ],
    scholarships: [
      "Sürdürülebilirlik Sertifikası",
      "DAAD bursları",
      "219 milyon € 3. taraf fonlama (2023)",
      "EPICUR ortaklık bursları",
      "Uluslararası değişim programları",
      "Excellence funding opportunities"
    ]
  },
  {
    id: 38,
    name: "Justus Liebig University Giessen",
    city: "Giessen",
    description: "1607'de kurulan, modern tarım kimyasının beşiği",
    programs: ["Tarım", "Veteriner", "Tıp", "Doğa Bilimleri"],
    ranking: 3,
    worldRanking: 496,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1607,
    students: 25000,
    internationalStudents: 1700,
    coordinates: "50.5833,8.6667",
    address: "Ludwigstrasse 23, 35390 Giessen, Germany",
    faculties: ["Hukuk", "Ekonomi/İşletme", "Sosyal/Kültür", "Tarih/Kültür", "Dil/Edebiyat/Kültür", "Psikoloji/Spor", "Matematik/Bilgisayar/Fizik/Coğrafya", "Biyoloji/Kimya", "Tarım/Beslenme/Çevre", "Veteriner", "Tıp"],
    admissionRequirements: [
      "100+ derece programı",
      "5,853 çalışan",
      "Excellence Initiative fonlaması (2006'dan beri)",
      "Justus von Liebig mirası",
      "Wilhelm Conrad Röntgen mezunu",
      "Çok disiplinli araştırma odağı"
    ],
    campusFacilities: [
      "Geleneksel kampüs yok - şehir içinde dağınık",
      "Üniversite Merkezi (Ludwigstrasse)",
      "Seltersberg Kampüsü (şehir dışı)",
      "Philosophikum II (şehir çeperi)",
      "Modern laboratuvarlar",
      "Biyomedikal Araştırma Merkezi",
      "Digital Campus sanal öğrenme"
    ],
    scholarships: [
      "DAAD bursları",
      "Excellence Strategy funding",
      "Uluslararası geliştirme araştırma bursları",
      "Doğu Avrupa çalışmaları fonları",
      "100+ derece programı seçeneği"
    ]
  },
  {
    id: 39,
    name: "University of Greifswald",
    city: "Greifswald",
    description: "1456'da kurulan, günümüz Almanya'nın 4. en eski üniversitesi",
    programs: ["İlahiyat", "Tıp", "Hukuk", "Beşeri Bilimler"],
    ranking: 3,
    worldRanking: 501,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1456,
    students: 10300,
    internationalStudents: 1030,
    coordinates: "54.0979,13.3881",
    address: "Domstraße 11, 17489 Greifswald, Germany",
    faculties: ["İlahiyat", "Hukuk/Ekonomi", "Üniversite Tıbbı", "Sanat/Beşeri Bilimler", "Matematik/Doğa Bilimleri"],
    admissionRequirements: [
      "131 derece programı",
      "90+ ülkeden öğrenci",
      "13 sürekli eğitim kursu",
      "3 araştırma alanı odağı",
      "Baltık Denizi bölgesi araştırması",
      "One Health yaklaşımı"
    ],
    campusFacilities: [
      "Tarihi şehir merkezi kampüsü",
      "Berthold-Beitz-Platz Kampüsü",
      "Loefflerstraße Kampüsü",
      "Yeni doğu kampüsü (inşaat)",
      "€417 milyon kampüs yenileme (1991-2007)",
      "4 uluslararası araştırma enstitüsü",
      "Bisiklet dostu şehir (15 dk erişim)"
    ],
    scholarships: [
      "DAAD bursları",
      "Baltık araştırma bursları",
      "One Health program destekleri",
      "Uluslararası değişim programları",
      "90+ ülke ortaklık ağı"
    ]
  },
  {
    id: 40,
    name: "FernUniversität Hagen",
    city: "Hagen",
    description: "1974'te kurulan, Almanya'nın tek uzaktan eğitim üniversitesi",
    programs: ["İşletme", "Bilgisayar", "Psikoloji", "Hukuk"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1974,
    students: 76647,
    internationalStudents: 7665,
    coordinates: "51.3780,7.4945",
    address: "Universitätsstraße 11, 58097 Hagen, Germany",
    faculties: ["Beşeri/Sosyal Bilimler", "Psikoloji", "Matematik/Bilgisayar", "Ekonomi/İşletme", "Hukuk"],
    admissionRequirements: [
      "Açık kabul politikası",
      "Almanya'nın 2. en büyük üniversitesi",
      "Ortalama yaş 32",
      "%80 çalışan öğrenci",
      "%19 önceden derece sahibi",
      "50+ çalışma/araştırma merkezi"
    ],
    campusFacilities: [
      "A45/A46 karayolu yakınında kampüs",
      "13 Almanya kampüsü",
      "180+ partner üniversite",
      "Berlin, Münih, Leipzig merkezleri",
      "Moodle öğrenme platformu",
      "50+ Avrupa ve Doğu Avrupa merkezi",
      "Esnek hibrit öğrenme modeli"
    ],
    scholarships: [
      "BAföG uzaktan eğitim desteği",
      "Çalışan öğrenci bursları",
      "Uluslararası online programlar",
      "Avrupa/Doğu Avrupa merkez fonları",
      "Mesleki deneyim tabanlı kabul"
    ]
  },
  {
    id: 41,
    name: "Martin Luther University Halle-Wittenberg",
    city: "Halle",
    description: "1817'de birleşen, Luther'in adını taşıyan 500+ yaşında kökleri",
    programs: ["İlahiyat", "Doğa Bilimleri", "Beşeri Bilimler", "Tıp"],
    ranking: 3,
    worldRanking: 755,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1817,
    students: 21000,
    internationalStudents: 2100,
    coordinates: "51.4858,11.9686",
    address: "Universitätsplatz 10, 06108 Halle (Saale), Germany",
    faculties: ["İlahiyat", "Hukuk/Ekonomi/İşletme", "Tıp", "Felsefe I", "Doğa Bilimleri II", "Doğa Bilimleri III", "Eğitim", "Mühendislik"],
    admissionRequirements: [
      "190+ program kursu",
      "110+ ülkeden öğrenci",
      "İlk 'modern' üniversite",
      "4 Nobel ödüllü öğretim üyesi",
      "Excellence Strategy kazananı",
      "200+ partner üniversite"
    ],
    campusFacilities: [
      "Universitätsplatz (Avrupa'nın en güzel)",
      "Weinberg Kampüsü (doğa bilimleri)",
      "Steintor Kampüsü (beşeri bilimler)",
      "Francke Vakfı (eğitim/ilahiyat)",
      "Leucorea Vakfı (Wittenberg)",
      "Akademik Orkestra (1779)",
      "Üniversite Korosu (1950)"
    ],
    scholarships: [
      "Center for Chiral Electronics (€64.5M)",
      "DAAD bursları",
      "Excellence Strategy fonları",
      "500+ yıl akademik gelenek bursları",
      "190-330€/ay yurt konaklama"
    ]
  },
  {
    id: 42,
    name: "HafenCity University Hamburg",
    city: "Hamburg",
    description: "2006'da kurulan, mimarlık ve kent gelişimine odaklanan tek üniversite",
    programs: ["Mimarlık", "İnşaat", "Kent Planlama", "Jeomatik"],
    ranking: 4,
    worldRanking: 701,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 2006,
    students: 2500,
    internationalStudents: 250,
    coordinates: "53.5420,9.9967",
    address: "Henning-Voscherau-Platz 1, 20457 Hamburg, Germany",
    faculties: ["Mimarlık", "İnşaat Mühendisliği", "Jeodezi/Jeoinformatik", "Kent Planlama", "Kent Tasarım/Metropol Kültürü"],
    admissionRequirements: [
      "40+ lisans/yüksek lisans programı",
      "100+ ülkeden öğrenci",
      "11 çifte diploma programı",
      "Almanya'nın tek 'yapılı çevre' üniversitesi",
      "MIT Media Lab ortaklığı",
      "REAP İngilizce yüksek lisans"
    ],
    campusFacilities: [
      "HafenCity bölgesi (en yeni kent gelişimi)",
      "Speicherstadt (UNESCO) yakınında",
      "Elbphilharmonie konsol salonu yakını",
      "Code Unique Architekten tasarım",
      "Modern rıhtım kampüsü",
      "Avrupa'nın en büyük şehir içi inşaat",
      "CityScienceLab araştırma merkezi"
    ],
    scholarships: [
      "DAAD bursları",
      "Franco-German University üyeliği",
      "SUNRISE Avrupa ittifakı",
      "MIT Media Lab işbirliği bursları",
      "Endüstri ortaklık programları"
    ]
  },
  {
    id: 43,
    name: "Hamburg University of Technology (TUHH)",
    city: "Hamburg",
    description: "1978'de kurulan, 'İnsanlık için Teknoloji' misyonu",
    programs: ["Mühendislik", "Doğa Bilimleri", "Teknoloji", "Lojistik"],
    ranking: 3,
    worldRanking: 225,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1978,
    students: 7500,
    internationalStudents: 1500,
    coordinates: "53.4606,9.9695",
    address: "Am Schwarzenberg-Campus 1, 21073 Hamburg, Germany",
    faculties: ["İleri Malzemeler/Bio-Süreçler", "Havacılık/Denizcilik", "Siber Fiziksel/Tıp Sistemleri", "Çevre/Enerji", "Lojistik/Mobilite/Altyapı"],
    admissionRequirements: [
      "40+ lisans/yüksek lisans programı",
      "Kabul oranı %44",
      "100+ profesör",
      "1,500 uluslararası çalışan",
      "İngilizce yüksek lisans programları",
      "Tutkusuz ücretsiz programlar"
    ],
    campusFacilities: [
      "Harburg tek kampüs",
      "15 bina park manzarası",
      "von Gerkan, Marg und Partner tasarım",
      "Tarihi Schwarzenberg kışla",
      "TuTech teknoloji transfer (1992)",
      "Graduate Academy (2013)",
      "Northern Institute of Technology"
    ],
    scholarships: [
      "DAAD bursları",
      "TuTech startup ekosistemi",
      "Almanya'nın en başarılı genç üniversitesi",
      "Endüstri bağlantı bursları",
      "Times Young University #92"
    ]
  },
  {
    id: 44,
    name: "Leibniz University Hannover",
    city: "Hannover",
    description: "1831'de kurulan, TU9 üyesi teknik üniversite",
    programs: ["Mühendislik", "Doğa Bilimleri", "Beşeri Bilimler", "Hukuk"],
    ranking: 2,
    worldRanking: 433,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1831,
    students: 27200,
    internationalStudents: 4000,
    coordinates: "52.3819,9.7186",
    address: "Welfengarten 1, 30060 Hannover, Germany",
    faculties: ["Matematik/Fizik", "Doğa Bilimleri", "Hukuk", "Beşeri Bilimler", "Ekonomi/Yönetim", "Elektrik/Bilgisayar", "İnşaat/Çevre", "Makine", "Mimarlık"],
    admissionRequirements: [
      "190+ derece programı",
      "Kabul oranı %51",
      "357 profesör",
      "3,400+ akademik personel",
      "TU9 üyesi",
      "€700-900 aylık yaşam maliyeti"
    ],
    campusFacilities: [
      "Welfen Sarayı (ana bina)",
      "160 bina 322,700 m²",
      "4 mini-kampüs kümesi",
      "TIB - dünyanın en büyük bilim kütüphanesi",
      "100+ spor türü CAMPUSFit",
      "KletterCAMPUS tırmanış salonu",
      "City Railway erişimi"
    ],
    scholarships: [
      "DAAD bursları",
      "TU9 alliance benefits",
      "THE Impact #34 Clean Water",
      "Almanya ekonomisi top manager #7",
      "Quantum physics araştırma bursları"
    ]
  },
  {
    id: 45,
    name: "Ruprecht-Karls University Heidelberg",
    city: "Heidelberg",
    description: "1386'da kurulan, Almanya'nın en eski üniversitesi",
    programs: ["Tıp", "Hukuk", "Doğa Bilimleri", "Beşeri Bilimler"],
    ranking: 1,
    worldRanking: 87,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1386,
    students: 30000,
    internationalStudents: 5400,
    coordinates: "49.4103,8.7064",
    address: "Grabengasse 1, 69117 Heidelberg, Germany",
    faculties: ["İlahiyat", "Hukuk", "Felsefe", "Modern Diller", "Ekonomi/Sosyal", "Davranış/Kültür", "Matematik/Bilgisayar", "Kimya/Yer Bilimleri", "Fizik/Astronomi", "Biyobilimler", "Tıp (2 fakülte)"],
    admissionRequirements: [
      "160+ alan, 100+ disiplin",
      "Excellence University statüsü",
      "U15 araştırma üniversiteleri",
      "League of European Research Universities",
      "6.2 milyon basılı cilt kütüphane",
      "Frankfurt Havalimanı 40 dk"
    ],
    campusFacilities: [
      "Eski Şehir Kampüsü (tarihi merkez)",
      "Neuenheimer Feld (doğa bilimleri/tıp)",
      "Bergheim Kampüsü (sosyal bilimler)",
      "Heidelberg Kalesi yakınlığı",
      "Üniversite Müzesi",
      "Bunsen yanıcı keşif yeri",
      "Alman Romantizm beşiği"
    ],
    scholarships: [
      "Excellence University fonları",
      "DAAD bursları",
      "Almanya'nın en eski üniversite bursları",
      "Global branch office destekleri",
      "Coimbra Group bursları",
      "ruprecht gazetesi fonu"
    ]
  },
  {
    id: 46,
    name: "University of Hildesheim",
    city: "Hildesheim",
    description: "1946'da kurulan, 2003'ten beri Vakıf Üniversitesi",
    programs: ["Eğitim", "Kültür Çalışmaları", "Dilbilim", "Bilgisayar"],
    ranking: 4,
    worldRanking: 2438,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1946,
    students: 8600,
    internationalStudents: 860,
    coordinates: "52.1500,9.9500",
    address: "Universitätsplatz 1, 31141 Hildesheim, Germany",
    faculties: ["Eğitim/Sosyal Bilimler", "Kültür Çalışmaları/Estetik İletişim", "Dilbilim/Bilgi Bilimleri", "Matematik/Doğa/Ekonomi/Bilgisayar"],
    admissionRequirements: [
      "40+ lisans/yüksek lisans programı",
      "Kabul oranı %41-46",
      "18 öğretmenlik alanı",
      "Almanca/İngilizce programlar",
      "Fransa/Güney Kore çifte diploma",
      "Data Analytics İngilizce program"
    ],
    campusFacilities: [
      "4 ana kampüs",
      "Bühler Kampüsü (eğitim bilimleri)",
      "Marienburger Höhe (dilbilim)",
      "Domäne Marienburg (kültür çalışmaları)",
      "1,500-2,000 öğrenci konaklama",
      "180+ partner üniversite",
      "14:1 öğrenci-öğretim üyesi oranı"
    ],
    scholarships: [
      "College of Minerva bursları",
      "Lore-Auerbach Scholarships",
      "European Quality Label (2007/2011)",
      "400+ yıllık değişim yeri",
      "250+ partner okul öğretmenlik",
      "50 ülke partnership ağı"
    ]
  },
  {
    id: 47,
    name: "University of Hohenheim",
    city: "Stuttgart",
    description: "1818'de kurulan, Stuttgart'ın en eski üniversitesi",
    programs: ["Tarım", "Doğa Bilimleri", "İşletme", "Ekonomi"],
    ranking: 3,
    worldRanking: 719,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1818,
    students: 9000,
    internationalStudents: 1500,
    coordinates: "48.7094,9.2072",
    address: "Schloss Hohenheim 1, 70599 Stuttgart, Germany",
    faculties: ["Tarım Bilimleri", "Doğa Bilimleri", "İşletme/Ekonomi/Sosyal Bilimler"],
    admissionRequirements: [
      "35 lisans/yüksek lisans programı",
      "Kabul oranı %42",
      "100+ profesör",
      "%15 uluslararası öğrenci",
      "€3,000 lisansüstü program ücreti",
      "Almanca/İngilizce orientasyon testi"
    ],
    campusFacilities: [
      "Hohenheim Sarayı kampüsü",
      "160,021 m² kampüs alanı",
      "400+ bitki türü botanik bahçe",
      "Almanya'nın 7. en güzel kampüsü",
      "Alman Tarım Müzesi",
      "Zooloji/Veteriner Müzesi",
      "Tarih Müzesi"
    ],
    scholarships: [
      "ELLS (Euroleague for Life Sciences)",
      "HERMES network bursları",
      "257-270€/ay kampüs konaklama",
      "18 önde gelen Avrupa üniversitesi",
      "DAAD bursları",
      "Sürdürülebilir tarım araştırma fonları"
    ]
  },
  {
    id: 48,
    name: "TU Ilmenau",
    city: "Ilmenau",
    description: "1894'te kurulan, Thüringen'in tek teknik üniversitesi",
    programs: ["Elektrik/Enformatik", "Bilgisayar", "Makine", "Ekonomi"],
    ranking: 3,
    worldRanking: 525,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    founded: 1894,
    students: 4900,
    internationalStudents: 1700,
    coordinates: "50.6757,10.9367",
    address: "Ehrenbergstraße 29, 98693 Ilmenau, Germany",
    faculties: ["Elektrik/Enformatik", "Bilgisayar/Otomasyon", "Makine Mühendisliği", "Matematik/Doğa Bilimleri", "Ekonomi/Medya"],
    admissionRequirements: [
      "40+ lisans/yüksek lisans programı",
      "11 çifte diploma programı",
      "100+ ülkeden öğrenci",
      "Kabul oranı %44",
      "MP3 inventor Prof. Brandenburg",
      "SUNRISE Avrupa ittifakı"
    ],
    campusFacilities: [
      "Thüringen Ormanı'nda (500m yükseklik)",
      "1894 tarihi + futuristik mimari",
      "Almanya'nın en güzel kampüslerinden",
      "Thüringen'in en büyük teknik kütüphanesi",
      "Kompakt yürüme mesafesi",
      "Ücretsiz bölgesel tren seyahati",
      "33km Erfurt güneyinde"
    ],
    scholarships: [
      "Franco-German University üyeliği",
      "SUNRISE Avrupa ittifakı",
      "MP3 teknoloji mirası bursları",
      "DAAD bursları",
      "Nano-mühendislik araştırma fonları",
      "Endüstri ortaklık spin-off destekleri"
    ]
  }
];

export default function UniversityDetail() {
  const params = useParams();
  const universityId = parseInt(params.id || "0");
  const university = universities.find(uni => uni.id === universityId);

  // Sayfa açıldığında en üste scroll et
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [universityId]);

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
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-accent to-primary text-white px-4 py-2 rounded-xl border-2 border-accent/30 text-lg font-bold shadow-md">
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
              
              {/* University Map */}
              <div className="mt-6 border border-border rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={`https://www.google.com/maps?q=${university.coordinates}&output=embed`}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${university.name} lokasyonu`}
                ></iframe>
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
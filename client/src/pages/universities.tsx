import { Search, Filter, MapPin, GraduationCap, Building } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";

type UniversityCategory = "Üniversite" | "Fachhochschule";

interface University {
  name: string;
  city: string;
  description: string;
  programs: string[];
  ranking: number;
  worldRanking: number;
  tuition: string;
  language: string[];
  category: UniversityCategory;
}

const universities: University[] = [
  {
    name: "RWTH Aachen University",
    city: "Aachen",
    description: "Almanya'nın en prestijli teknik üniversitelerinden biri",
    programs: ["Mühendislik", "Fen Bilimleri", "Teknoloji", "Tıp"],
    ranking: 1,
    worldRanking: 87,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Augsburg",
    city: "Augsburg",
    description: "Bayern'de modern bir araştırma üniversitesi",
    programs: ["İşletme", "Hukuk", "Sosyal Bilimler", "Matematik"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Bamberg (Otto-Friedrich-Universität)",
    city: "Bamberg",
    description: "UNESCO Dünya Mirası şehrinde küçük ama kaliteli üniversite",
    programs: ["Sosyal Bilimler", "İnsan Bilimleri", "Bilgisayar", "İşletme"],
    ranking: 4,
    worldRanking: 501,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Bayreuth",
    city: "Bayreuth",
    description: "Yenilikçi ve disiplinlerarası araştırmalarıyla tanınan üniversite",
    programs: ["Hukuk", "İşletme", "Doğa Bilimleri", "Mühendislik"],
    ranking: 3,
    worldRanking: 301,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Free University of Berlin (Freie Universität Berlin)",
    city: "Berlin",
    description: "Berlin'in en prestijli üniversitelerinden biri, güçlü araştırma geleneği",
    programs: ["Sosyal Bilimler", "Hukuk", "Tıp", "Doğa Bilimleri"],
    ranking: 1,
    worldRanking: 117,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Humboldt University of Berlin",
    city: "Berlin",
    description: "1810'da kurulan, modern üniversite kavramının öncüsü",
    programs: ["Sosyal Bilimler", "Hukuk", "Doğa Bilimleri", "Tıp"],
    ranking: 1,
    worldRanking: 120,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Technische Universität Berlin",
    city: "Berlin",
    description: "Berlin'in önde gelen teknik üniversitesi",
    programs: ["Mühendislik", "Teknoloji", "Bilgisayar", "Fen Bilimleri"],
    ranking: 2,
    worldRanking: 201,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of the Arts Berlin (UdK)",
    city: "Berlin",
    description: "Avrupa'nın en büyük sanat üniversitelerinden biri",
    programs: ["Güzel Sanatlar", "Müzik", "Tasarım", "Sahne Sanatları"],
    ranking: 1,
    worldRanking: 51,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Bielefeld University",
    city: "Bielefeld",
    description: "Disiplinlerarası araştırma ve yenilikçi eğitim metodları",
    programs: ["Sosyal Bilimler", "Eğitim", "Doğa Bilimleri", "İşletme"],
    ranking: 3,
    worldRanking: 301,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Ruhr University Bochum",
    city: "Bochum",
    description: "Almanya'nın ilk yeni tip üniversitelerinden, güçlü araştırma",
    programs: ["Mühendislik", "Doğa Bilimleri", "Tıp", "Sosyal Bilimler"],
    ranking: 2,
    worldRanking: 201,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Bonn",
    city: "Bonn",
    description: "1818'de kurulan, Nobel ödüllü mezunlarıyla ünlü üniversite",
    programs: ["Sosyal Bilimler", "Doğa Bilimleri", "Hukuk", "Matematik"],
    ranking: 1,
    worldRanking: 98,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Brandenburg University of Technology Cottbus-Senftenberg",
    city: "Cottbus",
    description: "Teknoloji ve çevre odaklı genç üniversite",
    programs: ["Mühendislik", "Çevre Teknolojisi", "Bilgisayar", "Mimarlık"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Braunschweig University of Technology",
    city: "Braunschweig",
    description: "1745'te kurulan, Almanya'nın en eski teknik üniversitesi",
    programs: ["Mühendislik", "Teknoloji", "Doğa Bilimleri", "Mimarlık"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Bremen",
    city: "Bremen",
    description: "Yenilikçi ve uluslararası odaklı araştırma üniversitesi",
    programs: ["Mühendislik", "Sosyal Bilimler", "Doğa Bilimleri", "İşletme"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Chemnitz University of Technology",
    city: "Chemnitz",
    description: "Teknoloji ve inovasyon odaklı modern üniversite",
    programs: ["Mühendislik", "Bilgisayar", "İşletme", "Doğa Bilimleri"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Clausthal University of Technology",
    city: "Clausthal-Zellerfeld",
    description: "Maden ve malzeme mühendisliğinde uzman üniversite",
    programs: ["Maden Mühendisliği", "Malzeme Bilimi", "Kimya", "Enerji"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Cologne (Universität zu Köln)",
    city: "Cologne",
    description: "1388'de kurulan, Almanya'nın en eski üniversitelerinden",
    programs: ["İşletme", "Hukuk", "Sosyal Bilimler", "Tıp"],
    ranking: 1,
    worldRanking: 145,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Technische Universität Darmstadt",
    city: "Darmstadt",
    description: "Teknoloji ve mühendislik alanında öncü üniversite",
    programs: ["Mühendislik", "Bilgisayar", "Fen Bilimleri", "Mimarlık"],
    ranking: 2,
    worldRanking: 251,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "TU Dortmund University",
    city: "Dortmund",
    description: "Teknoloji ve araştırma odaklı genç üniversite",
    programs: ["Mühendislik", "Bilgisayar", "Doğa Bilimleri", "İşletme"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "TU Dresden",
    city: "Dresden",
    description: "Doğu Almanya'nın en prestijli teknik üniversitesi",
    programs: ["Mühendislik", "Doğa Bilimleri", "Tıp", "Bilgisayar"],
    ranking: 2,
    worldRanking: 201,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Duisburg-Essen",
    city: "Duisburg-Essen",
    description: "Ruhr bölgesinin büyük araştırma üniversitesi",
    programs: ["Mühendislik", "İşletme", "Tıp", "Sosyal Bilimler"],
    ranking: 3,
    worldRanking: 301,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Heinrich Heine University Düsseldorf",
    city: "Düsseldorf",
    description: "Tıp ve doğa bilimleri alanında güçlü araştırma üniversitesi",
    programs: ["Tıp", "Doğa Bilimleri", "Hukuk", "Sosyal Bilimler"],
    ranking: 2,
    worldRanking: 251,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Erfurt",
    city: "Erfurt",
    description: "Liberal sanatlar ve sosyal bilimler odaklı üniversite",
    programs: ["Sosyal Bilimler", "Eğitim", "Hukuk", "Felsefe"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Friedrich-Alexander University Erlangen–Nürnberg (FAU)",
    city: "Erlangen",
    description: "Bayern'in ikinci büyük üniversitesi, güçlü araştırma",
    programs: ["Mühendislik", "Tıp", "Doğa Bilimleri", "İşletme"],
    ranking: 2,
    worldRanking: 201,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Flensburg (Europa-Universität Flensburg)",
    city: "Flensburg",
    description: "Eğitim bilimleri ve sürdürülebilirlik odaklı üniversite",
    programs: ["Eğitim", "Çevre Bilimleri", "İşletme", "Enerji"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Goethe University Frankfurt am Main",
    city: "Frankfurt am Main",
    description: "Almanya'nın en prestijli üniversitelerinden, güçlü finansal program",
    programs: ["İşletme", "Hukuk", "Sosyal Bilimler", "Tıp"],
    ranking: 1,
    worldRanking: 89,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "European University Viadrina Frankfurt (Oder)",
    city: "Frankfurt (Oder)",
    description: "Avrupa odaklı uluslararası üniversite",
    programs: ["Hukuk", "İşletme", "Kültürel Bilimler", "Avrupa Çalışmaları"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "TU Bergakademie Freiberg",
    city: "Freiberg",
    description: "Maden ve malzeme bilimlerinde dünya lideri",
    programs: ["Maden Mühendisliği", "Malzeme Bilimi", "Jeoloji", "Çevre Teknolojisi"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Freiburg (Albert-Ludwigs-Universität Freiburg)",
    city: "Freiburg",
    description: "1457'de kurulan, Almanya'nın en eski üniversitelerinden",
    programs: ["Tıp", "Doğa Bilimleri", "Hukuk", "Sosyal Bilimler"],
    ranking: 1,
    worldRanking: 108,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Justus Liebig University Giessen",
    city: "Giessen",
    description: "Veteriner hekimlik ve yaşam bilimleri alanında öncü",
    programs: ["Veteriner", "Tıp", "Doğa Bilimleri", "Sosyal Bilimler"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Göttingen (Georg-August-Universität)",
    city: "Göttingen",
    description: "1737'de kurulan, Nobel ödüllü bilim insanlarının üniversitesi",
    programs: ["Doğa Bilimleri", "Sosyal Bilimler", "Tıp", "Hukuk"],
    ranking: 1,
    worldRanking: 134,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Greifswald",
    city: "Greifswald",
    description: "1456'da kurulan, Baltık denizi kıyısında tarihi üniversite",
    programs: ["Tıp", "Doğa Bilimleri", "Sosyal Bilimler", "Hukuk"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "FernUniversität in Hagen",
    city: "Hagen",
    description: "Almanya'nın tek uzaktan eğitim üniversitesi",
    programs: ["İşletme", "Hukuk", "Matematik", "Bilgisayar"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Düşük Ücret",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Martin Luther University Halle-Wittenberg",
    city: "Halle",
    description: "1502'de kurulan, Martin Luther'in adını taşıyan üniversite",
    programs: ["Sosyal Bilimler", "Doğa Bilimleri", "Tıp", "Hukuk"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Hamburg",
    city: "Hamburg",
    description: "Kuzey Almanya'nın en büyük araştırma üniversitesi",
    programs: ["İşletme", "Hukuk", "Sosyal Bilimler", "Doğa Bilimleri"],
    ranking: 2,
    worldRanking: 201,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "HafenCity University Hamburg",
    city: "Hamburg",
    description: "Mimarlık ve şehir planlaması odaklı özel üniversite",
    programs: ["Mimarlık", "Şehir Planlama", "İnşaat", "Çevre Mühendisliği"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Hamburg University of Technology (TUHH)",
    city: "Hamburg",
    description: "Hamburg'un teknik üniversitesi, güçlü mühendislik programları",
    programs: ["Mühendislik", "Teknoloji", "Bilgisayar", "Çevre Teknolojisi"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Leibniz University Hannover",
    city: "Hannover",
    description: "Mühendislik ve doğa bilimleri alanında güçlü üniversite",
    programs: ["Mühendislik", "Doğa Bilimleri", "Hukuk", "İşletme"],
    ranking: 2,
    worldRanking: 251,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Heidelberg (Ruprecht-Karls-Universität)",
    city: "Heidelberg",
    description: "1386'da kurulan, Almanya'nın en eski üniversitesi",
    programs: ["Tıp", "Doğa Bilimleri", "Hukuk", "Sosyal Bilimler"],
    ranking: 1,
    worldRanking: 44,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Hildesheim",
    city: "Hildesheim",
    description: "Eğitim bilimleri ve kültürel çalışmalar odaklı üniversite",
    programs: ["Eğitim", "Sosyal Bilimler", "Kültürel Çalışmalar", "Bilgisayar"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Hohenheim",
    city: "Stuttgart-Hohenheim",
    description: "Tarım ve beslenme bilimleri alanında uzman üniversite",
    programs: ["Tarım", "Beslenme Bilimleri", "İşletme", "Doğa Bilimleri"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "TU Ilmenau",
    city: "Ilmenau",
    description: "Thüringen'de teknoloji odaklı üniversite",
    programs: ["Elektrik", "Bilgisayar", "Makine", "Medya Teknolojisi"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Jena (Friedrich-Schiller-Universität Jena)",
    city: "Jena",
    description: "1558'de kurulan, Thüringen'in araştırma üniversitesi",
    programs: ["Doğa Bilimleri", "Tıp", "Sosyal Bilimler", "Hukuk"],
    ranking: 2,
    worldRanking: 251,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "TU Kaiserslautern",
    city: "Kaiserslautern",
    description: "Teknoloji ve mühendislik odaklı güçlü araştırma üniversitesi",
    programs: ["Mühendislik", "Bilgisayar", "Fen Bilimleri", "Matematik"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Karlsruhe Institute of Technology (KIT)",
    city: "Karlsruhe",
    description: "Almanya'nın MIT'i olarak bilinen teknoloji enstitüsü",
    programs: ["Mühendislik", "Teknoloji", "Doğa Bilimleri", "Bilgisayar"],
    ranking: 1,
    worldRanking: 124,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Kassel",
    city: "Kassel",
    description: "Sürdürülebilirlik ve çevre teknolojileri odaklı üniversite",
    programs: ["Mühendislik", "Çevre Teknolojisi", "Sosyal Bilimler", "Sanat"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Kiel (Christian-Albrechts-Universität Kiel)",
    city: "Kiel",
    description: "1665'te kurulan, deniz bilimleri alanında öncü üniversite",
    programs: ["Deniz Bilimleri", "Tıp", "Doğa Bilimleri", "Sosyal Bilimler"],
    ranking: 2,
    worldRanking: 251,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Koblenz",
    city: "Koblenz",
    description: "Eğitim bilimleri ve bilgisayar bilimleri odaklı üniversite",
    programs: ["Eğitim", "Bilgisayar", "Sosyal Bilimler", "Doğa Bilimleri"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Konstanz",
    city: "Konstanz",
    description: "Elite üniversite statüsüne sahip, yenilikçi araştırma üniversitesi",
    programs: ["Sosyal Bilimler", "Doğa Bilimleri", "İşletme", "Hukuk"],
    ranking: 1,
    worldRanking: 167,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Leipzig",
    city: "Leipzig",
    description: "1409'da kurulan, Almanya'nın ikinci en eski üniversitesi",
    programs: ["Sosyal Bilimler", "Tıp", "Doğa Bilimleri", "Hukuk"],
    ranking: 2,
    worldRanking: 201,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Lübeck",
    city: "Lübeck",
    description: "Tıp ve yaşam bilimleri odaklı araştırma üniversitesi",
    programs: ["Tıp", "Yaşam Bilimleri", "Bilgisayar", "Mühendislik"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Leuphana University Lüneburg",
    city: "Lüneburg",
    description: "Sürdürülebilirlik ve liberal eğitim odaklı yenilikçi üniversite",
    programs: ["Sürdürülebilirlik", "İşletme", "Eğitim", "Kültürel Çalışmalar"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Magdeburg (Otto-von-Guericke-Universität)",
    city: "Magdeburg",
    description: "Mühendislik ve tıp alanında güçlü araştırma üniversitesi",
    programs: ["Mühendislik", "Tıp", "Doğa Bilimleri", "İşletme"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Johannes Gutenberg University Mainz",
    city: "Mainz",
    description: "Kapsamlı araştırma üniversitesi, güçlü medya programları",
    programs: ["Sosyal Bilimler", "Doğa Bilimleri", "Tıp", "Medya"],
    ranking: 2,
    worldRanking: 251,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Mannheim",
    city: "Mannheim",
    description: "İşletme ve sosyal bilimler alanında Almanya'nın lideri",
    programs: ["İşletme", "Sosyal Bilimler", "Hukuk", "Matematik"],
    ranking: 1,
    worldRanking: 134,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Philipps University Marburg",
    city: "Marburg",
    description: "1527'de kurulan, Almanya'nın en eski Protestan üniversitesi",
    programs: ["Sosyal Bilimler", "Doğa Bilimleri", "Tıp", "Hukuk"],
    ranking: 2,
    worldRanking: 251,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Technical University of Munich (TUM)",
    city: "Munich",
    description: "Almanya'nın en prestijli teknik üniversitesi",
    programs: ["Mühendislik", "Doğa Bilimleri", "Tıp", "İşletme"],
    ranking: 1,
    worldRanking: 38,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Ludwig Maximilian University of Munich (LMU)",
    city: "Munich",
    description: "1472'de kurulan, Almanya'nın en prestijli üniversitelerinden",
    programs: ["Sosyal Bilimler", "Doğa Bilimleri", "Tıp", "Hukuk"],
    ranking: 1,
    worldRanking: 59,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Bundeswehr University Munich",
    city: "Munich",
    description: "Alman silahlı kuvvetlerinin üniversitesi",
    programs: ["Mühendislik", "İşletme", "Sosyal Bilimler", "Bilgisayar"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Askeri Üniversite - Özel",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Münster (WWU)",
    city: "Münster",
    description: "1780'de kurulan, geniş kapsamlı araştırma üniversitesi",
    programs: ["Sosyal Bilimler", "Doğa Bilimleri", "Tıp", "Hukuk"],
    ranking: 1,
    worldRanking: 156,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Oldenburg (Carl von Ossietzky Universität)",
    city: "Oldenburg",
    description: "Sürdürülebilirlik ve enerji araştırmaları odaklı üniversite",
    programs: ["Enerji", "Çevre Bilimleri", "Eğitim", "İşletme"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Osnabrück",
    city: "Osnabrück",
    description: "Sosyal bilimler ve bilişsel bilimler alanında güçlü üniversite",
    programs: ["Sosyal Bilimler", "Bilişsel Bilim", "İşletme", "Hukuk"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Paderborn",
    city: "Paderborn",
    description: "Bilgisayar bilimleri ve mühendislik alanında güçlü üniversite",
    programs: ["Bilgisayar", "Mühendislik", "İşletme", "Eğitim"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Passau",
    city: "Passau",
    description: "Hukuk ve işletme alanında güçlü küçük üniversite",
    programs: ["Hukuk", "İşletme", "Bilgisayar", "Sosyal Bilimler"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Potsdam",
    city: "Potsdam",
    description: "Brandenburg'un ana üniversitesi, güçlü araştırma",
    programs: ["Sosyal Bilimler", "Doğa Bilimleri", "Hukuk", "İşletme"],
    ranking: 2,
    worldRanking: 251,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Regensburg",
    city: "Regensburg",
    description: "Modern kampüs üniversitesi, güçlü araştırma programları",
    programs: ["Sosyal Bilimler", "Doğa Bilimleri", "Tıp", "Hukuk"],
    ranking: 2,
    worldRanking: 251,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Rostock",
    city: "Rostock",
    description: "1419'da kurulan, Baltık denizi kıyısında tarihi üniversite",
    programs: ["Denizcilik", "Mühendislik", "Tıp", "Sosyal Bilimler"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Saarland University (Universität des Saarlandes)",
    city: "Saarbrücken",
    description: "Bilgisayar bilimleri ve mühendislik alanında güçlü üniversite",
    programs: ["Bilgisayar", "Mühendislik", "Tıp", "Hukuk"],
    ranking: 3,
    worldRanking: 401,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Siegen",
    city: "Siegen",
    description: "Mühendislik ve sosyal bilimler alanında güçlü üniversite",
    programs: ["Mühendislik", "Sosyal Bilimler", "İşletme", "Eğitim"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "German University of Administrative Sciences Speyer",
    city: "Speyer",
    description: "Kamu yönetimi alanında uzman üniversite",
    programs: ["Kamu Yönetimi", "Hukuk", "İşletme", "Sosyal Bilimler"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Stuttgart",
    city: "Stuttgart",
    description: "Mühendislik ve teknoloji alanında dünya çapında tanınan üniversite",
    programs: ["Mühendislik", "Teknoloji", "Mimarlık", "Doğa Bilimleri"],
    ranking: 2,
    worldRanking: 201,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Trier",
    city: "Trier",
    description: "Sosyal bilimler ve hukuk alanında güçlü küçük üniversite",
    programs: ["Sosyal Bilimler", "Hukuk", "İşletme", "Çevre Bilimleri"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Tübingen (Eberhard Karls Universität)",
    city: "Tübingen",
    description: "1477'de kurulan, Almanya'nın en prestijli üniversitelerinden",
    programs: ["Sosyal Bilimler", "Doğa Bilimleri", "Tıp", "Hukuk"],
    ranking: 1,
    worldRanking: 89,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Ulm",
    city: "Ulm",
    description: "Tıp ve doğa bilimleri odaklı araştırma üniversitesi",
    programs: ["Tıp", "Doğa Bilimleri", "Mühendislik", "Matematik"],
    ranking: 2,
    worldRanking: 251,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Vechta",
    city: "Vechta",
    description: "Eğitim bilimleri ve sürdürülebilirlik odaklı küçük üniversite",
    programs: ["Eğitim", "Sürdürülebilirlik", "Sosyal Bilimler", "Çevre"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Bauhaus University Weimar",
    city: "Weimar",
    description: "Mimarlık, sanat ve tasarım alanında dünyaca ünlü üniversite",
    programs: ["Mimarlık", "Sanat", "Tasarım", "Medya"],
    ranking: 2,
    worldRanking: 251,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Weimar (Bauhaus)",
    city: "Weimar",
    description: "Bauhaus geleneğini sürdüren sanat ve tasarım üniversitesi",
    programs: ["Sanat", "Tasarım", "Mimarlık", "Medya"],
    ranking: 2,
    worldRanking: 251,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Wuppertal (Bergische Universität Wuppertal)",
    city: "Wuppertal",
    description: "Mühendislik ve tasarım alanında güçlü üniversite",
    programs: ["Mühendislik", "Tasarım", "İşletme", "Eğitim"],
    ranking: 4,
    worldRanking: 601,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Würzburg (Julius-Maximilians-Universität Würzburg)",
    city: "Würzburg",
    description: "1402'de kurulan, tıp ve doğa bilimleri alanında güçlü üniversite",
    programs: ["Tıp", "Doğa Bilimleri", "Sosyal Bilimler", "Hukuk"],
    ranking: 1,
    worldRanking: 167,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  }
];

const categoryOptions = ["Üniversite", "Fachhochschule"];
const programs = ["Tümü", "Mühendislik", "Tıp", "İşletme", "Hukuk", "Fen Bilimleri"];

export default function Universities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<UniversityCategory>("Üniversite");
  const [selectedProgram, setSelectedProgram] = useState("Tümü");

  const filteredUniversities = universities.filter(uni => {
    const matchesSearch = (uni.name?.toLowerCase().includes(searchTerm.toLowerCase()) || false) ||
                         uni.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProgram = selectedProgram === "Tümü" || uni.programs.some(p => p.includes(selectedProgram));
    const matchesCategory = uni.category === selectedCategory;
    
    return matchesSearch && matchesProgram && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pt-16">
      <Navbar />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6" data-testid="universities-page-title">
            Partner Üniversitelerimiz
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" data-testid="universities-page-description">
            Almanya'nın en prestijli üniversiteleriyle işbirliği halindeyiz. Size en uygun üniversiteyi bulmanıza yardımcı oluyoruz.
          </p>
        </div>


        {/* Filters */}
        <div className="bg-card p-6 rounded-xl border border-border mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Üniversite ara..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                data-testid="search-input"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <GraduationCap className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <select
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background appearance-none"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as UniversityCategory)}
                data-testid="category-filter"
              >
                {categoryOptions.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Program Filter */}
            <div className="relative">
              <Filter className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <select
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background appearance-none"
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                data-testid="program-filter"
              >
                {programs.map(program => (
                  <option key={program} value={program}>{program}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-muted-foreground" data-testid="results-count">
            {filteredUniversities.length} {selectedCategory === "Fachhochschule" ? "fachhochschule" : selectedCategory === "Üniversite" ? "üniversite" : "kurum"} bulundu
          </p>
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredUniversities.map((university, index) => (
            <div key={index} className="bg-card p-6 rounded-xl shadow-sm border border-border card-hover" data-testid={`university-${index}`}>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-foreground" data-testid={`university-name-${index}`}>
                    {university.name}
                  </h3>
                  <div className="text-right">
                    <div className="bg-gradient-to-r from-accent to-primary text-white px-3 py-1 rounded-lg border-2 border-accent/20 text-sm font-bold shadow-sm">
                      Dünya #{university.worldRanking}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span data-testid={`university-city-${index}`}>{university.city}</span>
                </div>
                
                <p className="text-muted-foreground" data-testid={`university-description-${index}`}>
                  {university.description}
                </p>
                
                <div className="space-y-2">
                  <div className="text-sm font-medium text-foreground">Popüler Programlar:</div>
                  <div className="flex flex-wrap gap-2">
                    {university.programs.map((program, programIndex) => (
                      <span 
                        key={programIndex} 
                        className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                        data-testid={`university-program-${index}-${programIndex}`}
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-1 text-sm">
                  <div className="text-muted-foreground">
                    <span className="font-medium">Dil:</span> {university.language.join(", ")}
                  </div>
                </div>
                
                <Link href={`/university/${index}`}>
                  <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors" data-testid={`university-button-${index}`}>
                    Detayları İncele
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredUniversities.length === 0 && (
          <div className="text-center py-20" data-testid="no-results">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Üniversite bulunamadı</h3>
            <p className="text-muted-foreground">Arama kriterlerinizi değiştirerek tekrar deneyin.</p>
          </div>
        )}

        {/* Why Study in Germany */}
        <div className="bg-muted rounded-2xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center" data-testid="why-germany-title">
            Neden Almanya'da Eğitim?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ücretsiz Eğitim",
                description: "Devlet üniversitelerinde eğitim ücretsiz, sadece dönem başı küçük ücretler"
              },
              {
                title: "Uluslararası Tanınırlık",
                description: "Alman diplomanız dünya çapında kabul görmektedir"
              },
              {
                title: "İş İmkanları",
                description: "Güçlü ekonomi ve yüksek iş bulma oranı"
              },
              {
                title: "Araştırma Fırsatları",
                description: "Dünya çapında araştırma merkezleri ve projeler"
              },
              {
                title: "Zengin Kültür",
                description: "Tarih, sanat ve kültürle dolu bir yaşam"
              },
              {
                title: "Avrupa'ya Kapı",
                description: "AB vatandaşlığı ve serbest dolaşım hakkı"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center space-y-4" data-testid={`benefit-${index}`}>
                <h3 className="text-xl font-semibold text-foreground" data-testid={`benefit-title-${index}`}>{benefit.title}</h3>
                <p className="text-muted-foreground" data-testid={`benefit-description-${index}`}>{benefit.description}</p>
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
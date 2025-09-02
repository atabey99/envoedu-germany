import { Search, Filter, MapPin, GraduationCap, Building } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";

type UniversityCategory = "Üniversite" | "Fachhochschule";

const universities = [
  {
    name: "RWTH Aachen University",
    city: "Aachen",
    description: "Almanya'nın en büyük teknik üniversitesi",
    programs: ["Mühendislik", "Makine", "Elektrik"],
    ranking: 5,
    worldRanking: 92,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Augsburg",
    city: "Augsburg",
    description: "Bavyera'da kaliteli eğitim sunan üniversite",
    programs: ["İşletme", "Sosyal Bilimler", "Matematik"],
    ranking: 4,
    worldRanking: 412,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Bamberg",
    city: "Bamberg",
    description: "Tarihi şehirde modern eğitim",
    programs: ["Sosyal Bilimler", "İnsan Bilimleri", "Bilgi İşlem"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Bayreuth",
    city: "Bayreuth",
    description: "İnovatif ve disiplinlerarası eğitim",
    programs: ["Hukuk", "Ekonomi", "Kültür Çalışmaları"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Free University of Berlin",
    city: "Berlin",
    description: "Berlin'in liberal ve uluslararası üniversitesi",
    programs: ["Siyaset Bilimi", "Edebiyat", "Psikoloji"],
    ranking: 4,
    worldRanking: 104,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Humboldt University of Berlin",
    city: "Berlin",
    description: "Berlin'in kalbi Unter den Linden'da",
    programs: ["İşletme", "Sosyoloji", "Tarih"],
    ranking: 4,
    worldRanking: 84,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Technical University of Berlin",
    city: "Berlin",
    description: "Berlin'de teknik eğitimin öncüsü",
    programs: ["Mühendislik", "Bilgisayar Bilimleri", "Matematik"],
    ranking: 5,
    worldRanking: 140,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Berlin University of the Arts",
    city: "Berlin",
    description: "Sanat ve tasarım eğitiminde lider",
    programs: ["Güzel Sanatlar", "Müzik", "Tasarım"],
    ranking: 5,
    worldRanking: 234,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Bielefeld University",
    city: "Bielefeld",
    description: "Sosyal bilimler ve teknoloji odaklı",
    programs: ["Sosyoloji", "Psikoloji", "Biyoloji"],
    ranking: 4,
    worldRanking: 234,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Ruhr University Bochum",
    city: "Bochum",
    description: "Ruhr bölgesinin araştırma üniversitesi",
    programs: ["Mühendislik", "Tıp", "Doğa Bilimleri"],
    ranking: 4,
    worldRanking: 325,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Bonn",
    city: "Bonn",
    description: "Eski başkent Bonn'da prestijli eğitim",
    programs: ["Hukuk", "Ekonomi", "Tıp"],
    ranking: 5,
    worldRanking: 89,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Brandenburg University of Technology",
    city: "Cottbus",
    description: "Teknoloji ve mühendislik odaklı üniversite",
    programs: ["Mühendislik", "Çevre Bilimleri", "Bilgisayar"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Braunschweig University of Technology",
    city: "Braunschweig",
    description: "Teknik eğitimde 270 yıllık deneyim",
    programs: ["Mühendislik", "Doğa Bilimleri", "Mimarlık"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Bremen",
    city: "Bremen",
    description: "Kuzey Almanya'da araştırma odaklı üniversite",
    programs: ["Mühendislik", "Sosyal Bilimler", "Doğa Bilimleri"],
    ranking: 4,
    worldRanking: 234,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Chemnitz University of Technology",
    city: "Chemnitz",
    description: "Doğu Almanya'da modern teknoloji üniversitesi",
    programs: ["Mühendislik", "Bilgisayar Bilimleri", "Ekonomi"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Clausthal University of Technology",
    city: "Clausthal",
    description: "Maden ve malzeme mühendisliğinde uzman",
    programs: ["Maden Mühendisliği", "Malzeme Bilimi", "Enerji"],
    ranking: 4,
    worldRanking: 678,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Cologne",
    city: "Köln",
    description: "Almanya'nın en büyük üniversitelerinden",
    programs: ["İşletme", "Hukuk", "Tıp"],
    ranking: 5,
    worldRanking: 145,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Darmstadt University of Technology",
    city: "Darmstadt",
    description: "Teknoloji ve mühendislikte excellence",
    programs: ["Mühendislik", "Bilgisayar", "Matematik"],
    ranking: 5,
    worldRanking: 234,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "TU Dortmund University",
    city: "Dortmund",
    description: "Ruhr bölgesinde teknoloji üniversitesi",
    programs: ["Mühendislik", "Bilgisayar", "Fizik"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Dresden University of Technology",
    city: "Dresden",
    description: "Doğu Almanya'nın en büyük teknik üniversitesi",
    programs: ["Mühendislik", "Tıp", "Doğa Bilimleri"],
    ranking: 5,
    worldRanking: 167,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Duisburg-Essen",
    city: "Duisburg",
    description: "NRW'de modern ve uluslararası üniversite",
    programs: ["Mühendislik", "İşletme", "Tıp"],
    ranking: 4,
    worldRanking: 275,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Düsseldorf",
    city: "Düsseldorf",
    description: "NRW'de prestijli araştırma üniversitesi",
    programs: ["Tıp", "Hukuk", "Felsefe"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Erfurt",
    city: "Erfurt",
    description: "Thüringen'de liberal arts eğitimi",
    programs: ["Eğitim", "Sosyal Bilimler", "Felsefe"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Erlangen-Nuremberg",
    city: "Erlangen",
    description: "Friedrich-Alexander Üniversitesi",
    programs: ["Mühendislik", "Tıp", "Doğa Bilimleri"],
    ranking: 5,
    worldRanking: 225,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Flensburg",
    city: "Flensburg",
    description: "Danimarka sınırında eğitim odaklı üniversite",
    programs: ["Eğitim", "Çevre Bilimleri", "Uluslararası İşletme"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Goethe University Frankfurt",
    city: "Frankfurt",
    description: "Finans merkezi Frankfurt'ta prestijli üniversite",
    programs: ["İşletme", "Finans", "Hukuk"],
    ranking: 5,
    worldRanking: 225,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Freiburg",
    city: "Freiburg",
    description: "Baden-Württemberg'de eski ve prestijli üniversite",
    programs: ["Tıp", "Hukuk", "Doğa Bilimleri"],
    ranking: 5,
    worldRanking: 128,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Giessen",
    city: "Giessen",
    description: "Veteriner ve tarım bilimlerinde öncü",
    programs: ["Veteriner", "Tarım", "Yaşam Bilimleri"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Göttingen",
    city: "Göttingen",
    description: "Nobel ödüllü bilim insanlarının üniversitesi",
    programs: ["Fizik", "Matematik", "Biyoloji"],
    ranking: 5,
    worldRanking: 121,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Greifswald",
    city: "Greifswald",
    description: "Baltık denizi kıyısında tarihi üniversite",
    programs: ["Tıp", "Hukuk", "Teoloji"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Hagen",
    city: "Hagen",
    description: "Almanya'nın uzaktan eğitim üniversitesi",
    programs: ["İşletme", "Hukuk", "Matematik"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Uzaktan Eğitim - Düşük ücret",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Halle-Wittenberg",
    city: "Halle",
    description: "Martin Luther Üniversitesi",
    programs: ["Tarih", "Felsefe", "Doğa Bilimleri"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Hamburg",
    city: "Hamburg",
    description: "Kuzey Almanya'nın büyük araştırma üniversitesi",
    programs: ["İşletme", "Hukuk", "Sosyal Bilimler"],
    ranking: 4,
    worldRanking: 132,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Leibniz University Hannover",
    city: "Hannover",
    description: "Teknoloji ve doğa bilimlerinde güçlü",
    programs: ["Mühendislik", "Doğa Bilimleri", "Mimarlık"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Heidelberg",
    city: "Heidelberg",
    description: "Almanya'nın en eski ve prestijli üniversitesi",
    programs: ["Tıp", "Hukuk", "Felsefe"],
    ranking: 5,
    worldRanking: 47,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Hildesheim",
    city: "Hildesheim",
    description: "Kültür ve medya çalışmalarında öncü",
    programs: ["Medya", "Kültür", "Eğitim"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Hohenheim",
    city: "Stuttgart",
    description: "Tarım ve beslenme bilimlerinde uzman",
    programs: ["Tarım", "Beslenme", "Ekonomi"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Technical University Ilmenau",
    city: "Ilmenau",
    description: "Thüringen'de teknoloji odaklı üniversite",
    programs: ["Elektrik", "Bilgisayar", "Makine"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Jena",
    city: "Jena",
    description: "Friedrich Schiller Üniversitesi",
    programs: ["Optik", "Biyoloji", "Felsefe"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Kassel",
    city: "Kassel",
    description: "Hessen'de yenilikçi eğitim anlayışı",
    programs: ["Mühendislik", "Eğitim", "Sosyal Bilimler"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Kiel",
    city: "Kiel",
    description: "Christian-Albrechts Üniversitesi",
    programs: ["Deniz Bilimleri", "Tıp", "Hukuk"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Koblenz-Landau",
    city: "Koblenz",
    description: "Rheinland-Pfalz'da eğitim odaklı",
    programs: ["Eğitim", "Psikoloji", "Bilgisayar"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Konstanz",
    city: "Konstanz",
    description: "Bodensee kıyısında excellence üniversitesi",
    programs: ["Sosyal Bilimler", "Doğa Bilimleri", "İnsan Bilimleri"],
    ranking: 4,
    worldRanking: 275,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Leipzig",
    city: "Leipzig",
    description: "Doğu Almanya'nın en eski üniversitesi",
    programs: ["Hukuk", "Tıp", "Sosyal Bilimler"],
    ranking: 4,
    worldRanking: 234,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Lübeck",
    city: "Lübeck",
    description: "Tıp ve yaşam bilimleri odaklı",
    programs: ["Tıp", "Bilgisayar", "Mühendislik"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Leuphana University Lüneburg",
    city: "Lüneburg",
    description: "Sürdürülebilirlik ve liberal arts",
    programs: ["Sürdürülebilirlik", "İşletme", "Kültür"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Magdeburg",
    city: "Magdeburg",
    description: "Otto von Guericke Üniversitesi",
    programs: ["Mühendislik", "Tıp", "Doğa Bilimleri"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Mainz",
    city: "Mainz",
    description: "Johannes Gutenberg Üniversitesi",
    programs: ["Tıp", "Doğa Bilimleri", "İnsan Bilimleri"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Mannheim",
    city: "Mannheim",
    description: "İşletme ve ekonomide Almanya'nın en iyisi",
    programs: ["İşletme", "Ekonomi", "Sosyal Bilimler"],
    ranking: 5,
    worldRanking: 199,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Marburg",
    city: "Marburg",
    description: "Philipps Üniversitesi - Protestant geleneği",
    programs: ["Tıp", "Hukuk", "Felsefe"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Technical University of Munich",
    city: "München",
    description: "Almanya'nın en iyi teknik üniversitelerinden biri",
    programs: ["Mühendislik", "Fen Bilimleri", "Bilgisayar Bilimleri"],
    ranking: 5,
    worldRanking: 26,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Ludwig Maximilian University Munich",
    city: "München",
    description: "LMU - Bavyera'nın prestijli üniversitesi",
    programs: ["Tıp", "Hukuk", "İnsan Bilimleri"],
    ranking: 5,
    worldRanking: 38,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Münster",
    city: "Münster",
    description: "Westfälische Wilhelms Üniversitesi",
    programs: ["Hukuk", "İşletme", "Sosyal Bilimler"],
    ranking: 4,
    worldRanking: 188,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Oldenburg",
    city: "Oldenburg",
    description: "Carl von Ossietzky Üniversitesi",
    programs: ["Eğitim", "Sosyal Bilimler", "Doğa Bilimleri"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Osnabrück",
    city: "Osnabrück",
    description: "Niedersachsen'de kapsamlı üniversite",
    programs: ["Eğitim", "Sosyal Bilimler", "Doğa Bilimleri"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Paderborn",
    city: "Paderborn",
    description: "Bilgisayar bilimleri ve mühendislik odaklı",
    programs: ["Bilgisayar", "Mühendislik", "İşletme"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Passau",
    city: "Passau",
    description: "Bavyera sınırında hukuk ve işletme",
    programs: ["Hukuk", "İşletme", "Bilgisayar"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Potsdam",
    city: "Potsdam",
    description: "Brandenburg'da genç ve dinamik üniversite",
    programs: ["Sosyal Bilimler", "Doğa Bilimleri", "İnsan Bilimleri"],
    ranking: 4,
    worldRanking: 225,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Regensburg",
    city: "Regensburg",
    description: "Bavyera'da modern araştırma üniversitesi",
    programs: ["Tıp", "Hukuk", "Doğa Bilimleri"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Rostock",
    city: "Rostock",
    description: "Baltık denizi kıyısında denizcilik odaklı",
    programs: ["Denizcilik", "Mühendislik", "Tıp"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Saarland University",
    city: "Saarbrücken",
    description: "Fransa sınırında çok kültürlü üniversite",
    programs: ["Bilgisayar", "Mühendislik", "Tıp"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce", "Fransızca"]
  },
  {
    name: "University of Siegen",
    city: "Siegen",
    description: "NRW'de araştırma odaklı üniversite",
    programs: ["Mühendislik", "Sosyal Bilimler", "Ekonomi"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "German University of Administrative Sciences Speyer",
    city: "Speyer",
    description: "Kamu yönetimi ve hukuk uzmanı",
    programs: ["Kamu Yönetimi", "Hukuk", "Siyaset"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Özel Üniversite",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Stuttgart",
    city: "Stuttgart",
    description: "Baden-Württemberg'de teknoloji odaklı",
    programs: ["Mühendislik", "Teknoloji", "Mimarlık"],
    ranking: 5,
    worldRanking: 275,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Trier",
    city: "Trier",
    description: "Roma tarihinde zengin geçmiş",
    programs: ["Hukuk", "Ekonomi", "Sosyal Bilimler"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Tübingen",
    city: "Tübingen",
    description: "Eberhard Karls Üniversitesi",
    programs: ["Tıp", "Hukuk", "Teoloji"],
    ranking: 5,
    worldRanking: 100,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Ulm",
    city: "Ulm",
    description: "Tıp ve doğa bilimleri odaklı genç üniversite",
    programs: ["Tıp", "Doğa Bilimleri", "Mühendislik"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Vechta",
    city: "Vechta",
    description: "Niedersachsen'de eğitim odaklı küçük üniversite",
    programs: ["Eğitim", "Sosyal Çalışma", "Kültür"],
    ranking: 3,
    worldRanking: 678,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Bauhaus University Weimar",
    city: "Weimar",
    description: "Sanat, tasarım ve mimarlık odaklı",
    programs: ["Mimarlık", "Tasarım", "Sanat"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Wuppertal",
    city: "Wuppertal",
    description: "Bergische Universität",
    programs: ["Eğitim", "Mühendislik", "Sosyal Bilimler"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Würzburg",
    city: "Würzburg",
    description: "Julius-Maximilians Üniversitesi",
    programs: ["Tıp", "Hukuk", "Doğa Bilimleri"],
    ranking: 4,
    worldRanking: 163,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "FH Aachen – University of Applied Sciences",
    city: "Aachen",
    description: "Uygulamalı bilimler odaklı yüksekokul",
    programs: ["Uygulamalı Mühendislik", "İşletme", "Tasarım"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule München (HM)",
    city: "München",
    description: "Bavyera'da uygulamalı bilimler üniversitesi",
    programs: ["Bilgisayar Mühendisliği", "İşletme", "Medya"],
    ranking: 4,
    worldRanking: 523,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Technische Hochschule Köln (TH Köln)",
    city: "Köln",
    description: "Teknik uygulamalar ve inovasyon merkezi",
    programs: ["Uygulamalı Teknoloji", "İnşaat", "Elektrik"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule für Wirtschaft und Recht Berlin (HWR Berlin)",
    city: "Berlin",
    description: "İktisat ve hukuk odaklı uygulamalı eğitim",
    programs: ["İşletme", "Hukuk", "Kamu Yönetimi"],
    ranking: 3,
    worldRanking: 612,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Hamburg (HAW Hamburg)",
    city: "Hamburg",
    description: "Kuzey Almanya'da uygulamalı bilimler",
    programs: ["Denizcilik", "Medya", "Uygulamalı Bilimler"],
    ranking: 4,
    worldRanking: 478,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Mannheim",
    city: "Mannheim",
    description: "Baden-Württemberg'de uygulamalı teknoloji",
    programs: ["Makine", "Elektrik", "Bilişim"],
    ranking: 4,
    worldRanking: 534,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Düsseldorf – University of Applied Sciences",
    city: "Düsseldorf",
    description: "NRW'de uygulamalı bilimler üniversitesi",
    programs: ["Tasarım", "Medya", "Sosyal Çalışma"],
    ranking: 3,
    worldRanking: 589,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Karlsruhe – Technik und Wirtschaft",
    city: "Karlsruhe",
    description: "Teknoloji ve ekonomi odaklı eğitim",
    programs: ["Bilgisayar", "Makine", "İşletme"],
    ranking: 4,
    worldRanking: 498,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Stuttgart (HFT Stuttgart)",
    city: "Stuttgart",
    description: "İnşaat ve mimarlık teknolojileri",
    programs: ["İnşaat", "Mimarlık", "Şehir Planlama"],
    ranking: 4,
    worldRanking: 523,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Bremen – City University of Applied Sciences",
    city: "Bremen",
    description: "Uluslararası odaklı uygulamalı bilimler",
    programs: ["Lojistik", "Denizcilik", "Uluslararası İşletme"],
    ranking: 3,
    worldRanking: 634,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Bonn-Rhein-Sieg",
    city: "Bonn",
    description: "Rhein bölgesinde uygulamalı teknoloji",
    programs: ["Bilgisayar", "Elektrik", "Doğa Bilimleri"],
    ranking: 3,
    worldRanking: 598,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Augsburg",
    city: "Augsburg",
    description: "Bavyera'da uygulamalı mühendislik",
    programs: ["Makine", "Bilgisayar", "İşletme"],
    ranking: 3,
    worldRanking: 612,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Technische Hochschule Nürnberg (Georg Simon Ohm)",
    city: "Nürnberg",
    description: "Georg Simon Ohm Teknik Üniversitesi",
    programs: ["Elektrik", "Makine", "Bilişim"],
    ranking: 4,
    worldRanking: 467,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Darmstadt (h_da)",
    city: "Darmstadt",
    description: "Hessen'de uygulamalı bilimler merkezi",
    programs: ["Bilgisayar", "Tasarım", "İşletme"],
    ranking: 4,
    worldRanking: 489,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Esslingen – University of Applied Sciences",
    city: "Esslingen",
    description: "Otomotiv ve mühendislik teknolojileri",
    programs: ["Otomotiv", "Makine", "Elektrik"],
    ranking: 4,
    worldRanking: 445,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Albstadt-Sigmaringen",
    city: "Albstadt",
    description: "Mühendislik ve tekstil odaklı uygulamalı bilimler",
    programs: ["Tekstil", "Makine", "İşletme"],
    ranking: 3,
    worldRanking: 678,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Anhalt (FH)",
    city: "Köthen",
    description: "Saksonya-Anhalt'ta uygulamalı teknoloji",
    programs: ["Bilgisayar", "Elektrik", "Mimarlık"],
    ranking: 3,
    worldRanking: 645,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Ansbach",
    city: "Ansbach",
    description: "Bavyera'da uygulamalı ekonomi ve teknoloji",
    programs: ["İşletme", "Mühendislik", "Medya"],
    ranking: 3,
    worldRanking: 623,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Aschaffenburg",
    city: "Aschaffenburg",
    description: "Bavyera'da uygulamalı bilimler ve mühendislik",
    programs: ["Elektrik", "Makine", "İşletme"],
    ranking: 3,
    worldRanking: 656,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Biberach",
    city: "Biberach",
    description: "İnşaat ve yaşam bilimleri odaklı",
    programs: ["İnşaat", "Mimarlık", "Yaşam Bilimleri"],
    ranking: 3,
    worldRanking: 634,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Bochum",
    city: "Bochum",
    description: "Ruhr bölgesinde uygulamalı teknoloji",
    programs: ["Mühendislik", "Bilgisayar", "İşletme"],
    ranking: 4,
    worldRanking: 512,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Bremerhaven",
    city: "Bremerhaven",
    description: "Denizcilik ve lojistik odaklı",
    programs: ["Denizcilik", "Lojistik", "Teknoloji"],
    ranking: 3,
    worldRanking: 589,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Brandenburg University of Applied Sciences",
    city: "Brandenburg",
    description: "Brandenburg'da uygulamalı bilimler",
    programs: ["Teknoloji", "İşletme", "Sağlık"],
    ranking: 3,
    worldRanking: 612,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Coburg",
    city: "Coburg",
    description: "Bavyera'da uygulamalı bilimler ve sanat",
    programs: ["Tasarım", "Mühendislik", "Sosyal Çalışma"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Deggendorf (TH Deggendorf)",
    city: "Deggendorf",
    description: "Bavyera'da teknoloji üniversitesi",
    programs: ["Bilgisayar", "Elektrik", "İşletme"],
    ranking: 4,
    worldRanking: 478,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Emden/Leer",
    city: "Emden",
    description: "Kuzey Almanya'da denizcilik ve teknoloji",
    programs: ["Denizcilik", "Teknoloji", "İşletme"],
    ranking: 3,
    worldRanking: 598,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule für Technik und Wirtschaft des Saarlandes (htw saar)",
    city: "Saarbrücken",
    description: "Saarland'da teknoloji ve ekonomi",
    programs: ["Mühendislik", "İşletme", "Tasarım"],
    ranking: 4,
    worldRanking: 467,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Fulda – University of Applied Sciences",
    city: "Fulda",
    description: "Hessen'de uygulamalı bilimler üniversitesi",
    programs: ["Sağlık", "Teknoloji", "Sosyal Çalışma"],
    ranking: 3,
    worldRanking: 589,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Furtwangen (HFU)",
    city: "Furtwangen",
    description: "Schwarzwald'da teknoloji ve inovasyon",
    programs: ["Bilgisayar", "Medya", "Mühendislik"],
    ranking: 4,
    worldRanking: 445,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Flensburg – University of Applied Sciences",
    city: "Flensburg",
    description: "Danimarka sınırında uygulamalı bilimler",
    programs: ["Enerji", "Ekonomi", "Bilgisayar"],
    ranking: 3,
    worldRanking: 612,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Geisenheim University",
    city: "Geisenheim",
    description: "Şarap ve tarım bilimlerinde uzman",
    programs: ["Tarım", "Şarap", "Gıda"],
    ranking: 3,
    worldRanking: 634,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Göttingen (HAWK – Hildesheim/Holzminden/Göttingen)",
    city: "Göttingen",
    description: "Üç kampüste uygulamalı bilimler",
    programs: ["Sanat", "Mühendislik", "Sosyal Çalışma"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Gelsenkirchen (Westfälische Hochschule)",
    city: "Gelsenkirchen",
    description: "Westfalya uygulamalı bilimler üniversitesi",
    programs: ["Enerji", "Bilgisayar", "İşletme"],
    ranking: 4,
    worldRanking: 489,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Hannover",
    city: "Hannover",
    description: "Niedersachsen'de uygulamalı bilimler",
    programs: ["Mühendislik", "Medya", "İşletme"],
    ranking: 4,
    worldRanking: 445,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Harz – Wernigerode",
    city: "Wernigerode",
    description: "Harz dağlarında uygulamalı bilimler",
    programs: ["Turizm", "İşletme", "Bilgisayar"],
    ranking: 3,
    worldRanking: 623,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Heilbronn",
    city: "Heilbronn",
    description: "Baden-Württemberg'de teknoloji ve işletme",
    programs: ["Makine", "İşletme", "Bilgisayar"],
    ranking: 4,
    worldRanking: 478,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Hof – University of Applied Sciences",
    city: "Hof",
    description: "Bavyera'da uygulamalı bilimler ve teknoloji",
    programs: ["Bilgisayar", "Tekstil", "İşletme"],
    ranking: 3,
    worldRanking: 589,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Hildesheim (HAWK)",
    city: "Hildesheim",
    description: "Niedersachsen'de sanat ve teknoloji",
    programs: ["Sanat", "Teknoloji", "Sosyal Çalışma"],
    ranking: 3,
    worldRanking: 598,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Kaiserslautern",
    city: "Kaiserslautern",
    description: "Rheinland-Pfalz'da uygulamalı teknoloji",
    programs: ["Mühendislik", "Bilgisayar", "İşletme"],
    ranking: 4,
    worldRanking: 467,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Kempten",
    city: "Kempten",
    description: "Allgäu'da uygulamalı bilimler",
    programs: ["Turizm", "Mühendislik", "İşletme"],
    ranking: 3,
    worldRanking: 612,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Koblenz",
    city: "Koblenz",
    description: "Rhein-Mosel bölgesinde uygulamalı bilimler",
    programs: ["Mühendislik", "İşletme", "Sosyal Çalışma"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Konstanz (HTWG)",
    city: "Konstanz",
    description: "Bodensee kıyısında teknoloji üniversitesi",
    programs: ["Mühendislik", "Bilgisayar", "Mimarlık"],
    ranking: 4,
    worldRanking: 445,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Landshut",
    city: "Landshut",
    description: "Bavyera'da uygulamalı bilimler ve teknoloji",
    programs: ["Bilgisayar", "İşletme", "Sosyal Çalışma"],
    ranking: 3,
    worldRanking: 589,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Lausitz (Brandenburgische Technische Hochschule Cottbus-Senftenberg – FH Teil)",
    city: "Senftenberg",
    description: "Brandenburg'da teknoloji ve uygulamalı bilimler",
    programs: ["Enerji", "Çevre", "İşletme"],
    ranking: 3,
    worldRanking: 634,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Lemgo (Technische Hochschule Ostwestfalen-Lippe)",
    city: "Lemgo",
    description: "Doğu Westfalya'da teknoloji üniversitesi",
    programs: ["Otomasyon", "Bilgisayar", "İşletme"],
    ranking: 4,
    worldRanking: 489,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Lübeck",
    city: "Lübeck",
    description: "Schleswig-Holstein'da uygulamalı bilimler",
    programs: ["Bilgisayar", "Makine", "İşletme"],
    ranking: 4,
    worldRanking: 498,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Merseburg",
    city: "Merseburg",
    description: "Saksonya-Anhalt'ta uygulamalı teknoloji",
    programs: ["Kimya", "Mühendislik", "Medya"],
    ranking: 3,
    worldRanking: 634,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Mittweida",
    city: "Mittweida",
    description: "Saksonya'da teknoloji üniversitesi",
    programs: ["Bilgisayar", "Medya", "İşletme"],
    ranking: 3,
    worldRanking: 589,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Mainz",
    city: "Mainz",
    description: "Rheinland-Pfalz'da uygulamalı bilimler",
    programs: ["Tasarım", "Bilgisayar", "İşletme"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Minden (FH Bielefeld – Campus Minden)",
    city: "Minden",
    description: "Westfalya'da uygulamalı teknoloji kampüsü",
    programs: ["Mühendislik", "Bilgisayar", "İşletme"],
    ranking: 3,
    worldRanking: 598,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Münster",
    city: "Münster",
    description: "Westfalya'da uygulamalı bilimler üniversitesi",
    programs: ["Mühendislik", "İşletme", "Tasarım"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Neu-Ulm (HNU)",
    city: "Neu-Ulm",
    description: "Bavyera'da işletme odaklı uygulamalı bilimler",
    programs: ["İşletme", "Bilgisayar", "Sağlık"],
    ranking: 3,
    worldRanking: 612,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Niederrhein (Krefeld, Mönchengladbach)",
    city: "Krefeld",
    description: "Alt Ren bölgesinde uygulamalı bilimler",
    programs: ["Tekstil", "Mühendislik", "İşletme"],
    ranking: 4,
    worldRanking: 478,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Nürtingen-Geislingen (HfWU)",
    city: "Nürtingen",
    description: "Baden-Württemberg'de ekonomi üniversitesi",
    programs: ["İşletme", "Çevre", "Emlak"],
    ranking: 3,
    worldRanking: 589,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Neubrandenburg",
    city: "Neubrandenburg",
    description: "Mecklenburg-Vorpommern'da uygulamalı bilimler",
    programs: ["Sağlık", "Sosyal Çalışma", "Tarım"],
    ranking: 3,
    worldRanking: 645,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Offenburg",
    city: "Offenburg",
    description: "Baden-Württemberg'de teknoloji üniversitesi",
    programs: ["Mühendislik", "Bilgisayar", "İşletme"],
    ranking: 4,
    worldRanking: 467,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Osnabrück",
    city: "Osnabrück",
    description: "Niedersachsen'de uygulamalı bilimler üniversitesi",
    programs: ["Tarım", "Mühendislik", "İşletme"],
    ranking: 4,
    worldRanking: 445,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Ostfalia (Wolfenbüttel, Salzgitter, Suderburg, Wolfsburg)",
    city: "Wolfenbüttel",
    description: "Niedersachsen'de çok kampüslü uygulamalı bilimler",
    programs: ["Otomotiv", "Bilgisayar", "İşletme"],
    ranking: 4,
    worldRanking: 498,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule OTH Amberg-Weiden",
    city: "Amberg",
    description: "Bavyera'da doğu teknoloji üniversitesi",
    programs: ["Mühendislik", "Bilgisayar", "İşletme"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule OTH Regensburg",
    city: "Regensburg",
    description: "Bavyera'da doğu teknoloji üniversitesi",
    programs: ["Mühendislik", "Bilgisayar", "Sosyal Çalışma"],
    ranking: 4,
    worldRanking: 489,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Pforzheim",
    city: "Pforzheim",
    description: "Baden-Württemberg'de işletme ve teknoloji",
    programs: ["İşletme", "Tasarım", "Mühendislik"],
    ranking: 4,
    worldRanking: 445,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Potsdam",
    city: "Potsdam",
    description: "Brandenburg'da tasarım ve uygulamalı bilimler",
    programs: ["Tasarım", "Bilgisayar", "Sosyal Çalışma"],
    ranking: 3,
    worldRanking: 589,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Ravensburg-Weingarten",
    city: "Ravensburg",
    description: "Baden-Württemberg'de teknoloji ve sosyal bilimler",
    programs: ["Mühendislik", "Sosyal Çalışma", "İşletme"],
    ranking: 3,
    worldRanking: 612,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Reutlingen",
    city: "Reutlingen",
    description: "Baden-Württemberg'de uygulamalı bilimler",
    programs: ["Tekstil", "İşletme", "Bilgisayar"],
    ranking: 4,
    worldRanking: 467,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule RheinMain (Wiesbaden, Rüsselsheim)",
    city: "Wiesbaden",
    description: "Hessen'de uygulamalı bilimler üniversitesi",
    programs: ["Mühendislik", "İşletme", "Medya"],
    ranking: 4,
    worldRanking: 478,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Rosenheim (TH Rosenheim)",
    city: "Rosenheim",
    description: "Bavyera'da teknoloji üniversitesi",
    programs: ["Ahşap", "İnşaat", "İşletme"],
    ranking: 3,
    worldRanking: 598,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Schmalkalden",
    city: "Schmalkalden",
    description: "Thüringen'de uygulamalı bilimler",
    programs: ["İşletme", "Mühendislik", "Bilgisayar"],
    ranking: 3,
    worldRanking: 634,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Stralsund",
    city: "Stralsund",
    description: "Ostsee kıyısında uygulamalı bilimler",
    programs: ["Denizcilik", "Turizm", "Bilgisayar"],
    ranking: 3,
    worldRanking: 612,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Südwestfalen",
    city: "Hagen",
    description: "Kuzey Ren-Vestfalya'da uygulamalı teknoloji",
    programs: ["Mühendislik", "Bilgisayar", "İşletme"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Trier",
    city: "Trier",
    description: "Rheinland-Pfalz'da uygulamalı bilimler",
    programs: ["Mühendislik", "İşletme", "Tasarım"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Ulm",
    city: "Ulm",
    description: "Baden-Württemberg'de teknoloji ve sağlık",
    programs: ["Sağlık", "Mühendislik", "Bilgisayar"],
    ranking: 3,
    worldRanking: 589,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Weihenstephan-Triesdorf",
    city: "Freising",
    description: "Bavyera'da yaşam bilimleri üniversitesi",
    programs: ["Tarım", "Gıda", "Orman"],
    ranking: 4,
    worldRanking: 445,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Worms",
    city: "Worms",
    description: "Rheinland-Pfalz'da işletme odaklı",
    programs: ["İşletme", "Bilgisayar", "Turizm"],
    ranking: 3,
    worldRanking: 623,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Technische Hochschule Brandenburg",
    city: "Brandenburg",
    description: "Brandenburg'da teknoloji üniversitesi",
    programs: ["Mühendislik", "Bilgisayar", "İşletme"],
    ranking: 3,
    worldRanking: 598,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Technische Hochschule Deggendorf (OTHD)",
    city: "Deggendorf",
    description: "Bavyera'da doğu teknoloji üniversitesi",
    programs: ["Bilgisayar", "Mühendislik", "Sağlık"],
    ranking: 4,
    worldRanking: 467,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Technische Hochschule Ingolstadt",
    city: "Ingolstadt",
    description: "Bavyera'da teknoloji ve otomotiv",
    programs: ["Otomotiv", "Makine", "Bilgisayar"],
    ranking: 4,
    worldRanking: 489,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Technische Hochschule Mittelhessen (THM Gießen-Friedberg)",
    city: "Gießen",
    description: "Hessen'de teknoloji üniversitesi",
    programs: ["Mühendislik", "Bilgisayar", "İşletme"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Technische Hochschule Wildau",
    city: "Wildau",
    description: "Brandenburg'da teknoloji üniversitesi",
    programs: ["Mühendislik", "Lojistik", "Bilgisayar"],
    ranking: 3,
    worldRanking: 589,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Technische Hochschule Würzburg-Schweinfurt (THWS)",
    city: "Würzburg",
    description: "Bavyera'da teknoloji üniversitesi",
    programs: ["Mühendislik", "İşletme", "Bilgisayar"],
    ranking: 4,
    worldRanking: 467,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Zittau/Görlitz",
    city: "Zittau",
    description: "Saksonya'da sınır bölgesi uygulamalı bilimler",
    programs: ["Mühendislik", "Doğa Bilimleri", "İşletme"],
    ranking: 3,
    worldRanking: 612,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Zwickau (Westsächsische Hochschule Zwickau)",
    city: "Zwickau",
    description: "Batı Saksonya uygulamalı bilimler üniversitesi",
    programs: ["Otomotiv", "Teknoloji", "İşletme"],
    ranking: 3,
    worldRanking: 634,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule für angewandte Wissenschaften Hof",
    city: "Hof",
    description: "Bavyera'da uygulamalı bilimler üniversitesi",
    programs: ["Tekstil", "Bilgisayar", "İşletme"],
    ranking: 3,
    worldRanking: 598,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule für angewandte Wissenschaften Hamburg",
    city: "Hamburg",
    description: "Hamburg'da uygulamalı bilimler üniversitesi",
    programs: ["Denizcilik", "Medya", "Teknoloji"],
    ranking: 4,
    worldRanking: 478,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule für angewandte Wissenschaften Augsburg",
    city: "Augsburg",
    description: "Bavyera'da uygulamalı bilimler üniversitesi",
    programs: ["Mühendislik", "Bilgisayar", "İşletme"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule für angewandte Wissenschaften Erfurt",
    city: "Erfurt",
    description: "Thüringen'de uygulamalı bilimler üniversitesi",
    programs: ["İşletme", "Sosyal Çalışma", "Mühendislik"],
    ranking: 3,
    worldRanking: 623,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule für angewandte Wissenschaften Jena",
    city: "Jena",
    description: "Thüringen'de uygulamalı bilimler üniversitesi",
    programs: ["Mühendislik", "İşletme", "Sağlık"],
    ranking: 3,
    worldRanking: 589,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule für angewandte Wissenschaften Leipzig",
    city: "Leipzig",
    description: "Saksonya'da uygulamalı bilimler üniversitesi",
    programs: ["Medya", "Teknoloji", "İşletme"],
    ranking: 3,
    worldRanking: 612,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule für angewandte Wissenschaften Magdeburg-Stendal",
    city: "Magdeburg",
    description: "Saksonya-Anhalt'ta uygulamalı bilimler",
    programs: ["Su Mühendisliği", "İşletme", "Sosyal Çalışma"],
    ranking: 3,
    worldRanking: 645,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule für angewandte Wissenschaften Nordhausen",
    city: "Nordhausen",
    description: "Thüringen'de uygulamalı bilimler üniversitesi",
    programs: ["Mühendislik", "İşletme", "Sosyal Çalışma"],
    ranking: 3,
    worldRanking: 634,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule für angewandte Wissenschaften Weimar (Bauhaus – FH Bereich)",
    city: "Weimar",
    description: "Bauhaus geleneğinde uygulamalı sanat ve tasarım",
    programs: ["Tasarım", "Mimarlık", "Medya"],
    ranking: 4,
    worldRanking: 445,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Würzburg-Schweinfurt",
    city: "Würzburg",
    description: "Franken bölgesinde uygulamalı bilimler",
    programs: ["Mühendislik", "İşletme", "Bilgisayar"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Regensburg",
    city: "Regensburg",
    description: "Bavyera'da uygulamalı teknoloji ve işletme",
    programs: ["Bilgisayar", "Elektrik", "İşletme"],
    ranking: 4,
    worldRanking: 478,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Amberg-Weiden",
    city: "Amberg",
    description: "Oberpfalz'da teknoloji üniversitesi",
    programs: ["Makine", "Elektrik", "İşletme"],
    ranking: 3,
    worldRanking: 589,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Ingolstadt",
    city: "Ingolstadt",
    description: "Otomotiv sektörü merkezi uygulamalı bilimler",
    programs: ["Otomotiv", "Makine", "İşletme"],
    ranking: 4,
    worldRanking: 467,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Landshut",
    city: "Landshut",
    description: "Bavyera'da uygulamalı bilimler ve teknoloji",
    programs: ["Bilgisayar", "İşletme", "Sosyal Çalışma"],
    ranking: 3,
    worldRanking: 598,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Kiel",
    city: "Kiel",
    description: "Schleswig-Holstein'da denizcilik odaklı",
    programs: ["Denizcilik", "Bilgisayar", "İşletme"],
    ranking: 3,
    worldRanking: 612,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Niederrhein Krefeld",
    city: "Krefeld",
    description: "Tekstil ve moda teknolojileri merkezi",
    programs: ["Tekstil", "Moda", "Mühendislik"],
    ranking: 4,
    worldRanking: 445,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Magdeburg-Stendal",
    city: "Magdeburg",
    description: "Saksonya-Anhalt'ta uygulamalı bilimler",
    programs: ["Su", "Çevre", "İşletme"],
    ranking: 3,
    worldRanking: 634,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Bielefeld",
    city: "Bielefeld",
    description: "Westfalya'da uygulamalı bilimler üniversitesi",
    programs: ["Mühendislik", "Sağlık", "İşletme"],
    ranking: 4,
    worldRanking: 489,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Wiesbaden",
    city: "Wiesbaden",
    description: "Hessen başkentinde uygulamalı bilimler",
    programs: ["İşletme", "Tasarım", "Mühendislik"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Erfurt",
    city: "Erfurt",
    description: "Thüringen başkentinde uygulamalı bilimler",
    programs: ["Tarım", "İşletme", "Sosyal Çalışma"],
    ranking: 3,
    worldRanking: 612,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Jena",
    city: "Jena",
    description: "Thüringen'de teknoloji ve sağlık",
    programs: ["Sağlık", "Mühendislik", "İşletme"],
    ranking: 3,
    worldRanking: 598,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Leipzig",
    city: "Leipzig",
    description: "Saksonya'da teknoloji ve medya",
    programs: ["Medya", "Bilgisayar", "İşletme"],
    ranking: 3,
    worldRanking: 634,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Nordhausen",
    city: "Nordhausen",
    description: "Thüringen'de uygulamalı mühendislik",
    programs: ["Mühendislik", "İşletme", "Sosyal Çalışma"],
    ranking: 3,
    worldRanking: 645,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Weimar",
    city: "Weimar",
    description: "Bauhaus şehrinde sanat ve tasarım",
    programs: ["Tasarım", "Mimarlık", "Medya"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Cottbus",
    city: "Cottbus",
    description: "Brandenburg'da teknoloji ve çevre",
    programs: ["Çevre", "Enerji", "Mühendislik"],
    ranking: 3,
    worldRanking: 612,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Wismar",
    city: "Wismar",
    description: "Ostsee kıyısında teknoloji üniversitesi",
    programs: ["Denizcilik", "İnşaat", "İşletme"],
    ranking: 3,
    worldRanking: 589,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Dortmund",
    city: "Dortmund",
    description: "Ruhr bölgesinde uygulamalı bilimler",
    programs: ["Bilgisayar", "Mühendislik", "Sosyal Çalışma"],
    ranking: 4,
    worldRanking: 467,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Essen",
    city: "Essen",
    description: "Ruhr bölgesinde tasarım ve teknoloji",
    programs: ["Tasarım", "Bilgisayar", "İşletme"],
    ranking: 3,
    worldRanking: 598,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Friedberg",
    city: "Friedberg",
    description: "Hessen'de uygulamalı teknoloji",
    programs: ["Bilgisayar", "Elektrik", "İşletme"],
    ranking: 3,
    worldRanking: 623,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Magdeburg",
    city: "Magdeburg",
    description: "Saksonya-Anhalt başkentinde teknoloji",
    programs: ["Su Mühendisliği", "Bilgisayar", "İşletme"],
    ranking: 3,
    worldRanking: 634,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Chemnitz",
    city: "Chemnitz",
    description: "Saksonya'da teknoloji üniversitesi",
    programs: ["Teknoloji", "İşletme", "Tasarım"],
    ranking: 3,
    worldRanking: 612,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Oldenburg",
    city: "Oldenburg",
    description: "Niedersachsen'de uygulamalı bilimler",
    programs: ["Bilgisayar", "İşletme", "Sağlık"],
    ranking: 3,
    worldRanking: 589,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Aalen",
    city: "Aalen",
    description: "Baden-Württemberg'de teknoloji ve ekonomi",
    programs: ["Optik", "Makine", "İşletme"],
    ranking: 4,
    worldRanking: 478,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Bayreuth",
    city: "Bayreuth",
    description: "Oberfranken'da uygulamalı bilimler",
    programs: ["Mühendislik", "İşletme", "Sosyal Çalışma"],
    ranking: 3,
    worldRanking: 612,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Würzburg",
    city: "Würzburg",
    description: "Franken'da uygulamalı bilimler ve teknoloji",
    programs: ["İnşaat", "Bilgisayar", "İşletme"],
    ranking: 3,
    worldRanking: 598,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Bamberg",
    city: "Bamberg",
    description: "UNESCO şehrinde uygulamalı bilimler",
    programs: ["İşletme", "Sosyal Çalışma", "Teknoloji"],
    ranking: 3,
    worldRanking: 634,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Passau",
    city: "Passau",
    description: "Tuna nehri kıyısında uygulamalı bilimler",
    programs: ["İşletme", "Bilgisayar", "Turizm"],
    ranking: 3,
    worldRanking: 623,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Schweinfurt",
    city: "Schweinfurt",
    description: "Franken'da endüstri odaklı uygulamalı bilimler",
    programs: ["Endüstri", "Makine", "İşletme"],
    ranking: 3,
    worldRanking: 645,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Hagen",
    city: "Hagen",
    description: "Westfalya'da uzaktan eğitim ve teknoloji",
    programs: ["Bilgisayar", "İşletme", "Mühendislik"],
    ranking: 3,
    worldRanking: 612,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Siegen",
    city: "Siegen",
    description: "Westfalya'da uygulamalı teknoloji",
    programs: ["Mühendislik", "Bilgisayar", "İşletme"],
    ranking: 3,
    worldRanking: 598,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Neuss",
    city: "Neuss",
    description: "Kuzey Ren-Vestfalya'da uygulamalı bilimler",
    programs: ["İşletme", "Sağlık", "Bilgisayar"],
    ranking: 3,
    worldRanking: 634,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Wuppertal",
    city: "Wuppertal",
    description: "Bergisches Land'da uygulamalı bilimler",
    programs: ["Tasarım", "Mühendislik", "İşletme"],
    ranking: 3,
    worldRanking: 623,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Mönchengladbach",
    city: "Mönchengladbach",
    description: "Niederrhein'da tekstil ve teknoloji",
    programs: ["Tekstil", "Teknoloji", "İşletme"],
    ranking: 3,
    worldRanking: 612,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hochschule Remscheid",
    city: "Remscheid",
    description: "Bergisches Land'da teknoloji ve sanat",
    programs: ["Sanat", "Teknoloji", "İşletme"],
    ranking: 3,
    worldRanking: 645,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "TU Munich (Technische Universität München)",
    city: "Munich",
    description: "Almanya'nın en prestijli teknik üniversitesi",
    programs: ["Mühendislik", "Teknoloji", "Doğa Bilimleri"],
    ranking: 5,
    worldRanking: 26,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "LMU Munich (Ludwig-Maximilians-Universität München)",
    city: "Munich",
    description: "Bavyera'nın en büyük üniversitesi",
    programs: ["Tıp", "Hukuk", "İnsan Bilimleri"],
    ranking: 5,
    worldRanking: 38,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Karlsruhe Institute of Technology (KIT)",
    city: "Karlsruhe",
    description: "Araştırma ve teknolojide öncü kurum",
    programs: ["Mühendislik", "Teknoloji", "Bilgisayar"],
    ranking: 5,
    worldRanking: 133,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "TU Kaiserslautern",
    city: "Kaiserslautern",
    description: "Teknoloji odaklı araştırma üniversitesi",
    programs: ["Mühendislik", "Bilgisayar", "Matematik"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "European University Viadrina Frankfurt (Oder)",
    city: "Frankfurt (Oder)",
    description: "Avrupa odaklı uluslararası üniversite",
    programs: ["Hukuk", "Ekonomi", "Kültür Çalışmaları"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce", "Polonca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "TU Freiberg (Bergakademie Freiberg)",
    city: "Freiberg",
    description: "Maden ve malzeme bilimlerinde dünya lideri",
    programs: ["Maden Mühendisliği", "Malzeme Bilimi", "Jeoloji"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "HafenCity University Hamburg",
    city: "Hamburg",
    description: "Şehir planlama ve mimarlık odaklı",
    programs: ["Şehir Planlama", "Mimarlık", "İnşaat"],
    ranking: 4,
    worldRanking: 678,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Hamburg University of Technology (TUHH)",
    city: "Hamburg",
    description: "Hamburg'da teknoloji üniversitesi",
    programs: ["Mühendislik", "Teknoloji", "Enerji"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Marburg (Philipps-Universität)",
    city: "Marburg",
    description: "Almanya'nın en eski Protestant üniversitesi",
    programs: ["Tıp", "Felsefe", "Tarih"],
    ranking: 4,
    worldRanking: 275,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Potsdam",
    city: "Potsdam",
    description: "Berlin yakınında modern üniversite",
    programs: ["Hukuk", "Sosyal Bilimler", "Doğa Bilimleri"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Regensburg",
    city: "Regensburg",
    description: "Bavyera'da yenilikçi araştırma üniversitesi",
    programs: ["Tıp", "Doğa Bilimleri", "İnsan Bilimleri"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Rostock",
    city: "Rostock",
    description: "Baltık denizi kıyısında tarihi üniversite",
    programs: ["Denizcilik", "Tıp", "Mühendislik"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Saarland University (Universität des Saarlandes)",
    city: "Saarbrücken",
    description: "Fransa sınırında uluslararası üniversite",
    programs: ["Bilgisayar", "Mühendislik", "Tıp"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "Fransızca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Siegen",
    city: "Siegen",
    description: "NRW'de modern araştırma üniversitesi",
    programs: ["Mühendislik", "Sosyal Bilimler", "Eğitim"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "German University of Administrative Sciences Speyer",
    city: "Speyer",
    description: "Kamu yönetimi alanında uzman üniversite",
    programs: ["Kamu Yönetimi", "Hukuk", "Sosyal Bilimler"],
    ranking: 3,
    worldRanking: 678,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Bundeswehr University Munich",
    city: "Munich",
    description: "Alman Silahlı Kuvvetleri Üniversitesi",
    programs: ["Mühendislik", "İşletme", "Sosyal Bilimler"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Askeri Üniversite - Özel",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Heinrich Heine University Düsseldorf",
    city: "Düsseldorf",
    description: "Düsseldorf'ta tıp ve doğa bilimleri odaklı",
    programs: ["Tıp", "Doğa Bilimleri", "Felsefe"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Frankfurt University of Applied Sciences",
    city: "Frankfurt",
    description: "Frankfurt'ta uygulamalı bilimler üniversitesi",
    programs: ["Mühendislik", "İşletme", "Sosyal Çalışma"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Munich University of Applied Sciences",
    city: "Munich",
    description: "Münih'te teknoloji ve tasarım odaklı",
    programs: ["Mühendislik", "Tasarım", "İşletme"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Cologne",
    city: "Köln",
    description: "Köln'de uygulamalı bilimler ve teknoloji",
    programs: ["Mühendislik", "Bilgisayar", "İşletme"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hamburg University of Applied Sciences",
    city: "Hamburg",
    description: "Hamburg'da uygulamalı bilimler ve teknoloji",
    programs: ["Mühendislik", "İşletme", "Bilgisayar"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Stuttgart University of Applied Sciences",
    city: "Stuttgart",
    description: "Stuttgart'ta mühendislik ve teknoloji odaklı",
    programs: ["Mühendislik", "Teknoloji", "Mimarlık"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "Hannover University of Applied Sciences",
    city: "Hannover",
    description: "Hannover'de teknoloji ve işletme eğitimi",
    programs: ["Mühendislik", "İşletme", "Medya"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Dortmund",
    city: "Dortmund",
    description: "Dortmund'da teknoloji ve sosyal bilimler",
    programs: ["Mühendislik", "Bilgisayar", "Sosyal Çalışma"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Düsseldorf",
    city: "Düsseldorf",
    description: "Düsseldorf'ta sanat ve teknoloji",
    programs: ["Sanat", "Tasarım", "Mühendislik"],
    ranking: 4,
    worldRanking: 678,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Kaiserslautern",
    city: "Kaiserslautern",
    description: "Kaiserslautern'da teknoloji ve işletme",
    programs: ["Mühendislik", "Bilgisayar", "İşletme"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Kiel",
    city: "Kiel",
    description: "Kiel'de denizcilik ve teknoloji",
    programs: ["Denizcilik", "Mühendislik", "İşletme"],
    ranking: 4,
    worldRanking: 678,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Bremen",
    city: "Bremen",
    description: "Bremen'de teknoloji ve sosyal bilimler",
    programs: ["Mühendislik", "Sosyal Çalışma", "İşletme"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Erfurt",
    city: "Erfurt",
    description: "Erfurt'ta sosyal bilimler ve işletme",
    programs: ["Sosyal Çalışma", "İşletme", "Eğitim"],
    ranking: 3,
    worldRanking: 678,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Magdeburg",
    city: "Magdeburg",
    description: "Magdeburg'da teknoloji ve mühendislik",
    programs: ["Mühendislik", "Bilgisayar", "İşletme"],
    ranking: 4,
    worldRanking: 678,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Mainz",
    city: "Mainz",
    description: "Mainz'da teknoloji ve tasarım",
    programs: ["Mühendislik", "Tasarım", "İşletme"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Mannheim",
    city: "Mannheim",
    description: "Mannheim'da teknoloji ve işletme",
    programs: ["Mühendislik", "İşletme", "Bilgisayar"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Nuremberg",
    city: "Nuremberg",
    description: "Nürnberg'de teknoloji ve sosyal bilimler",
    programs: ["Mühendislik", "Sosyal Çalışma", "İşletme"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Potsdam",
    city: "Potsdam",
    description: "Potsdam'da tasarım ve teknoloji",
    programs: ["Tasarım", "Mühendislik", "İşletme"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Rostock",
    city: "Rostock",
    description: "Rostock'ta denizcilik ve teknoloji",
    programs: ["Denizcilik", "Mühendislik", "İşletme"],
    ranking: 4,
    worldRanking: 678,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Ulm",
    city: "Ulm",
    description: "Ulm'da teknoloji ve mühendislik",
    programs: ["Mühendislik", "Bilgisayar", "İşletme"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Wismar",
    city: "Wismar",
    description: "Wismar'da denizcilik ve teknoloji",
    programs: ["Denizcilik", "Mühendislik", "İşletme"],
    ranking: 4,
    worldRanking: 678,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Zwickau",
    city: "Zwickau",
    description: "Zwickau'da otomotiv ve teknoloji",
    programs: ["Otomotiv Mühendisliği", "Mühendislik", "İşletme"],
    ranking: 4,
    worldRanking: 678,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Berlin",
    city: "Berlin",
    description: "Berlin'de teknoloji ve işletme eğitimi",
    programs: ["Mühendislik", "İşletme", "Bilgisayar"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Bielefeld",
    city: "Bielefeld",
    description: "Bielefeld'de mühendislik ve sosyal bilimler",
    programs: ["Mühendislik", "Sosyal Çalışma", "İşletme"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Bochum",
    city: "Bochum",
    description: "Bochum'da teknoloji ve mühendislik",
    programs: ["Mühendislik", "Teknoloji", "İşletme"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Bonn-Rhein-Sieg",
    city: "Sankt Augustin",
    description: "Bonn yakınında teknoloji ve işletme",
    programs: ["Mühendislik", "Bilgisayar", "İşletme"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Brandenburg",
    city: "Brandenburg",
    description: "Brandenburg'da teknoloji ve işletme",
    programs: ["Mühendislik", "İşletme", "Bilgisayar"],
    ranking: 4,
    worldRanking: 678,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Darmstadt",
    city: "Darmstadt",
    description: "Darmstadt'ta teknoloji ve mühendislik",
    programs: ["Mühendislik", "Teknoloji", "Bilgisayar"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Dresden",
    city: "Dresden",
    description: "Dresden'de teknoloji ve tasarım",
    programs: ["Mühendislik", "Tasarım", "İşletme"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Essen",
    city: "Essen",
    description: "Essen'de mühendislik ve sosyal bilimler",
    programs: ["Mühendislik", "Sosyal Çalışma", "İşletme"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Freiburg",
    city: "Freiburg",
    description: "Freiburg'da teknoloji ve çevre bilimleri",
    programs: ["Mühendislik", "Çevre Bilimleri", "İşletme"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "University of Applied Sciences Gelsenkirchen",
    city: "Gelsenkirchen",
    description: "Gelsenkirchen'de enerji ve teknoloji",
    programs: ["Enerji Mühendisliği", "Mühendislik", "İşletme"],
    ranking: 4,
    worldRanking: 678,
    tuition: "Devlet Yüksekokulu - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Fachhochschule" as UniversityCategory
  },
  {
    name: "TU Darmstadt (Technische Universität Darmstadt)",
    city: "Darmstadt",
    description: "Almanya'nın en prestijli teknoloji üniversitelerinden",
    programs: ["Mühendislik", "Teknoloji", "Bilgisayar"],
    ranking: 5,
    worldRanking: 234,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "TU Dresden (Technische Universität Dresden)",
    city: "Dresden",
    description: "Doğu Almanya'nın en büyük teknik üniversitesi",
    programs: ["Mühendislik", "Tıp", "Doğa Bilimleri"],
    ranking: 5,
    worldRanking: 167,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "FAU Erlangen–Nuremberg (Friedrich-Alexander-Universität)",
    city: "Erlangen",
    description: "Friedrich-Alexander Üniversitesi",
    programs: ["Mühendislik", "Tıp", "Doğa Bilimleri"],
    ranking: 5,
    worldRanking: 225,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Weimar (Bauhaus-Universität)",
    city: "Weimar",
    description: "Bauhaus geleneğinde sanat ve mimarlık",
    programs: ["Mimarlık", "Sanat", "Tasarım"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Göttingen (Georg-August-Universität)",
    city: "Göttingen",
    description: "Georg-August-Universität - Nobel ödüllü bilim insanlarının üniversitesi",
    programs: ["Fizik", "Matematik", "Biyoloji"],
    ranking: 5,
    worldRanking: 121,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Justus Liebig University Giessen",
    city: "Giessen",
    description: "Justus Liebig Üniversitesi - Veteriner ve tarım bilimlerinde öncü",
    programs: ["Veteriner", "Tarım", "Yaşam Bilimleri"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Kiel (Christian-Albrechts-Universität)",
    city: "Kiel",
    description: "Christian-Albrechts-Universität - Deniz bilimleri merkezi",
    programs: ["Deniz Bilimleri", "Tıp", "Hukuk"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Münster (Westfälische Wilhelms-Universität)",
    city: "Münster",
    description: "Westfälische Wilhelms-Universität - NRW'de prestijli üniversite",
    programs: ["Hukuk", "Tıp", "Felsefe"],
    ranking: 4,
    worldRanking: 234,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Oldenburg (Carl von Ossietzky Universität)",
    city: "Oldenburg",
    description: "Carl von Ossietzky Universität - Kuzey Almanya'da modern üniversite",
    programs: ["Eğitim", "Çevre Bilimleri", "İnsan Bilimleri"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Würzburg (Julius-Maximilians-Universität)",
    city: "Würzburg",
    description: "Julius-Maximilians-Universität - Bavyera'da tarihi üniversite",
    programs: ["Tıp", "Biyoloji", "Felsefe"],
    ranking: 4,
    worldRanking: 234,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "FernUniversität in Hagen (distance university)",
    city: "Hagen",
    description: "Almanya'nın en büyük uzaktan eğitim üniversitesi",
    programs: ["İşletme", "Hukuk", "Matematik", "Bilgisayar"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Uzaktan Eğitim - Düşük ücret",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Tübingen (Eberhard Karls Universität)",
    city: "Tübingen",
    description: "Eberhard Karls Universität - Baden-Württemberg'de prestijli üniversite",
    programs: ["Tıp", "Hukuk", "Teoloji", "Doğa Bilimleri"],
    ranking: 5,
    worldRanking: 101,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Mainz (Johannes Gutenberg-Universität)",
    city: "Mainz",
    description: "Johannes Gutenberg-Universität - Rheinland-Pfalz'da büyük araştırma üniversitesi",
    programs: ["Tıp", "Medya", "Doğa Bilimleri", "İnsan Bilimleri"],
    ranking: 4,
    worldRanking: 275,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Halle-Wittenberg (Martin-Luther-Universität)",
    city: "Halle",
    description: "Martin-Luther-Universität - Doğu Almanya'da tarihi üniversite",
    programs: ["Tarih", "Felsefe", "Doğa Bilimleri", "Hukuk"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Freiburg (Albert-Ludwigs-Universität Freiburg)",
    city: "Freiburg",
    description: "Albert-Ludwigs-Universität - Baden-Württemberg'de eski ve prestijli üniversite",
    programs: ["Tıp", "Hukuk", "Doğa Bilimleri", "Orman Bilimleri"],
    ranking: 5,
    worldRanking: 128,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Goethe University Frankfurt am Main",
    city: "Frankfurt am Main",
    description: "Johann Wolfgang Goethe Üniversitesi - Finans merkezi Frankfurt'ta prestijli üniversite",
    programs: ["İşletme", "Finans", "Hukuk", "Tıp"],
    ranking: 5,
    worldRanking: 225,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Jena (Friedrich-Schiller-Universität Jena)",
    city: "Jena",
    description: "Friedrich-Schiller-Universität - Thüringen'de araştırma odaklı üniversite",
    programs: ["Optik", "Biyoloji", "Felsefe", "Fizik"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Heidelberg (Ruprecht-Karls-Universität)",
    city: "Heidelberg",
    description: "Ruprecht-Karls-Universität - Almanya'nın en eski ve prestijli üniversitesi",
    programs: ["Tıp", "Hukuk", "Felsefe", "Doğa Bilimleri"],
    ranking: 5,
    worldRanking: 47,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "Technische Universität Berlin",
    city: "Berlin",
    description: "Berlin Teknik Üniversitesi - Berlin'de teknoloji eğitimin öncüsü",
    programs: ["Mühendislik", "Bilgisayar Bilimleri", "Matematik", "Mimarlık"],
    ranking: 5,
    worldRanking: 140,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "University of Koblenz",
    city: "Koblenz",
    description: "Rheinland-Pfalz'da eğitim ve bilgisayar bilimleri odaklı üniversite",
    programs: ["Eğitim", "Psikoloji", "Bilgisayar", "İnsan Bilimleri"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "TU Freiberg (Bergakademie Freiberg)",
    city: "Freiberg",
    description: "Bergakademie Freiberg - Maden ve malzeme bilimlerinde dünya lideri",
    programs: ["Maden Mühendisliği", "Malzeme Bilimi", "Jeoloji", "Çevre Teknolojisi"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"],
    category: "Üniversite" as UniversityCategory
  },
  {
    name: "TU Ilmenau (Technische Universität Ilmenau)",
    city: "Ilmenau",
    description: "Technische Universität Ilmenau - Thüringen'de teknoloji odaklı üniversite",
    programs: ["Elektrik", "Bilgisayar", "Makine", "Medya Teknolojisi"],
    ranking: 4,
    worldRanking: 567,
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
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
              <img 
                src={university.image} 
                alt={`${university.name} campus`} 
                className="w-full h-48 object-cover rounded-lg mb-4" 
                data-testid={`university-image-${index}`}
              />
              
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
                icon: "🎓",
                title: "Ücretsiz Eğitim",
                description: "Devlet üniversitelerinde eğitim ücretsiz, sadece dönem başı küçük ücretler"
              },
              {
                icon: "🌍", 
                title: "Uluslararası Tanınırlık",
                description: "Alman diplomanız dünya çapında kabul görmektedir"
              },
              {
                icon: "💼",
                title: "İş İmkanları",
                description: "Güçlü ekonomi ve yüksek iş bulma oranı"
              },
              {
                icon: "🔬",
                title: "Araştırma Fırsatları",
                description: "Dünya çapında araştırma merkezleri ve projeler"
              },
              {
                icon: "🏛️",
                title: "Zengin Kültür",
                description: "Tarih, sanat ve kültürle dolu bir yaşam"
              },
              {
                icon: "🇪🇺",
                title: "Avrupa'ya Kapı",
                description: "AB vatandaşlığı ve serbest dolaşım hakkı"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center space-y-4" data-testid={`benefit-${index}`}>
                <div className="text-4xl" data-testid={`benefit-icon-${index}`}>{benefit.icon}</div>
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

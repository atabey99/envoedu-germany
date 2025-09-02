import { Search, Filter, MapPin, GraduationCap, Building } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";

type UniversityCategory = "Üniversite" | "Fachhochschule";

const universities = [
  {
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
    city: "Saarbrücken",
    description: "Fransa sınırında çok kültürlü üniversite",
    programs: ["Bilgisayar", "Mühendislik", "Tıp"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce", "Fransızca"]
  },
  {
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

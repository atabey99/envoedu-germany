import { Search, Filter, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";

const universities = [
  {
    name: "RWTH Aachen University",
    city: "Aachen",
    description: "Almanya'nın en büyük teknik üniversitesi",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Mühendislik", "Makine", "Elektrik"],
    ranking: 5,
    worldRanking: 145,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Augsburg",
    city: "Augsburg",
    description: "Bavyera'da kaliteli eğitim sunan üniversite",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["İşletme", "Sosyal Bilimler", "Matematik"],
    ranking: 4,
    worldRanking: 412,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Bamberg",
    city: "Bamberg",
    description: "Tarihi şehirde modern eğitim",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Sosyal Bilimler", "İnsan Bilimleri", "Bilgi İşlem"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"]
  },
  {
    name: "University of Bayreuth",
    city: "Bayreuth",
    description: "İnovatif ve disiplinlerarası eğitim",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Hukuk", "Ekonomi", "Kültür Çalışmaları"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "Free University of Berlin",
    city: "Berlin",
    description: "Berlin'in liberal ve uluslararası üniversitesi",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Siyaset Bilimi", "Edebiyat", "Psikoloji"],
    ranking: 4,
    worldRanking: 138,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "Humboldt University of Berlin",
    city: "Berlin",
    description: "Berlin'in kalbi Unter den Linden'da",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["İşletme", "Sosyoloji", "Tarih"],
    ranking: 4,
    worldRanking: 127,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "Technical University of Berlin",
    city: "Berlin",
    description: "Berlin'de teknik eğitimin öncüsü",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Mühendislik", "Bilgisayar Bilimleri", "Matematik"],
    ranking: 5,
    worldRanking: 189,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "Berlin University of the Arts",
    city: "Berlin",
    description: "Sanat ve tasarım eğitiminde lider",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Güzel Sanatlar", "Müzik", "Tasarım"],
    ranking: 5,
    worldRanking: 234,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "Bielefeld University",
    city: "Bielefeld",
    description: "Sosyal bilimler ve teknoloji odaklı",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Sosyoloji", "Psikoloji", "Biyoloji"],
    ranking: 4,
    worldRanking: 234,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"]
  },
  {
    name: "Ruhr University Bochum",
    city: "Bochum",
    description: "Ruhr bölgesinin araştırma üniversitesi",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Mühendislik", "Tıp", "Doğa Bilimleri"],
    ranking: 4,
    worldRanking: 201,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Bonn",
    city: "Bonn",
    description: "Eski başkent Bonn'da prestijli eğitim",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Hukuk", "Ekonomi", "Tıp"],
    ranking: 5,
    worldRanking: 87,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "Brandenburg University of Technology",
    city: "Cottbus",
    description: "Teknoloji ve mühendislik odaklı üniversite",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Mühendislik", "Çevre Bilimleri", "Bilgisayar"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "Braunschweig University of Technology",
    city: "Braunschweig",
    description: "Teknik eğitimde 270 yıllık deneyim",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Mühendislik", "Doğa Bilimleri", "Mimarlık"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Bremen",
    city: "Bremen",
    description: "Kuzey Almanya'da araştırma odaklı üniversite",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Mühendislik", "Sosyal Bilimler", "Doğa Bilimleri"],
    ranking: 4,
    worldRanking: 234,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "Chemnitz University of Technology",
    city: "Chemnitz",
    description: "Doğu Almanya'da modern teknoloji üniversitesi",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Mühendislik", "Bilgisayar Bilimleri", "Ekonomi"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "Clausthal University of Technology",
    city: "Clausthal",
    description: "Maden ve malzeme mühendisliğinde uzman",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Maden Mühendisliği", "Malzeme Bilimi", "Enerji"],
    ranking: 4,
    worldRanking: 678,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Cologne",
    city: "Köln",
    description: "Almanya'nın en büyük üniversitelerinden",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["İşletme", "Hukuk", "Tıp"],
    ranking: 5,
    worldRanking: 145,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "Darmstadt University of Technology",
    city: "Darmstadt",
    description: "Teknoloji ve mühendislikte excellence",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Mühendislik", "Bilgisayar", "Matematik"],
    ranking: 5,
    worldRanking: 234,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "TU Dortmund University",
    city: "Dortmund",
    description: "Ruhr bölgesinde teknoloji üniversitesi",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Mühendislik", "Bilgisayar", "Fizik"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "Dresden University of Technology",
    city: "Dresden",
    description: "Doğu Almanya'nın en büyük teknik üniversitesi",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Mühendislik", "Tıp", "Doğa Bilimleri"],
    ranking: 5,
    worldRanking: 167,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Duisburg-Essen",
    city: "Duisburg",
    description: "NRW'de modern ve uluslararası üniversite",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Mühendislik", "İşletme", "Tıp"],
    ranking: 4,
    worldRanking: 234,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Düsseldorf",
    city: "Düsseldorf",
    description: "NRW'de prestijli araştırma üniversitesi",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Tıp", "Hukuk", "Felsefe"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Erfurt",
    city: "Erfurt",
    description: "Thüringen'de liberal arts eğitimi",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Eğitim", "Sosyal Bilimler", "Felsefe"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"]
  },
  {
    name: "University of Erlangen-Nuremberg",
    city: "Erlangen",
    description: "Friedrich-Alexander Üniversitesi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Mühendislik", "Tıp", "Doğa Bilimleri"],
    ranking: 5,
    worldRanking: 234,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Flensburg",
    city: "Flensburg",
    description: "Danimarka sınırında eğitim odaklı üniversite",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Eğitim", "Çevre Bilimleri", "Uluslararası İşletme"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "Goethe University Frankfurt",
    city: "Frankfurt",
    description: "Finans merkezi Frankfurt'ta prestijli üniversite",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["İşletme", "Finans", "Hukuk"],
    ranking: 5,
    worldRanking: 145,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Freiburg",
    city: "Freiburg",
    description: "Baden-Württemberg'de eski ve prestijli üniversite",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Tıp", "Hukuk", "Doğa Bilimleri"],
    ranking: 5,
    worldRanking: 109,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Giessen",
    city: "Giessen",
    description: "Veteriner ve tarım bilimlerinde öncü",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Veteriner", "Tarım", "Yaşam Bilimleri"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Göttingen",
    city: "Göttingen",
    description: "Nobel ödüllü bilim insanlarının üniversitesi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Fizik", "Matematik", "Biyoloji"],
    ranking: 5,
    worldRanking: 128,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Greifswald",
    city: "Greifswald",
    description: "Baltık denizi kıyısında tarihi üniversite",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Tıp", "Hukuk", "Teoloji"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"]
  },
  {
    name: "University of Hagen",
    city: "Hagen",
    description: "Almanya'nın uzaktan eğitim üniversitesi",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["İşletme", "Hukuk", "Matematik"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Uzaktan Eğitim - Düşük ücret",
    language: ["Almanca"]
  },
  {
    name: "University of Halle-Wittenberg",
    city: "Halle",
    description: "Martin Luther Üniversitesi",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Tarih", "Felsefe", "Doğa Bilimleri"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"]
  },
  {
    name: "University of Hamburg",
    city: "Hamburg",
    description: "Kuzey Almanya'nın büyük araştırma üniversitesi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["İşletme", "Hukuk", "Sosyal Bilimler"],
    ranking: 4,
    worldRanking: 234,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "Leibniz University Hannover",
    city: "Hannover",
    description: "Teknoloji ve doğa bilimlerinde güçlü",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Mühendislik", "Doğa Bilimleri", "Mimarlık"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Heidelberg",
    city: "Heidelberg",
    description: "Almanya'nın en eski ve prestijli üniversitesi",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Tıp", "Hukuk", "Felsefe"],
    ranking: 5,
    worldRanking: 64,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Hildesheim",
    city: "Hildesheim",
    description: "Kültür ve medya çalışmalarında öncü",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Medya", "Kültür", "Eğitim"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"]
  },
  {
    name: "University of Hohenheim",
    city: "Stuttgart",
    description: "Tarım ve beslenme bilimlerinde uzman",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Tarım", "Beslenme", "Ekonomi"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "Technical University Ilmenau",
    city: "Ilmenau",
    description: "Thüringen'de teknoloji odaklı üniversite",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Elektrik", "Bilgisayar", "Makine"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Jena",
    city: "Jena",
    description: "Friedrich Schiller Üniversitesi",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Optik", "Biyoloji", "Felsefe"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Kassel",
    city: "Kassel",
    description: "Hessen'de yenilikçi eğitim anlayışı",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Mühendislik", "Eğitim", "Sosyal Bilimler"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Kiel",
    city: "Kiel",
    description: "Christian-Albrechts Üniversitesi",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Deniz Bilimleri", "Tıp", "Hukuk"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Koblenz-Landau",
    city: "Koblenz",
    description: "Rheinland-Pfalz'da eğitim odaklı",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Eğitim", "Psikoloji", "Bilgisayar"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"]
  },
  {
    name: "University of Konstanz",
    city: "Konstanz",
    description: "Bodensee kıyısında excellence üniversitesi",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Sosyal Bilimler", "Doğa Bilimleri", "İnsan Bilimleri"],
    ranking: 4,
    worldRanking: 234,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Leipzig",
    city: "Leipzig",
    description: "Doğu Almanya'nın en eski üniversitesi",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Hukuk", "Tıp", "Sosyal Bilimler"],
    ranking: 4,
    worldRanking: 234,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Lübeck",
    city: "Lübeck",
    description: "Tıp ve yaşam bilimleri odaklı",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Tıp", "Bilgisayar", "Mühendislik"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "Leuphana University Lüneburg",
    city: "Lüneburg",
    description: "Sürdürülebilirlik ve liberal arts",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Sürdürülebilirlik", "İşletme", "Kültür"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Magdeburg",
    city: "Magdeburg",
    description: "Otto von Guericke Üniversitesi",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Mühendislik", "Tıp", "Doğa Bilimleri"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Mainz",
    city: "Mainz",
    description: "Johannes Gutenberg Üniversitesi",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Tıp", "Doğa Bilimleri", "İnsan Bilimleri"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Mannheim",
    city: "Mannheim",
    description: "İşletme ve ekonomide Almanya'nın en iyisi",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["İşletme", "Ekonomi", "Sosyal Bilimler"],
    ranking: 5,
    worldRanking: 189,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Marburg",
    city: "Marburg",
    description: "Philipps Üniversitesi - Protestant geleneği",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Tıp", "Hukuk", "Felsefe"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "Technical University of Munich",
    city: "München",
    description: "Almanya'nın en iyi teknik üniversitelerinden biri",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Mühendislik", "Fen Bilimleri", "Bilgisayar Bilimleri"],
    ranking: 5,
    worldRanking: 54,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "Ludwig Maximilian University Munich",
    city: "München",
    description: "LMU - Bavyera'nın prestijli üniversitesi",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Tıp", "Hukuk", "İnsan Bilimleri"],
    ranking: 5,
    worldRanking: 59,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Münster",
    city: "Münster",
    description: "Westfälische Wilhelms Üniversitesi",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Hukuk", "İşletme", "Sosyal Bilimler"],
    ranking: 4,
    worldRanking: 234,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Oldenburg",
    city: "Oldenburg",
    description: "Carl von Ossietzky Üniversitesi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Eğitim", "Sosyal Bilimler", "Doğa Bilimleri"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"]
  },
  {
    name: "University of Osnabrück",
    city: "Osnabrück",
    description: "Niedersachsen'de kapsamlı üniversite",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Eğitim", "Sosyal Bilimler", "Doğa Bilimleri"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"]
  },
  {
    name: "University of Paderborn",
    city: "Paderborn",
    description: "Bilgisayar bilimleri ve mühendislik odaklı",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Bilgisayar", "Mühendislik", "İşletme"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Passau",
    city: "Passau",
    description: "Bavyera sınırında hukuk ve işletme",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Hukuk", "İşletme", "Bilgisayar"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Potsdam",
    city: "Potsdam",
    description: "Brandenburg'da genç ve dinamik üniversite",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Sosyal Bilimler", "Doğa Bilimleri", "İnsan Bilimleri"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Regensburg",
    city: "Regensburg",
    description: "Bavyera'da modern araştırma üniversitesi",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Tıp", "Hukuk", "Doğa Bilimleri"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Rostock",
    city: "Rostock",
    description: "Baltık denizi kıyısında denizcilik odaklı",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Denizcilik", "Mühendislik", "Tıp"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "Saarland University",
    city: "Saarbrücken",
    description: "Fransa sınırında çok kültürlü üniversite",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
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
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Mühendislik", "Sosyal Bilimler", "Ekonomi"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "German University of Administrative Sciences Speyer",
    city: "Speyer",
    description: "Kamu yönetimi ve hukuk uzmanı",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Kamu Yönetimi", "Hukuk", "Siyaset"],
    ranking: 4,
    worldRanking: 567,
    tuition: "Özel Üniversite",
    language: ["Almanca"]
  },
  {
    name: "University of Stuttgart",
    city: "Stuttgart",
    description: "Baden-Württemberg'de teknoloji odaklı",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Mühendislik", "Teknoloji", "Mimarlık"],
    ranking: 5,
    worldRanking: 234,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Trier",
    city: "Trier",
    description: "Roma tarihinde zengin geçmiş",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Hukuk", "Ekonomi", "Sosyal Bilimler"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Tübingen",
    city: "Tübingen",
    description: "Eberhard Karls Üniversitesi",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Tıp", "Hukuk", "Teoloji"],
    ranking: 5,
    worldRanking: 169,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Ulm",
    city: "Ulm",
    description: "Tıp ve doğa bilimleri odaklı genç üniversite",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Tıp", "Doğa Bilimleri", "Mühendislik"],
    ranking: 4,
    worldRanking: 345,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Vechta",
    city: "Vechta",
    description: "Niedersachsen'de eğitim odaklı küçük üniversite",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Eğitim", "Sosyal Çalışma", "Kültür"],
    ranking: 3,
    worldRanking: 678,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"]
  },
  {
    name: "Bauhaus University Weimar",
    city: "Weimar",
    description: "Sanat, tasarım ve mimarlık odaklı",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Mimarlık", "Tasarım", "Sanat"],
    ranking: 4,
    worldRanking: 456,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  },
  {
    name: "University of Wuppertal",
    city: "Wuppertal",
    description: "Bergische Universität",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Eğitim", "Mühendislik", "Sosyal Bilimler"],
    ranking: 3,
    worldRanking: 567,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca"]
  },
  {
    name: "University of Würzburg",
    city: "Würzburg",
    description: "Julius-Maximilians Üniversitesi",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    programs: ["Tıp", "Hukuk", "Doğa Bilimleri"],
    ranking: 4,
    worldRanking: 234,
    tuition: "Devlet Üniversitesi - Ücretsiz",
    language: ["Almanca", "İngilizce"]
  }
];

const cities = ["Tümü", "Berlin", "München", "Heidelberg", "Aachen", "Göttingen"];
const programs = ["Tümü", "Mühendislik", "Tıp", "İşletme", "Hukuk", "Fen Bilimleri"];

export default function Universities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("Tümü");
  const [selectedProgram, setSelectedProgram] = useState("Tümü");

  const filteredUniversities = universities.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         uni.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity === "Tümü" || uni.city === selectedCity;
    const matchesProgram = selectedProgram === "Tümü" || uni.programs.some(p => p.includes(selectedProgram));
    
    return matchesSearch && matchesCity && matchesProgram;
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

            {/* City Filter */}
            <div className="relative">
              <MapPin className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <select
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background appearance-none"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                data-testid="city-filter"
              >
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
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
            {filteredUniversities.length} üniversite bulundu
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
                    <div className="flex">
                      {[...Array(university.ranking)].map((_, i) => (
                        <span key={i} className="text-accent">⭐</span>
                      ))}
                    </div>
                    <div className="bg-gradient-to-r from-accent to-primary text-white px-3 py-1 rounded-lg border-2 border-accent/20 text-sm font-bold mt-1 shadow-sm">
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
                    <span className="font-medium">Ücret:</span> {university.tuition}
                  </div>
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

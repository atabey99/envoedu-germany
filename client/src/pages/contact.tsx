import Navbar from "@/components/layout/navbar";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* 1. Navigasyon Menüsü */}
      <Navbar />
      
      {/* 2. Sayfa İçeriği ve Form */}
      <main className="flex-grow pt-28 sm:pt-32 md:pt-36">
        <Contact />
      </main>

      {/* 3. Sayfa Alt Bilgisi */}
      <Footer />
    </div>
  );
}
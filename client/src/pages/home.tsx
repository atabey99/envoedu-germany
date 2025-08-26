import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Process from "@/components/sections/process";
import Testimonials from "@/components/sections/testimonials";
import Universities from "@/components/sections/universities";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Process />
      <Testimonials />
      <Universities />
      <Contact />
      <Footer />
    </div>
  );
}

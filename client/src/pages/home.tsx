import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Testimonials from "@/components/sections/testimonials";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Navbar />
      <Hero />
      <Testimonials />
      <Footer />
    </div>
  );
}

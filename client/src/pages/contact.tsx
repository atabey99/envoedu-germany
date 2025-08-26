import Navbar from "@/components/layout/navbar";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}
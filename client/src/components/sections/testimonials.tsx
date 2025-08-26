import TestimonialCard from "@/components/ui/testimonial-card";

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    program: "Makine Mühendisliği, TUM",
    initials: "AY",
    color: "primary",
    content: "EduConsult sayesinde hayalim olan Technical University of Munich'e kabul aldım. Süreç boyunca aldığım profesyonel destek muhteşemdi."
  },
  {
    name: "Zeynep Kaya", 
    program: "İşletme, Humboldt Üniversitesi",
    initials: "ZK",
    color: "accent",
    content: "Almanca seviyem sıfırdı, vize işlemleri karmaşık görünüyordu. EduConsult ile her şey çok kolay oldu. Şimdi Berlin'de mutlu bir öğrenciyim."
  },
  {
    name: "Mehmet Özkan",
    program: "Tıp, Heidelberg Üniversitesi", 
    initials: "MÖ",
    color: "secondary",
    content: "Tıp fakültesi kabul sürecim gerçekten zordu ama EduConsult ekibi beni hiç yalnız bırakmadı. Heidelberg Üniversitesi'nde tıp okuyorum şimdi."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="testimonials-title">Başarı Hikayeleri</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="testimonials-description">
            Öğrencilerimizin deneyimlerini dinleyin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

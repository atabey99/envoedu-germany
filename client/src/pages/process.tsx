import { CheckCircle, Clock, FileText, Users, Plane, GraduationCap, Calendar, MessageCircle } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";

const processSteps = [
  {
    step: 1,
    title: "İlk Görüşme",
    duration: "1 saat",
    icon: MessageCircle,
    description: "Ücretsiz danışmanlık görüşmesi ile hedeflerinizi belirleriz",
    details: [
      "Kişisel hedeflerinizi anlıyoruz",
      "Akademik geçmişinizi değerlendiriyoruz", 
      "Bütçe ve zaman planlaması yapıyoruz",
      "Size özel yol haritası oluşturuyoruz"
    ],
    color: "primary"
  },
  {
    step: 2,
    title: "Profil Analizi",
    duration: "1-2 hafta",
    icon: Users,
    description: "Akademik geçmişinizi analiz ederek size uygun programları seçeriz",
    details: [
      "Notlarınızı ve sınavlarınızı analiz ediyoruz",
      "Uygun üniversite ve programları belirliyoruz",
      "Başvuru şansınızı hesaplıyoruz",
      "Alternatif seçenekler sunuyoruz"
    ],
    color: "accent"
  },
  {
    step: 3,
    title: "Başvuru Hazırlığı",
    duration: "2-4 hafta",
    icon: FileText,
    description: "Tüm belgelerinizi hazırlar ve başvurularınızı yaparız",
    details: [
      "Motivasyon mektubu yazıyoruz",
      "CV'nizi profesyonel olarak hazırlıyoruz",
      "Belgeleri çeviri ve onaylıyoruz",
      "Başvuruları zamanında gönderiyoruz"
    ],
    color: "secondary"
  },
  {
    step: 4,
    title: "Vize Süreci",
    duration: "4-6 hafta", 
    icon: Plane,
    description: "Vize sürecinizi yönetir ve Almanya'da yerleşiminize destek oluruz",
    details: [
      "Vize belgelerini hazırlıyoruz",
      "Randevu alıyor ve takip ediyoruz",
      "Mülakata hazırlık desteği veriyoruz",
      "Konaklama ve sigorta işlemleri"
    ],
    color: "primary"
  }
];

const requirements = [
  {
    category: "Akademik Belgeler",
    items: [
      "Lise diploma ve transkript",
      "Üniversite diploma ve transkript (varsa)",
      "Dil sınavı sonuçları (IELTS/TOEFL/Almanca)",
      "YÖS/SAT sonuçları (eğer varsa)"
    ]
  },
  {
    category: "Kişisel Belgeler", 
    items: [
      "Pasaport fotokopisi",
      "Kimlik kartı fotokopisi",
      "Biyometrik fotoğraflar",
      "Nüfus kayıt örneği"
    ]
  },
  {
    category: "Mali Belgeler",
    items: [
      "Banka hesap özetleri",
      "Gelir belgesi/maaş bordroları",
      "Burs belgesi (eğer varsa)",
      "Sponsor mektubı (eğer gerekiyorsa)"
    ]
  },
  {
    category: "Diğer Belgeler",
    items: [
      "Sağlık raporu",
      "Sabıka kaydı",
      "CV ve özgeçmiş",
      "Referans mektupları"
    ]
  }
];

export default function Process() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Navbar />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6" data-testid="process-page-title">
            Başvuru Sürecimiz
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" data-testid="process-page-description">
            Almanya'da eğitim hayalinizi gerçekleştirmek için adım adım rehberlik ediyoruz. 
            Sürecin her aşamasında yanınızdayız.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center" data-testid="process-steps-title">
            Süreç Aşamaları
          </h2>
          
          <div className="space-y-12">
            {processSteps.map((process, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`} data-testid={`process-step-${process.step}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-${process.color} rounded-full flex items-center justify-center text-${process.color}-foreground text-2xl font-bold`}>
                      {process.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground" data-testid={`process-step-title-${process.step}`}>{process.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground" data-testid={`process-step-description-${process.step}`}>
                    {process.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {process.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3" data-testid={`process-step-detail-${process.step}-${detailIndex}`}>
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`bg-${process.color}/5 p-8 rounded-xl border-2 border-${process.color}/20`}>
                    <process.icon className={`w-24 h-24 text-${process.color} mx-auto`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20 bg-muted rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center" data-testid="timeline-title">
            Ortalama Süreçler
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Başvuru Hazırlığı", duration: "2-4 hafta", icon: FileText },
              { title: "Üniversite Yanıtı", duration: "6-12 hafta", icon: GraduationCap },
              { title: "Vize İşlemleri", duration: "4-6 hafta", icon: Plane },
              { title: "Toplam Süre", duration: "3-6 ay", icon: Calendar }
            ].map((timeline, index) => (
              <div key={index} className="bg-card p-6 rounded-xl text-center" data-testid={`timeline-item-${index}`}>
                <timeline.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2" data-testid={`timeline-item-title-${index}`}>{timeline.title}</h3>
                <p className="text-2xl font-bold text-primary" data-testid={`timeline-item-duration-${index}`}>{timeline.duration}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center" data-testid="requirements-title">
            Gerekli Belgeler
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requirements.map((requirement, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border" data-testid={`requirement-category-${index}`}>
                <h3 className="text-xl font-semibold text-foreground mb-4" data-testid={`requirement-category-title-${index}`}>
                  {requirement.category}
                </h3>
                <ul className="space-y-3">
                  {requirement.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3" data-testid={`requirement-item-${index}-${itemIndex}`}>
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center" data-testid="faq-title">
            Sık Sorulan Sorular
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "Başvuru süreci ne kadar sürer?",
                answer: "Ortalama başvuru süreci 3-6 ay arası sürmektedir. Bu süre belge hazırlığından vize işlemlerine kadar tüm adımları kapsar."
              },
              {
                question: "Almanca bilmek zorunlu mu?",
                answer: "İngilizce programlar için Almanca zorunlu değildir. Ancak Almanca bilen öğrencilerin daha fazla seçeneği olur ve günlük yaşamları kolaylaşır."
              },
              {
                question: "Başvuru ücretleri nelerdir?",
                answer: "Üniversite başvuru ücretleri genellikle 50-150 Euro arasındadır. Vize ücreti 75 Euro'dur. Ayrıca belge çeviri ve onay masrafları vardır."
              },
              {
                question: "Hangi dönemde başvuru yapılır?",
                answer: "Almanya'da yıl içinde iki dönem vardır: Kış dönemi (Ekim) ve Yaz dönemi (Nisan). Başvurular genellikle 6 ay öncesinden başlar."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border" data-testid={`faq-item-${index}`}>
                <h3 className="text-lg font-semibold text-foreground mb-3" data-testid={`faq-question-${index}`}>
                  {faq.question}
                </h3>
                <p className="text-muted-foreground" data-testid={`faq-answer-${index}`}>
                  {faq.answer}
                </p>
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

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Navbar />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="privacy-title">
              Gizlilik Politikası
            </h1>
            <p className="text-muted-foreground" data-testid="privacy-last-updated">
              Son Güncelleme: 11 Kasım 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Genel Bilgiler</h2>
              <p className="text-muted-foreground leading-relaxed">
                Envoedu Germany olarak, kişisel verilerinizin gizliliğini korumayı taahhüt ediyoruz. 
                Bu gizlilik politikası, web sitemizi ziyaret ettiğinizde veya hizmetlerimizi kullandığınızda 
                kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Toplanan Bilgiler</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hizmetlerimizi sağlamak için aşağıdaki bilgileri topluyoruz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Ad, soyad ve iletişim bilgileri (e-posta, telefon)</li>
                <li>Eğitim geçmişi ve akademik bilgiler</li>
                <li>Tercih ettiğiniz üniversiteler ve programlar</li>
                <li>Danışmanlık sürecinde paylaştığınız belgeler</li>
                <li>Web sitesi kullanım verileri (çerezler aracılığıyla)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Bilgilerin Kullanımı</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Topladığımız bilgileri şu amaçlarla kullanırız:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Danışmanlık hizmetlerini sağlamak ve geliştirmek</li>
                <li>Sizinle iletişim kurmak ve bilgilendirme yapmak</li>
                <li>Başvuru süreçlerinizi yönetmek</li>
                <li>Hizmet kalitemizi iyileştirmek</li>
                <li>Yasal yükümlülüklerimizi yerine getirmek</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Bilgi Güvenliği</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kişisel verilerinizi yetkisiz erişim, değişiklik, ifşa veya imha edilmeye karşı korumak için 
                endüstri standardı güvenlik önlemleri kullanıyoruz. Verileriniz şifreli bağlantılar üzerinden 
                iletilir ve güvenli sunucularda saklanır.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Bilgi Paylaşımı</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kişisel bilgilerinizi üçüncü taraflarla paylaşmayız. Sadece başvuru süreçleriniz için gerekli 
                olduğunda (üniversiteler, vize makamları vb.) ve açık izninizle bilgilerinizi paylaşırız.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Haklarınız</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kişisel verilerinizle ilgili olarak aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Kişisel verilerinize erişim ve kopyasını talep etme</li>
                <li>Yanlış veya eksik bilgileri düzeltme</li>
                <li>Belirli koşullar altında verilerinizi silme</li>
                <li>Veri işleme faaliyetlerine itiraz etme</li>
                <li>Pazarlama iletişimlerinden çıkma</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Veri Saklama</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kişisel verilerinizi, hizmet sağlamak için gerekli olduğu sürece veya yasal yükümlülüklerimiz 
                gerektirdiği sürece saklarız. Danışmanlık hizmetleri tamamlandıktan sonra, verileriniz yasal 
                gereklilikler çerçevesinde arşivlenir veya silinir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Çerezler</h2>
              <p className="text-muted-foreground leading-relaxed">
                Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanır. Çerezlerin nasıl 
                kullanıldığı hakkında daha fazla bilgi için lütfen Çerez Politikamızı inceleyin.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Politika Değişiklikleri</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler olduğunda, 
                sizi e-posta veya web sitemiz üzerinden bilgilendireceğiz. Politikayı düzenli olarak 
                gözden geçirmenizi öneririz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. İletişim</h2>
              <p className="text-muted-foreground leading-relaxed">
                Gizlilik politikamız veya kişisel verilerinizle ilgili sorularınız için bizimle iletişime 
                geçebilirsiniz:
              </p>
              <div className="mt-4 space-y-2 text-muted-foreground ml-4">
                <p><strong>E-posta:</strong> info@envoedu.com.tr</p>
                <p><strong>Telefon:</strong> +90 212 123 45 67</p>
                <p><strong>Adres:</strong> İstanbul, Türkiye</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

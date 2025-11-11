import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Navbar />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="terms-title">
              Kullanım Şartları
            </h1>
            <p className="text-muted-foreground" data-testid="terms-last-updated">
              Son Güncelleme: 11 Kasım 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Hizmet Şartlarının Kabulü</h2>
              <p className="text-muted-foreground leading-relaxed">
                Envoedu Germany web sitesini kullanarak ve hizmetlerimizden yararlanarak, bu kullanım 
                şartlarını kabul etmiş sayılırsınız. Bu şartları kabul etmiyorsanız, lütfen web sitemizi 
                kullanmayın ve hizmetlerimizden yararlanmayın.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Hizmet Tanımı</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Envoedu Germany, Türk öğrencilere Almanya'da eğitim almak için kapsamlı danışmanlık 
                hizmetleri sunar. Hizmetlerimiz şunları içerir:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Üniversite ve program seçimi danışmanlığı</li>
                <li>Başvuru belgelerinin hazırlanması</li>
                <li>Vize başvuru sürecinde destek</li>
                <li>Dil eğitimi ve sınav hazırlığı yönlendirmesi</li>
                <li>Almanya'ya yerleşim desteği</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Kullanıcı Sorumlulukları</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hizmetlerimizi kullanırken şu yükümlülükleri kabul edersiniz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Sağladığınız tüm bilgilerin doğru ve güncel olması</li>
                <li>Gerekli belgeleri zamanında temin etme</li>
                <li>Danışmanlarımızla etkin iletişim kurma</li>
                <li>Belirlenen ödemeleri zamanında yapma</li>
                <li>Üniversite ve vize başvurularında gerekli adımları takip etme</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Hizmet Kapsamı ve Sınırlamalar</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Danışmanlık hizmetlerimiz aşağıdaki sınırlamalara tabidir:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Üniversite kabulü garantisi vermemekteyiz</li>
                <li>Vize onayı üniversite ve ilgili makamların kararına bağlıdır</li>
                <li>Başvuru süreçlerindeki gecikmelerden sorumlu değiliz</li>
                <li>Üçüncü taraf kurumların (üniversiteler, konsolosluklar) kararlarından sorumlu değiliz</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Ücretler ve Ödemeler</h2>
              <p className="text-muted-foreground leading-relaxed">
                Hizmet ücretlerimiz paket seçiminize göre değişmektedir. Tüm ücretler sözleşme imzalanmadan 
                önce açıkça belirtilir. Ödeme planları ve iade koşulları sözleşmenizde detaylı olarak 
                açıklanmaktadır. İlk danışmanlık görüşmemiz ücretsizdir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Fikri Mülkiyet Hakları</h2>
              <p className="text-muted-foreground leading-relaxed">
                Web sitemizdeki tüm içerik, logo, tasarım ve materyaller Envoedu Germany'nin mülkiyetindedir. 
                Bu içeriklerin izinsiz kopyalanması, çoğaltılması veya dağıtılması yasaktır. Hizmetlerimiz 
                kapsamında hazırlanan belgeler (motivasyon mektupları, CV vb.) size özeldir ve sadece başvuru 
                amaçlı kullanılabilir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Gizlilik</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kişisel bilgileriniz Gizlilik Politikamız çerçevesinde korunur ve işlenir. Danışmanlık 
                sürecinde paylaştığınız tüm bilgiler gizli tutulur ve sadece hizmet sağlamak amacıyla 
                kullanılır.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. İptal ve İade Politikası</h2>
              <p className="text-muted-foreground leading-relaxed">
                Hizmet iptal ve iade koşulları sözleşmenizde belirtilmiştir. Genellikle, hizmet başladıktan 
                sonra kısmi iade yapılabilir. Detaylar için lütfen sözleşmenizi inceleyiniz veya danışmanlarımızla 
                iletişime geçiniz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Sorumluluk Reddi</h2>
              <p className="text-muted-foreground leading-relaxed">
                Envoedu Germany, en iyi hizmeti sunmak için çaba gösterir ancak üçüncü taraf kurumların 
                (üniversiteler, konsolosluklar, vize ofisleri) kararları veya işlem süreleri konusunda 
                sorumluluk kabul etmez. Web sitemizdeki bilgiler genel bilgilendirme amaçlıdır ve yasal 
                tavsiye niteliği taşımaz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Değişiklikler</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bu kullanım şartlarını zaman zaman güncelleyebiliriz. Önemli değişiklikler olduğunda 
                kullanıcılarımızı bilgilendiririz. Güncellemelerden sonra hizmetlerimizi kullanmaya 
                devam etmeniz, yeni şartları kabul ettiğiniz anlamına gelir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Uygulanacak Hukuk</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bu kullanım şartları Türkiye Cumhuriyeti yasalarına tabidir. Hizmetlerimizle ilgili 
                herhangi bir uyuşmazlık durumunda İstanbul mahkemeleri yetkilidir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. İletişim</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kullanım şartlarıyla ilgili sorularınız için bizimle iletişime geçebilirsiniz:
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

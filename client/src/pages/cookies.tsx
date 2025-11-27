import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-background pt-28 sm:pt-32 md:pt-36">
      <Navbar />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="cookies-title">
              Çerez Politikası
            </h1>
            <p className="text-muted-foreground" data-testid="cookies-last-updated">
              Son Güncelleme: 11 Kasım 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Çerez Nedir?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Çerezler, bir web sitesini ziyaret ettiğinizde bilgisayarınıza veya mobil cihazınıza 
                kaydedilen küçük metin dosyalarıdır. Çerezler, web sitelerinin daha etkin çalışmasını 
                ve deneyiminizi iyileştirmesini sağlar. Ayrıca site sahiplerine kullanıcıların siteyi 
                nasıl kullandığı hakkında bilgi verir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Çerezleri Neden Kullanıyoruz?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Envoedu Germany olarak çerezleri şu amaçlarla kullanıyoruz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Web sitemizin düzgün çalışmasını sağlamak</li>
                <li>Kullanıcı tercihlerinizi hatırlamak</li>
                <li>Kullanıcı deneyimini kişiselleştirmek</li>
                <li>Site performansını analiz etmek ve iyileştirmek</li>
                <li>Ziyaretçi trafiğini ve davranışlarını anlamak</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Kullandığımız Çerez Türleri</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">3.1. Zorunlu Çerezler</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Bu çerezler web sitemizin temel işlevlerini yerine getirmesi için gereklidir. 
                    Örneğin, oturum bilgilerinizi saklamak ve güvenli alanları yönetmek için kullanılır. 
                    Bu çerezler olmadan web sitemiz düzgün çalışmaz.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">3.2. Performans Çerezleri</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Bu çerezler, ziyaretçilerin web sitemizi nasıl kullandığı hakkında bilgi toplar. 
                    Hangi sayfaların en çok ziyaret edildiği, sayfa yükleme süreleri ve hata mesajları 
                    gibi bilgileri içerir. Bu veriler anonim olarak toplanır ve sadece web sitemizi 
                    iyileştirmek için kullanılır.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">3.3. İşlevsellik Çerezleri</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Bu çerezler, tercihlerinizi (dil seçimi, bölge vb.) hatırlamamıza ve daha 
                    kişiselleştirilmiş bir deneyim sunmamıza olanak tanır. Bu çerezler olmadan, 
                    her ziyaretinizde tercihlerinizi yeniden belirtmeniz gerekebilir.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">3.4. Hedefleme Çerezleri</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Bu çerezler, size ve ilgi alanlarınıza daha uygun reklamlar göstermek için 
                    kullanılır. Ayrıca aynı reklamın sürekli görünmesini önler ve reklam kampanyalarının 
                    etkinliğini ölçmeye yardımcı olur.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Üçüncü Taraf Çerezleri</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Web sitemizde aşağıdaki üçüncü taraf hizmetleri kullanıyoruz ve bu hizmetler kendi 
                çerezlerini yerleştirebilir:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Google Analytics:</strong> Site trafiğini ve kullanıcı davranışlarını analiz etmek için</li>
                <li><strong>Sosyal Medya Platformları:</strong> İçerik paylaşımı ve sosyal medya entegrasyonu için</li>
                <li><strong>Reklam Ağları:</strong> Hedeflenmiş reklamlar göstermek için</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Çerez Süresi</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Çerezler, süresine göre iki kategoriye ayrılır:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Oturum Çerezleri:</strong> Tarayıcınızı kapattığınızda otomatik olarak silinir</li>
                <li><strong>Kalıcı Çerezler:</strong> Belirli bir süre (genellikle 1-2 yıl) cihazınızda kalır</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Çerezleri kontrol etmek ve yönetmek için çeşitli seçenekleriniz vardır:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Tarayıcı Ayarları:</strong> Çoğu tarayıcı, çerezleri kabul etmeme, belirli 
                çerezleri reddetme veya mevcut çerezleri silme seçenekleri sunar</li>
                <li><strong>Çerez Tercihleri:</strong> Web sitemizi ilk ziyaret ettiğinizde çerez tercihlerinizi 
                belirtebilirsiniz</li>
                <li><strong>Devre Dışı Bırakma:</strong> Üçüncü taraf çerezlerini devre dışı bırakmak için 
                ilgili hizmetlerin ayarlarını kullanabilirsiniz</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>Önemli Not:</strong> Çerezleri devre dışı bırakırsanız, web sitemizin bazı özellikleri 
                düzgün çalışmayabilir veya bazı sayfalara erişemeyebilirsiniz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Popüler Tarayıcılarda Çerez Yönetimi</h2>
              <div className="space-y-3 text-muted-foreground ml-4">
                <p><strong>Google Chrome:</strong> Ayarlar → Gizlilik ve güvenlik → Çerezler ve diğer site verileri</p>
                <p><strong>Mozilla Firefox:</strong> Ayarlar → Gizlilik ve Güvenlik → Çerezler ve Site Verileri</p>
                <p><strong>Safari:</strong> Tercihler → Gizlilik → Çerezler ve web sitesi verileri</p>
                <p><strong>Microsoft Edge:</strong> Ayarlar → Gizlilik, arama ve hizmetler → Çerezler ve site izinleri</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Çerez Politikası Güncellemeleri</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bu çerez politikasını zaman zaman güncelleyebiliriz. Herhangi bir değişiklik olduğunda, 
                güncellenmiş politikayı bu sayfada yayınlayacağız ve "Son Güncelleme" tarihini değiştireceğiz. 
                Önemli değişiklikler olduğunda kullanıcılarımızı e-posta yoluyla bilgilendireceğiz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Daha Fazla Bilgi</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Çerezler ve gizliliğiniz hakkında daha fazla bilgi için:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Gizlilik Politikamızı okuyabilirsiniz</li>
                <li>Aşağıdaki iletişim bilgilerinden bize ulaşabilirsiniz</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. İletişim</h2>
              <p className="text-muted-foreground leading-relaxed">
                Çerez politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
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

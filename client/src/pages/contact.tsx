import { useState } from "react";
import { MapPin, Phone, Mail, NotebookPen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    program: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const sendEmailNotification = async (data: any) => {
    const templateParams = {
      from_name: data.fullName,
      from_email: data.email,
      phone: data.phone,
      program: data.program,
      message: data.message,
      to_email: "info@envoedugermany.com",
    };

    return emailjs.send(
      "service_jwj2g9q",
      "template_oeu7yz6",
      templateParams,
      "nSk-BeJXUhXBUfwmY"
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.program || !formData.message) {
      toast({
        title: "Eksik Bilgi",
        description: "Lütfen tüm alanları doldurun.",
        variant: "destructive",
      });
      return;
    }

    setIsSending(true);

    try {
      await sendEmailNotification(formData);
      
      toast({
        title: "Başarılı!",
        description: "Randevu talebiniz iletildi. En kısa sürede size döneceğiz.",
      });

      setFormData({
        fullName: "",
        phone: "",
        email: "",
        program: "",
        message: "",
      });
    } catch (error) {
      console.error("Hata:", error);
      toast({
        title: "Hata!",
        description: "Mesaj gönderilemedi. Lütfen tekrar deneyin.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">İletişime Geçin</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uzman ekibimizle ücretsiz danışmanlık randevunuzu alın
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Randevu Talep Formu</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName" className="block text-sm font-medium mb-2">Ad Soyad</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      placeholder="Adınızı girin"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="block text-sm font-medium mb-2">Telefon</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Telefon numaranız"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium mb-2">E-posta</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="E-posta adresiniz"
                  />
                </div>
                <div>
                  <Label htmlFor="program" className="block text-sm font-medium mb-2">İlgilendiğiniz Program</Label>
                  <Select value={formData.program} onValueChange={(v) => handleInputChange("program", v)}>
                    <SelectTrigger><SelectValue placeholder="Program seçin" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="muhendislik">Mühendislik</SelectItem>
                      <SelectItem value="isletme">İşletme</SelectItem>
                      <SelectItem value="tip">Tıp</SelectItem>
                      <SelectItem value="hukuk">Hukuk</SelectItem>
                      <SelectItem value="diger">Diğer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium mb-2">Mesajınız</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Sorularınız..."
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSending}>
                  <NotebookPen className="w-5 h-5 mr-2" />
                  {isSending ? "Gönderiliyor..." : "Randevu Talep Et"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Adres</h4>
                <p className="text-muted-foreground">Levent Mah. Büyükdere Cad. No: 185, Şişli/İstanbul</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">E-posta</h4>
                <p className="text-muted-foreground">info@envoedugermany.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
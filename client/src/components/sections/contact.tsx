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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertConsultationRequest } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    program: "",
    message: "",
  });

  const createConsultationRequest = useMutation({
    mutationFn: async (data: InsertConsultationRequest) => {
      const response = await apiRequest(
        "POST",
        "/api/consultation-requests",
        data,
      );
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Başarılı!",
        description:
          "Randevu talebiniz alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.",
      });
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        program: "",
        message: "",
      });
      queryClient.invalidateQueries({
        queryKey: ["/api/consultation-requests"],
      });
    },
    onError: () => {
      toast({
        title: "Hata!",
        description: "Randevu talebiniz alınamadı. Lütfen tekrar deneyin.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.program ||
      !formData.message
    ) {
      toast({
        title: "Eksik Bilgi",
        description: "Lütfen tüm alanları doldurun.",
        variant: "destructive",
      });
      return;
    }

    createConsultationRequest.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold text-foreground mb-4"
            data-testid="contact-title"
          >
            İletişime Geçin
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            data-testid="contact-description"
          >
            Uzman ekibimizle ücretsiz danışmanlık randevunuzu alın
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h3
                className="text-2xl font-semibold text-foreground mb-6"
                data-testid="contact-form-title"
              >
                Randevu Talep Formu
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Ad Soyad
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Adınızı girin"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      data-testid="input-full-name"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Telefon
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Telefon numaranız"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      data-testid="input-phone"
                    />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    E-posta
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="E-posta adresiniz"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="program"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    İlgilendiğiniz Program
                  </Label>
                  <Select
                    value={formData.program}
                    onValueChange={(value) =>
                      handleInputChange("program", value)
                    }
                  >
                    <SelectTrigger
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      data-testid="select-program"
                    >
                      <SelectValue placeholder="Program seçin" />
                    </SelectTrigger>
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
                  <Label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Mesajınız
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Sorularınız ve detaylar..."
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    data-testid="textarea-message"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
                  disabled={createConsultationRequest.isPending}
                  data-testid="button-submit-consultation"
                >
                  <NotebookPen className="w-5 h-5" />
                  <span>
                    {createConsultationRequest.isPending
                      ? "Gönderiliyor..."
                      : "Randevu Talep Et"}
                  </span>
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3
                className="text-2xl font-semibold text-foreground mb-6"
                data-testid="contact-info-title"
              >
                İletişim Bilgileri
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Adres</h4>
                    <p
                      className="text-muted-foreground"
                      data-testid="contact-address"
                    >
                      Levent Mahallesi, Büyükdere Caddesi
                      <br />
                      No: 185, Kanyon Ofis Binası
                      <br />
                      34394 Şişli, İstanbul
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {/* Basit WhatsApp ikonu (TSX-safe) */}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-accent"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.52 3.48A11.91 11.91 0 0012 .5C5.65.5.5 5.65.5 12c0 2.1.55 4.15 1.6 5.96L.5 23.5l5.7-1.5A11.94 11.94 0 0012 23.5c6.35 0 11.5-5.15 11.5-11.5 0-3.07-1.2-5.95-3.48-8.52z" />
                    </svg>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground">WhatsApp</h4>
                    <p
                      className="text-muted-foreground"
                      data-testid="text-whatsapp"
                    >
                      <a
                        href="https://wa.me/4915214885048"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        +49 1521 4885048
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">E-posta</h4>
                    <p
                      className="text-muted-foreground"
                      data-testid="contact-email"
                    >
                      info@envoedugermany.com
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Çalışma Saatleri
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <div
                  className="flex justify-between"
                  data-testid="working-hours-weekdays"
                >
                  <span>Pazartesi - Cuma:</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div
                  className="flex justify-between"
                  data-testid="working-hours-saturday"
                >
                  <span>Cumartesi:</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div
                  className="flex justify-between"
                  data-testid="working-hours-sunday"
                >
                  <span>Pazar:</span>
                  <span>Kapalı</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Sosyal Medya
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="social-facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="social-instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="social-linkedin"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="social-youtube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="social-x"
                >
                  <i className="fab fa-x-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

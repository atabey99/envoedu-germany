import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MapPin, Phone, Mail, Clock, Calendar, MessageCircle } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Ad soyad en az 2 karakter olmalıdır"),
  email: z.string().email("Geçerli bir email adresi girin"),
  phone: z.string().min(10, "Geçerli bir telefon numarası girin"),
  program: z.string().min(1, "Program seçimi yapın"),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalıdır")
});

const consultationFormSchema = z.object({
  fullName: z.string().min(2, "Ad soyad en az 2 karakter olmalıdır"),
  email: z.string().email("Geçerli bir email adresi girin"),  
  phone: z.string().min(10, "Geçerli bir telefon numarası girin"),
  preferredDate: z.string().min(1, "Tercih ettiğiniz tarihi seçin"),
  preferredTime: z.string().min(1, "Tercih ettiğiniz saati seçin"),
  consultationType: z.string().min(1, "Danışmanlık türü seçin"),
  notes: z.string().optional()
});

type ContactForm = z.infer<typeof contactFormSchema>;
type ConsultationForm = z.infer<typeof consultationFormSchema>;

export default function Contact() {
  const [activeTab, setActiveTab] = useState<"contact" | "consultation">("contact");
  const { toast } = useToast();

  const contactForm = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      program: "",
      message: ""
    }
  });

  const consultationForm = useForm<ConsultationForm>({
    resolver: zodResolver(consultationFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      preferredDate: "",
      preferredTime: "",
      consultationType: "",
      notes: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactForm) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Mesaj Gönderildi",
        description: "Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.",
      });
      contactForm.reset();
    },
    onError: () => {
      toast({
        title: "Hata",
        description: "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
        variant: "destructive"
      });
    }
  });

  const consultationMutation = useMutation({
    mutationFn: (data: ConsultationForm) => apiRequest("POST", "/api/consultation", data),
    onSuccess: () => {
      toast({
        title: "Randevu Oluşturuldu", 
        description: "Danışmanlık randevunuz başarıyla oluşturuldu. Size email ile detaylar gönderilecek.",
      });
      consultationForm.reset();
    },
    onError: () => {
      toast({
        title: "Hata",
        description: "Randevu oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.",
        variant: "destructive"
      });
    }
  });

  const onContactSubmit = (data: ContactForm) => {
    contactMutation.mutate(data);
  };

  const onConsultationSubmit = (data: ConsultationForm) => {
    consultationMutation.mutate(data);
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6" data-testid="contact-page-title">
            İletişime Geçin
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" data-testid="contact-page-description">
            Uzman ekibimizle iletişime geçin. Size en uygun hizmet paketini belirleyerek 
            Almanya'da eğitim yolculuğunuzu planlayalım.
          </p># thoughts

Looking at the design reference, I need to create a professional education consultancy website for Turkish students seeking higher education opportunities in Germany. The design shows a modern, professional layout with Turkish and German color themes (red/white), comprehensive service sections, testimonials, university partnerships, and contact forms.

Key requirements from the design:
- Professional hero section with statistics and call-to-action buttons
- Services section with 6 main services (university selection, application prep, language training, visa assistance, settlement support, career consulting)
- About section highlighting expertise and trust factors
- Step-by-step process section
- Student testimonials
- Partner universities showcase
- Contact form with comprehensive fields
- Professional footer with company information

I need to implement this as a React application using the existing tech stack (React, Tailwind CSS, Shadcn UI, React Hook Form) with a backend to handle form submissions.

Color scheme from design:
- Primary: hsl(0 84% 60%) - Red
- Secondary: hsl(222 47% 11%) - Dark blue/black
- Accent: hsl(43 96% 56%) - Gold/yellow
- Background: hsl(0 0% 98%) - Light gray/white

# useful_guidelines_from_blueprints

- Always prefer using in-memory storage (MemStorage) unless asked to use a database
- Make sure to update `IStorage` in `server/storage.ts` to accommodate any storage CRUD operations needed
- Use `wouter` for routing on the frontend and register pages in `client/src/App.tsx`
- For forms, use shadcn's `useForm` hook and `Form` component with `zodResolver` for validation
- Always use `@tanstack/react-query` when fetching data
- Mutations should use apiRequest from `@lib/queryClient` and invalidate cache after mutations
- Add `data-testid` attributes to interactive elements following the pattern `{action}-{target}`

# directory_structure

```json
[
    {"path": "shared/schema.ts", "status": "overwritten"},
    {"path": "server/storage.ts", "status": "overwritten"},
    {"path": "server/routes.ts", "status": "overwritten"},
    {"path": "client/src/index.css", "status": "overwritten"},
    {"path": "tailwind.config.ts", "status": "overwritten"},
    {"path": "client/src/App.tsx", "status": "overwritten"},
    {"path": "client/src/pages/home.tsx", "status": "new"},
    {"path": "client/src/components/navigation.tsx", "status": "new"},
    {"path": "client/src/components/hero-section.tsx", "status": "new"},
    {"path": "client/src/components/services-section.tsx", "status": "new"},
    {"path": "client/src/components/about-section.tsx", "status": "new"},
    {"path": "client/src/components/process-section.tsx", "status": "new"},
    {"path": "client/src/components/testimonials-section.tsx", "status": "new"},
    {"path": "client/src/components/universities-section.tsx", "status": "new"},
    {"path": "client/src/components/contact-section.tsx", "status": "new"},
    {"path": "client/src/components/footer.tsx", "status": "new"}
]

import type { Express } from "express";
import { createServer, type Server } from "http";
import { insertConsultationRequestSchema } from "@shared/schema";
import { sendConsultationRequest, sendConfirmationEmail } from "./emailService";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create consultation request and send email
  app.post("/api/consultation-requests", async (req, res) => {
    try {
      const validatedData = insertConsultationRequestSchema.parse(req.body);
      
      // Send consultation request to info@envoedugermany.com
      await sendConsultationRequest(validatedData);
      
      // Send confirmation email to user
      await sendConfirmationEmail(validatedData);
      
      res.json({ 
        success: true, 
        message: "Randevu talebiniz başarıyla gönderildi. En kısa sürede size dönüş yapacağız." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Geçersiz form verisi", 
          errors: error.errors 
        });
      } else {
        console.error('Consultation request error:', error);
        res.status(500).json({ 
          success: false, 
          message: "Randevu talebi gönderilirken bir hata oluştu. Lütfen tekrar deneyin." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

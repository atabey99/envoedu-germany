import type { Express } from "express";
import { createServer, type Server } from "http";
import { insertConsultationRequestSchema } from "@shared/schema";
import { sendConsultationRequest, sendConfirmationEmail } from "./emailService";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Simple health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Server is running" });
  });

  // IONOS email ile randevu talebi endpoint
  app.post("/api/consultation-requests", async (req, res) => {
    try {
      const validatedData = insertConsultationRequestSchema.parse(req.body);
      
      // Send consultation request to info@envoedugermany.com via IONOS
      await sendConsultationRequest(validatedData);
      
      // Send confirmation email to user via IONOS
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
        console.error('IONOS email error:', error);
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

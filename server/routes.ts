import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConsultationRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create consultation request
  app.post("/api/consultation-requests", async (req, res) => {
    try {
      const validatedData = insertConsultationRequestSchema.parse(req.body);
      const request = await storage.createConsultationRequest(validatedData);
      res.json(request);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid request data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Get all consultation requests (for admin purposes)
  app.get("/api/consultation-requests", async (req, res) => {
    try {
      const requests = await storage.getConsultationRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

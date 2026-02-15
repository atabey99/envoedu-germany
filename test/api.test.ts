import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { Express } from 'express';
import express from 'express';
import { registerRoutes } from '../server/routes';
import { insertConsultationRequestSchema } from '@shared/schema';

describe('API Testleri', () => {
  let app: Express;

  beforeEach(async () => {
    app = express();
    app.use(express.json());
    await registerRoutes(app);
  });

  describe('Health Check Endpoint', () => {
    it('GET /api/health başarılı yanıt döndürmeli', async () => {
      const response = await fetch('http://localhost:5000/api/health');
      expect(response.ok).toBe(true);
      const data = await response.json();
      expect(data.status).toBe('ok');
    });
  });

  describe('Consultation Request Endpoint', () => {
    it('Geçerli veri ile POST /api/consultation-requests başarılı olmalı', async () => {
      const validData = {
        fullName: 'Test User',
        email: 'test@example.com',
        phone: '+905551234567',
        program: 'Computer Science',
        message: 'Test message',
      };

      // Zod validation test
      const result = insertConsultationRequestSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('Geçersiz email ile validation hatası vermeli', () => {
      const invalidData = {
        fullName: 'Test User',
        email: 'invalid-email',
        phone: '+905551234567',
        program: 'Computer Science',
        message: 'Test message',
      };

      const result = insertConsultationRequestSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('Eksik alanlar ile validation hatası vermeli', () => {
      const incompleteData = {
        fullName: 'Test User',
        // email eksik
        phone: '+905551234567',
      };

      const result = insertConsultationRequestSchema.safeParse(incompleteData);
      expect(result.success).toBe(false);
    });
  });
});

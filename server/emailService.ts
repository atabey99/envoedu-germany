import nodemailer from 'nodemailer';
import type { InsertConsultationRequest } from '@shared/schema';

// IONOS SMTP yapılandırması
const transporter = nodemailer.createTransport({
  host: 'smtp.ionos.com',
  port: 587,              // Vercel'de 465 bazen engellenir, 587 daha garantidir
  secure: false,          // 587 portu için false olmalı
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false // Sertifika doğrulama hatalarını aşmak için gerekli
  }
});


export async function sendConsultationRequest(consultationData: InsertConsultationRequest): Promise<void> {
  const emailContent = `
    <h2>Yeni Randevu Talebi</h2>
    <p><strong>Ad Soyad:</strong> ${consultationData.fullName}</p>
    <p><strong>Email:</strong> ${consultationData.email}</p>
    <p><strong>Telefon:</strong> ${consultationData.phone}</p>
    <p><strong>Program:</strong> ${consultationData.program}</p>
    <p><strong>Mesaj:</strong></p>
    <p>${consultationData.message || 'Mesaj bulunmamaktadır.'}</p>
    
    <hr>
    <p><small>Bu email EnvoEdu Germany web sitesi üzerinden gönderilmiştir.</small></p>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'info@envoedugermany.com',
    subject: `Yeni Randevu Talebi - ${consultationData.fullName}`,
    html: emailContent,
    replyTo: consultationData.email
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Consultation request email sent successfully');
  } catch (error) {
    console.error('Error sending consultation request email:', error);
    throw new Error('Email gönderimi başarısız oldu');
  }
}

export async function sendConfirmationEmail(consultationData: InsertConsultationRequest): Promise<void> {
  const confirmationContent = `
    <h2>Randevu Talebiniz Alındı</h2>
    <p>Sayın ${consultationData.fullName},</p>
    
    <p>Randevu talebiniz başarıyla alınmıştır. En kısa sürede size dönüş yapacağız.</p>
    
    <h3>Talep Detaylarınız:</h3>
    <p><strong>Program:</strong> ${consultationData.program}</p>
    <p><strong>Telefon:</strong> ${consultationData.phone}</p>
    
    <p>Herhangi bir sorunuz olursa bizimle iletişime geçmekten çekinmeyin.</p>
    
    <p>Saygılarımızla,<br>
    EnvoEdu Germany Ekibi</p>
    
    <hr>
    <p><small>Bu otomatik bir emaildir, lütfen yanıtlamayın.</small></p>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: consultationData.email,
    subject: 'Randevu Talebiniz Alındı - EnvoEdu Germany',
    html: confirmationContent
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent successfully');
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
}
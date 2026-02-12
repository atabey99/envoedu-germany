import nodemailer from 'nodemailer';
import type { InsertConsultationRequest } from '@shared/schema';

// Email transporter configuration
// You can configure this with your preferred email service (Gmail, Outlook, SMTP, etc.)
const transporter = nodemailer.createTransport({
  // For Gmail (you'll need to enable "Less secure app access" or use App Password)
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'info@envoedugermany.com',
    pass: process.env.EMAIL_PASS || 'xfpXnhsXxwGLpLYs9yBycHZWWm4WyzmM'
  } 
});

// Alternative SMTP configuration (uncomment and modify as needed)
/*
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
*/

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
    from: process.env.EMAIL_USER || 'noreply@envoedugermany.com',
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
    from: process.env.EMAIL_USER || 'noreply@envoedugermany.com',
    to: consultationData.email,
    subject: 'Randevu Talebiniz Alındı - EnvoEdu Germany',
    html: confirmationContent
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent successfully');
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    // Don't throw error for confirmation email, it's not critical
  }
}
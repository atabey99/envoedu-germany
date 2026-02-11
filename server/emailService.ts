import nodemailer from 'nodemailer';
import type { InsertAppointmentRequest } from '@shared/schema';

// Email transporter configuration
// You can configure this with your preferred email service (Gmail, Outlook, SMTP, etc.)
const transporter = nodemailer.createTransport({
  // For Gmail (you'll need to enable "Less secure app access" or use App Password)
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
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

export async function sendAppointmentRequest(appointmentData: InsertAppointmentRequest): Promise<void> {
  const emailContent = `
    <h2>Yeni Randevu Talebi</h2>
    <p><strong>Ad Soyad:</strong> ${appointmentData.fullName}</p>
    <p><strong>Email:</strong> ${appointmentData.email}</p>
    <p><strong>Telefon:</strong> ${appointmentData.phone}</p>
    <p><strong>Program:</strong> ${appointmentData.program}</p>
    <p><strong>Tercih Edilen Tarih:</strong> ${appointmentData.preferredDate}</p>
    <p><strong>Mesaj:</strong></p>
    <p>${appointmentData.message || 'Mesaj bulunmamaktadır.'}</p>
    
    <hr>
    <p><small>Bu email EnvoEdu Germany web sitesi üzerinden gönderilmiştir.</small></p>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER || 'noreply@envoedugermany.com',
    to: 'info@envoedugermany.com',
    subject: `Yeni Randevu Talebi - ${appointmentData.fullName}`,
    html: emailContent,
    replyTo: appointmentData.email
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Appointment request email sent successfully');
  } catch (error) {
    console.error('Error sending appointment request email:', error);
    throw new Error('Email gönderimi başarısız oldu');
  }
}

export async function sendConfirmationEmail(appointmentData: InsertAppointmentRequest): Promise<void> {
  const confirmationContent = `
    <h2>Randevu Talebiniz Alındı</h2>
    <p>Sayın ${appointmentData.fullName},</p>
    
    <p>Randevu talebiniz başarıyla alınmıştır. En kısa sürede size dönüş yapacağız.</p>
    
    <h3>Talep Detaylarınız:</h3>
    <p><strong>Program:</strong> ${appointmentData.program}</p>
    <p><strong>Tercih Edilen Tarih:</strong> ${appointmentData.preferredDate}</p>
    <p><strong>Telefon:</strong> ${appointmentData.phone}</p>
    
    <p>Herhangi bir sorunuz olursa bizimle iletişime geçmekten çekinmeyin.</p>
    
    <p>Saygılarımızla,<br>
    EnvoEdu Germany Ekibi</p>
    
    <hr>
    <p><small>Bu otomatik bir emaildir, lütfen yanıtlamayın.</small></p>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER || 'noreply@envoedugermany.com',
    to: appointmentData.email,
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
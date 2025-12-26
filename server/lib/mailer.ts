import nodemailer from "nodemailer";

export const mailer = nodemailer.createTransport({
  host: "smtp.ionos.de",
  port: 587,
  secure: false,
  auth: {
    user: "info@envoedugermany.com",
    pass: process.env.EMAIL_PASSWORD, // IONOS mail şifresi
  },
});

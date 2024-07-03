import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const sendMail = async (
  mail: string,
  content: string,
  from: string,
  text: string,
  subject: string
) => {
  const transporter = nodemailer.createTransport({
    // config mail server
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.ACCOUNT_MAIL,
      pass: process.env.PASSWORD_MAIL,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  var mainOptions = {
    from: from,
    to: mail,
    subject: subject,
    text: text,
    html: content,
  };

  return await transporter.sendMail(mainOptions);
};

export const mailService = {
  sendMail,
};

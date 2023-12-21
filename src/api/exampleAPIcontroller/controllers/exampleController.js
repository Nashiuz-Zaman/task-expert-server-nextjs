const nodemailer = require("nodemailer");
require("dotenv").config();

// this should be your own google app password generated from google security, I have not included the file in this repo
const googlePass = require("./googlePass.js");

const sendEmail = async (req, res) => {
  const { name, email, subject, emailBody } = req.body;
  try {
    const smtpTransport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: process.env.USER,
        pass: googlePass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const sendResult = await smtpTransport.sendMail({
      from: "nashiuz.zaman@gmail.com",
      to: "nashiuz.zaman@gmail.com",
      subject: subject,
      html: `<h3>From: ${email}</h3>  
             <h3>Sender Name: ${name}</h3>  
             <h3>Subject: ${subject}</h3>                
             <p>${emailBody}</p>
            `,
    });

    if (sendResult.messageId) {
      res.send({ success: true });
    }
    console.log(sendResult);
  } catch (err) {
    console.log(err);
  }
};

module.exports = sendEmail;

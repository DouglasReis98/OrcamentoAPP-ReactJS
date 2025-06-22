require("dotenv").config();
const nodemailer = require("nodemailer");
const enviarEmail = async (nome, email, destEmail, mensagem, bufferExcel) =>  {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: process.env.PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: "douglasreisapps@gmail.com",
    to: destEmail,
    subject: "Orçamento do Orçamento App",
    html: `De: ${nome} </br> E-mail: ${email} </br> ${mensagem}`,
    attachments: [
      {
        filename: "orcamento.xlsx",
        content: bufferExcel,
        contentType:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    ],
  });
}

module.exports = enviarEmail;

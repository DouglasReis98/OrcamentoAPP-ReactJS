const nodemailer = require("nodemailer");

const enviarEmail = async (nome, email, destEmail, mensagem, bufferExcel) =>  {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "nao.responder.douglas.reis@gmail.com",
      pass: "nhfzokpzzrorserw",
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

const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());

const upload = multer({ dest: "/upload" });


app.post("/enviar-email", upload.single("file"), async (req, res) => {
  const { email } = req.body;
  const file = req.file;
  const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: "",
      pass: "",
    },
  });
  try {
    await transporter.sendMail({
      from: "",
      to: email,
      subject: "Arquivo do Orçamento APP",
      text: "Segue o arquivo",
      attachments: [
        {
          filename: file.originalname,
          path: file.path,
        },
      ],
    });

    fs.unlinkSync(file.path);
    res.send("Email enviado com sucesso!");
  } catch (error) {
    res.status(500).send("erro ao enviar e-mail");
  }
});

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

app.listen(5000, () => console.log("Servidor rodando na porta 5000"));

const express = require("express");
//const nodemailer = require("nodemailer");
const multer = require("multer");
const cors = require("cors");
//const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

//const upload = multer({ dest: "/upload" });

app.post("/enviar-email", async (req, res) => {
  const enviarEmail = require("./functions/enviarEmail");
  const gerarExcelBuffer = require("./functions/gerarExcelBuffer");
  try {
    const { nome, email, destEmail, mensagem, dados } = req.body;
    const buffer = await gerarExcelBuffer(dados);
    await enviarEmail(nome, email, destEmail, mensagem, buffer);
    res.json({ status: "success" });
  } catch (error) {
    res.status(500).send("Erro ao enviar e-mail! " + error);
  }
});

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

app.post("/teste", (req, res) => {
  res.send("Você chegou aqui");
});

app.listen(5000, () => console.log("Servidor rodando na porta 5000"));

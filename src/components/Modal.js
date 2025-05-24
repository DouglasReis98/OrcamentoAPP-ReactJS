import React, { useState } from "react";
import style from "./Modal.module.css";
import { BsXCircleFill } from "react-icons/bs";
const Modal = ({ modal, fecharModal }) => {
  const [nome, setNome] = useState("");
  const [emailEmissor, setEmailEmissor] = useState("");
  const [emailDestinatario, setEmailDestinatario] = useState("");
  const [mensagem, setMensagem] = useState("");

  if (modal === true) {
    return (
      <div className={style.modal}>
        <div className={style.fechar} onClick={fecharModal}>
          <span>
            <BsXCircleFill />
          </span>
        </div>
        <h1>Mande o arquivo do seu orçamento por E-mail!</h1>
        <form action="" method="post">
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              name="nome"
              id="nome"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
            />
          </div>
          <div>
            <label htmlFor="emailEmissor">Seu Email:</label>
            <input
              type="email"
              name="emailEmissor"
              id="emailEmissor"
              onChange={(e) => setEmailEmissor(e.target.value)}
              value={emailEmissor}
            />
          </div>
          <div>
            <label htmlFor="emailDestinatario">E-mail do Destinatário:</label>
            <input
              type="email"
              name="emailDestinatario"
              id="emailDestinatario"
              onChange={(e) => setEmailDestinatario(e.target.value)}
              value={emailDestinatario}
            />
          </div>
          <div>
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              id="mensagem"
              onChange={(e) => setMensagem(e.target.value)}
              value={mensagem}
            />
          </div>
          <div className={style.botoes}>
            <input type="submit" value="Enviar" />
            <input type="reset" value="Limpar" />
          </div>
        </form>
      </div>
    );
  }
  return null;
};

export default Modal;

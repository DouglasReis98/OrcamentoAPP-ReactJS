import React, { useState } from "react";
import style from "./Tabela.module.css";
import Modal from "./Modal";

const EnviarPorEmail = () => {
  const [modal, setModal] = useState(false);

  const fecharModal = () => {
    setModal(false)
  }

  return (
    <>
      <button id={style.enviarPorEmail} onClick={() => setModal(true)}>
        Enviar por E-mail
      </button>
      <Modal modal={modal} fecharModal={fecharModal}/>
    </>
  );
};

export default EnviarPorEmail;

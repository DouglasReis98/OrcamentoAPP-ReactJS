import React from "react";
import { useState } from "react";
import style from "./Tabela.module.css";
import ModalEnviarEmail from "./ModalEnviarEmail";
const EnviarEmail = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    if (modal === false) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  return (
    <>
      <button id={style.enviar} onClick={toggleModal}>
        Enviar por E-mail
      </button>
      <ModalEnviarEmail modal={modal} setModal={toggleModal}/>
    </>
  );
};

export default EnviarEmail;

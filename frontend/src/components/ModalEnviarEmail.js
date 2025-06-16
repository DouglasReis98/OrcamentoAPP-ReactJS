import style from "./ModalEnviarEmail.module.css";
import {BsXCircleFill} from "react-icons/bs"
const ModalEnviarEmail = ({ modal, setModal }) => {

  const enviarEmail = (e) => {
    e.preventDefault();
    setModal(false);
  }

  return (
    modal && (
      <div id={style.modal}>
        <div className={style.fechar_modal} onClick={setModal}>
          <span ><BsXCircleFill/></span>
        </div>
        <h1>Envie o seu Orçamento por Email!</h1>
        <div className={style.container}>
          <form onSubmit={enviarEmail}>
            <div>
              <label htmlFor="nome">Nome:</label>
              <input type="text" name="nome" id="nome" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="text" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="destEmail">Email do Destinatário:</label>
              <input type="text" name="destEmail" id="destEmail" />
            </div>
            <div>
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea type="text" name="mensagem" id="mensagem" />
            </div>
            <div>
              <button id={style.enviar_email} type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default ModalEnviarEmail;

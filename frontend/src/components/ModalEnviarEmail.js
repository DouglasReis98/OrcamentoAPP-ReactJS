import { use, useState } from "react";
import style from "./ModalEnviarEmail.module.css";
import { BsXCircleFill } from "react-icons/bs";
import axios from "axios";
import classNames from "classnames";

const ModalEnviarEmail = ({ modal, setModal }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [destEmail, setDestEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [flashMessage, setFlashMessage] = useState(false);

  const exibirFlashMessage = () => {
    setFlashMessage(true);
    setTimeout(() => {
      setFlashMessage(false);
    }, 3000);
  };

  const dados = JSON.parse(localStorage.getItem("itensOrcamento"));
  const enviarEmail = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      await axios.post(window.location.href + "enviar-email", {
        nome,
        email,
        destEmail,
        mensagem,
        dados,
      });
      setStatus({ type: "success", message: "E-mail enviado com sucesso!" });
      setNome("");
      setEmail("");
      setDestEmail("");
      setMensagem("");
    } catch (error) {
      console.log(error);
      const msg = error.response?.data || "Houve uma falha no envio!";
      setStatus({ type: "error", message: msg });
    }
    setLoading(false)
    exibirFlashMessage();
    setModal(false);
  };

  return (
    <>
      {flashMessage && (
        <section
          className={classNames(
            style.mensagem_envio,
            status.type === "success" ? style.envioSucesso : style.envioFalha
          )}
        >
          {status.message}
        </section>
      )}
      {modal && (
        <div id={style.modal}>
          <div className={style.fechar_modal} onClick={setModal}>
            <span>
              <BsXCircleFill />
            </span>
          </div>
          <h1>Envie o seu Orçamento por Email!</h1>
          <div className={style.container}>
            <form onSubmit={enviarEmail}>
              <div>
                <label htmlFor="nome">Nome:</label>
                <input
                  type="text"
                  name="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="destEmail">Email do Destinatário:</label>
                <input
                  type="text"
                  name="destEmail"
                  value={destEmail}
                  onChange={(e) => setDestEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="mensagem">Mensagem:</label>
                <textarea
                  type="text"
                  name="mensagem"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  required
                />
              </div>
              <div>
                <button id={style.enviar_email} type="submit">
                  {loading === true ? "Enviando..." : "Enviar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalEnviarEmail;

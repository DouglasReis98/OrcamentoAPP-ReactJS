import React, { useState } from "react";
import style from "./Form.module.css";
const Form = ({cadastrarItem}) => {
  const [item, setItem] = useState("");
  const [qtde, setQtde] = useState("");
  const [preco, setPreco] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (item !== "" && qtde !== isNaN && preco !== isNaN) {
    cadastrarItem(item, qtde, preco)
    
    setItem("");
    setQtde("");
    setPreco("");

    //exibirOrcamento();
  } else {
    alert("Os dados precisam ser inseridos!");
  }

    console.log(item + " " + qtde + " " + preco + " ");

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="item">Item:</label>
        <input
          type="text"
          id={style.item}
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="qtde">Qtde:</label>
        <input
          type="number"
          min="0"
          value={qtde}
          id={style.qtde}
          onChange={(e) => setQtde(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="preco">Preço (R$):</label>
        <input
          type="number"
          step="0.010"
          value={preco}
          id={style.preco}
          onChange={(e) => setPreco(e.target.value)}
        />
      </div>
      <div id={style.botoes}>
        <input type="submit" id={style.addItem} value="Adicionar" />
        <input type="reset" id={style.resetItem} value="Limpar" />
      </div>
    </form>
    
  );
};

export default Form;

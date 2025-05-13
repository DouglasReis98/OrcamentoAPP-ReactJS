import React, { useState } from "react";
import style from "./Form.module.css";
const Form = () => {
  const [item, setItem] = useState("");
  const [qtde, setQtde] = useState("");
  const [preco, setPreco] = useState("");

  let arrItens = [];
  let editIndex = null;

if (localStorage.getItem("itensOrcamento")) {
  arrItens = JSON.parse(localStorage.getItem("itensOrcamento"));
}

  const cadastrarItem = (e) => {
    e.preventDefault();

    if (item !== "" && qtde !== isNaN && preco !== isNaN) {
    if (editIndex === null) {
      const objItem = {
        Item: item,
        Quantidade: qtde,
        Preco: (preco * qtde).toFixed(2),
      };

      arrItens.push(objItem);

      localStorage.setItem("itensOrcamento", JSON.stringify(arrItens));

    } else {
      arrItens[editIndex] = {
        Item: item,
        Quantidade: qtde,
        Preco: (preco * qtde).toFixed(2),
      };

      arrItens.splice(editIndex, 1, arrItens[editIndex]);
      localStorage.setItem("itensOrcamento", JSON.stringify(arrItens));
      editIndex = null;
      //form.removeChild(form.children[0])
      //addItem.value = "Adicionar";

    }
    
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
    <form onSubmit={cadastrarItem}>
      <div>
        <label htmlFor="item">Item:</label>
        <input
          type="text"
          id={style.item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="qtde">Qtde:</label>
        <input
          type="number"
          min="0"
          id={style.qtde}
          onChange={(e) => setQtde(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="preco">Preço (R$):</label>
        <input
          type="number"
          step="0.010"
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

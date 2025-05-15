import React from "react";
import style from './Tabela-Items.module.css'
const Items = ({arrItens, editIndex}) => {

  const total = arrItens
        .reduce((acumulador, num) => acumulador + parseFloat(num.Preco), 0)
        .toFixed(2);

  return (
    <>
      {arrItens.length > 0 ? (
        <>
          {arrItens.map((e, i) => (
            <tr key={i}>
              <td>{e.Item}</td>
              <td>{e.Quantidade}</td>
              <td>R$ {e.Preco}</td>
              <td>
                <button id={style.btnEditar}>Editar</button>
              </td>
              <td>
                <button id={style.btnRemover}>Remover</button>
              </td>
            </tr>
          ))}
        </>
      ) : (
        <tr>
          <td colSpan="4">Não há itens para exibir!</td>
        </tr>
      )}
    </>
  );
};

export default Items;

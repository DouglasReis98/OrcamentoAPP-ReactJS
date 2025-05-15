import React from "react";
import style from "./Tabela.module.css";
const Tabela = ({arrItens, editIndex}) => {
  
  const total = arrItens
        .reduce((acumulador, num) => acumulador + parseFloat(num.Preco), 0)
        .toFixed(2);

  return (
    <>
      <table id={style.tbOrcamento} border="2" align="center">
        <thead>
          <tr>
            <th colSpan="5">Itens Adicionados</th>
          </tr>
          <tr>
            <th>Item</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th colSpan="2">Ação</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5">
              <p>
                Total: R$ <span id={style.total}>0,00</span>
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan="5">
              <button id={style.baixar}>Baixar Arquivo</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default Tabela;

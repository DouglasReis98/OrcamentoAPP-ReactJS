import ExportExcel from "./ExportExcel";
import style from "./Tabela.module.css";
const Tabela = ({arrItens, editarItem, remover}) => {

const numberFormat = new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

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
                        <td>R$ {numberFormat.format(e.Preco)}</td>
                        <td>
                          <button id={style.btnEditar} onClick={() => editarItem(i, i.item, i.qtde, i.preco)}>Editar</button>
                        </td>
                        <td>
                          <button id={style.btnRemover} onClick={() => remover(i)}>Remover</button>
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
                Total: R$ <span id={style.total}>{numberFormat.format(total > 0 ? total : 0)}</span>
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan="5">
              <ExportExcel dados={arrItens} total={total} nomeArquivo="orcamento"/>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default Tabela;

import React from 'react'
import style from './Tabela.module.css'
const Tabela = () => {
  return (
    <>
    <table id={style.tbOrcamento} border="2" align="center">
<thead>
            <tr>
                <th colspan="5">Itens Adicionados</th>
            </tr>
            <tr>

                <th>Item</th>
                <th>Quantidade</th>
                <th>Preço</th>
                <th colspan="2">Ação</th>
            </tr>
        </thead>
        <tbody></tbody>
<tfoot>
            <tr>
                <td colspan="5">
                    <p>Total: R$ <span id={style.total}>0,00</span></p>
                </td>
            </tr>
            <tr>
                <td colspan="5">
                    <button id={style.baixar}>Baixar Arquivo</button>
                </td>
            </tr>


        </tfoot>

    </table>
    </>
  )
}

export default Tabela
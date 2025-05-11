import React from 'react'
import style from './Form.module.css'
const Form = () => {
  return (
    <form>
        <div>
            <label for="item">Item:</label>
            <input type="text" id={style.item}/>
        </div>

        <div>
            <label for="qtde">Qtde:</label>
            <input type="number" min="0" id={style.qtde}/>
        </div>

        <div>
            <label for="preco">Preço (R$):</label>
            <input type="number" step="0.010" id={style.preco}/>
        </div>
        <div id={style.botoes}>
            <input type="submit" id={style.addItem} value="Adicionar"/>
            <input type="reset" id={style.resetItem} value="Limpar"/>
        </div>
    </form>
  )
}

export default Form
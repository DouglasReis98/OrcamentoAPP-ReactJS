import style from "./Form.module.css";
const Form = ({editIndex, item, qtde, preco, setItem, setQtde, setPreco, adicionarItem, reset, handleTouchStart}) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    if (item !== "" && qtde !== isNaN && preco !== isNaN) {
    adicionarItem(item, qtde, preco)
    
    setItem("");
    setQtde("");
    setPreco("");

  } else {
    alert("Os dados precisam ser inseridos!");
  }

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
        <input type="submit" id={style.addItem} value={editIndex === null ? "Adicionar" : "Atualizar"} onTouchStart={() => handleTouchStart()} />
        <input type="reset" id={style.resetItem} value={editIndex === null ? "Limpar" : "Cancelar"} onClick={() => reset()} onTouchStart={() => handleTouchStart()} />
      </div>
    </form>
    
  );
};

export default Form;

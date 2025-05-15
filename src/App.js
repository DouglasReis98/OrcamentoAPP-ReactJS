import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Tabela from "./components/Tabela";
function App() {
  const [arrItens, setArrItens] = useState(() => {
    const itensSalvos = localStorage.getItem("itensOrcamento");
    return itensSalvos ? JSON.parse(itensSalvos) : [];
  });

  useEffect(() => {
    localStorage.setItem("itensOrcamento", JSON.stringify(arrItens));
  }, [arrItens]);

  let editIndex = null;

  const adicionar = (item, qtde, preco) => {
    if (editIndex === null) {
      const objItem = {
        Item: item,
        Quantidade: qtde,
        Preco: (preco * qtde).toFixed(2),
      };

      setArrItens([...arrItens, objItem]);
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
    }
  };

  const editar = (index, item, qtde, preco) => {
    editIndex = index;
    item = arrItens[index].Item;
    qtde = arrItens[index].Quantidade;
    preco = (arrItens[index].Preco / arrItens[index].Quantidade).toFixed(2);
    //addItem.value = "Atualizar";
  };

  return (
    <div className="App">
      <header>
        <h1>Orçamento APP</h1>
      </header>

      <Form
        editIndex={editIndex}
        adicionarItem={adicionar}
        editarItem={editar}
      />
      <Tabela arrItens={arrItens} editarItem={editar} />
      <Footer />
    </div>
  );
}

export default App;

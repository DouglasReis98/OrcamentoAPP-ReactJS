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

  const [editIndex, setEditIndex] = useState(null);
  const [item, setItem] = useState("");
  const [qtde, setQtde] = useState("");
  const [preco, setPreco] = useState("");

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

      const novoArrItens = [...arrItens];
      novoArrItens.splice(editIndex, 1, novoArrItens[editIndex]);
      setArrItens(novoArrItens);
      localStorage.setItem("itensOrcamento", JSON.stringify(novoArrItens));
      setEditIndex(null);
    }
  };

  const editar = (index) => {
    setEditIndex(index);
    setItem(arrItens[index].Item);
    setQtde(arrItens[index].Quantidade);
    setPreco((arrItens[index].Preco / arrItens[index].Quantidade).toFixed(2));
  };

  const reset = () => {
    setEditIndex(null);
    setItem("");
    setQtde("");
    setPreco("");
  };

  const remover = (index) => {
    const confirmacao = window.confirm(
      "Tem certeza que deseja remover este item do orçamento?"
    );

    if (confirmacao) {
      const novoArrItens = [...arrItens];
      novoArrItens.splice(index, 1);
      localStorage.setItem("itensOrcamento", JSON.stringify(novoArrItens));
      setArrItens(novoArrItens)
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Orçamento APP</h1>
      </header>

      <Form
        editIndex={editIndex}
        item={item}
        qtde={qtde}
        preco={preco}
        setItem={setItem}
        setQtde={setQtde}
        setPreco={setPreco}
        adicionarItem={adicionar}
        editarItem={editar}
        reset={reset}
      />
      <Tabela arrItens={arrItens} editarItem={editar} remover={remover} />
      <Footer />
    </div>
  );
}

export default App;

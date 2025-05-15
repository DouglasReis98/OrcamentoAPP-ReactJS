import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Tabela from "./components/Tabela";
function App() {
  const [arrItens, setArrItens] = useState([]);
  let editIndex = null;

  useEffect(() => {
    if (localStorage.getItem("itensOrcamento")) {
      setArrItens(JSON.parse(localStorage.getItem("itensOrcamento")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("itensOrcamento", JSON.stringify(arrItens));
  }, [arrItens]);

  const cadastrarItem = (item, qtde, preco) => {
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

  return (
    <div className="App">
      <header>
        <h1>Orçamento APP</h1>
      </header>

      <Form cadastrarItem={cadastrarItem} />
      <Tabela arrItens={arrItens} />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Tabela from './components/Tabela';
function App() {
  return (
    <div className="App">
      <header>
                <h1>Orçamento APP</h1>
      </header>

      <Form/>
      <Tabela/>
      <Footer/>
    </div>
  );
}

export default App;

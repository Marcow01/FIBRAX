import './App.css';
import Cabecalho from './components/Cabecalho';
import Corpo from './components/Corpo';
import Descricao from './components/Descricao';
import Sobre from './components/Sobre';
import Clientes from './components/Clientes';
import Carrossel from './components/Carrossel';
import Contato from './components/Contato';

function App() {
  return (
    <div className="">

      <Corpo></Corpo>
      <Carrossel></Carrossel>
      <Descricao></Descricao>
      <Sobre></Sobre>
      <Clientes></Clientes>
      <Contato></Contato>
    </div>
  );
}

export default App;

import './App.css';
import Cabecalho from './components/Cabecalho';
import Corpo from './components/Corpo';
import Descricao from './components/Descricao';
import Sobre from './components/Sobre';
import Clientes from './components/Clientes';
import Carrossel from './components/Carrossel';
import Contato from './components/Contato';
import Marcas from './components/Marcas';
import Rodape from './components/Rodape';

function App() {
  return (
    <div className="">
      <Cabecalho></Cabecalho>
      <Corpo></Corpo>
      <Carrossel></Carrossel>
      <Descricao></Descricao>
      <Sobre></Sobre>
      <Clientes></Clientes>
      <Marcas></Marcas>
      <Contato></Contato>
      <Rodape></Rodape>
    </div>
  );
}

export default App;

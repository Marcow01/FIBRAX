import { Button } from "flowbite-react";
import Nota from '../assets/imgs/nota.png'; 

function Sobre() {
  return (
    <div className="flex justify-center bg-[#D0542E]">
      <section className="w-9/12 h-screen mt-16">
      <div className="flex flex-wrap items-center h-full">

        <div className="md:w-1/2">
        <a className="text-white text-4xl font-semibold cursor-default text-justify">Conheça nossa equipe</a>
        <p className="text-white text-lg text-justify mt-5">Empenhados em entregar qualidade por um ótimo preço a FIBRAX CAPACHOS atua no mercado desde 2018, conquistando clientes e criando sua marca em tapetes personalizados. </p>
        </div>

        <div className="md:w-1/2 flex justify-end">
          <img src={Nota} alt="Descrição da imagem" className="max-w-96 h-auto"/>
        </div>
      </div>
      </section>
    </div>
    
    
  );
}

export default Sobre;

import { Button } from "flowbite-react";
import Nota from '../assets/imgs/nota.png'; 

function Sobre() {
  return (
    <div className="flex justify-center bg-[#D0542E]">
      <section className="w-9/12 h-screen mt-16">
      <div className="flex flex-wrap items-center h-full">

        <div className="md:w-1/2">

        <h1 class="font-bold title-font mb-4 text-white lg:text-4xl text-3xl">
          Conheça nossa equipe.
        </h1>
        
        <p class="lg:text-lg text-1xl text-white text-justify">
        Empenhados em entregar qualidade por um ótimo preço a <span className="font-bold">FIBRAX CAPACHOS </span>atua no mercado desde 2018, conquistando clientes e criando sua marca em tapetes personalizados. 
        </p>

        <p className="text-white text-lg text-justify mt-5"></p>
        
        </div>

        <div className="md:w-1/2 flex justify-end">

          {/*<img src={Nota} alt="Descrição da imagem" className="max-w-96 h-auto"/>*/}
        </div>
      </div>
      </section>
    </div>
    
    
  );
}

export default Sobre;

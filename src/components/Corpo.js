import { Button } from "flowbite-react";
import Banner from '../assets/imgs/banner.png'; 

function Corpo() {
  return (
    <div className="flex justify-center">
      <section className="w-9/12 h-screen mt-16">
        <div className="flex flex-wrap items-center">

          <div className="md:w-1/2">
          <h1 class="font-bold title-font mb-4 text-gray-400 lg:text-4xl text-3xl">
            Transforme a entrada em algo especial com nossos <span className="text-[#FF6100]">capachos personalizados.</span>
          </h1>

            <p class="lg:text-lg text-1xl text-gray-400">
            nossos capachos personalizados são a chave para uma entrada que marca presença, garantindo que cada visita seja uma experiência <span className="text-[#FF6100] font-bold">memorável</span> e <span className="text-[#FF6100] font-bold">acolhedora</span>.
            </p>
            
            <Button className="bg-[#FF6100] mt-2">Conheça</Button>
          </div>

          <div className="md:w-1/2 flex justify-end">
            <img src={Banner} alt="Descrição da imagem" className="max-w-96 h-auto"/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Corpo;
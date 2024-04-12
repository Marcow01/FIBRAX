import { Button } from "flowbite-react";
import Banner from '../assets/imgs/banner.png'; 

function Corpo() {
  return (
    <div className="flex justify-center">
      <section className="w-9/12 h-screen mt-16">
        <div className="flex flex-wrap items-center">

          <div className="md:w-1/2">
            <a className="text-[#FF6100] text-4xl font-semibold cursor-default text-justify">Transforme cada entrada em uma experiência memorável!</a>
            <p className="text-[#282729] text-lg text-justify mt-5">cada entrada em uma experiência memorável com nossos tapetes personalizados, criando um primeiro impacto que perdura.</p>
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
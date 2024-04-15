import { Button } from "flowbite-react";
import Nota from '../assets/imgs/nota.png'; 

import React, { useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Sobre() {
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);

  useEffect(() => {
    const config = {
      origin: "left",
      delay: 200,
      distance: "10px",
      scale: 1,
      easing: "ease",
      reset: true
    };

    ScrollReveal().reveal(boxRef1.current,{ ...config, delay: 200});
    ScrollReveal().reveal(boxRef2.current, { ...config, delay: 300 });
  }, []);

  return (
    <div className="flex justify-center bg-[#D0542E]">
      <section className="w-full md:w-9/12 mt-16 p-8 md:p-0 mb-16">
      <div className="flex flex-wrap items-center h-full">

        <div className="md:w-1/2">

        <h1 class="font-bold title-font mb-4 text-white lg:text-4xl text-3xl" ref={boxRef1}>
          Conheça nossa equipe.
        </h1>
        
        <p class="lg:text-lg text-1xl text-white text-justify" ref={boxRef2}>
        Empenhados em entregar qualidade por um ótimo preço a <span className="font-bold">FIBRAX CAPACHOS </span>atua no mercado desde 2018, conquistando clientes e criando sua marca em tapetes personalizados. 
        </p>

        <p className="text-white text-lg text-justify mt-5"></p>
        
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

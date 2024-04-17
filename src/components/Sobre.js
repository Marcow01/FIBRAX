import Nota from '../assets/imgs/nota.png'; 
import { FaArrowRight } from "react-icons/fa";
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

    };

    ScrollReveal().reveal(boxRef1.current,{ ...config, delay: 200});
    ScrollReveal().reveal(boxRef2.current, { ...config, delay: 300 });
  }, []);

  return (
    <div className="flex justify-center bg-[#FF6100]" id="sobre">
      <section className="w-full md:w-9/12 mt-16 p-8 md:p-0 mb-16">
      <div className="flex flex-wrap items-center h-full">

        <div className="md:w-1/2">

        <h1 class="font-bold title-font mb-4 text-white lg:text-4xl text-3xl" ref={boxRef1}>
          Conheça nossa equipe.
        </h1>
        
        <p class="lg:text-lg text-1xl text-white text-justify mb-4" ref={boxRef2}>
        Com mais de 25 anos de experiência, a <span className="font-bold">FIBRAX CAPACHOS </span>se destaca como líder no setor de tapetes personalizados. Desde 1999, temos nos dedicado incansavelmente a oferecer qualidade excepcional a preços acessíveis, conquistando a confiança de clientes.  Ao longo dos anos, desenvolvemos uma reputação sólida e duradoura, conquistando a lealdade de uma base diversificada de clientes. Nosso compromisso contínuo com a inovação, qualidade e serviço excepcional nos diferencia.
        </p>
      
        {/*<a className='bg-white px-4 py-2 rounded-lg text-[#FF6100] cursor-pointer font-medium'>Instagram</a>*/}
        
        </div>

        <div className="md:w-1/2 flex justify-end md:p-10 p-2">

          <img src={Nota} alt="Descrição da imagem" className="w-full h-auto object-cover object-center"/>
        </div>
      </div>
      </section>
    </div>
    
    
  );
}

export default Sobre;

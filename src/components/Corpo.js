import React, { useRef, useEffect } from "react";
import { Button } from "flowbite-react";
import ScrollReveal from "scrollreveal";
import bannerImage from '../assets/imgs/banner.svg'; 

function Corpo() {
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);

  useEffect(() => {
    const config = {
      origin: "top",
      delay: 200,
      distance: "10px",
      scale: 1,
      easing: "ease",

    };

    ScrollReveal().reveal(boxRef1.current,{ ...config, delay: 200});
    ScrollReveal().reveal(boxRef2.current, { ...config, delay: 300 });
    ScrollReveal().reveal(boxRef3.current, { ...config, origin: "rigth" });
  }, []);

  return (
    <div className="flex justify-center" id="inicio">
      <section className="w-full md:w-9/12 mt-16 p-8 md:p-0">
      <div className="flex flex-wrap items-center">
          <div className="md:w-1/2">
            <h1 className="font-bold title-font mb-4 text-gray-400 lg:text-4xl text-3xl" ref={boxRef1}>
              Transforme a entrada em algo especial com nossos <span className="text-[#FF6100]">capachos personalizados.</span>
            </h1>
            <div ref={boxRef2}>
              <p className="lg:text-lg text-1xl text-gray-400 text-justify md:text-left">
                Nossos capachos personalizados são a chave para uma entrada que marca presença, garantindo que cada visita seja uma experiência <span className="text-[#FF6100] font-bold">memorável</span> e <span className="text-[#FF6100] font-bold">acolhedora</span>.
              </p>
              <div className="mt-5 mb-5">
                <a className='bg-[#FF6100] px-4 py-2 rounded-lg text-white hover:bg-[#7C3001] duration-300 ease-in-out mr-2' href="https://wa.me/553193293970" target="_blank">Saiba mais!</a>
                <a className='bg-[#9CA3AF] px-4 py-2 rounded-lg text-white hover:bg-[#676767] duration-300 ease-in-out' href="#contato">Contato</a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:px-8">
            <img src={bannerImage} alt="Descrição da imagem" className="w-full h-auto object-cover object-center" ref={boxRef3}/>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Corpo;

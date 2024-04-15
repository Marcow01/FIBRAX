import '../App.css';
import React, { useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import bannerImage from '../assets/imgs/banner.png'; 

function Contato() {
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);

  const boxRef4 = useRef(null);
  const boxRef5 = useRef(null);
  const boxRef6 = useRef(null);


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
    ScrollReveal().reveal(boxRef4.current, { ...config, origin: "right", delay: 200, distance: "30px"});
    ScrollReveal().reveal(boxRef5.current, { ...config, origin: "right", delay: 250  });
    ScrollReveal().reveal(boxRef6.current, { ...config, origin: "left", delay: 200 , distance: "30px" });
    
  }, []);

  return (
    <div className='w-full md:w-9/12 md:p-0 px-8 mx-auto mb-16 mt-16'>
       <section>

        <div>
          <h1 class="font-bold title-font mb-4 text-gray-400 lg:text-4xl text-3xl" ref={boxRef1}>
            Entre em <span className="text-[#D0542E]">contato.</span>
          </h1>
          <p class="lg:text-lg lg:w-4/5 text-1xl text-gray-400 mb-16" ref={boxRef2}>
          Entre em contato conosco e solicite seu orçamento personalizado hoje mesmo! Nossa equipe está pronta para atendê-lo e oferecer soluções sob medida para suas necessidades.
          </p>
        </div>

        <div class="mx-auto flex sm:flex-nowrap flex-wrap">
        
          <div class="lg:w-full md:w-1/2 rounded-lg overflow-hidden sm:mr-10 relative">   
            <iframe ref={boxRef6} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.478356756207!2d-43.982054!3d-19.9463753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69654cff94c05%3A0xa1acc98056dc4349!2sFIBRAX%20CAPACHOS%20TAPETES%20PERSONALIZADOS!5e0!3m2!1spt-BR!2sbr!4v1713083035929!5m2!1spt-BR!2sbr" className='w-full h-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
            <div class="bg-white flex-wrap py-6 rounded absolute bottom-10 left-10 bg-white bg-opacity-90 p-4 rounded-md shadow-md z-10 pr-10 hidden sm:flex">
              <div class="lg:w-1/2 pl-6">
                <h1 class="title-font text-lg font-medium text-gray-500 mb-1">Endereço</h1>
                <p class="leading-relaxed mb-3 text-justify text-gray-500">Rua Barra Longa 218 <br/> Salgado Filho <br/> Belo Horizonte MG  <br/> 30550-052</p>
              
              </div>
              
              <div class="lg:w-1/2 pr-6 mt-4 lg:mt-0">
                <h1 class="title-font text-lg font-medium text-gray-500 mb-1">Email</h1>
                <a class="text-[#D0542E] leading-relaxed">fibraxcapachos@gmail.com</a>
                <h1 class="title-font text-lg font-medium text-gray-500 mb-1">Telefone</h1>
                <a class="text-gray-500 leading-relaxed">(31) 99329-3970 <br/> 3058-0702</a>
              </div>
              
            </div>
          </div>

          <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0" ref={boxRef4}>
          <button  class="text-white bg-[#57D164] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-3">Whatsapp</button>
          <button class="text-white insta border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-3">Instagram</button>

            <p class="leading-relaxed mb-3 text-gray-500 text-center mt-3">Ou nos envie uma mensagem!</p>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">Nome</label>
              <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">Telefone</label>
              <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">Mensagem <span className="text-[#D0542E]">*opcional </span></label>
              <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>

            <button class="text-white bg-[#D0542E] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enviar</button>
          
          </div>
        </div>
    </section>
    </div>
  );
}

export default Contato;

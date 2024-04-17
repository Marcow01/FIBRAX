import Isa from '../assets/imgs/clientes/isa.png';
import Thiago from '../assets/imgs/clientes/thiago.png';
import Roger from '../assets/imgs/clientes/roger.png';
import Breno from "../assets/imgs/clientes/breno.png";

import { Rating } from "flowbite-react";

import React, { useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Clientes() {
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  const boxRef4 = useRef(null);
  const boxRef5 = useRef(null);
  const boxRef6 = useRef(null);
  const boxRef7 = useRef(null);
  const boxRef8 = useRef(null);
  const boxRef9 = useRef(null);
  const boxRef10 = useRef(null);

  useEffect(() => {
    const config = {
      origin: "top",
      delay: 200,
      distance: "10px",
      scale: 1,
      easing: "ease",

    };

    ScrollReveal().reveal(boxRef1.current,{ ...config, delay: 200 });
    ScrollReveal().reveal(boxRef2.current, { ...config, delay: 250 });
    ScrollReveal().reveal(boxRef3.current, { ...config, origin: "left", distance: "30px" });
    ScrollReveal().reveal(boxRef4.current, { ...config, origin: "left", delay: 300 , distance: "30px" });

    ScrollReveal().reveal(boxRef5.current, { ...config, origin: "right", distance: "30px" });
    ScrollReveal().reveal(boxRef6.current, { ...config, origin: "right", delay: 300 , distance: "30px" });

    ScrollReveal().reveal(boxRef7.current, { ...config, origin: "left", distance: "30px" });
    ScrollReveal().reveal(boxRef8.current, { ...config, origin: "left", delay: 300 , distance: "30px" });

    ScrollReveal().reveal(boxRef9.current, { ...config, origin: "right", distance: "30px" });
    ScrollReveal().reveal(boxRef10.current, { ...config, origin: "right", delay: 300 , distance: "30px" });
  }, []);

  return (
    <div class="w-full md:w-1/3 md:p-0 px-8 mx-auto mb-16 mt-16" id='clientes'>
      <h1 class="font-bold title-font mb-4 text-gray-400 lg:text-4xl text-3xl text-center" ref={boxRef1}>
        Por que escolher <span className="text-[#FF6100]">FIBRAX?</span>
      </h1>
  
      <p class="lg:text-lg mx-auto text-1xl text-gray-400 text-justify" ref={boxRef2}>
        Descubra o que nossos clientes estão dizendo sobre nós! Explore os testemunhos e depoimentos que destacam a qualidade excepcional.
      </p>
  
      <div className='flex flex-col mt-16'>
        <div className='mb-4 flex'>
          <img src={Isa} alt="" className='w-12 h-12' ref={boxRef3}/>
          <div className='p-4 rounded-lg bg-[#FF6100] ml-4 flex-grow' ref={boxRef4}>
            <p className='text-justify text-white'>O tapete é de qualidade e pode ser feito com sua marca. Fica lindo! Adorei.</p>
            <Rating className='mb-3 mt-2'>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
            </Rating>
            <p className='text-end text-white font-semibold'>Isabele Melgaço</p>
          </div>
        </div>
  
        <div className='mb-4 flex'>
          <div className='p-4 rounded-lg bg-[#FF6100] mr-4 flex-grow' ref={boxRef6}>
            <p className='text-justify text-white'>Produto de excelente qualidade, entrega dentro do prazo e atendimento cordial! Recomendo!</p>
            <Rating className='mb-3 mt-2'>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
            </Rating>
            <p className='text-end text-white font-semibold'>Thiago Stacanelli</p>
          </div>
          <img src={Thiago} alt="" className='w-12 h-12' ref={boxRef5}/>
        </div>
  
        <div className='mb-4 flex'>
          <img src={Roger} alt="" className='w-12 h-12' ref={boxRef7}/>
          <div className='p-4 rounded-lg bg-[#FF6100] ml-4 flex-grow' ref={boxRef8}>
            <p className='text-justify text-white'>Atendimento 10, boa qualidade e cumprimento de prazo de entrega me entregaram com 3dias.</p>
            <Rating className='mb-3 mt-2'>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
            </Rating>
            <p className='text-end text-white font-semibold'>Roger Rodrigues</p>
          </div>
        </div>
  
        <div className='flex'>
          <div className='p-4 rounded-lg bg-[#FF6100] mr-4 flex-grow' ref={boxRef10}>
            <p className='text-justify text-white'>Recebi os tapetes após um prazo maior que o informado para produção. Entretanto gostei bastante da qualidade do material!</p>
            <Rating className='mb-3 mt-2'>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
            </Rating>
            <p className='text-end text-white font-semibold'>Breno Anselmo</p>
          </div>
          <img src={Breno} alt="" className='w-12 h-12' ref={boxRef9}/>
        </div>
      </div>

      <a className='text-center text-[#FF6100]'>Veja mais</a>
    </div>
  );
  
  
}

export default Clientes;

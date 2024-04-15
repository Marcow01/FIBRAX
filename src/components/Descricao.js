import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Produtos0 from '../assets/imgs/produtos0.png'
import Produtos1 from '../assets/imgs/produtos1.png'
import Produtos2 from '../assets/imgs/produtos2.png'

import { IoMdColorPalette } from "react-icons/io";
import { FaShieldHalved } from "react-icons/fa6";
import { FaPenNib } from "react-icons/fa";

import React, { useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Descricao() {
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  const boxRef4 = useRef(null);
  const boxRef5 = useRef(null);
  const boxRef6 = useRef(null);
  const boxRef7 = useRef(null);
  const boxRef8 = useRef(null);
  const boxRef9 = useRef(null);

  useEffect(() => {
    const config = {
      origin: "left",
      delay: 200,
      distance: "10px",
      scale: 1,
      easing: "ease",
      reset: true
    };

    ScrollReveal().reveal(boxRef1.current,{ ...config, delay: 200 });
    ScrollReveal().reveal(boxRef2.current, { ...config, delay: 250 });
    ScrollReveal().reveal(boxRef3.current, { ...config, delay: 300 });

    ScrollReveal().reveal(boxRef4.current,{ ...config, delay: 350 });
    ScrollReveal().reveal(boxRef5.current, { ...config, delay: 400 });
    ScrollReveal().reveal(boxRef6.current, { ...config, delay: 450 });

    ScrollReveal().reveal(boxRef7.current,{ ...config, delay: 500 });
    ScrollReveal().reveal(boxRef8.current, { ...config, delay: 550 });
    ScrollReveal().reveal(boxRef9.current, { ...config, delay: 600 });

  }, []);

  return (
    <div className='flex justify-center'>
      <section class="body-font w-full md:w-9/12 mt-8 p-8 md:p-0 mb-32">
      <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
    <div class="h-full rounded-lg overflow-hidden direita-400">
      <div ref={boxRef1}>
        <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg hover:scale-95 duration-150" src={Produtos0} alt="Imagem projeto TLOU2 │ TEHKNE" />
      </div>
      
      <div class="px-2 py-1">

        <div className='bg-[#D0542E] mt-3 inline-block rounded-full mb-1 p-3 text-white' ref={boxRef2}>
          <IoMdColorPalette className='w-5 h-5'/>
        </div>

        <div ref={boxRef3}>
          <h1 class="title-font text-lg font-medium text-gray-500 mb-3">Variedade de cores</h1>
          <p class="leading-relaxed mb-3 text-justify text-gray-500">Capachos com diversas opções de cores para atender a identidade visual de sua marca com muito estilo.</p>
        </div>

      </div>
    </div>
  </div>

  <div class="p-4 md:w-1/3">
    <div class="h-full rounded-lg overflow-hidden direita-400">
      <div ref={boxRef4}> 
        <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg hover:scale-95 duration-150" src={Produtos1} alt="Imagem projeto TLOU2 │ TEHKNE" />
      </div>

      <div class="px-2 py-1">
        <div className='bg-[#D0542E] mt-3 inline-block rounded-full mb-1 p-3 text-white' ref={boxRef5}>
          <FaShieldHalved className='w-5 h-5'/>
        </div>

        <div ref={boxRef6}>
          <h1 class="title-font text-lg font-medium text-gray-500 mb-3">Variedade de cores</h1>
          <p class="leading-relaxed mb-3 text-justify text-gray-500">Capachos com diversas opções de cores para atender a identidade visual de sua marca com muito estilo.</p>
        </div>
        
      </div>
    </div>
  </div>

  <div class="p-4 md:w-1/3">
    <div class="h-full rounded-lg overflow-hidden direita-400">
      <div ref={boxRef7}>
        <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg hover:scale-95 duration-150" src={Produtos2} alt="Imagem projeto TLOU2 │ TEHKNE" />
      </div>
      <div class="px-2 py-1">
        <div className='bg-[#D0542E] mt-3 inline-block rounded-full mb-1 p-3 text-white' ref={boxRef8}>
          <FaPenNib className='w-5 h-5'/>
        </div>
        <div ref={boxRef9}>
          <h1 class="title-font text-lg font-medium text-gray-500 mb-3">Variedade de cores</h1>
          <p class="leading-relaxed mb-3 text-justify text-gray-500">Capachos com diversas opções de cores para atender a identidade visual de sua marca com muito estilo.</p>
        </div>
        
      </div>
    </div>
  </div>

</div>
      </section>
    </div>
  );
}

export default Descricao;
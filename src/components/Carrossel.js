import Slide1 from '../assets/imgs/slide1.svg';
import Slide2 from '../assets/imgs/slide2.svg';
import Slide3 from '../assets/imgs/slide3.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React, { useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Carrossel() {
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

    ScrollReveal().reveal(boxRef1.current,{ ...config, delay: 200 });
    ScrollReveal().reveal(boxRef2.current, { ...config, delay: 250 });
    ScrollReveal().reveal(boxRef3.current, { ...config, delay: 300 });

  }, []);

  return (
    <div className="flex justify-center" id='produtos'>

      <section className="w-full md:w-9/12 mt-32 p-8 md:p-0">
      <h1 class="font-bold title-font mb-4 text-gray-400 lg:text-4xl text-3xl text-center" ref={boxRef1}> 
          Nossos <span className="text-[#FF6100]">produtos.</span>
      </h1>

      <p class="lg:text-lg lg:w-1/2 mx-auto text-1xl text-gray-400 text-center" ref={boxRef2}>
      Escolha dentre infinitas possibilidades de cores a melhor combinação para que seu tapete tenha a sua identidade.
      </p>

        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className='mt-10 rounded-lg'
            ref={boxRef3}
          >
            <SwiperSlide>
              <img src={Slide1} alt="Slide 1 | Capachos personalizados FIBRAX" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slide2} alt="Slide 2 | Tapetes sanitizantes FIBRAX" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slide3} alt="Slide 3 | Fita antiderrapante FIBRAX" />
            </SwiperSlide>
          </Swiper>
      </section>
    </div>
  );
}

export default Carrossel;

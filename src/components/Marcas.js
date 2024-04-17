import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import OAB from '../assets/imgs/marcas/OAB.svg';
import SUBWAY from '../assets/imgs/marcas/SUBWAY.svg';
import CNA from '../assets/imgs/marcas/CNA.svg';

function Marcas() {
  return (
    <div className="flex justify-center">
      <section className="w-full md:w-9/12 mt-16 p-8 md:p-0 mb-32">

      <p class="lg:text-lg lg:w-4/5 mx-auto text-1xl text-gray-400 text-center mb-16">
      Conheça as experiências dos nossos clientes e descubra por que grandes empresas confiam em nós.
      </p>

      {/* }
      <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className='p-4'>
            <img src={Marca1} alt="" className='grayscale hover:grayscale-0 hover:scale-95 duration-150 w-72 h-24'/>
          </SwiperSlide>
          <SwiperSlide className='p-4'>
            <img src={Marca4} alt="" className='grayscale hover:grayscale-0 hover:scale-95 duration-150 w-72 h-24'/>
          </SwiperSlide>
          <SwiperSlide className='p-4'>
            <img src={Marca1} alt="" className='grayscale hover:grayscale-0 hover:scale-95 duration-150 w-72 h-24'/>
          </SwiperSlide>
          <SwiperSlide className='p-4'>
            <img src={Marca4} alt="" className='grayscale hover:grayscale-0 hover:scale-95 duration-150 w-72 h-24'/>
          </SwiperSlide>
        </Swiper>

  */}

<div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
    <div class="h-full rounded-lg overflow-hidden direita-400">
      <div>
        <img class="w-full h-auto object-cover object-center rounded-lg hover:scale-95 duration-150 " src={OAB} alt="Imagem projeto TLOU2 │ TEHKNE" />
      </div>
    </div>
  </div>

  <div class="p-4 md:w-1/3">
    <div class="h-full rounded-lg overflow-hidden direita-400">
      <div> 
        <img class="w-full h-auto object-cover object-center rounded-lg hover:scale-95 duration-150 " src={SUBWAY} alt="Imagem projeto TLOU2 │ TEHKNE" />
      </div>

    </div>
  </div>

  <div class="p-4 md:w-1/3">
    <div class="h-full rounded-lg overflow-hidden direita-400">
      <div>
        <img class="w-full h-auto object-cover object-center rounded-lg hover:scale-95 duration-150 " src={CNA} alt="Imagem projeto TLOU2 │ TEHKNE" />
      </div>
    </div>
  </div>

</div>

      </section>
    </div>
  );
}

export default Marcas;
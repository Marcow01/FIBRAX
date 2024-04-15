import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Marca1 from '../assets/imgs/marcas/image 52.png';
import Marca2 from '../assets/imgs/marcas/image 53.png';
import Marca3 from '../assets/imgs/marcas/image 54.png';
import Marca4 from '../assets/imgs/marcas/image 55.png';

function Marcas() {
  return (
    <div className="flex justify-center">
      <section className="w-9/12">

      <p class="lg:text-lg lg:w-4/5 mx-auto text-1xl text-gray-400 text-center mb-16">
      Conheça as experiências dos nossos clientes e descubra por que grandes empresas confiam em nós.
      </p>

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
      </section>
    </div>
  );
}

export default Marcas;
import Banner from '../assets/imgs/bannerteste.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Carrossel() {
  return (
    <div className="flex justify-center">

      <section className="w-9/12 px-5">
      <p className="text-[#FF6100] text-4xl font-semibold cursor-default text-center">Nossos Produtos</p>
      <p className="lg:w-1/2 mx-auto text-[#282729] text-lg text-center mt-5">Escolha dentre infinitas possibilidades de cores a melhor combinação para que seu tapete tenha a sua identidade.</p>

        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className='mt-10 rounded-lg'
          >
            <SwiperSlide>
              <img src={Banner} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Banner} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Banner} alt="" />
            </SwiperSlide>
          </Swiper>
      </section>
    </div>
  );
}

export default Carrossel;

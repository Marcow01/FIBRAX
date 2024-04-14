import Banner from '../assets/imgs/bannerteste.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Carrossel() {
  return (
    <div className="flex justify-center">

      <section className="w-9/12 px-5">
      <h1 class="font-bold title-font mb-4 text-gray-400 lg:text-4xl text-3xl text-center">
          Nossos <span className="text-[#FF6100]">produtos.</span>
      </h1>

      <p class="lg:text-lg lg:w-1/2 mx-auto text-1xl text-gray-400 text-center">
      Escolha dentre infinitas possibilidades de cores a melhor combinação para que seu tapete tenha a sua identidade.
      </p>

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

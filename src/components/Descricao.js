import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Produtos0 from '../assets/imgs/produtos0.png'
import Produtos1 from '../assets/imgs/produtos1.png'
import Produtos2 from '../assets/imgs/produtos2.png'

import { IoMdColorPalette } from "react-icons/io";
import { FaShieldHalved } from "react-icons/fa6";
import { FaPenNib } from "react-icons/fa";


function Descricao() {
  return (
    <div className='flex justify-center'>

      <section class="body-font mb-32 w-9/12">
        <div class="px-5 py-10 mx-auto">
          <div class="flex flex-wrap -m-4">

          <div class="p-4 md:w-1/3">
              <div class="h-full rounded-lg overflow-hidden direita-400">
                <a href="https://tlou2remake.vercel.app" target="_blank"><img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg hover:scale-95 duration-150" src={Produtos0} alt="Imagem projeto TLOU2 │ TEHKNE" /></a>
                <div class="px-2 py-1">
                  <div className='bg-[#D0542E] mt-3 inline-block rounded-full mb-1 p-3 text-white'>
                    <IoMdColorPalette className='w-5 h-5'/>
                  </div>
                  <p class="text-lg mt-4 mb-2 font-semibold text-[#282729]">Variedade de cores</p>
                  <p class="leading-relaxed mb-3 text-justify text-[#282729]">Capachos com diversas opções de cores para atender a identidade visual de sua marca com muito estilo. </p>
                </div>
              </div>
            </div>

            <div class="p-4 md:w-1/3">
              <div class="h-full rounded-lg overflow-hidden direita-400">
                <a href="https://tlou2remake.vercel.app" target="_blank"><img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg hover:scale-95 duration-150" src={Produtos1} alt="Imagem projeto TLOU2 │ TEHKNE" /></a>
                <div class="px-2 py-1">
                  <div className='bg-[#D0542E] mt-3 inline-block rounded-full mb-1 p-3 text-white'>
                    <FaShieldHalved className='w-5 h-5'/>
                  </div>
                  <p class="text-lg mt-4 mb-2 font-semibold text-[#282729]">Material de alta qualidade</p>
                  <p class="leading-relaxed mb-3 text-justify text-[#282729]">Capacho emborrachados com resistência a grande tráfego, facilidade de higienização, aderência ao solo e resistência ao calor.</p>
                </div>
              </div>
            </div>

            <div class="p-4 md:w-1/3">
              <div class="h-full rounded-lg overflow-hidden direita-400">
                <a href="https://tlou2remake.vercel.app" target="_blank"><img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg hover:scale-95 duration-150" src={Produtos2} alt="Imagem projeto TLOU2 │ TEHKNE" /></a>
                <div class="px-2 py-1">
                  <div className='bg-[#D0542E] mt-3 inline-block rounded-full mb-1 p-3 text-white'>
                    <FaPenNib className='w-5 h-5'/>
                  </div>
                  <p class="text-lg mt-4 mb-2 font-semibold text-[#282729]">Capachos personalizados</p>
                  <p class="leading-relaxed mb-3 text-justify text-[#282729]">Oferecemos capachos personalizados, projetados para atender às suas preferências individuais e criar uma primeira impressão memorável para qualquer visitante.</p>
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
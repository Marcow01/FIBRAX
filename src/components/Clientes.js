import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Marca1 from '../assets/imgs/marcas/image 52.png';
import Marca2 from '../assets/imgs/marcas/image 53.png';
import Marca3 from '../assets/imgs/marcas/image 54.png';
import Marca4 from '../assets/imgs/marcas/image 55.png';
import Isa from '../assets/imgs/clientes/isa.png';
import Thiago from '../assets/imgs/clientes/thiago.png';
import Roger from '../assets/imgs/clientes/roger.png';
import { Rating } from "flowbite-react";

function Clientes() {
  return (  
    <div className="flex justify-center">
      <section className="w-7/12 mt-16">
      <p className="text-[#FF6100] text-4xl font-semibold cursor-default text-center mb-10">Oque nossos clientes dizem</p>

        <div className='flex'>
          <img src={Isa} alt="" className='w-12 h-12'/>
          <div className='p-4 rounded-lg bg-[#D0542E] ml-4 w-1/2'>
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

        <div className='flex justify-end mt-4'>
          <div className='p-4 rounded-lg bg-[#D0542E] mr-4 w-1/2'>
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
          <img src={Thiago} alt="" className='w-12 h-12'/>
        </div>

        <div className='flex mt-4'>
          <img src={Roger} alt="" className='w-12 h-12'/>
          <div className='p-4 rounded-lg bg-[#D0542E] ml-4 w-1/2'>
            <p className='text-justify text-white'>Atendimento 10, boa qualidade e cumprimento de prazo de entrega me entregaram com 3dias 😍😍 …</p>
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

        <div className='flex justify-end mt-4'>
          <div className='p-4 rounded-lg bg-[#D0542E] mr-4 w-1/2'>
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
          <img src="https://lh3.googleusercontent.com/a-/ALV-UjWcKsXka0y7nBaYoAAdH0QVzdMIHBnmMGzpj8867AzaO_7VjzYm=w36-h36-p-rp-mo-ba3-br100" alt="" className='w-12 h-12'/>
        </div>

      </section>
    </div>
  );
}

export default Clientes;

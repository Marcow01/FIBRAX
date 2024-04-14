import '../App.css';

function Contato() {
  return (
    <div className="flex justify-center mt-32 mb-32">
       <section class="body-font relative w-9/12">

        <div>
          <h1 class="font-bold title-font mb-4 text-gray-400 lg:text-4xl text-3xl">
            Entre em <span className="text-[#D0542E]">contato.</span>
          </h1>
          <p class="lg:text-lg lg:w-4/5 text-1xl text-gray-400 mb-16">
          Entre em contato conosco e solicite seu orçamento personalizado hoje mesmo! Nossa equipe está pronta para atendê-lo e oferecer soluções sob medida para suas necessidades.
          </p>
        </div>


        <div class="mx-auto flex sm:flex-nowrap flex-wrap">

          <div class="lg:w-full md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            
            <div class="bg-white flex flex-wrap py-6 rounded shadow-md w-full">
              <div class="lg:w-1/2 px-6">
                <h1 class="title-font text-lg font-medium text-gray-500 mb-1">Endereço</h1>
                <p class="leading-relaxed mb-3 text-justify text-gray-500">Rua Barra Longa 218 <br/> Salgado Filho <br/> Belo Horizonte MG  <br/> 30550-052</p>
              
              </div>
              
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h1 class="title-font text-lg font-medium text-gray-500 mb-1">Email</h1>
                <a class="text-[#D0542E] leading-relaxed">fibraxcapachos@gmail.com</a>
                <h1 class="title-font text-lg font-medium text-gray-500 mb-1">Telefone</h1>
                <a class="text-gray-500 leading-relaxed">(31) 99329-3970 <br/> 3058-0702</a>
              </div>
              
            </div>
          </div>

          <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <button class="text-white bg-[#57D164] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-3">Whatsapp</button>
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

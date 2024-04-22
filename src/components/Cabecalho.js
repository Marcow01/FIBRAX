import Logo from '../assets/imgs/logo.png';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Button } from "flowbite-react";

function Cabecalho() {
  return (
    <div className="flex justify-center mt-4">
      <section className="w-9/12">

      <Navbar fluid rounded>
      <NavbarBrand  href="https://fibraxcapachos.com">
        <img src={Logo} className="mr-3 h-12 sm:h-14" alt="Flowbite React Logo" />
        {/*<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>*/}
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#inicio">
          <a className='hover:text-[#FF6100] text-gray-400'>Início</a>
        </NavbarLink>
        <NavbarLink href="#produtos">
          <a className='hover:text-[#FF6100] text-gray-400'>Produtos</a>
        </NavbarLink>
        <NavbarLink href="#sobre">
          <a className='hover:text-[#FF6100] text-gray-400'>Sobre</a>
        </NavbarLink>
        <NavbarLink href="#clientes">
          <a className='hover:text-[#FF6100] text-gray-400'>Clientes</a>
        </NavbarLink>
        <NavbarLink href="#contato"><a className='bg-[#FF6100] px-4 py-2 rounded-lg text-white hover:bg-[#7C3001] duration-300 ease-in-out'>Contato</a></NavbarLink>

      </NavbarCollapse>
    </Navbar>
        
      </section>
    </div>
  );
}

export default Cabecalho;
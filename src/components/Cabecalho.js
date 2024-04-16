import Logo from '../assets/imgs/logo.png';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Button } from "flowbite-react";

function Cabecalho() {
  return (
    <div className="flex justify-center mt-4">
      <section className="w-9/12">

      <Navbar fluid rounded>
      <NavbarBrand  href="https://fibraxcapachos.com">
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        {/*<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>*/}
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#">
          Inicio
        </NavbarLink>
        <NavbarLink href="#">
          Produtos
        </NavbarLink>
        <NavbarLink href="#">Sobre</NavbarLink>
        <NavbarLink href="#">Clientes</NavbarLink>
        <NavbarLink href="#"><a className='bg-[#FF6100] px-4 py-2 rounded-lg text-white'>Contato</a></NavbarLink>

      </NavbarCollapse>
    </Navbar>
        
      </section>
    </div>
  );
}

export default Cabecalho;
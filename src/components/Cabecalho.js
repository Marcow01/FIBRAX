import Logo from '../assets/imgs/logo.png';
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

function Cabecalho() {
  return (
    <div className="flex justify-center">
      <section className="w-9/12">

        <Navbar fluid rounded>
        <NavbarBrand href="">
          <img src={Logo} className="mr-3 h-6 sm:h-9" alt="FIBRAX LOGO" />
        </NavbarBrand>
        <div className="flex md:order-2">
          
          <Button>Get started</Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="#" className='text-[#D0542E] font-bold'>
            Início
          </NavbarLink>
          <NavbarLink href="#">About</NavbarLink>
          <NavbarLink href="#">Services</NavbarLink>
          <NavbarLink href="#">Pricing</NavbarLink>
          <NavbarLink href="#">Contact</NavbarLink>
        </NavbarCollapse>
        </Navbar>
        
      </section>
    </div>
  );
}

export default Cabecalho;
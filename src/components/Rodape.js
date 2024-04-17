import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import Logo from '../assets/imgs/logo.png';

function Rodape() {
  return (
    <div className="flex justify-center">
      <section className="w-9/12">

      <Footer className="border-none mb-10 mt-16 shadow-none">
      <div className="w-full text-center border-none">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between border-none">
          <FooterBrand
            href="https://fibraxcapachos.com"
            src={Logo}
            alt="Fibrax Logo"
          />
          <FooterLinkGroup>
            <FooterLink href="#inicio" className="no-underline">
              <a className='hover:text-[#FF6100]'>Início</a>
            </FooterLink>
            <FooterLink href="#produtos">
              <a className='hover:text-[#FF6100]'>Produtos</a>
            </FooterLink>
            <FooterLink href="#sobre">
              <a className='hover:text-[#FF6100]'>Sobre</a>
            </FooterLink>
            <FooterLink href="#clientes">
              <a className='hover:text-[#FF6100]'>Clientes</a>
            </FooterLink>
            <FooterLink href="#contato">
              <a className='hover:text-[#FF6100]'>Contato</a>
            </FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Fibrax™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/fibraxcapachos/" icon={BsInstagram} />
          </div>
        </div>
      </div>
    </Footer>
        
      </section>
    </div>
  );
}

export default Rodape;
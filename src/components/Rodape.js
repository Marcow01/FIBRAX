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
            href="https://flowbite.com"
            src={Logo}
            alt="Fibrax Logo"
          />
          <FooterLinkGroup>
            <FooterLink href="#">Inicio</FooterLink>
            <FooterLink href="#">Produtos</FooterLink>
            <FooterLink href="#">Sobre</FooterLink>
            <FooterLink href="#">Clientes</FooterLink>
            <FooterLink href="#">Contato</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Fibrax™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
        
      </section>
    </div>
  );
}

export default Rodape;
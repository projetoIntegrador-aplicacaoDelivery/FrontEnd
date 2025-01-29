import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-4">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Nome da Empresa */}
        <div className="text-lg font-semibold mb-4 md:mb-0">
          © 2025 Fresh - Produtos Orgânicos. Todos os direitos reservados.
        </div>

        {/* Links */}
        <div className="text-white hover:text-lime-green flex space-x-6 mb-4 md:mb-0">
          <a href="#" >Termos de Uso</a>
        </div>
        <div className="text-white hover:text-lime-green flex space-x-6 mb-4 md:mb-0">
          <a href="#" >Política de Privacidade</a>
        </div>
        

        {/* Redes Sociais */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/generationbrasil" className="text-white hover:text-lime-green">
            <FaFacebook size={24} />
          </a>
          <a href="https://github.com/projetoIntegrador-aplicacaoDelivery/FrontEnd" className="text-white hover:text-lime-green">
            <FaGithub size={24} />
          </a>
          <a href="https://www.instagram.com/generationbrasil" className="text-white hover:text-lime-green">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/school/generationbrasil" className="text-white hover:text-lime-green">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

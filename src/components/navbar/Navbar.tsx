import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="pl-60 pr-20 flex justify-between items-center p-1 bg-charcoal rounded-b-xl">
        <div className="flex items-center space-x-20">
          <Link to="/home">
            <img
              src="https://i.postimg.cc/FFf4F5sh/1000035385-removebg-preview.png"
              alt="Logo"
              className="hover:scale-110 w-24 h-20"
            />
          </Link>
        </div>

        <div className="flex space-x-12">
          {/* Link Produtos com dropdown */}
          <div className="relative group">
            <Link
              to="/Produtos"
              className="text-2xl text-white hover:text-lime-green transition duration-300"
            >
              Produtos
            </Link>
            <div className="absolute left-0 opacity-0 group-hover:opacity-100 mt-2 space-y-2 bg-offwhite rounded-md transition-opacity duration-500 ease-in-out">
              <Link
                to="/cadastrarproduto"
                className="block px-4 py-2 text-blackish hover:text-green-400 transition duration-300"
              >
                Cadastrar
              </Link>
            </div>
          </div>

          {/* Link Categorias com dropdown */}
          <div className="relative group">
            <Link
              to="/categorias"
              className="text-2xl text-white hover:text-lime-green transition duration-300"
            >
              Categorias
            </Link>
            <div className="absolute left-0 opacity-0 group-hover:opacity-100 mt-2 space-y-2 bg-offwhite rounded-md transition-opacity duration-500 ease-in-out">
              <Link
                to="/cadastrarcategoria"
                className="block px-4 py-2 text-blackish hover:text-green-400 transition duration-300"
              >
                Cadastrar 
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

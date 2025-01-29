import { Link } from "react-router-dom";


function Navbar() {
    return (
    <>
        <nav className="pl-60 pr-20 flex justify-between items-center p-1 bg-charcoal rounded-b-md">
        
            <div className="flex items-center space-x-20">
                
                <Link to="/home" ><img
                    src="https://i.postimg.cc/FFf4F5sh/1000035385-removebg-preview.png"
                    alt="Logo"
                    className=" hover:scale-110 w-24 h-20 " 
                /></Link>
            </div>

            
            <div className="flex space-x-12">
                <Link to="/Produtos" className=" text-3xl text-white hover:text-lime-green transition duration-300">Produtos</Link>
                <Link to="/categorias" className=" text-3xl text-white hover:text-lime-green transition duration-300">Categorias</Link>
            </div>
        </nav>
    </>
    );
}

export default Navbar;

import { Link } from 'react-router-dom';
import Categoria from '../../models/Categoria';

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className='border border-olive flex flex-col rounded-2xl overflow-hidden justify-between shadow-md bg-offwhite'>
      <header className='py-4 px-6 bg-lime-green text-charcoal font-bold text-2xl text-center'>Categoria</header>
      <p className='p-6 text-3xl bg-cream h-full text-center text-blackish'>{categoria.descricao}</p>
      
      <div className="flex">
        <Link to={`/editarcategoria/${categoria.id}`}
          className='w-1/2 font-bold text-cream bg-green-400 hover:bg-green-200 
            flex items-center justify-center py-3 transition duration-300'>
          <button>Editar</button>
        </Link>

        <Link to={`/deletarcategoria/${categoria.id}`} 
          className='w-1/2 font-bold text-cream bg-brown hover:bg-olive 
            flex items-center justify-center py-3 transition duration-300'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;

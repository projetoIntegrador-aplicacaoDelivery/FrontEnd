import { Link } from 'react-router-dom'
import Categoria from '../../models/Categoria'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-lime-green text-charcoal font-bold text-2xl'>Categoria</header>
      <p className='p-8 text-3xl bg-cream h-full'>{categoria.descricao}</p>
      
      <div className="flex">
        <Link to={`/editarcategoria/${categoria.id}`}
          className='w-full font-bold text-offwhite bg-green-400 hover:bg-green-200 
            flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>

        <Link to={`/deletarcategoria/${categoria.id}`} 
          className='font-bold text-offwhite bg-brown hover:bg-olive w-full 
            flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategoria;

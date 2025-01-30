import { useEffect, useState } from 'react';
import Categoria from '../../models/Categoria';
import CategoriaService from '../../services/CategoriaService';
import CardCategoria from './CardCategoria';

function Categorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    useEffect(() => {
        // Função para buscar as categorias
        const fetchCategorias = async () => {
            try {
                const response = await CategoriaService.listarCategorias();
                setCategorias(response);
            } catch (error) {
                console.error('Erro ao carregar as categorias:', error);
            }
        };
        
        fetchCategorias();
    }, []);

    return (
        <div className="flex flex-col justify-around items-center mb-8">
            <h2 className="text-5xl   px-8 py-16  text-green-400 font-bold">Categorias</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categorias.map((categoria) => (
                    <CardCategoria key={categoria.id}
                    categoria={categoria} />
                ))}
            </div>
        </div>
    );
}

export default Categorias;

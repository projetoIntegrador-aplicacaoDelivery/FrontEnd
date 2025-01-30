import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Categoria from "../../models/Categoria";
import { buscar } from "../../services/Service";
import CardCategoria from "./CardCategoria";
import { ToastAlerta } from "../../utils/ToastAlert";


function ListarCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria[]>([]);

    async function buscarTemas() {
        try {
            await buscar('/categoria', setCategoria)
        } catch (error: any) {
            console.error('Erro ao buscar categoria:', error);
            // Se houver um erro relacionado ao acesso, redireciona o usuário ou exibe uma mensagem
            ToastAlerta('Erro ao carregar categoria.','erro');
        }
    }

    useEffect(() => {
        buscarTemas();    
    }, []);

    return (
        <>
        {categoria.length === 0 && (
            <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
        />
        )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {categoria.map((categoria) => (
                            <CardCategoria key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListarCategoria;

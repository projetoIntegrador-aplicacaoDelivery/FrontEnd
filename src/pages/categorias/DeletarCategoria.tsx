import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import Categoria from "../../models/Categoria";
import { buscar, deletar } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlert";

function DeletarCategoria() {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categoria/${id}`, setCategoria);
    } catch (error: any) {
    ToastAlerta("Erro ao buscar a categoria!", 'erro');
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarCategoria() {
    setIsLoading(true);
    try {
      await deletar(`/categoria/${id}`);
    ToastAlerta("Categoria apagada com sucesso!", 'sucesso');
    } catch (error: any) {
    ToastAlerta("Erro ao deletar a categoria!", 'erro');
    }
    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categoria");
  }

  return (
    <div className="container w-1/3 mx-auto bg-offwhite p-6 rounded-xl shadow-md border border-olive py-16">
      <h1 className="text-4xl text-center my-4 text-charcoal">Deletar Categoria</h1>
      <p className="text-center font-semibold mb-4 text-blackish">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between shadow-md">
        <header className="py-2 px-6 bg-lime-green text-charcoal font-bold text-2xl text-center">
          Categoria
        </header>
        <p className="p-8 text-3xl bg-cream h-full text-center text-blackish">
          {categoria.descricao}
        </p>
        <div className="flex">
          <button
            className="text-cream bg-brown hover:bg-olive w-1/2 py-3 transition duration-300"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-1/2 text-cream bg-green-400 hover:bg-green-200 flex items-center justify-center py-3 transition duration-300"
            onClick={deletarCategoria}
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeletarCategoria;

import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../services/Service";

function FormCategoria() {
    const navigate = useNavigate();
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categoria/${id}`, setCategoria);
        } catch (error) {
            console.error("Erro ao buscar categoria:", error);
        }
    }

    useEffect(() => {
        if (id) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    function retornar() {
        navigate("/categoria");
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (id) {
                await atualizar(`/categoria`, categoria, setCategoria);
                alert("A Categoria foi atualizada com sucesso!");
            } else {
                await cadastrar(`/categoria`, categoria, setCategoria);
                alert("A Categoria foi cadastrada com sucesso!");
            }
        } catch (error) {
            console.error("Erro ao salvar categoria:", error);
            alert("Erro ao salvar a categoria.");
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto text-charcoal bg-offwhite min-h-screen p-6">
            <h1 className="text-4xl text-center my-8 text-blackish">
                {id ? "Editar Categoria" : "Cadastrar Categoria"}
            </h1>

            <form className="w-1/2 flex flex-col gap-4 bg-cream p-6 rounded-lg shadow-md border border-olive" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao" className="text-charcoal font-semibold">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria"
                        name="descricao"
                        className="border-2 border-green-400 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-200"
                        value={categoria.descricao || ""}
                        onChange={atualizarEstado}
                    />
                </div>
                <button
                    className="rounded text-cream bg-green-400 hover:bg-green-200 w-1/2 py-2 mx-auto flex justify-center font-semibold transition duration-300"
                    type="submit"
                    disabled={isLoading}
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
                        <span>{id ? "Atualizar" : "Cadastrar"}</span>
                    )}
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;

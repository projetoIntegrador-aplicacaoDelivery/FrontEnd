import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Produto } from "../../../models/Produto"
import { buscar, deletar } from "../../../services/Service"

function DeletarProduto() {

    const navigate = useNavigate()

    const [produto, setProduto] = useState<Produto>({} as Produto)

    const {id} = useParams<{id: string}>()

    async function buscarProdutoPorId(id: string){
        try{
            await buscar(`/produtos/${id}`, setProduto)
        }
        catch(error:any){
            console.log(error.toString())
        }
    }

    useEffect(()=>{
        if(id!== undefined){
            buscarProdutoPorId(id)
        }
    },[id])

    async function deletarProduto() {
        try {
            await deletar(`/produtos/${id}`)
            alert("Produto apagado com sucesso!")
        } catch (error: any) {
            console.log(error.toString())
            alert("Erro ao apagar produto!")
        }

        navigate("/produtos")
    }

    function retornar(){
        navigate("/produtos")
    }

    return (
        <div className='container w-1/3 mx-auto my-6'>
            <h1 className='text-4xl text-center my-4'>Deletar Produto</h1>

            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o produto a seguir?
            </p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between '>
                <header 
                    className='py-2 px-6 bg-green-400 text-white font-bold text-2xl '>
                    Produto
                </header>
                <img className="w-auto h-48 object-cover rounded-4xl" src={produto.foto} alt="" />
                <div className="p-4 bg-offwhite">
                    <p className='text-xl h-full'>{produto.nomeProduto}</p>
                    <p>{produto.descricao}</p>
                </div>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-green-200 
                        hover:bg-green-800 flex items-center justify-center' onClick={deletarProduto}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarProduto
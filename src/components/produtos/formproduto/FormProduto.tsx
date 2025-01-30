import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { Produto } from "../../../models/Produto";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlert";

function FormProduto() {
  const navigate = useNavigate();

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    descricao: "",
  });
  const [produto, setProduto] = useState<Produto>({} as Produto);

  const { id } = useParams<{ id: string }>();

  async function buscarProdutoPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto);
    } catch (error: any) {
      console.log(error.toString());
    }
  }

  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categoria/${id}`, setCategoria);
    } catch (error: any) {
      console.log(error.toString());
    }
  }

  async function buscarCategorias() {
    try {
      await buscar("/categoria", setCategorias);
    } catch (error: any) {
      console.log(error.toString());
    }
  }

  useEffect(() => {
    buscarCategorias();

    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
    });
  }

  function retornar() {
    navigate("/produtos");
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await atualizar("/produtos", produto, setProduto);
        ToastAlerta("Produto atualizado com sucesso!",'sucesso');
        navigate("/produtos")
      } catch (error: any) {
        console.log(error.toString());
        ToastAlerta("Erro ao atualizar produto!",'erro');
      }
      
    } else {
      try {
        await cadastrar("/produtos", produto, setProduto);
        ToastAlerta("Produto cadastrado com sucesso!",'sucesso');
        navigate("/produtos")
      } catch (error: any) {
        console.log(error.toString());
        ToastAlerta("Erro ao cadastrar a produto",'erro');
      }
    }
    
  }

  const carregandoCategoria = categoria.descricao === "";

  return (
    <>
      <div className="container flex flex-col mx-auto items-center">
        <h1 className="text-4xl text-center my-8">
          {id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
        </h1>

        <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovoProduto}>
          <div className="flex flex-col gap-2">
            <label htmlFor="titulo">Nome Do Produto</label>
            <input
              type="text"
              placeholder="Nome do Produto"
              name="nomeProduto"
              required
              className="border-2 border-black rounded p-2"
              value={produto.nomeProduto}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="titulo">Descrição do Produto</label>
            <input
              type="text"
              placeholder="Descrição do Produto"
              name="descricao"
              required
              className="border-2 border-black rounded p-2"
              value={produto.descricao}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="titulo">Preço do Produto</label>
            <input
              type="number"
              placeholder="Preço do produto"
              name="preco"
              required
              className="border-2 border-black rounded p-2"
              value={produto.preco}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="titulo">Foto do Produto</label>
            <input
              type="url"
              placeholder="Informe um link com a foto do Produto"
              name="foto"
              required
              className="border-2 border-slate-700 rounded p-2"
              value={produto.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Categoria do Produto</p>
            <select
              name="categoria"
              id="categoria"
              className="border-2 p-2 border-black rounded"
              onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
              
            >
              <option value="" selected disabled>
                Selecione uma Categoria
              </option>

              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>{categoria.descricao}</option>
              ))}
            </select>
          </div>
          
          <button
            
            type="submit"
            className="rounded disabled:bg-slate-200 bg-green-400 hover:bg-green-900
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
            disabled={carregandoCategoria}
          >
            <span>{id !== undefined ? "Atualizar" : "Cadastrar"}</span>
          </button>
          
        </form>
        
      </div>
    </>
  );
}

export default FormProduto;

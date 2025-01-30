import React, { useEffect, useState } from "react";
import CardProdutos from "../cardprodutos/CardProdutos";
import { useNavigate } from "react-router-dom";
import { Produto } from "../../../models/Produto";
import { buscar } from "../../../services/Service";
import { TailSpin } from "react-loader-spinner";
import ModalProduto from "../modalproduto/ModalProduto";

function ListaProdutos() {
  
  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function buscarProdutos() {
    try {
      await buscar("/produtos", setProdutos);
    } catch (error: any) {
      console.log(error.toString());
    }
  }
  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  return (
    <>


      <div className="flex flex-col justify-around items-center bg-cream">
        <div className=" flex flex-col">
          <h1 className=" text-5xl   px-8 py-16  text-green-400 font-bold">
            Produtos
          </h1>
          <ModalProduto />
        </div>
        {produtos.length === 0 &&
        (
          <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        )}
        <div
          className="w-5xl mx-auto my-4 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {produtos.map((produto) => (
            <CardProdutos key={produto.id} produto={produto} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListaProdutos;

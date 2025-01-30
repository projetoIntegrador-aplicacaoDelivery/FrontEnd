import React from "react";
import { Produto } from "../../../models/Produto";
import { Link } from "react-router-dom";


interface CardProdutosProps {
  produto: Produto;
}

function CardProdutos({ produto }: CardProdutosProps) {
  return (
    <>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl p-4 bg-offwhite hover:scale-105   hover:cursor-pointer ">
        <img
          className="w-full h-48 object-cover rounded-4xl"
          src={produto.foto}
          alt="foto do produto"
        />
        <div className="py-4  rounded-4xl px-2 mt-2 ">
          <h2 className="text-xl font-bold text-gray-900">
            {produto.nomeProduto}
          </h2>
          <p className="text-lg text-green-600 font-semibold mt-1 ">
            R$ {produto.preco}
          </p>
          <p className="text-gray-700 mt-2 text-sm">{produto.descricao}</p>
        </div>
        <div className=" flex flex-row justify-evenly pt-2 align-bottom my-3 py-2 px-4">
          <Link to={'/editarproduto/${produto.id}'}><button className=" bg-green-400 px-2 rounded-3xl">Editar</button></Link>
          <button className=" bg-red-400 px-2 rounded-3xl">Deletar</button>
        </div>
      </div>
    </>
  );
}

export default CardProdutos;

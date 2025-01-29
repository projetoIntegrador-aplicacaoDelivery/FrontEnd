import React from "react";
import CardProdutos from "../cardprodutos/CardProdutos";

function ListaProdutos() {
  return (
    <>
      <div className="flex flex-col justify-around items-center">
        <div>
          <h1 className=" text-5xl font-bold bg-offwhite px-8 py-2 rounded-4xl">Produtos: </h1>
        </div>
        <div
          className="w-5xl mx-auto my-4 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
        </div>
      </div>
    </>
  );
}

export default ListaProdutos;

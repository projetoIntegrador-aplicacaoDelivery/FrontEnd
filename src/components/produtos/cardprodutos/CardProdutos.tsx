import React from "react";

function CardProdutos() {
  return (
    <>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl p-4 bg-offwhite hover:scale-105   hover:cursor-pointer ">
        <img
          className="w-full h-48 object-cover rounded-4xl"
          src="https://cdn.awsli.com.br/600x1000/1982/1982052/produto/174027508/53c931b15d.jpg"
          alt="foto do produto"
        />
        <div className="py-4  rounded-4xl px-2 mt-2 ">
          <h2 className="text-xl font-bold text-gray-900">Produto</h2>
          <p className="text-lg text-green-600 font-semibold mt-1">Valor: R$ 1,99</p>
          <p className="text-gray-700 mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            perspiciatis dolorum ullam earum commodi neque illum lore
          </p>
        </div>
      </div>
    </>
  );
}

export default CardProdutos;

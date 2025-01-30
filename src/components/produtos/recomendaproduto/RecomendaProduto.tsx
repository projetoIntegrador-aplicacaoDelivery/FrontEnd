import React, { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";
import { buscar } from "../../../services/Service";
import CardProdutos from "../cardprodutos/CardProdutos";

function RecomendaProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto);

  async function buscaRecomendacao() {
    try {
      buscar("produtos/recomenda", setProduto);
    } catch (error: any) {
      console.log(error.toString());
    }
  }

  useEffect(() => {
    buscaRecomendacao();
  }, []);

  return (
    <>
      <CardProdutos key={produto.id} produto={produto} />
    </>
  );
}

export default RecomendaProduto;

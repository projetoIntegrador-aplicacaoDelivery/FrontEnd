import { useEffect, useState } from "react";
import CategoriaService from "../../services/CategoriaService";
import Categoria from "../../models/Categoria";

function ListarCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    CategoriaService.listarCategorias()
      .then((data) => setCategorias(data))
      .catch((error) => console.error("Erro ao listar categorias:", error));
  }, []);

  return (
    <div>
      <h2>Listar Categorias</h2>
      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.id}>{categoria.descricao}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListarCategorias;

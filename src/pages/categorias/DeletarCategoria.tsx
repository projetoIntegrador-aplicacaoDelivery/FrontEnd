import { useState } from "react";
import CategoriaService from "../../services/CategoriaService";

interface DeletarCategoriaProps {
  id: number;
}

function DeletarCategoria({ id }: DeletarCategoriaProps) {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async () => {
    try {
      await CategoriaService.deletarCategoria(id);
      setIsDeleted(true);
    } catch (error) {
      console.error("Erro ao deletar categoria:", error);
    }
  };

  if (isDeleted) {
    return <p>Categoria deletada com sucesso!</p>;
  }

  return <button onClick={handleDelete}>Deletar Categoria</button>;
}

export default DeletarCategoria;

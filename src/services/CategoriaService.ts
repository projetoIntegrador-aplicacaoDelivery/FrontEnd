import axios from "axios";
import Categoria from "../models/Categoria";

const api = axios.create({
  baseURL: 'https://farmacia-jk1x.onrender.com/'
});

class CategoriaService {
  async listarCategorias(): Promise<Categoria[]> {
    try {
      const response = await api.get('/categorias');
      return response.data;
    } catch (error) {
      console.error('Erro ao listar categorias', error);
      throw error;
    }
  }

  async cadastrarCategoria(categoria: Categoria): Promise<Categoria> {
    try {
      const response = await api.post('/categorias', categoria);
      return response.data;
    } catch (error) {
      console.error('Erro ao cadastrar categoria', error);
      throw error;
    }
  }

  async atualizarCategoria(id: number, categoria: Categoria): Promise<Categoria> {
    try {
      const response = await api.put(`/categorias/${id}`, categoria);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar categoria', error);
      throw error;
    }
  }

  async deletarCategoria(id: number): Promise<void> {
    try {
      await api.delete(`/categorias/${id}`);
    } catch (error) {
      console.error('Erro ao deletar categoria', error);
      throw error;
    }
  }
}

export default new CategoriaService();

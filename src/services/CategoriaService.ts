import axios from "axios";
import Categoria from "../models/Categoria";

const api = axios.create({
  baseURL: 'http://localhost:8080'
});

class CategoriaService {
  async listarCategorias(): Promise<Categoria[]> {
    try {
      const response = await api.get('/categoria');
      return response.data;
    } catch (error) {
      console.error('Erro ao listar categorias', error);
      throw error;
    }
  }

  async cadastrarCategoria(categoria: Categoria): Promise<Categoria> {
    try {
      const response = await api.post('/categoria', categoria);
      return response.data;
    } catch (error) {
      console.error('Erro ao cadastrar categoria', error);
      throw error;
    }
  }

  async atualizarCategoria(id: number, categoria: Categoria): Promise<Categoria> {
    try {
      const response = await api.put(`/categoria/${id}`, categoria);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar categoria', error);
      throw error;
    }
  }

  async deletarCategoria(id: number): Promise<void> {
    try {
      await api.delete(`/categoria/${id}`);
    } catch (error) {
      console.error('Erro ao deletar categoria', error);
      throw error;
    }
  }
}

export default new CategoriaService();

import Categoria from "./Categoria";

export interface Produto{
    id: number;
    nomeProduto: string;
    descricao: string;
    preco: number;
    foto: string;
    categoria: Categoria;
}
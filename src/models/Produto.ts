import Categoria from "./Categoria";
import { Usuario } from "./Usuario";

export interface Produto{
    id?: number;
    nomeProduto: string;
    descricao: string;
    preco: number;
    foto: string;
    categoria: Categoria;
    usuario?: Usuario
    
}
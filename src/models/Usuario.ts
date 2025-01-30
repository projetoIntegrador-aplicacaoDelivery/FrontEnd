import { Produto } from "./Produto";

export interface Usuario{
    id: number;
    nome: string;
    email: string;
    senha: string;
    foto: string;
    produtos: Produto[]
}
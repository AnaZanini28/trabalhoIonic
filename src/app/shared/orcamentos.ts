import { Tipo } from "./tipo.enum";

export class Orcamentos {
    codigo: number;
    cliente: string;
    tipo: Tipo;
    total: number | string; 
    descricao: string;
}

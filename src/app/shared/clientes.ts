import { Sexo } from "./sexo.enum";

export class Clientes {
    codigo: number;
    nome: string;
    cpf: string;
    sexo: Sexo;
    nascimento: Date | string;
    telefone: string;
    foto: string;
}


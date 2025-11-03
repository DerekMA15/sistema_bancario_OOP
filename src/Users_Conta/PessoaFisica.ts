import { User } from "./User.js";

export interface PessoaFisica{

} 

export class PessoaFisica extends User {
    CPF:string;
    // Data:number;
    // Endereço: string;


    constructor(nome:string, endereco:string, CPF:string){
        super(nome,endereco);
        
        if (this.cpf_Valido(CPF) === true){
            this.CPF = CPF;
        }
        else this.CPF = ""; 
    }

    //método para verificar o cpf

    cpf_Valido(cpf:string):boolean {
        //abstrair por enquanto = fzr algoritmo para validar o cpf

        const validador = true

        if (validador === true){
            return true;// cpf valido 
        }
        else {
            return false;// cpf invalido
        }
    }
}
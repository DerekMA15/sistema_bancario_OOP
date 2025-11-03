import { User } from "./User.js"; // herdando da classe pai User

export interface PessoaJuridica{

} 

export class PessoaJuridica extends User {
    CNPJ:string;
    razao_social:string; 
    // Data:number;
    // Endereço: string;


    constructor(nome_fantasia:string, endereco:string, CNPJ:string, razao_social:string){
        super(nome_fantasia,endereco);

        this.razao_social= razao_social;
        if (this.CNPJ_Valido(CNPJ) === true){
            this.CNPJ = CNPJ;
        }
        else this.CNPJ = ""; 
    }

    //método para verificar o CNPJ()

    CNPJ_Valido(CNPJ:string):boolean {
        //abstrair por enquanto = fzr algoritmo para validar o CNPJ

        const validador = true

        if (validador === true){
            return true;// CNPJ valido 
        }
        else {
            return false;// CNPJ invalido
        }
    }
}
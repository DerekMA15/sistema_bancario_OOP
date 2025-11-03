export interface User{
    nome: string;
    endereco:string;
    contas_associadas:[];

    getNome():string;
    setSaldo(new_saldo:number):void;
    setNome(new_name:string):void;
    exibir_dados():[];
    
}

export abstract class User{

    endereco:string;
    public nome: string; // na subclasse PJ vamos sobrescrever o atributo NOME por NOME FANTASIA
    
    constructor (nome:string, endereco:string) {

        this.nome = nome;
        this.endereco = endereco;
    }

    //MÉTODOS 
  
    //getters e setters
    getEndereco():string {
        return this.endereco;
    }
    getNome():string {
        return this.nome;
    }
    setEndereco(new_endereco:string):void {
        this.endereco = new_endereco;
    }
    setName(new_name:string):void{
        this.nome = new_name;
    }
    // depositar 

    // consultar

    // aplicação de juros em conta poupanaça

}

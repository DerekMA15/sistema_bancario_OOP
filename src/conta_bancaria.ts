/* O projeto Sistema Bancário Orientado a Objetos tem como objetivo simular o funcionamento de um banco digital, 
aplicando conceitos fundamentais da Programação Orientada a Objetos (POO), como abstração, herança, polimorfismo, 
encapsulamento e uso de interfaces.

O sistema permite que diferentes tipos de usuários (Pessoa Física e Pessoa Jurídica) realizem operações 
bancárias como depósitos, saques, consultas de saldo e aplicação de juros em contas poupança. */

// CLASSE MÃE Física e pessoa Jurídica 

export interface conta_bancaria{
    saldo: number;
    nome: string;
    getSaldo():number;
    getNome():string;
    setSaldo(new_saldo:number):void;
    setNome(new_name:string):void;
}
export class conta_bancaria{

    saldo: number;
    nome: string; // não sei se conta jurídica possui nome da mesma forma que conta para pessoa física, mas isso pode expandir para conta da empresa

    // CONSTRUCTOR e posteriormente trocar por getters e setters 
    // obs : acabei de notar que tem pessoa física conta corrente e conta poupança(rever como fazer para ambas)
    constructor (nome:string, saldo:number) {

        this.saldo = saldo; // por enquanto eu vou usar o saldo como número, mas para manter a maior precisão é interessante fazer a conversão do Typeof de string para Number
        this.nome = nome;

    }

    //MÉTODOS 
  
    //getters e setters
    getSaldo():number {
        return this.saldo;
    }
    getNome():string {
        return this.nome;
    }
    setSaldo(new_saldo:number):void {
        this.saldo = new_saldo;
    }
    setName(new_name:string):void{
        this.nome = new_name;
    }
    // depositar 

    // consultar

    // aplicação de juros em conta poupanaça

}


export class conta_Pessoa_Fisica extends conta_bancaria {
    CPF:string;
    // Data:number;
    // Endereço: string;


    constructor(nome:string, saldo:number, CPF:string){
        super(nome,saldo);
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
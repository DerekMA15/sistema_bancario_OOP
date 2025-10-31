/* O projeto Sistema Bancário Orientado a Objetos tem como objetivo simular o funcionamento de um banco digital,
aplicando conceitos fundamentais da Programação Orientada a Objetos (POO), como abstração, herança, polimorfismo,
encapsulamento e uso de interfaces.

O sistema permite que diferentes tipos de usuários (Pessoa Física e Pessoa Jurídica) realizem operações
bancárias como depósitos, saques, consultas de saldo e aplicação de juros em contas poupança. */
// CLASSE MÃE Física e pessoa Jurídica 
class conta_bancaria {
    saldo;
    nome; // não sei se conta jurídica possui nome da mesma forma que conta para pessoa física, mas isso pode expandir para conta da empresa
    // CONSTRUCTOR e posteriormente trocar por getters e setters 
    // obs : acabei de notar que tem pessoa física conta corrente e conta poupança(rever como fazer para ambas)
    constructor(nome, saldo) {
        this.saldo = saldo; // por enquanto eu vou usar o saldo como número, mas para manter a maior precisão é interessante fazer a conversão do Typeof de string para Number
        this.nome = nome;
    }
    //MÉTODOS 
    //getters e setters
    getSaldo() {
        return this.saldo;
    }
    getNome() {
        return this.nome;
    }
    setSaldo(new_saldo) {
        this.saldo = new_saldo;
    }
}
export {};

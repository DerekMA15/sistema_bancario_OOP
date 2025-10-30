// 1. Definindo a Classe (O Molde)
class Jogador {
    // Propriedades (atributos) com tipos definidos
    nome;
    pontuacao;
    // 2. O Construtor: um método especial para criar e inicializar o objeto
    constructor(nomeInicial) {
        this.nome = nomeInicial;
        this.pontuacao = 0; // Todo jogador começa com 0 pontos
        console.log(`Jogador ${this.nome} criado!`);
    }
    // 3. Métodos (Comportamentos)
    ganharPontos(pontos) {
        this.pontuacao += pontos;
        console.log(`${this.nome} ganhou ${pontos} pontos. Total: ${this.pontuacao}`);
    }
}
// 4. Criando Objetos (Instâncias da Classe)
let jogador1 = new Jogador("Derek"); // -> "Jogador Derek criado!"
let jogador2 = new Jogador("Maria"); // -> "Jogador Maria criado!"
// Usando os métodos do objeto
jogador1.ganharPontos(10); // -> "Derek ganhou 10 pontos. Total: 10"
jogador2.ganharPontos(5); // -> "Maria ganhou 5 pontos. Total: 5"
console.log(jogador1.nome); // Acessando a propriedade
// ===================================== ENCAPSULAMENTO ========================================================
class Banco {
    saldo; // Só pode ser acessado DENTRO da classe Banco
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }
    // Método público para interagir com o saldo privado
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado.`);
        }
    }
    // Método público para consultar o saldo de forma segura
    consultarSaldo() {
        return this.saldo;
    }
}
const minhaConta = new Banco(1000);
minhaConta.depositar(500);
console.log(`Saldo atual: R$${minhaConta.consultarSaldo()}`);
// A linha abaixo causaria um ERRO no TypeScript, pois 'saldo' é privado!
// console.log(minhaConta.saldo); // Erro: Property 'saldo' is private and only accessible within class 'Banco'.
//==================================== HERANÇA =================================================================
// Classe Mãe
class Personagem {
    nome;
    energia;
    constructor(nome) {
        this.nome = nome;
        this.energia = 100;
    }
    atacar() {
        console.log(`${this.nome} realizou um ataque básico!`);
    }
}
// Classe Filha que herda de Personagem
class Mago extends Personagem {
    mana;
    constructor(nome) {
        super(nome); // Chama o construtor da classe Personagem
        this.mana = 200;
    }
    // Método específico do Mago
    lancarFeitico() {
        console.log(`${this.nome} lançou uma bola de fogo!`);
        this.mana -= 20;
    }
    // Sobrescrevendo o método atacar
    atacar() {
        console.log(`${this.nome} atacou com seu cajado mágico!`);
    }
}
const gandalf = new Mago("Gandalf");
gandalf.atacar(); // -> "Gandalf atacou com seu cajado mágico!"
gandalf.lancarFeitico(); // -> "Gandalf lançou uma bola de fogo!"
console.log(gandalf.energia); // Propriedade herdada de Personagem
// A classe Carro DEVE implementar tudo que a interface Veiculo exige
class Carro {
    marca;
    modelo;
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    acelerar() {
        console.log(`O carro ${this.modelo} está acelerando.`);
    }
    frear() {
        console.log(`O carro ${this.modelo} está freando.`);
    }
}
let meuCarro = new Carro("Ford", "Mustang");
meuCarro.acelerar();
//======================== ABSTRATAS =========================================================================
// Classe abstrata - não pode ser instanciada
class Poligono {
    // Método com implementação
    descrever() {
        console.log("Isso é uma forma geométrica.");
    }
}
class Retangulo extends Poligono {
    largura;
    altura;
    constructor(largura, altura) {
        super();
        this.largura = largura;
        this.altura = altura;
    }
    // Implementação obrigatória do método abstrato
    calcularArea() {
        return this.largura * this.altura;
    }
}
const meuRetangulo = new Retangulo(10, 5);
meuRetangulo.descrever(); // Método herdado
console.log(`Área: ${meuRetangulo.calcularArea()}`); // Método implementado
export {};
// const poligono = new Poligono(); // Erro! Não se pode criar instância de classe abstrata.

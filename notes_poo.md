Classe Abstrata Usuario (user){
   
    Atributos:
       nome 

       endereço

       contas associadas

    Métodos:
       exibir_dados() // para apresentar suas informações pessoais.

}


Classe Pessoa Física (PessoaFisica){
        
    Atributos:
        Nome

        Endereço

        CPF

        Data de nascimento

}

Nota: Cada pessoa física pode ter uma ou mais contas bancárias associadas e realizar movimentações financeiras.

Classe Pessoa Jurídica (PessoaJuridica){

    Atributos:
        Razão Social

        Nome Fantasia

        CNPJ

        Endereço
}

Nota: As pessoas jurídicas podem possuir várias contas vinculadas à empresa sendo gerenciadas pelo banco de forma diferenciada.

-----------------------------------


Classe Abstrata ContaBase {

    Métodos: 
        depositar()

        sacar()

        exibir_saldo()
}

Classe Conta {

    Atributos:
        Número

        titular

        saldo

    Métodos:
        // todos os métodos da anterior.
}

Nota: gostaria de associar esses atributos à subatributos pois eles vão precisar estar associados diretamente aos objetos PF ou PJ /

Ex: new Obj_PF[new Obj_Conta]// um obj PF pode ter mais de uma conta associada ao seu nome, ou seja, add mais ao catalogo de arrays possiveis

obs: obviamente vamos ter que desenvolver um painel de escolhas e com essas escolhas vamos ter que fazer um sistema de persistência de dados 

Classe ContaPoupanca{

    Atributos: 
        Herdeira de Conta

    Métodos:
        // todos os métodos da anterior.

        aplicar_juros()

        simular_rendimento_poupança()
}   

Interface OperacoesBancarias{
    
    Métodos: 
    sacar()

    depositar()

    consultar_saldo()
}

Notas: Define o conjunto mínimo de operações que toda conta deve possuir (como depositar, sacar e consultar_saldo), garantindo padronização entre os tipos de conta.

Classe Banco{

}

nota: Gerencia todos os usuários e contas, permitindo cadastrar novos clientes, criar contas e exibir informações gerais do sistema.
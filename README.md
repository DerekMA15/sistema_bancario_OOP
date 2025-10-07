# sistema_bancario_OOP
💻 Projeto: Sistema Bancário Orientado a Objetos com Usuário PF e PJ
📘 Descrição Geral

O projeto Sistema Bancário Orientado a Objetos tem como objetivo simular o funcionamento de um banco digital, aplicando conceitos fundamentais da Programação Orientada a Objetos (POO), como abstração, herança, polimorfismo, encapsulamento e uso de interfaces.
O sistema permite que diferentes tipos de usuários (Pessoa Física e Pessoa Jurídica) realizem operações bancárias como depósitos, saques, consultas de saldo e aplicação de juros em contas poupança.

👥 Usuários do Sistema

O sistema trabalha com dois tipos principais de clientes:

🧍 Pessoa Física (PF)

Representa o cliente individual do banco. Possui atributos como:

Nome

Endereço

CPF

Data de nascimento

Cada pessoa física pode ter uma ou mais contas bancárias associadas e realizar movimentações financeiras.

🏢 Pessoa Jurídica (PJ)

Representa empresas e organizações que possuem conta no banco.
A classe contém atributos como:

Razão Social

Nome Fantasia

CNPJ

Endereço

As pessoas jurídicas podem possuir várias contas vinculadas à empresa, sendo gerenciadas pelo banco de forma diferenciada.

⚙ Estrutura de Classes
🔹 Classe Abstrata Usuario

Classe base para todos os usuários. Define os atributos e métodos comuns, como nome, endereço e as contas associadas.
Por ser abstrata, não pode ser instanciada diretamente, apenas suas subclasses (PessoaFisica e PessoaJuridica).

🔹 Classe PessoaFisica

Herdeira de Usuario, representa o cliente individual, com atributos específicos como CPF e data de nascimento.
Implementa o método exibir_dados() para apresentar suas informações pessoais.

🔹 Classe PessoaJuridica

Também herda de Usuario, representando empresas.
Inclui atributos como CNPJ, razão social e nome fantasia.
Implementa o método exibir_dados() para exibir dados empresariais.

🔹 Classe Abstrata ContaBase

Define os métodos essenciais de qualquer conta bancária, como depositar, sacar e exibir_saldo.
Serve de base para outras classes de conta.

🔹 Classe Conta

Implementa os métodos definidos em ContaBase, representando uma conta bancária comum.
Possui número, titular e saldo.

🔹 Classe ContaPoupanca

Herdeira de Conta, adiciona o método aplicar_juros(), simulando o rendimento da poupança.

🔹 Interface OperacoesBancarias

Define o conjunto mínimo de operações que toda conta deve possuir (como depositar, sacar e consultar_saldo), garantindo padronização entre os tipos de conta.

🔹 Classe Banco

Gerencia todos os usuários e contas, permitindo cadastrar novos clientes, criar contas e exibir informações gerais do sistema.

💾 Salvamento e Carregamento de Dados (JSON)

O sistema conta com uma funcionalidade para armazenar e recuperar os dados dos usuários e contas bancárias em formato JSON, garantindo que as informações não sejam perdidas ao encerrar o programa.

🔸 Salvamento de dados

Ao final das operações, o sistema salva automaticamente as informações em um arquivo JSON (por exemplo, dados_banco.json).

São registrados os dados dos usuários (PF e PJ), bem como suas contas, saldos e transações.

🔸 Carregamento de dados

Ao iniciar o sistema, o programa carrega o arquivo JSON, restaurando o estado anterior do banco.

Dessa forma, o usuário pode continuar suas operações exatamente de onde parou.

Essa funcionalidade reforça o conceito de persistência de dados, essencial em sistemas bancários reais.

🧠 Conceitos de POO Aplicados

Abstração: Modelagem das entidades principais (usuário e conta) de forma genérica.

Encapsulamento: Proteção de atributos e controle de acesso por métodos.

Herança: Reutilização de código entre as classes (PessoaFisica, PessoaJuridica, ContaPoupanca).

Polimorfismo: Tratamento uniforme de diferentes tipos de usuários e contas.

Interface: Definição de um contrato de métodos obrigatórios para as classes de conta.

🎯 Objetivo Educacional

O projeto foi desenvolvido com o objetivo de demonstrar na prática os principais conceitos da POO, aplicados a um sistema bancário completo e persistente, capaz de salvar e carregar dados de forma automática.
Ele mostra como unir estrutura orientada a objetos com armazenamento em JSON, criando uma aplicação modular, reutilizável e funcional.

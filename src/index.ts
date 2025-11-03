import { PessoaFisica } from "./Users_Conta/PessoaFisica.js";
import { PessoaJuridica } from "./Users_Conta/PessoaJuridica.js";

let pessoaFisica1 = new PessoaFisica("Derek", "Bairi Ludovia, Olaria", "066.034.534-43" );
let PessoaJuridica1 = new PessoaJuridica("Coloco","Empresa EJ, LA","023-123-312-1-3", "sei la oque e isso");

console.log(PessoaJuridica1.nome);
console.log(pessoaFisica1.endereco);
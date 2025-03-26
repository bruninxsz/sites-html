class funcionario {
    constructor(nome, salario, dataAdmissao,) {
        this.nome = nome
        this.salario = salario
        this.dataAdmissao = dataAdmissao
    }
    calcularBonus() {
        console.log(`${this.nome} Bônus: ${this.salario * 0.1},e Salário Total: ${this.salario}`);
    }

    exibirDetalhes(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Salário: ${this.salario}`)
        console.log(`Data de admissão: ${this.dataAdmissao}`)
        console.log(`Bônus: R$${this.salario * 0.1}`);
    }
}

 class Gerente extends funcionario {
    constructor (nome, salario, dataAdmissao, Departamento) {
        super(nome, salario, dataAdmissao)
        this.Departamento = Departamento
    }
     calcularBonus(){
        console.log(`Gerente ${this.nome} do ${this.Departamento} receberá bônus de: ${this.salario * 0.2}, totalizando um salário de: ${this.salario}  `);
     }   
 }

 const funcionarios = [new funcionario("Bruno", 3000, "10/12/2019"),
    new Gerente("Gabriel", 10400, "02/05/2016", "Logística")]

    console.log("DETALHES FUNCIONÁRIOS");
console.log("");
funcionarios.forEach((funcionario) => funcionario.exibirDetalhes());
console.log("");

console.log("BONUS FUNCIONÁRIOS");
console.log("");
funcionarios.forEach((funcionario) => funcionario.calcularBonus());
console.log("");

//Exercício 2:

let branco = "preto";
let preto = "cinza";
let cinza = "branco";

let carro = "preto";

let valor = 30000;
let prestacao = 750;

//a.
console.log(branco == "branco");

//b.
console.log(branco == cinza);

//c.
console.log(carro === branco);

//d.
let cavalo = carro == "preto" ? "cinza" : "marrom";

console.log(cavalo);

//e.
let entrada = 3000

function quantidadePrestacoes(entrada) {
    let valorFinal = valor - entrada;
    
    for (i = 0; i <= valorFinal; i++){
        numeroPrestacoes = valorFinal / prestacao;
    }
    return numeroPrestacoes;
}

console.log(quantidadePrestacoes(entrada));

//f.
function somaCaracteres(caracteres) {
    soma = branco + preto + cinza;

    console.log(soma)

    caracteres = soma.length;

    console.log(caracteres);
}

console.log(somaCaracteres());

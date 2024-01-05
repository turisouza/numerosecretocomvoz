const elementoMenorValor = document.querySelector("#menor-valor");
const elementoMaiorValor = document.querySelector("#maior-valor");

const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();

elementoMenorValor.textContent = menorValor;
elementoMaiorValor.textContent = maiorValor;

function gerarNumeroAleatorio() {

    return parseInt(Math.random() * maiorValor + 1);

}

console.log("Número secreto:", numeroSecreto);



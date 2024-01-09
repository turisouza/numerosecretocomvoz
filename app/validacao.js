

function verificaSeChuteEValido(chute) {

    const numero = parseInt(chute);

    if (chuteForInvalido(numero)) {

        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML = `
        
        <h2>Fim do Jogo!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        
        `
        } else {

            elementoChute.innerHTML += "<div>Valor Inválido</div>";

        }

       
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {

        elementoChute.innerHTML += `<div>Valor Inválido! Fale um número entre ${menorValor} e ${maiorValor} </div>`

    }

    if (numero === numeroSecreto) {

        document.body.innerHTML = `
        
        <h2>Você Acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        
        `
    }

    if (chute > numeroSecreto) {

        elementoChute.innerHTML += '<div>Você errou. O número secreto é menor<i class="fa-solid fa-arrow-down"></i></div>'
    }

    if (chute < numeroSecreto) {

        elementoChute.innerHTML += '<div>Você errou. O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>'
    }

}

function chuteForInvalido(numero) {

    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {

    return numero > maiorValor || numero < menorValor;

}


document.body.addEventListener("click", e => {

    if (e.target.id == "jogar-novamente") {

        window.location.reload();

    }

})
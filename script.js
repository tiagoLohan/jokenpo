const botaoPedra = document.querySelector("button#pedra")
const botaoPapel = document.querySelector("button#papel")
const botaoTesoura = document.querySelector("button#tesoura")
const resultado = document.querySelector("p.resultado")
const resultadoHumano = document.querySelector(".resultado-eu")
const resultadoMaquina = document.querySelector(".resultado-maquina")
const imgHumano = document.querySelector("#img-humano")
const imgMaquina = document.querySelector("#img-maquina")

let humano = ""
let pontosHumano = 0
let pontosMaquina = 0

function cliquei(opcao) {
    humano = opcao
    playGame(humano, maquina())
}


function maquina() {
    const opcoesGame = ["pedra", "papel", "tesoura"]
    return opcoesGame[Math.floor(Math.random() * 3)]
}

function playGame(opcaoH, opcaoM) {
    imgHumano.innerHTML = opcaoH.toUpperCase()
    imgMaquina.innerHTML = opcaoM.toUpperCase()
    console.log(opcaoH, opcaoM)

    if (opcaoH === opcaoM) {
        resultado.innerHTML = "Deu empate ! &#x1F62A"
    } else if
        ((opcaoH === "pedra" && opcaoM === "tesoura") ||
        (opcaoH === "papel" && opcaoM === "pedra") ||
        (opcaoH === "tesoura" && opcaoM === "papel")) {
        resultado.innerHTML = "Parabéns, você ganhou! &#x1F60E"
        pontosHumano++
        resultadoHumano.innerHTML = pontosHumano

    } else if
        ((opcaoH === "pedra" && opcaoM === "papel") ||
        (opcaoH === "papel" && opcaoM === "tesoura") ||
        (opcaoH === "tesoura" && opcaoM === "pedra")) {
            resultado.innerHTML = "Que Pena.. Você perdeu! &#x1F62D"
            pontosMaquina++
            resultadoMaquina.innerHTML = pontosMaquina
        }

}



botaoPedra.addEventListener("click", function () {
    cliquei("pedra")
})

botaoPapel.addEventListener("click", function () {
    cliquei("papel")
})

botaoTesoura.addEventListener("click", function () {
    cliquei("tesoura")
})
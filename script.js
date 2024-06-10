let tema = "claro"

const botaoTema = document.querySelector(".tema button")
botaoTema.addEventListener("click", trocarTema)
import { trocarTema, verificarTema } from "./helpers/tema-helper.js"

const botaoTema = document.querySelector(".tema button")
const body = document.querySelector("body")

function trocarTema() {
    if (localStorage.getItem("tema")) { 
    tema = localStorage.getItem("tema")
    }

    if (tema === "claro") {
        body.classList.add("escuro")
        localStorage.setItem("tema", "escuro")
    } else {
        body.classList.remove("escuro")
        localStorage.setItem("tema", "claro")
    }
}

function verificarTema() {
    if (localStorage.getItem("tema")) {
        tema = localStorage.getItem("tema")
    }

    if (tema === "escuro") {
        body.classList.add("escuro")
    }
}

botaoTema.addEventListener("click", () => {
    trocarTema(body, botaoTema)
})

verificarTema()

verificarTema (body, botaoTema)

verificarTema (body, botaoTema)

const botoesAssunto = document.querySelectorAll(".assuntos button")
botoesAssunto.forEach(botao => {
    botao.addEventListener("click", selecionarAssunto)
})

function selecionarAssunto(evento) {
    const assunto = evento.target.innerText
    localStorage.setItem("assunto", assunto)
    window.location.href = "./pages/quiz/quiz.html"
}
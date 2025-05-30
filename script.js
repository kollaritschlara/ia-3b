const caixaPrincipal = document.querySelector(".caixa-pricipal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")
const perguntas = [
    {
        enunciado: "Pergunta1",
        alternativas: [
            {
                texto: "alternativa1",
                afirmacao: "alternativa1"
            },
            {
                texto: "alternativa2",
                afirmacao: "alternativa2"
            },
        ]
    },
    {
        enunciado: "Pergunta2",
        alternativas: [
            {
                texto: "alternativa1",
                afirmacao: "alternativa1",
            },
            {
                texto: "alternativa2",
                afirmacao: "alternativa2",
            },
        ]
    },
    {
        enunciado: "Pergunta3",
        alternativas: [
            {
                texto: "alternativa1",
                afirmacao: "alternativa1",
            },
            {
                texto: "alternativa2",
                afirmacao: "alternativa2",
            },
        ]
    },
]
let atual = 0;
let perguntaAtual;
function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = createElement("button");
        botaoAlternativa.textContent = alternativa.texto
        
    }
}
mostraPergunta();
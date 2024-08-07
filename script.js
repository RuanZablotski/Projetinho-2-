const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Após o lançamento da nova atualização 'Endgame' do Roblox, você nota que o jogo está afetando o mundo real de maneiras inesperadas. Qual é sua reação inicial?",
        alternativas: [
            {
                texto: "Isso é preocupante!",
                afirmacao: "Você começou a ficar preocupado com o impacto do jogo no mundo real."
            },
            {
                texto: "Isso é incrível!",
                afirmacao: "Você achou fascinante como o jogo está interligado com a realidade."
            }
        ]
    },
    {
        enunciado: "Com o crescente impacto da atualização 'Endgame', uma escola decide criar um projeto para entender o fenômeno. Você é designado para pesquisar sobre como o Roblox está afetando a realidade. O que você faz?",
        alternativas: [
            {
                texto: "Usa ferramentas de busca na internet para encontrar dados e informações sobre o impacto do Roblox no mundo real.",
                afirmacao: "Você conseguiu compilar informações úteis para entender o impacto do Roblox."
            },
            {
                texto: "Baseia sua pesquisa nas conversas com colegas e nas próprias observações sobre o fenômeno.",
                afirmacao: "Você preferiu utilizar suas próprias experiências e observações para abordar o impacto do Roblox."
            }
        ]
    },
    {
        enunciado: "Durante a apresentação do projeto, um debate surge sobre como a popularidade do Roblox está moldando o futuro. Como você se posiciona no debate?",
        alternativas: [
            {
                texto: "Defende que o Roblox está criando novas oportunidades e novas formas de interagir com a realidade.",
                afirmacao: "Você vê o Roblox como uma inovação que está mudando a forma como interagimos com o mundo."
            },
            {
                texto: "Preocupa-se com os riscos de uma dependência excessiva do Roblox e a possível deterioração da realidade.",
                afirmacao: "Você está preocupado com a dependência e os possíveis danos à vida real causados pelo Roblox."
            }
        ]
    },
    {
        enunciado: "Ao final do debate, você é solicitado a criar uma imagem que representa o impacto do Roblox no mundo. Como você procede?",
        alternativas: [
            {
                texto: "Cria uma imagem usando uma ferramenta de design tradicional.",
                afirmacao: "Você optou por criar uma imagem manualmente para expressar seu ponto de vista sobre o impacto do Roblox."
            },
            {
                texto: "Usa um gerador de imagens baseado em IA para criar a imagem.",
                afirmacao: "Você acelerou o processo de criação usando tecnologia para ilustrar o impacto do Roblox."
            }
        ]
    },
    {
        enunciado: "Você tem um projeto em grupo sobre as consequências do Roblox no mundo real. Um membro do grupo usa uma IA para gerar todo o conteúdo, resultando em um trabalho que parece genérico. O que você faz?",
        alternativas: [
            {
                texto: "Aceita o trabalho gerado pela IA como está, pois é um produto da tecnologia avançada.",
                afirmacao: "Você se tornou dependente da IA e está aceitando seus resultados sem questionar."
            },
            {
                texto: "Revisa o trabalho gerado pela IA e adiciona suas próprias análises para garantir que o conteúdo reflita seu entendimento.",
                afirmacao: "Você garante que o trabalho tenha uma perspectiva pessoal e crítica, complementando o conteúdo gerado pela IA."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em um futuro impactado pelo Roblox...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

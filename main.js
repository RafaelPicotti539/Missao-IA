const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
 {
        enunciado: 'Assim que saiu do trabalho você se depara com uma nova tecnologia, um robô/chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?',
        alternativas: [
            {
                texto: 'Isso me assusta!',
                afirmacao: 'No início ficou com medo do que essa tecnologia pode fazer. '
            },
            {
                texto: 'Que incrível!',
                afirmacao: 'Quis saber como usar IA no seu dia a dia.'
            }      
        ]
    },
    {
        enunciado: 'Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma colega da área de tecnologia da empresa que você trabalha decidiu fazer uma sequência de estudos sobre esta tecnologia. No fim de um deles ele pede que você escreva um trabalho sobre o uso de IA noagronegócio. Qual atitude você toma?',
        alternativas: [
            {
                texto: 'Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.',
                afirmacao: 'Utilizou a IA como ferramenta de busca para sintetizar dados e facilitar o entendimento de temas complexos.'
            },
            {
                texto: 'Escreve o trabalho com base nas conversas que teve com outros colaboradores, algumas pesquisas na internet e conhecimentos próprios sobre o tema.',
                afirmacao: 'Optou por conversar com colegas e realizar pesquisas tradicionais para trazer uma visão humanizada ao tema.'
            }
        ]
    },
    {
        enunciado: 'Após a elaboração do trabalho escrito, seu colega realizou um debate entre os funcionários e os CEOs para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?',
        alternativas: [
            {
                texto: 'Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.',
                afirmacao: 'No debate, defendeu que a tecnologia abrirá novas oportunidades de mercado e aprimorará habilidades humanas.'
            },
            {
                texto: 'Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.',
                afirmacao: 'No debate, destacou a necessidade de proteger empregos e criar medidas de transição para os trabalhadores.'
            }
        ]
    },
    {
        enunciado: 'Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?',
        alternativas: [
            {
                texto: 'Criar uma imagem utilizando uma plataforma de design como o Paint.',
                afirmacao: 'Na etapa visual, preferiu colocar a mão na massa usando programas de edição tradicionais como o Paint.'
            },
            {
                texto: 'Criar uma imagem utilizando um gerador de imagem de IA.',
                afirmacao: 'Na etapa visual, aproveitou o potencial dos geradores de imagem por IA para dar vida às suas ideias.'
            }
        ]
    },
    {
        enunciado: 'Você tem uma pesquisa em grupo de fruticultura para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?',
        alternativas: [
            {
                texto: 'Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.',
                afirmacao: 'Considera que saber direcionar os comandos certos para a IA já é uma contribuição válida para o grupo.'
            },
            {
                texto: 'O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.',
                afirmacao: 'Compreendeu os limites da IA e fez questão de revisar o conteúdo, adicionando senso crítico e toques pessoais.'
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = '';

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = '';
    mostraAlternativas();
}


function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener('click', () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + ' ';
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = 'Em 2049...';
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = '';
}

mostraPergunta();
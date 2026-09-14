// Dados das perguntas do Quiz
const perguntasQuiz = [
  {
    pergunta: "1. Um parente mandou mensagem no WhatsApp pedindo um PIX com urgência de um número novo. O que você faz?",
    opcoes: [
      { texto: "Faço o PIX imediatamente para ajudar.", correta: false },
      { texto: "Ligo para o número antigo do parente para confirmar se é ele mesmo.", correta: true },
      { texto: "Passo meus dados bancários para ele tirar o dinheiro.", correta: false }
    ]
  },
  {
    pergunta: "2. Qual destas senhas é a mais segura para proteger sua conta?",
    opcoes: [
      { texto: "123456", correta: false },
      { texto: "Sua data de nascimento", correta: false },
      { texto: "Cafe#2026!Seguro", correta: true }
    ]
  },
  {
    pergunta: "3. O banco ligou dizendo que seu cartão foi clonado e pede sua senha para cancelar. O que fazer?",
    opcoes: [
      { texto: "Desligar o telefone imediatamente. O banco nunca pede senhas.", correta: true },
      { texto: "Falar a senha devagar para o atendente.", correta: false },
      { texto: "Digitar a senha no teclado do telefone.", correta: false }
    ]
  }
];

let acertos = 0;
let perguntasRespondidas = 0;

// Função para renderizar o Quiz na página
function carregarQuiz() {
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = '';

  perguntasQuiz.forEach((q, indexPergunta) => {
    const divPergunta = document.createElement('div');
    divPergunta.classList.add('quiz-pergunta');

    const tituloPergunta = document.createElement('p');
    tituloPergunta.innerText = q.pergunta;
    divPergunta.appendChild(tituloPergunta);

    q.opcoes.forEach((opcao) => {
      const botao = document.createElement('button');
      botao.classList.add('quiz-opcao');
      botao.innerText = opcao.texto;

      // Evento de clique na resposta
      botao.onclick = () => verificarResposta(botao, opcao.correta, indexPergunta, divPergunta);

      divPergunta.appendChild(botao);
    });

    quizContainer.appendChild(divPergunta);
  });
}

// Função para tratar a seleção de uma resposta
function verificarResposta(botaoSelecionado, ehCorreta, indexPergunta, divPergunta) {
  // Desabilita todos os botões da mesma pergunta para evitar múltiplos cliques
  const botoes = divPergunta.querySelectorAll('.quiz-opcao');
  botoes.forEach(b => b.disabled = true);

  if (ehCorreta) {
    botaoSelecionado.classList.add('correta');
    acertos++;
  } else {
    botaoSelecionado.classList.add('errada');
    
    // Destaca a opção correta para aprendizado
    const opcaoCorretaObj = perguntasQuiz[indexPergunta].opcoes.find(o => o.correta);
    botoes.forEach(b => {
      if (b.innerText === opcaoCorretaObj.texto) {
        b.classList.add('correta');
      }
    });
  }

  perguntasRespondidas++;

  // Se respondeu todas as perguntas, mostra o resultado final
  if (perguntasRespondidas === perguntasQuiz.length) {
    exibirResultado();
  }
}

// Exibe a mensagem final do Quiz
function exibirResultado() {
  const divResultado = document.getElementById('resultado');
  divResultado.classList.remove('escondido');

  if (acertos === perguntasQuiz.length) {
    divResultado.innerHTML = `🏆 Parabéns! Você acertou ${acertos} de ${perguntasQuiz.length}! Você está muito bem preparado para navegar com segurança.`;
  } else {
    divResultado.innerHTML = `👍 Você acertou ${acertos} de ${perguntasQuiz.length}. Releia as dicas da página para tirar todas as suas dúvidas!`;
  }
}

// Inicializa o quiz quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', carregarQuiz);


const questions = [
    {
      question: "Qual é a capital do Brasil?",
      choices: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
      answer: "Brasília",
    },
    {
      question: "Qual é a capital da Argentina?",
      choices: ["Buenos Aires", "Brasília", "Lisboa", "Paris"],
      answer: "Buenos Aires",
    },
    {
      question: "Qual é a capital da França?",
      choices: ["Roma", "Madri", "Paris", "Londres"],
      answer: "Paris",
    },
    {
      question: "Qual é a capital da Espanha?",
      choices: ["Lisboa", "Madri", "Barcelona", "Valência"],
      answer: "Madri",
    },
    {
      question: "Qual é a capital da Itália?",
      choices: ["Veneza", "Milão", "Roma", "Nápoles"],
      answer: "Roma",
    },
    {
      question: "Qual é a capital do Canadá?",
      choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      answer: "Ottawa",
    },
    {
      question: "Qual é a capital dos Estados Unidos?",
      choices: ["Nova York", "Los Angeles", "Chicago", "Washington D.C."],
      answer: "Washington D.C.",
    },
    {
      question: "Qual é a capital do Reino Unido?",
      choices: ["Liverpool", "Manchester", "Edimburgo", "Londres"],
      answer: "Londres",
    },
    {
        question: "Qual a capital da Russia?",
        choices: ["Liverpool", "Londres", "Brasilia", "Moscou"],
        answer: "Moscou",
      },
      {
        question: "Qual cor da vermelho e azul?",
        choices: ["verde", "roxo", "preto", "bege"],
        answer: "roxo",
      },
      {
        question: "Qual cor da vermelho e amarelo?",
        choices: ["lilas", "rosa", "laranja", "azul"],
        answer: "laranja",
      },
      {
        question: "Qual é o personagem principal do filme batman?",
        choices: ["Pantera-negra", "Bruce Wayne", "Superman", "Lagartixa"],
        answer: "Bruce Wayne",
      },
      {
        question: "Qual é o personagem da DC?",
        choices: ["Mascara", "Flash", "Deadpool", "Homen de Ferro"],
        answer: "Flash",
      },
      {
        question: "Qual é a fórmula da água?",
        choices: ["O²", "H²O", "N²p³", "Cl²"],
        answer: "H²O",
      },
      {
        question: "Qual é a nossa estrela?",
        choices: ["Sol", "Nebulosa", "SH290", "Jupiter"],
        answer: "Sol",
      },
      {
        question: "Qual é a sigla de Rondonia?",
        choices: ["RO", "RN", "RR", "RD"],
        answer: "RO",
      },
      {
        question: "Quantos átomo de oxigênio existem m uma molécula de ácido sulfúrico(H2SO4)?",
        choices: ["1 átomos de oxigênio", "2 átomos de oxigênio", "3 átomos de oxigênio", "4 átomos de oxigênio"],
        answer: "2 átomos de oxigênio",
      },
      {
        question: "Qual é o nome da estrela mais próxima do Sistema Solar (além do sol), e qual sua distância em anos luz aproximadamente?",
        choices: ["Proxima Centauri, a 1,34 anos-luz", "Alpha Centauri,a 4,22 anos-luz", "Betelgeuse, a 642,2 anos-luz", "Vega,a 25,3 anos-luz"],
        answer: "Proxima Centauri, a 1,34 anos-luz",
      },
    
  ];
  
  const questionElement = document.getElementById("question");
  const choiceElements = Array.from(document.getElementsByClassName("choice"));
  const nextButton = document.getElementById("next");
  const scoreElement = document.getElementById("score");
  const wrongElement = document.getElementById("wrong");
  
  let currentQuestion = 0;
  let score = 0;
  let wrong = 0;
  let answerChosen = false;
  
  function loadQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionElement.innerText = currentQuestionData.question;
  
    const choices = shuffleArray(currentQuestionData.choices);
    for (let i = 0; i < choiceElements.length; i++) {
      choiceElements[i].innerText = choices[i];
    }
    answerChosen = false; // reset flag when loading new question
  }
  
  function checkAnswer(e) {
    if (answerChosen) return; // prevent multiple answers
    answerChosen = true;
  
    if (e.target.innerText === questions[currentQuestion].answer) {
      score++;
      scoreElement.innerText = "Pontuação: " + score;
      alert("Correto!");
    } else {
      wrong++;
      wrongElement.innerText = "Erros: " + wrong;
      alert(
        "Errado! A resposta correta é " + questions[currentQuestion].answer + "."
      );
    }
  }
  
  choiceElements.forEach((element) => {
    element.addEventListener("click", checkAnswer);
  });
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    wrong = 0;
    scoreElement.innerText = "Pontuação: 0";
    wrongElement.innerText = "Erros: 0";
    loadQuestion();
  }
  
  nextButton.addEventListener("click", () => {
    if (!answerChosen) {
      alert("Por favor, escolha uma resposta antes de prosseguir.");
      return;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      alert(
        "Fim do Quiz! Você acertou " +
          score +
          " de " +
          questions.length +
          " perguntas."
      );
      restartQuiz();
    }
  });
  
  function shuffleArray(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  loadQuestion();
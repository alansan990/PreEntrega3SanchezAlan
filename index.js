// juego.js
let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');

let preguntas;

// Cargar preguntas desde el archivo JSON
fetch('preguntas.json')
  .then(response => response.json())
  .then(data => {
    preguntas = data;
    loadQuestion();
  })
  .catch(error => console.error('Error al cargar las preguntas:', error));

// Función para cargar la pregunta actual
function loadQuestion() {
  const currentQuestion = preguntas[currentQuestionIndex];
  questionElement.textContent = currentQuestion.pregunta;

  optionsElement.innerHTML = '';
  currentQuestion.respuestas.forEach(opcion => {
    const button = document.createElement('button');
    button.textContent = opcion;
    button.addEventListener('click', () => selectAnswer(opcion));
    optionsElement.appendChild(button);
  });
}

// Función para manejar la selección de respuesta
function selectAnswer(selectedAnswer) {
  const currentQuestion = preguntas[currentQuestionIndex];
  if (selectedAnswer === currentQuestion.respuestaCorrecta) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < preguntas.length) {
    loadQuestion();
  } else {
    endGame();
  }
}

// Función para finalizar el juego
function endGame() {
  questionContainer.innerHTML = `<h2>Fin del juego</h2>
                                  <p>Puntuación: ${score} / ${preguntas.length}</p>`;
}

// Iniciar el juego cargando la primera pregunta
loadQuestion();


// Función para manejar la selección de respuesta
function selectAnswer(selectedAnswer) {
  const currentQuestion = preguntas[currentQuestionIndex];
  if (selectedAnswer === currentQuestion.respuestaCorrecta) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < preguntas.length) {
    loadQuestion();
  } else {
    endGame();
  }
}

// Función para finalizar el juego
function endGame() {
  questionContainer.innerHTML = `<h2>Fin del juego</h2>
                                  <p>Puntuación: ${score} / ${preguntas.length}</p>`;
}

// Iniciar el juego cargando la primera pregunta
loadQuestion();

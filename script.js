const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-quiz');

const quizQuestions = [
    {
        question: "What are you running from in Temple Run?",
        answers: {
            a: "Zombies",
            b: "Evil monkeys",
            c: "Angry birds"
        },
        correctAnswer: "b"
    },
    {
        question: "What do you collect while running?",
        answers: {
            a: "Diamonds",
            b: "Stars",
            c: "Coins"
        },
        correctAnswer: "c"
    },
    {
        question: "What happens if you hit an obstacle?",
        answers: {
            a: "Game over",
            b: "Lose coins",
            c: "Slow down"
        },
        correctAnswer: "a"
    }
];

function buildQuiz() {
    const output = [];

    quizQuestions.forEach((q, index) => {
        const answers = [];
        for (let letter in q.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${index}" value="${letter}">
                    ${q.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question">
                <p>${q.question}</p>
                ${answers.join('')}
            </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.question');
    let score = 0;

    quizQuestions.forEach((q, index) => {
        const answerContainer = answerContainers[index];
        const selector = `input[name=question${index}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === q.correctAnswer) {
            score++;
            answerContainers[index].style.color = 'green';
        } else {
            answerContainers[index].style.color = 'red';
        }
    });

    quizContainer.innerHTML += `<p>You got ${score} out of ${quizQuestions.length} right!</p>`;
}

buildQuiz();
submitButton.addEventListener('click', showResults);
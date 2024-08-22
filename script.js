const questions = [
{
    question: "The first letter of the first word in a sentence should be"
    answers: [
        { text: "a lowercase letter", correct: false},
        { text: "an uppercase letter", correct: true},
        { text: "a large letter", correct: false},
        { text: "a small letter", correct: false},
    ]
},
{
    question: "This apple tastes __ the red one."
    answers; [
        { text: "more sweet", correct: false}
        { text: "more sweet than", correct: false}
        { text: "sweeter", correct: false}
        { text: "sweeter than", correct: true}
    ]
},


]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.array.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        
    });

    
}

startQuiz();
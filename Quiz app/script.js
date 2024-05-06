const questions =[
    {
        question: "Which is largest animal in the world!",
        answer:[
            {text:"Shark",correct: false},
            {text:"Blue whale",correct: true},
            {text:"Elephant",correct: false},
            {text:"Giraffe",correct: false},
        ]
    },
    {
        question: "What is the tallest waterfall in the world?",
        answer:[
            {text:"Angel Falls, Venezuela",correct: true},
            {text:"Niagara Falls, New York",correct: false},
            {text:"Wailua Falls, Hawaii",correct: false},
            {text:"Sutherland Falls, New Zealand",correct: false},
        ]
    },{
        question: "Which of these animals has the ability to laugh?",
        answer:[
            {text:"Horse",correct: false},
            {text:"Whale",correct: false},
            {text:"Elephant",correct: false},
            {text:"Rat",correct: true},
        ]
    },{
        question: "Who painted the Mona Lisa?",
        answer:[
            {text:"Galileo Galilei",correct: false},
            {text:"Sandro Botticelli",correct: false},
            {text:"Caravaggio",correct: false},
            {text:"Leonardo Da Vinci",correct: true},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo+". "+currentQuestion.question;

    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild)
    {
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct ==="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();

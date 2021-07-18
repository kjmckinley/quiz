
// GEEK-BIZ QUIZ

// This .js file is meant to handle and generate the questions in the form of array objects
// const variables that recieve all the id information from the question.
const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const questionContainerEl = document.getElementById ('question-container')

const questionEl = document.getElementById ('question')
const answerBtnEl = document.getElementById('select-buttons')

var score = 0;

var timeLeft = 45;

// display timer to the user
timer.textContent = "Time Left:" + timeLeft;

//let variables initially set to undefined to be used to jumble the questions
//so that they don't appear in the same order every time.
let randomQuestion, currentIndex 

// event listener that calls the startGame function when clicked.
startBtn.addEventListener('click', startGame)

//event listener that calls the nextQuestion function to allow nex 
//button to function and go to the the currentIndex of the array of questions
nextBtn.addEventListener('click', () => {
    currentIndex++
    nextQuestion()
})


// fubcrtion that runs the timer
function runTimer() {

    var timer = document.querySelector("#timer")
    timeLeft--;

    if (timeLeft > 0) {
        setTimeout(runTimer, 1000)
    } else if (timeLeft <= 0) {
        timeLeft = 0;
        // saveScore();
    }

    timer.textContent = "Time Left: " + timeLeft;
}


// function that reveals a question and options after start has been pressed.
function startGame() {

    startBtn.classList.add('hide')

    runTimer();

    randomQuestion = questions.sort(() => Math.random() - .5)
    currentIndex = 0

    questionContainerEl.classList.remove('hide')
    // function allocates info for the next question
    nextQuestion()
}

// goes to the next question in the array
function nextQuestion() {
    //function call to set everything back to default state
    refreshQuestion()
    revealQuestion(randomQuestion[currentIndex])
}

// displays question to the user
function revealQuestion(question) {
    //populates question
    questionEl.innerText = question.question

    //populates corresponding possible answers through a loop.
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.content
        button.classList.add('btn')

        //operation to verify if the answer is right or wrong
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }

        //calls makeSelection to append new answers when clicked.
        button.addEventListener('click', makeSelection)
        answerBtnEl.appendChild(button)
    })
}

function refreshQuestion(){
    statusWipe(document.body)
    //hide next button again
    nextBtn.classList.add('hide')
    //while loop to replace child elements
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild)
    }
}

function makeSelection(e) {
    const btnSelection = e.target
    const correct = btnSelection.dataset.correct

    //???
    setStatus(document.body, correct)
    Array.from(answerBtnEl.children).forEach (button => {
        setStatus(button, button.dataset.correct)
    })

    //make sure the program stops when we run out of questions
    if (randomQuestion.length > currentIndex + 1) {
        nextBtn.classList.remove('hide')
    } else {
        startBtn.innerText = 'Restart'
        startBtn.classList.remove('hide')
    }
    //reveal next button as soon as question is answered
    nextBtn.classList.remove('hide')
}


// adds the elements 'correct' or 'incorrect' to change the screen color
function setStatus(element, correct) {

    statusWipe(element)

    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('incorrect')
    }
}

// remove colors when user moves on to the next question
function statusWipe(element) {
    element.classList.remove('correct')
    element.classList.remove('incorrect')
}

// score keeper
function keepScore () {
    score++;
    console.log(score);
}

//array of actual questions
const questions = [

    {
        question: "What is Prince Charming's real name in Snow White?",
        //array of answers within question
        answers: [
            {content: 'He has no name', correct: false},
            {content: 'Phillip', correct: false},
            {content: 'Charles', correct: false},
            {content: 'Ferdinand', correct: true}
        ]
    },

    {
        question: 'How many older sisters does Ariel have in The Little Mermaid?',
        //array of answers within question
        answers: [
            {content: '8', correct: false},
            {content: '6', correct: true},
            {content: '3', correct: false},
            {content: '4', correct: false}
        ]
    },

    {
        question: 'What did Mulan changer her name to when she joined the Imperial Army?',
        //array of answers within question
        answers: [
            {content: 'Qin', correct: false},
            {content: 'Lee', correct: false},
            {content: 'Ping', correct: true},
            {content: 'Cho', correct: false}
        ]
    },

    {
        question: 'It is rumored that Elsa and Anna have a long-lost sibling, who is it?',
        //array of answers within question
        answers: [
            {content: 'Hercules', correct: false},
            {content: 'Jack Frost', correct: false},
            {content: 'Moana', correct: false},
            {content: 'Tarzan', correct: true}
        ]
    },

    {
        question: 'How many tentacles does Ursula the Sea Witch have?',
        //array of answers within question
        answers: [
            {content: '6', correct: true},
            {content: '8', correct: false},
            {content: '10', correct: false},
            {content: '4', correct: false}
        ]
    },
]

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
    timer.textContent = "Time Left:" + timeLeft;
    //console.log(timeLeft);
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

function nextQuestion() {
    //function call to set everything back to default state
    refreshQuestion()
    revealQuestion(randomQuestion[currentIndex])
}

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

    //
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

    if (correct) {
        // keepScore();
        
        element.classList.add('correct')
    }else {
        element.classList.add('incorrect')
    }

    statusWipe(element)
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

//while almost all of my variables and names are mine, credit for helping me figure out 
//how to make this application semi functional goes to 'Web Dev Simplified'.



// Array of objects containing questions
// var questionAray = [

//     // Question Index: 0
//     {
//         // Instructions displayed above the question for better context on how to answer
//         header: "Everything is TRUE in The Following Statement EXCEPT:",
//         // Question that is displayed to the user
//         question: "In Return of the Jedi, the rebels attack and destroy the revised Death Star’s shield generator on the planet Endor with the help of furry creatures called Ewoks.",
//        // Array of options for the user to select from 
//         options: ["The film was actually called 'The Empire Strikes Back'", 
//                   "The rebels are actually trying to destroy the original Death Star", 
//                   "The rebels were actually trying to destroy the thermal exhaust port of the Death Star",
//                   "Endor is actually not a planet"
//                  ],
//         // Answer that matches the correct answer in the above array         
//         answer: "Endor is actually not a planet",
//         // Explainations of why the user is right or wrong
//         explainRight: "That's Correct! The Rebels and the Ewoks Join Forces to Take Down the Empire on the 'Forest MOON of Endor.'",
//         explainWrong: ""
//     },

//     // Question Index: 1
//     {
//         header: "TRUE or FALSE:",
//         question: "In the game 'Pokemon Red Version', it is essential for the player to aquire certain items, such as the pokeflute or running shoes, in order to continue in the campaign.\n",
//         options: ["True", "False"],
//         answer: "False",
//         explainRight: "That's Right! Running Shoes Were Not Made Availible to Players Until the Release of 'Pokemon Fired Red Version' for the GameBoy Advanced",
//         explainWrong: "Nope!"
//     },

//     // Question Index: 2
//     {
//         header: "Select the CORRECT Answer:",
//         question: "In the TV series 'Star Trek,' What is the Prime Directive?",
//         options: ["The most relaxed rule in Starfleet", 
//                   "A rule that prevents crew members from speaking with certain species such as the Klingons",
//                   "A guiding principal to not interfere in the affairs of an underdeveloped civilization",
//                   "A charter of sorts that guides the crew to their next destination for the sake of exploration"
//                 ],
//         answer: "A guiding principal to not interfere in the affairs of an underdeveloped species",
//         explainRight: "Right You Are! Starfleet believes that developing civilizations should do so natually and without interference.",
//         explainWrong: ""
//     },
  
//     // Question Index: 3
//     {
//         header: "Which of the Following Options is MOST Correct?:",
//         question: "Where did the film 'Jurassic Park' fictionally take place?",
//         options: ["Isla Nublar",
//                   "Isla Sorna", 
//                   "Isla Nublar & Isla Sorna", 
//                   "An island off the US coast"
//                 ],
//         answer: "Isla Nublar",
//         explainRight: "Good for you! While the Jurassic Park franchise does explore Isla Sorna in 'The Lost World,' the original film takes place in Isla Nublar.",
//         explainWrong: ""
//     }
// ];



// // TESTS for the console in the dev tools
// // OPEN THE CONSOLE TO SEE THE RESULTS!
// for (var i = 0; i < questionAray.length; i++) {
//     console.log("QUESTION " + (i+1) + ":\n-----------\n");
//     console.log(questionAray[i].header + "\n--------------------------------------\n" + questionAray[0].question + "\n--------------------------------------------------");

//     for(var ii = 0; ii < questionAray[i].options.length; ii++) {
//         console.log((ii+1) + ". " + questionAray[i].options[ii] + "\n--------------------------------------");
//     }

//     console.log("ANSWER: " + questionAray[i].answer + "\n ");
// }

// // Variables that will track the progress and iteration of the time, score and index of the questions, respectively
// var remainingTime = 0;
// var totalScore = 0;
// var questionObjIndex = 0;


// // Declaring variables that will use the query selector to get ids from index.html
// // Variable name will be the same as the id.
// var timer = document.querySelector("#timer");
// var startClock = document.querySelector("#startClock");
// var quizQuestion = document.querySelector("#quizQuestion");
// var mainQuizBox = document.querySelector("#mainQuizBox");

// // Variables that will hold values for the time and deductions for wrong answers
// var timeLeft = 10;
// var deduction = 0;
// var getNum = 0;
// var newElement = document.createElement("ul");

// // Event listener to trigger startClock when the start button is clicked
// startClock.addEventListener("click", function () {
//     if (getNum === 0) {
//         getNum = setInterval(function(){
//             remainingTime.textContent = "Time Left: " + timeLeft;
//             timeLeft--;
//             console.log("Time Left: " +  timeLeft);

//             if (timeLeft <= 0) {
//                 clearInterval(getNum);
//                 remainingTime.textContent = "Time is Up!!";
//             }
//         }, 1000);
//     }
//     // displayQuestion(questionObjIndex);
// });



// var displayQuestion = function(questionObjIndex) {
//     quizQuestion.innerHTML = "";
//     newElement.innerHTML = "";

//     for (var i = 0; i < quizQuestion.length; i++) {
//         var currentHeader = quizQuestion[questionObjIndex].header;
//         var currentQuestion = quizQuestion[questionObjIndex].question;
//         var currentOptions = quizQuestion[questionObjIndex].options;

//         mainQuizBox.textContent = currentHeader;
//         mainQuizBox.textContent = currentQuestion;
//     }

    // currentOptions.forEach(function (newQuestion) {
    //     var questionOption = document.createElement("li");
    //     questionOption.textContent = newQuestion;
    //     quizQuestion.appendChild(newElement);
    //     newElement.appendChild(questionOption);
    //     // questionOption.addEventListener("click", (compare));
    // })
// }


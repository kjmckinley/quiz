
// GEEK-BIZ QUIZ

// This .js file is meant to handle and generate the questions in the form of array objects

// Array of objects containing questions
var questionAray = [

    // Question Index: 0
    {
        // Instructions displayed above the question for better context on how to answer
        header: "Everything is TRUE in The Following Statement EXCEPT:",
        // Question that is displayed to the user
        question: "In Return of the Jedi, the rebels attack and destroy the revised Death Star’s shield generator on the planet Endor with the help of furry creatures called Ewoks.",
       // Array of options for the user to select from 
        options: ["The film was actually called 'The Empire Strikes Back'", 
                  "The rebels are actually trying to destroy the original Death Star", 
                  "The rebels were actually trying to destroy the thermal exhaust port of the Death Star",
                  "Endor is actually not a planet"
                 ],
        // Answer that matches the correct answer in the above array         
        answer: "Endor is actually not a planet",
        // Explainations of why the user is right or wrong
        explainRight: "That's Correct! The Rebels and the Ewoks Join Forces to Take Down the Empire on the 'Forest MOON of Endor.'",
        explainWrong: ""
    },

    // Question Index: 1
    {
        header: "TRUE or FALSE:",
        question: "In the game 'Pokemon Red Version', it is essensial for the player to aquire certain items, such as the pokeflute or running shoes, in order to continue in the campaign.\n",
        options: ["True", "False"],
        answer: "False",
        explainRight: "That's Right! Running Shoes Were Not Made Availible to Players Until the Release of 'Pokemon Fired Red Version' for the GameBoy Advanced",
        explainWrong: "Nope!"
    },

    // Question Index: 2
    {
        header: "Select the CORRECT Answer:",
        question: "In the TV series 'Star Trek,' What is the Prime Directive?",
        options: ["The most relaxed rule in Starfleet", 
                  "A rule that prevents crew members from speaking with certain species such as the Klingons",
                  "A guiding principal to not interfere in the affairs of an underdeveloped civilization",
                  "A charter of sorts that guides the crew to their next destination for the sake of exploration"
                ],
        answer: "A guiding principal to not interfere in the affairs of an underdeveloped species",
        explainRight: "Right You Are! Starfleet believes that developing civilizations should do so natually and without interference.",
        explainWrong: ""
    },
  
    // Question Index: 3
    {
        header: "Which of the Following Options is MOST Correct?:",
        question: "Where did the film 'Jurassic Park' fictionally take place?",
        options: ["Isla Nublar",
                  "Isla Sorna", 
                  "Isla Nublar & Isla Sorna", 
                  "An island off the US coast"
                ],
        answer: "Isla Nublar",
        explainRight: "Good for you! While the Jurassic Park franchise does explore Isla Sorna in 'The Lost World,' the original film takes place in Isla Nublar.",
        explainWrong: ""
    }
];



// TESTS for the console in the dev tools
// OPEN THE CONSOLE TO SEE THE RESULTS!
for (var i = 0; i < questionAray.length; i++) {
    console.log("QUESTION " + (i+1) + ":\n-----------\n");
    console.log(questionAray[i].header + "\n--------------------------------------\n" + questionAray[0].question + "\n--------------------------------------------------");

    for(var ii = 0; ii < questionAray[i].options.length; ii++) {
        console.log((ii+1) + ". " + questionAray[i].options[ii] + "\n--------------------------------------");
    }

    console.log("ANSWER: " + questionAray[i].answer + "\n ");
}

// Variables that will track the progress and iteration of the time, score and index of the questions, respectively
var remainingTime = 0;
var totalScore = 0;
var questionObjIndex = 0;

// Declaring variables that will use the query selector to get ids from index.html
// Variable name will be the same as the id.
var timer = document.querySelector("#timer");
var startClock = document.querySelector("#startClock");
var quizQuestion = document.querySelector("#quizQuestion");
var mainQuizBox = document.querySelector("#mainQuizBox");

// Variables that will hold values for the time and deductions for wrong answers
var timeLeft = 120;
var deduction = 0;

// Event listener to trigger startClock when the start button is clicked
startClock.addEventListener("click", function () {

});
// GEEK-BIZ QUIZ

// This .js file is meant to handle and generate the questions in the form of array objects

// Array of objects containing questions
var questionAray = [
    {
        // Instructions displayed above the question for better context on how to answer
        header: "Everything is TRUE in The Following Statement EXCEPT:",
        // Question that is displayed to the user
        question: "In Return of the Jedi, the rebels attack and destroy the revised Death Star’s shield generator on the planet Endor with the help of furry creatures called Ewoks.",
       // Array of options for the user to select from 
        options: ["The film was actually called 'The Empire Strikes Back'", 
                  "The rebels are actually trying to destroy the original Death Star", 
                  "The rebels were actually trying to destroy the thermal exhaust port",
                  "Endor is actually not a planet"
                 ],
        // Answer that matches the correct answer in the above array         
        answer: "Endor is actually not a planet"
    },

    {
        header: "TRUE or FALSE:",
        question: "",
        options: [],
        answer: ""
    },

    {
        header: "Which Word in the Following Statement is MISSPELLED?:",
        question: "",
        options: [],
        answer: ""
    },

    {
        header: "Everything is FALSE in the Following Statement EXCEPT:",
        question: "",
        options: [],
        answer: ""
    },
  
    {
        header: "Select the CORRECT Answer:",
        question: "",
        options: [],
        answer: ""
    }
];



// TESTS for the console in the dev tools
//OPEN THE CONSOLE TO SEE THE RESULTS!
console.log("QUESTION:\n---------\n" + questionAray[0].header + "\n-----------------------------------------------------\n" + questionAray[0].question + "\n-----------------------------------------------------");

for(var i = 0; i < questionAray[0].options.length; i++) {
    console.log((i+1) + ". " + questionAray[0].options[i] + "\n--------------------------------------");
}

console.log("ANSWER: " + questionAray[0].answer);
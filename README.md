# Geek-Biz Quiz
This application is meant to serve as an example of a timed quiz using JavaScript.

## Links
HTML: https://github.com/kjmckinley/quiz.git
SSH: git@github.com:kjmckinley/quiz.git
Deployed Link: https://kjmckinley.github.io/quiz/

WHEN the user presses the start button
THEN the timer will start and the question will be displayed
IF the user selects the correct answer
THEN the screen will display a breif reason why they where correct.
IF the user clicks on "next question"
THEN the screen will display the next question.
WHEN the user has completed all question
THEN the user will be presented with an end screen showing their score.


# Notes
plan of action:

1. study the example gif and create an html framework that is more or less the same.
2. style the html framework with style.css to structer and stack everything correctly.
3. add questions, functions and a timer in js file to make quiz functional. using multiple ids, classes and 'on click' events.

**Play with the idea of being more organized by adding additional html and js files in order to separate the quiz and the high score features.

**Develope with multiple branches for the same reason.

**try and create multiple questions that are randomized each time. 


## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

The following animation demonstrates the application functionality:

![code quiz](./Assets/04-web-apis-homework-demo.gif)

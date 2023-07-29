
// start quiz

let StartQuizbButton = document.getElementById("start-quiz")
let startquizContaiiner = document.querySelector(".start-container")
let submit = document.querySelector(".submit")
let quizContainer = document.querySelector(".quiz-container")



StartQuizbButton.addEventListener("click",()=>{
  startquizContaiiner.style.display= "none"
  quizContainer.style.display = "block"
  clock()
  questionsFunction()
  submit.addEventListener("click", resutls)
}) 




// clock

let timer = document.getElementById("clock")
let minutes = 30;
let seconds = 0;

function clock(){
    timer.innerHTML= `${minutes} : ${seconds}`
    setInterval(() => {
        if(seconds == 0){
            minutes--
            seconds = 60
            if(minutes == 0){
                seconds = 0
                minutes = 0
                clearInterval()
                resutls()
            }
        }
        seconds--
        timer.innerHTML= `${minutes} : ${seconds}`

    }, 1000);
}



//create the quiz
let questionsContainer = document.querySelector(".questions-container")
 const questionsObj = {
      question1: {
        question: "What is the output of the following code?",
        code: "console.log(5 + 10);",
        answers: {
          a: "5",
          b: "10",
          c: "15",
          d: "20"
        },
        correctAnswer: "c"
      },
      question2: {
        question: "What is the difference between '==' and '===' in JavaScript?",
        answers: {
          a: "'==' compares two values for equality, but '===' compares for both equality and type equality.",
          b: "'===' compares two values for equality, but '==' compares for both equality and type equality.",
          c: "'==' compares two values for type equality, but '===' compares for both equality and type equality.",
          d: "'===' compares two values for type equality, but '==' compares for both equality and type equality."
        },
        correctAnswer: "a"
      },
      question3: {
        question: "What is a closure in JavaScript?",
        answers: {
          a: "A function that has access to its parent scope, even after the parent function has closed.",
          b: "A variable that has been declared but not yet assigned a value.",
          c: "A function that takes no arguments.",
          d: "A function that returns another function."
        },
        correctAnswer: "a"
      },
      question4: {
        question: "What is the difference between 'let' and 'var' in JavaScript?",
        answers: {
          a: "Both 'let' and 'var' are used to declare variables, but 'let' is block-scoped while 'var' is function-scoped.",
          b: "Both 'let' and 'var' are used to declare variables, but 'var' is block-scoped while 'let' is function-scoped.",
          c: "'let' is used to declare global variables, while 'var' is used to declare local variables.",
          d: "'var' is used to declare global variables, while 'let' is used to declare local variables."
        },
        correctAnswer: "a"
      },
      question5: {
        question: "Explain the concept of 'hoisting' in JavaScript.",
        answers: {
          a: "'Hoisting' is a behavior in JavaScript where variable and function declarations are moved to the top of their respective scopes.",
          b: "'Hoisting' is a behavior in JavaScript where variable and function declarations are moved to the bottom of their respective scopes.",
          c: "'Hoisting' is a behavior in JavaScript where variable and function declarations are executed before any other code in their respective scopes.",
          d: "'Hoisting' is a behavior in JavaScript where variable and function declarations are executed after any other code in their respective scopes."
        },
        correctAnswer: "a"
      },
      question6: {
        question: "What is the difference between 'null' and 'undefined' in JavaScript?",
        answers: {
          a: "'null' represents an intentional absence of any object value, while 'undefined' represents an uninitialized or missing value.",
          b: "'undefined' represents an intentional absence of any object value, while 'null' represents an uninitialized or missing value.",
          c: "'null' and 'undefined' are interchangeable and can be used to represent an uninitialized or missing value.",
          d: "'null' and 'undefined' are both reserved keywords in JavaScript that cannot be used as variable names."
        },
        correctAnswer: "a"
      },
      question7: {
        question: "What is the purpose of the 'use strict' directive in JavaScript?",
        answers: {
          a: "'use strict' enables strict mode, which enforces stricter parsing and error handling rules in JavaScript.",
          b: "'use strict' disables strict mode, which allows for looser parsing and error handling rules in JavaScript.",
          c: "'use strict' is a statement that is used to include external scripts in a JavaScript file.",
          d: "'use strict' is a reserved keyword in JavaScript that cannot be used as a variable name."
        },
        correctAnswer: "a"
      },
      question8: {
        question: "What is the difference between 'map' and 'forEach' in JavaScript?",
        answers: {
          a: "'map' returns a new array with the results of calling a provided function on every element in the array, while 'forEach' executes a provided function once for each array element.",
          b: "'forEach' returns a new array with the results of calling a provided function on every element in the array,while 'map' executes a provided function once for each array element.",
        c: "'map' and 'forEach' are interchangeable and can be used to achieve the same outcome on an array.",
        d: "'map' and 'forEach' are not methods built into JavaScript and must be defined manually."
      },
      correctAnswer: "a"
    },
    question9: {
      question: "What is the purpose of the 'this' keyword in JavaScript?",
      answers: {
        a: "'this' refers to the current function being executed.",
        b: "'this' refers to the global object in which the function is defined.",
        c: "'this' refers to the object on which the current function is being called.",
        d: "'this' is a reserved keyword in JavaScript that cannot be used as a variable name."
      },
      correctAnswer: "c"
    },
    question10: {
      question: "What is the difference between a synchronous and asynchronous function in JavaScript?",
      answers: {
        a: "A synchronous function blocks the execution of other code until it has finished, while an asynchronous function allows other code to continue running while it executes.",
        b: "A synchronous function executes immediately when it is called, while an asynchronous function is delayed until all other code has finished executing.",
        c: "A synchronous function returns a value, while an asynchronous function does not.",
        d: "A synchronous function is used for CPU-intensive tasks, while an asynchronous function is used for I/O operations."
      },
      correctAnswer: "a"
    }
    
}  

// solved counter
let questionArray = Object.values(questionsObj);
function questionsFunction(){
    let answersCount = ["a","b","c","d"]

    for (let i = 0; i < questionArray.length; i++) {
        let form = document.createElement("form")
    
        let h2 =document.createElement("h2")
        h2.innerHTML = `${i + 1} - ${questionArray[i].question}    ${questionArray[i].code == undefined ?  "": questionArray[i].code}`

        let div = document.createElement("div")
        div.className = "flex"
        
        for(let j = 0; j < 4 ; j++){
            let label = document.createElement("label")
            label.setAttribute("for", j+i)
            let span = document.createElement("span")
            span.innerHTML = answersCount[j]
            let input = document.createElement("input")
            input.setAttribute("type","radio")
            input.setAttribute("name","answer")
            input.id = j+i

            let answer = document.createElement("p")
            answer.innerHTML = Object.values(questionArray[i].answers)[j]
            label.append(span)
            label.append(input)
            label.append(answer)
            div.append(label)    
        }
    
        form.append(h2)
        form.append(div)
        questionsContainer.append(form)
    }
}




// submit the form and get the result function

let grades = document.createElement("h1")
let restart = document.createElement("button")
restart.className = "start-quiz restart";
restart.innerHTML = "Restart"
grades.className = "grades";
let gradesCounter = 0 


function resutls(){ 

  let grades = document.createElement("h1")
  let restart = document.createElement("button")
  restart.className = "start-quiz restart";
  restart.innerHTML = "Restart"
  grades.className = "grades";
  let gradesCounter = 0 

for (let i = 0; i < questionArray.length; i++) {
let getForm = document.querySelectorAll(".flex")[i].children
  for(let j = 0; j < getForm.length; j++) {
    if(getForm[j].firstChild.nextSibling.checked == true && getForm[j].firstChild.innerHTML == questionArray[i].correctAnswer){
      gradesCounter++
    }
  }
}
if(gradesCounter < 5){
  grades.innerHTML = `10 / ${gradesCounter}    FAILED    `
}else if (7 > gradesCounter > 5){
  grades.innerHTML = `10 / ${gradesCounter}   PASSED  `
} else if( 9 > gradesCounter >= 7){
  grades.innerHTML = `10 / ${gradesCounter}     Very good    `
}
else if( 10 == gradesCounter){
  grades.innerHTML = `10 / ${gradesCounter}     Excellent   `
}

quizContainer.style.display = "none"
document.body.append(grades)
grades.append(restart)

restart.addEventListener("click",()=>{
  location.reload()
})
}





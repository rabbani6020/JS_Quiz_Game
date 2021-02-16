// Question Paste here
let questionWrap = document.querySelector(".question-wrap");

let questionCount = 0;

// All Question Here
const allQuestions = [
   {
      question: `Inside which HTML element do we put the JavaScript?`,
      options: {
         a: "script",
         b: "head",
         c: "meta",
         d: "style",
      },
      corrAns: `a`,
   },
   {
      question: `What is the correct syntax for referring to an external script called "LFC.js"?`,
      options: {
         a: 'script src="LFC.js"',
         b: 'script source="LFC.js"',
         c: 'script ref="LFC.js"',
         d: 'script type="LFC.js"',
      },
      corrAns: `a`,
   },
   {
      question: `What is the original name of JavaScript?`,
      options: {
         a: `LiveScript`,
         b: `EScript`,
         c: `Mocha`,
         d: `JavaScript`,
      },
      corrAns: `c`,
   },
   {
      question: `Which of them is not the looping structures in JavaScript?`,
      options: {
         a: `for`,
         b: `while`,
         c: `forwhich`,
         d: `dowhile`,
      },
      corrAns: `c`,
   },
   {
      question: `The "function" and " var" are known as:`,
      options: {
         a: `Keywords`,
         b: `Data types`,
         c: `Declaration statements`,
         d: `Prototypes`,
      },
      corrAns: `c`,
   },
   {
      question: `Which one of the following is the correct way for calling the JavaScript code?`,
      options: {
         a: `Preprocessor`,
         b: `Triggering Event`,
         c: `RMI`,
         d: `Function/Method`,
      },
      corrAns: `d`,
   },
   {
      question: `Which one of the following is an ternary operator:`,
      options: {
         a: `?`,
         b: `: `,
         c: `-`,
         d: `+`,
      },
      corrAns: `a`,
   },
   {
      question: `Which one of the following is an nullish coalescing operator:`,
      options: {
         a: `?`,
         b: `: `,
         c: `-`,
         d: `??`,
      },
      corrAns: `d`,
   },
];

// setQuestin function here for showing question
const setQuestion = () => {

   // Questin arraylist
   let questionList = [];

   // question array element itterate here
   allQuestions.map((items, indx) => {

      // answerlist / options here
      let answerList = [];

      // question options taking 
      for (let ind in items.options) {
         answerList.push(
            `
            <div class="form-group">
               <input type="radio" name="questionno${indx}" id="${ind}${indx}" >
               <label for="${ind}${indx}">${items.options[ind]}</label>
            </div>

            `
         );
      }

      questionList.push(
         `
         <div class="question">
            <h4 class="question__title mb-3">
               ${questionCount++} :   
               ${items.question}   
            </h4>

            <div  class="answers mb-3">
            ${answerList.join("")}
            </div>

         </div>

         `
      );
      questionWrap.innerHTML = questionList.join("");
   });
};

// showing question call here
setQuestion();


// create show results fuctions
const showResults = () => {

   let answerContainers = document.querySelectorAll('.answers');

   let correctNum = 0;

   allQuestions.map((items, indx) => {
      let answerContainer = answerContainers[indx];
      let selector = `input [name="questionno${indx}]:checked`;
      let userAnswer = (answerContainer.querySelector(selector) || {}).value;
      console.log(answerContainer);
   })

}

showResults();

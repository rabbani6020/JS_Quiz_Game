const allQuestions = [
   {
      question: `Q1: Inside which HTML element do we put the JavaScript?`,
      options: {
         a: `<script>`,
         b: `<head>`,
         c: `<meta>`,
         d: `<style>`,
      },
      corrAns: `a`,
   },
   {
      question: `Q2 :- What is the correct syntax for referring to an external script called "LFC.js"?`,
      options: {
         a: `<script src="LFC.js">`,
         b: `<script source="LFC.js">`,
         c: `<script ref="LFC.js">`,
         d: `<script type="LFC.js">`,
      },
      corrAns: `a`,
   },
   {
      question: `Q3 :- What is the original name of JavaScript?`,
      options: {
         a: `LiveScript`,
         b: `EScript`,
         c: `Mocha`,
         d: `JavaScript`,
      },
      corrAns: `c`,
   },
   {
      question: `Q4 :- Which of them is not the looping structures in JavaScript?`,
      options: {
         a: `for`,
         b: `while`,
         c: `forwhich`,
         d: `dowhile`,
      },
      corrAns: `c`,
   },
   {
      question: `Q5 :- The "function" and " var" are known as:`,
      options: {
         a: `Keywords`,
         b: `Data types`,
         c: `Declaration statements`,
         d: `Prototypes`,
      },
      corrAns: `c`,
   },
   {
      question: `Q6 :- Which one of the following is the correct way for calling the JavaScript code?`,
      options: {
         a: `Preprocessor`,
         b: `Triggering Event`,
         c: `RMI`,
         d: `Function/Method`,
      },
      corrAns: `d`,
   },
   {
      question: `Q7 :- Which one of the following is an ternary operator:`,
      options: {
         a: `?`,
         b: `: `,
         c: `-`,
         d: `+`,
      },
      corrAns: `a`,
   },
   {
      question: `Q8 :- Which one of the following is an nullish coalescing operator:`,
      options: {
         a: `*`,
         b: `? `,
         c: `-`,
         d: `??`,
      },
      corrAns: `d`,
   },
];

let questionTitle = document.querySelector(".question__title");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

let questionWrap = document.querySelector("#question-wrap");

// allQuestions.map((item, index) => {
//    questionTitle.innerText = item.question;
//    option1.innerText = item.options.a;
//    option2.innerText = item.options.b;
//    option3.innerText = item.options.c;
//    option4.innerText = item.options.d;
// });

let questionCount = 0;

const setQuestion = () => {
   const questionList = allQuestions[questionCount];
   questionTitle.innerText = questionList.question;
   option1.innerText = questionList.options.a;
   option2.innerText = questionList.options.b;
   option3.innerText = questionList.options.c;
   option4.innerText = questionList.options.d;
};

setQuestion();

// for(; questionCount <= allQuestions.length; questionCount++){
//    const questionList = allQuestions[questionCount];
//    questionTitle.innerText = questionList.question;
//    option1.innerText = questionList.options.a;
//    option2.innerText = questionList.options.b;
//    option3.innerText = questionList.options.c;
//    option4.innerText = questionList.options.d;
// }

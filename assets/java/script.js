let time = 60;
let timeId;
let qI = 0;
// 
const main = document.querySelector('main');
let currentQuestion = {}
let acceptingAnswers = true
let availableQuestions = []
let score = 0

const scorePoints = 100
const maxQuestions = 5

startGame = () => {
    score = 0
    availableQuestions = [...questions]
    handleClock();
    getNewQuestions ();
}

const handleClock = () => {
    
    time--;
    
    if (time <1) {
        clearInterval(timeId);
        time = 0;
    };
    
    document.querySelector('.time').innerHTML = time;
    
};

getNewQuestions = () => {
         if(availableQuestions.length === 0 || timeId > 0) {
         }
         qI++;

        const questionsIndex = Math.floor(Math.random()* availableQuestions.length)
        currentQuestion = availableQuestions[questionsIndex]
        questions.innerText = currentQuestion.questions

        A.forEach(A => {
            const number = A.dataset['number']
            A.innerText = currentQuestion["A++"]
        })
    };

const init = () => {
    
    let { Q,A,C } = questions[qI];
    timeId = setInterval(handleClock, 1000);
    
    main.innerHTML = `<h1>${Q}</h1>`;
    
    A.forEach(ans => {
        main.innerHTML += `<button onclick="handleAns('${C}')">${ans}</button>`;
    });
    return;
    
};
const handleAns = (correctAns) => {
    if (correctAns === questions.C) {
        console.log("Correct Answer: ",correctAns);
        //getNewQuestions();
    }
    else {
        time -5;
        //getNewQuestions ();
        console.log('wrong answer')

    }
};
// getNewQuestions = () => {
//      if(questions.length === 0 || timeId > 0) {
//      }
//      qI++;
//         const questionsIndex = Math.floor(Math.random()* availableQuestions.length)
//         currentQuestion = availableQuestions[questionsIndex]
//         questions.innerHTML = currentQuestion.questions
// };
document.querySelector('.start').addEventListener("click", init);







let time = 60;
let timeId;
let qI = 0;
availableQuestions = [...questions];
const main = document.querySelector('main');

const handleClock = () => {
    
    time--;
    
    if (time <1) {
        clearInterval(timeId);
        time = 0;
    };
    
    document.querySelector('.time').innerHTML = time;
    
};

const handleAns = (correctAns) => {
    
    if (correctAns) {
        //getNewQuestions();
        console.log("correct Answer: ",correctAns);
    }
    else {
        time -5;
        console.log('wrong answer')
        //getNewQuestions();

    }
};

const init = () => {
    
    let { Q,A,C } = questions[qI];
    
    timeId = setInterval(handleClock, 1000);
    
    main.innerHTML = `<h1>${Q}</h1>`;
    
    A.forEach(ans => {
        main.innerHTML += `<button onclick="handleAns('${C}')">${ans}</button>`;
    });

    
};

getNewQuestions = () => {
     if(questions.length === 0 || time > 0) {
        const questionsIndex = Math.floor(Math.random()* availableQuestions.length)
        currentQuestion = availableQuestions[questionsIndex]
        questions.innerText = currentQuestion.questions
     }
}
document.querySelector('.start').addEventListener("click", init);
// getNewQuestions = () => {
//     if (qI === 0 || time > 0)
// };






let time = 60;
let timeId;
let qI = 0;
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
    console.log("correct Answer: ",correctAns);

    if (correctAns = true) {
        init(qI);
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

// getNewQuestions = () => {
//     if (qI === 0 || time > 0)
// };

document.querySelector('.start').addEventListener("click", init);




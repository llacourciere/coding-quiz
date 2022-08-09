let time = 60;
let timeId;
let qI = 0;

const main = document.querySelector('main');


const handleClock = () => {

    time--;

    if (time < 1) {
        clearInterval(timeId);
        time = 0;
    };

    document.querySelector('.time').innerHTML = time;

};
const init = () => {
    reinit(0);
    
 };

const reinit = (index) => {

    let { Q, A, C } = questions[index];
    if (index == 0) {
        timeId = setInterval(handleClock, 1000);
    }

    main.innerHTML = `<h1>${Q}</h1>`;

    A.forEach(ans => {
        main.innerHTML += `<button onclick="handleAns('${C}','${ans}')">${ans}</button>`;
    });
    return;

};


var handleAns = (C, ans) => {
    console.log(C);
    console.log(ans)
    if (C !== ans) {
        console.log('wrong answer');
        time -= 5;
    }
    else {
        console.log('correct answer')
    }
    getNewQuestions ();
};




const maxQuestions = 5
getNewQuestions = () => {
    qI++;
    if (qI < questions.length) {
        reinit(qI);
    }
    else {
        //show final score 
    }
};
document.querySelector('.start').addEventListener("click", init);







let time = 30;
let timeId;
let qI = 0;

const formEl = document.querySelector('#score-name');
const scoreNameEl = document.querySelector('#score-names')

const main = document.querySelector('main');


const handleClock = () => {

    time--;

    if (time < 1) {
        clearInterval(timeId);
        time = 0;
    };

    document.querySelector('.time').innerHTML = time;

};
//starts the game and the timer count down
const init = () => {
    reinit(0);

};

//put the next questions on the page
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
    if (C !== ans) {
        time -= 5;
    }
    else {
        // calculateScore();
    }
    getNewQuestions();
};

//calls the next questions
getNewQuestions = () => {
    qI++;
    if (qI < questions.length) {
        reinit(qI);
    }
    else {
        showFinalScore();
    }
};

//calculates how many questions the player got correct
var calculateScore = function (event) {

}
//takes player to score page & will show final score
var showFinalScore = () => {
    if (time == 0 || qI == questions.length) {
        window.location.href = 'highscores.html'
    }
};

//allows player to input name to save score
var nameFormHandler = function (event) {
    event.preventDefault();
    var nameInput = document.querySelector("#name-form").value;
    // check if inputs are empty (validate)
    if (!nameInput) {
        alert("You need to fill out the form!");
        return false;
    }
    else {
        var scoreDataObj = {
            name: nameInput,
        };
        createScoreEl(scoreDataObj);
    }
};

formEl.addEventListener('submit', nameFormHandler);
document.querySelector('.start').addEventListener("click", init);







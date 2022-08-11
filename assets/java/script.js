let time = 60;
let timeId;
let qI = 0;
var scores = [];


const main = document.querySelector('main');

const handleClock = () => {

    time--;

    if (time < 1) {
        clearInterval(timeId);
        time = 0;
        return showEnterScore();
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
};


var handleAns = (C, ans) => {
    if (C !== ans) {
        time -= 5;
        //main.innerHTML = `<p>Wrong Answer!<p>`
    }
    else {
        //main.innerHTML = `<p>Right Answer!<p>`
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
        showEnterScore();
    }
};

//takes player to the enter name page
var showEnterScore = () => {
    clearInterval(timeId);
    document.body.innerHTML = `
      <nav>
      <a href="./index.html" ><button class="scores">Take Quiz Again</button></a>
      <h3>Highscores<span class="highscores"></span> </h3>
  </nav>

      <section id="high-score">
          <div id="score-name">
              <input id="name-form" type="text" name="name" placeholder="Initials">
              <button onclick="nameFormHandler()">Submit</button>
          </div>
      </section>
      
      `;

};

//enter the name and the score into an object when entered into the form
var nameFormHandler = function (event) {

    var nameInput = document.querySelector("#name-form").value;
    // check if inputs are empty (validate)

    console.log(nameInput, ': ', time);

    if (!nameInput) {
        alert("You need to fill out the form!");
        return false;
    }
    var scoreDataObj = {
        name: nameInput,
        score: time
    };
    scores.push(scoreDataObj);

    loadScores();
    saveScores();
    showScores(scores);
};
//show the most recent scores
var showScores = function (scoreDataObj) {

    document.body.innerHTML = `
<nav>
<a href="./index.html" ><button class="scores">Take Quiz Again</button></a>
<h3>Highscores<span class="highscores"></span> </h3>
</nav>

<section id="high-score">
    <section id="high-score-list">
    
    </section>
</section>
`
var highscoreList = document.getElementById('high-score-list');
console.log(highscoreList);
    for (let i=0; i< scores.length; i++) {
        var scoreItem = document.createElement('h4')
        scoreItem.textContent = scores[i].name + " : " + scores[i].score 
        highscoreList.appendChild(scoreItem);
    }
};
//load and save scores to local storage
var saveScores = function () {
    scores.sort((a, b) => {
        return a.score < b.score ? 1 : -1;
    })
    console.log(scores);
    if (scores.length > 10) {
        scores.pop()
    }
    localStorage.setItem("scores", JSON.stringify(scores));
};
var loadScores = function () {
    var savedScores = localStorage.getItem("scores");

    if (!savedScores) {
        return false;
    }
    // parse into array of objects
    savedScores = JSON.parse(savedScores);

    for (var i = 0; i < savedScores.length; i++) {
        scores.push(savedScores[i])
    }
};

document.querySelector('.start').addEventListener("click", init);










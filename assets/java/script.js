let time = 30;
let timeId;
let qI = 0;
var scores = [];
const formEl = document.querySelector('#score-name');
const scoreNameEl = document.querySelector('#score-names')

const main = document.querySelector('main');
//var scores = [];

const handleClock = () => {

    time--;
        
    if (time < 1) {
        clearInterval(timeId);
        time = 0;
        return showFinalScore();
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

// var createScoreEl = function () {

// }

//takes player to score page & will show final score
var showFinalScore = () => {
    clearInterval(timeId);
      document.body.innerHTML = `
      <nav>
      <a href="./index.html" ><button class="scores">Take Quiz Again</button></a>
      <h3>Highscores<span class="highscores"></span> </h3>
  </nav>

      <section id="high-score">
          <div id="score-name">
              <input id="name-form" type="text" name="name" placeholder="Name">
              <button onclick="nameFormHandler()">Submit</button>
          </div>

          <section class="high-score-list">
              <ul class="score-list" id="score-names">
                
              </ul>
          </section>
      </section>
      
      `;
    
};
var nameFormHandler = function (event) {

    var nameInput = document.querySelector("#name-form").value;
    // check if inputs are empty (validate)
    
    console.log(nameInput,': ',time);

    if (!nameInput) {
        alert("You need to fill out the form!");
        return false;
    }
    else {
        var scoreDataObj = {
           name: nameInput,
           score: time
       };
       scores = scoreDataObj;
       saveScores();

    }
};

//load and save scores to local storage
var saveScores = function() {
    localStorage.setItem("scores", JSON.stringify(scores));
  };
var loadScores = function() {
    var savedScores = localStorage.getItem("scores");
    // if there are no tasks, set tasks to an empty array and return out of the function
    if (!savedScores) {
      return false;
    }
    console.log("Saved scores found!");
  
    // parse into array of objects
    savedScores= JSON.parse(savedScores);
  
    for (var i = 0; i < savedScores.length; i++) {
      createScoreEl(savedScores[i]);
    }
  };

document.querySelector('.start').addEventListener("click", init);  


loadScores();







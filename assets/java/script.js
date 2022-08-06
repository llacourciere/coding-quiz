



//create question objects
//should these objects be an array of objects?
let question = {
    title: 'Which of these is falsey',
    alternatives: ['1', '0', 'true', '-1'],
    correct: 2
};

// let question2 = {
//     title: 'Which of these is a CSS feature',
//     alternatives: ['div', 'background color', 'background-color', 'function'],
//     correct: 3
// };

// let question3 = {
//     title: 'Which of these identifies a div',
//     alternatives: ['ID' , 'li', 'element', 'function'],
//     correct: 1
// };

function showQuestion(q) {
    //select the element to allow it to show on the page
    let titleDiv = document.getElementById('title');
    titleDiv.textContent = q.title;
    
//get the options to show up
    let alts = document.querySelectorAll('.alternative');
    alts.forEach(function(element, index){
        element.textContent = q.alternatives[index];
    });
}
showQuestion(question);
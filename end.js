end.js
const totalScore = localStorage.getItem('totalScore');
const finalScore = document.getElementById('finalScore');
finalScore.innerText=totalScore + "/5";
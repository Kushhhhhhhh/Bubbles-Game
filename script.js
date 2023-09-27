var timer = 60;
var score  = 0;
var hitrn = 0;

function makeBuuble(){
var clutter = "";

for(var i = 1; i<153; i++ ){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">
    ${rn}
    </div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer (){
   var timerInt = setInterval(function(){
      if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
      }else{
        clearInterval(timerInt);
        document.querySelector("#pbtm").innerHTML = `
        <h1>Game Over</h1>
        `;
      }
    }, 1000);
   
}
function getNewHit(){ 
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
/*function calculateTotalScore(storeArray){
     let totalScore = 0;

     for(const score of scoreArray){
        totalScore += score;
     }
     return totalScore;
}
const totalScore = calculateTotalScore(score);
console.log(`Total Score: ${totalScore}`);*/

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBuuble();
        getNewHit();
    }
});

getNewHit();
runTimer();
makeBuuble();
var score = 0;
var hitrn = 0;
function makeBubble() {
    var clluter = "";
    for(var i = 1; i < 120; i++)
    {
        var rn = Math.floor(Math.random()*10);
       clluter += `<div class="bubble">${rn}</div>`;            // store the bubble
    }
    document.querySelector(".mid").innerHTML = clluter;
}
function inctimer()
{
    var timer = 60;
    var time = setInterval(function(){
        if(timer>0){                                           // not taking the number in neagtive
        timer--;
        document.querySelector(".bt").textContent = timer;
        } else{
            clearInterval(time);                                 // after the timer 0 it will stop the interval
            document.querySelector(".mid").innerHTML = `<h1 class = "msg">Game Is Over, Score ${score}</h1> <a href ="/"><button class="refresh">Refresh</button></a>`;            // give last msg
        }
    }, 1000)
}
function newHit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector(".hit").textContent = hitrn;                 // Genrate random number for hit
}
function incScore() {
    score += 10;
    document.querySelector(".sc").textContent = score;
}
document.querySelector(".mid")
.addEventListener("click", function(deatils){
    var hitDet = Number(deatils.target.textContent);                    // it will give the number which number is clicked and Number() is use to change the target string to number
    if(hitDet === hitrn) {
        incScore();
        makeBubble();
        newHit();
    }
})
makeBubble();
inctimer();
newHit();


function makebubble() {
    var z = "";

    for (var i = 1; i < 127; i++) {
        var x = Math.floor(Math.random() * 10);
        z += `<div class="circle">${x}</div>`;
    }

    document.querySelector(".bottondiv").innerHTML = z;
}

var time = 60;
function timer() {
    var abc=setInterval(function () {
        if (time > 0) {
            time--;
            document.querySelector('#timerr').textContent = time;
        }else{
            clearInterval(abc);
            
            document.getElementById('btn').innerHTML=`<h1>Game Over</h1><br><h1>Your Score is ${score}</h1>`;
        }
    }, 1000);
}

var xyz;
function newhit(){
    xyz=Math.floor(Math.random()*10);
    document.getElementById('hitt').innerHTML=xyz;
}

var score=0
function scor(){
    score+=10;
    document.getElementById('score').innerHTML=score;
}

document.getElementById('btn').addEventListener('click', function(res){
    var om=Number(res.target.innerHTML);
    if(om==xyz) {
        scor();
        newhit();
        makebubble();
   }
});

newhit();
makebubble();
timer();


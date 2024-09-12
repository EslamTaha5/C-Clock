var cnt = 0;
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
var run = 0;
var watch;
function update(){
    let ms = Math.floor(cnt % 10, 2);
    let sec = Math.floor(cnt /10 % 60);
    let mint = Math.floor(cnt / 10/ 60 % 60);
    let hr = Math.floor(cnt / 10/ 60 / 60);
    sec = sec.toString();
    mint = mint.toString();
    hr = hr.toString();
    ms = ms.toString();

    let total = hr.padStart(2, '0') + ":" + mint.padStart(2, '0') + ':' + sec.padStart(2, '0') + ":" + ms.padStart(2, '0');
    const get_label = document.getElementById("current");
    get_label.innerHTML = total;
    cnt++;
}
start.onclick = function(){
    if(!run){
        run = 1;
        watch = setInterval(() => {
            update();
        }, 100);
    }
}
stop.onclick = function(){
    if(run){
        run = 0;
        clearInterval(watch);
    }
}
reset.onclick = function(){
    cnt = 0;
    if(run){
        run = 0;
        clearInterval(watch);
    }
    const get_label = document.getElementById("current");
    get_label.innerHTML = "00:00:00:00";
}
const clock = document.getElementById("clkBt");
const alarm = document.getElementById("alarmBt");
const stopwatch = document.getElementById("spwatchBt");
const timer = document.getElementById("timerBt");
const pray = document.getElementById("prayBt");
const row = document.getElementById("row");
const time = document.getElementById("Time");
const date = document.getElementById("date-data");
const mp = {
    "clkBt":"index.html",
    "alarmBt":"alarm.html",
    "spwatchBt":"stopwatch.html",
    "timerBt":"timer.html",
    "prayBt":"pray.html"
}
function redir(s){
    alarm.classList.add('current');
    location.href = `../html/${mp[s]}`;
}

row.addEventListener("click",function(event){
    if(event.target.tagName === "BUTTON"){
        const pg = event.target.id;
        redir(pg);
    }

})

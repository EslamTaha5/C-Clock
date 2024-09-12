
function show_form(){
    const get_form = document.getElementById("form-alarm");
    get_form.classList.add("show");
}
function close_form(){
    const get_form = document.getElementById("form-alarm");
    get_form.classList.remove("show");
}
function modify_buttons(a, b){
    const first = document.getElementById(a);
    first.classList.remove("show");
    first.classList.add(`hide`);
    const second = document.getElementById(b);
    second.classList.remove("hide");
    second.classList.add("show");
}
let cnt = 0;
var ti;
let run = 0;

function update(){
        cnt--;
        let ms = Math.floor(cnt % 10, 2);
        let sec = Math.floor(cnt /10 % 60);
        let mint = Math.floor(cnt / 10/ 60 % 60);
        let hr = Math.floor(cnt / 10/ 60 / 60);
        sec = sec.toString();
        mint = mint.toString();
        hr = hr.toString();
        ms = ms.toString();

        let total = hr.padStart(2, '0') + ":" + mint.padStart(2, '0') + ':' + sec.padStart(2, '0') + ":" + ms.padStart(2, '0');
        const disp_timer = document.getElementById("show-timer-time");
        disp_timer.innerHTML = total;
}
function start_timer(){
    var hr;
    var min;
    
    hr = document.getElementById("hours");
    min = document.getElementById("minutes");
    if(hr.value.length == 0 || min.value.length == 0) return;
    
    console.log(hr);
    console.log(min);
    hr = Number(hr.value);
    min = Number(min.value);
    if(hr < 0 || min < 0 || min >60 || hr > 100)return;
    cnt = hr * 60 + min;
    cnt *= 600;
    if(!cnt) return;
    close_form();
    run = 1;
    modify_buttons("Create-bt", "when-created");
    ti = setInterval(()=>{
        if(cnt == 1){
            run = 0;
            modify_buttons( "when-created","Create-bt");
            clearInterval(ti);
        }
        update();
    }, 100);
}
function flip(){
    if(run){
        clearInterval(ti);
        const flip_button = document.getElementById(`flip`);
        flip_button.innerHTML = "Continue";
        run = 0;
    }else{
        run = 1;
        const flip_button = document.getElementById(`flip`);
        flip_button.innerHTML = "Pause";
        ti = setInterval(()=>{
            if(cnt == 1){
                run = 0;
                modify_buttons( "when-created","Create-bt");
                clearInterval(ti);
            }
            update();
        }, 100);
    }
}
function cancel_timer(){
    cnt = 0;
    run = 0;
    clearInterval(ti);
    modify_buttons( "when-created","Create-bt");
    const disp_timer = document.getElementById("show-timer-time");
    disp_timer.innerHTML = "00:00:00:00";

}
//right arrow function
function inc(){
    
}
//left arrow function
function dec(){

}
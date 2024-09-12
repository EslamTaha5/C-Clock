let alarm_form = document.getElementsByClassName("form-alarm");
let alarm_button = document.getElementsByClassName("alarm-button");
var diff = 0;
let close = document.getElementsByClassName("close-btn");
let crt = document.getElementById("create");
let alarm_min = 0;
let alarm_hours = 0;
alarm_form = alarm_form[0];
alarm_button = alarm_button[0];
close = close[0];
function update_time(){
    let cur_time = new Date();
    let hours = cur_time.getHours().toString();
    let minutes = cur_time.getMinutes().toString();
    let seconds = cur_time.getSeconds().toString();
    let tim = hours.padStart(2, '0') + ':' +
              minutes.padStart(2, '0') + ':' +
              seconds.padStart(2, '0');
    
    time.innerHTML = tim;
    setTimeout(()=>{update_time()}, 1000);
};
update_time();
function update_date(){
    let cur_time = new Date();
    let yr = cur_time.getFullYear().toString();
    let mon = cur_time.getMonth().toString();
    let dy = cur_time.getDay().toString();
    let tim = dy.padStart(2, '0') + '/' +
              mon.padStart(2, '0') + '/' +
              yr;
    cur_time = cur_time.toDateString();
    cur_time = cur_time.split(' ');
    cur_time = cur_time[0] + ' - ' + cur_time[1] +' '+ cur_time[2] + ' - ' + cur_time[3];
    

    date.innerHTML = cur_time;
    setTimeout(()=>{update_date()}, 60000);
    
    
};
update_date();

function Set_alarm(){
    alarm_form.classList.remove(`cls`);
    alarm_form.classList.add("pop-up");
    let minu = document.getElementById(`minutes`);
    let hour = document.getElementById(`hours`);
    if(minu.value.length != 0){
        return;
    }
    for(var i = 0; i < 60; i++){
        var opt = document.createElement("option");
        opt.text = i;
        minu.add(opt);
    }
    for(var i = 0; i < 24; i++){
        var opt = document.createElement("option");
        opt.text = i;
        hour.add(opt);
    }
}
function close_form(){
    alarm_form.classList.remove(`pop-up`);
    alarm_form.classList.add(`cls`);
}
function cancel_alarm(){
    let hd_alarm = document.getElementById("alarmed");
    hd_alarm.classList.remove('show');
    hd_alarm.classList.add(`hide`);
    alarm_button.classList.add("show");
}

function hide_set_alarm(){
    alarm_button.classList.add("hide");
    close_form();
}
function show_alarm_disp(){
    const sh_disp = document.getElementById("alarmed");
    sh_disp.classList.remove("hide");
    sh_disp.classList.add("show");
}

function show_set_alarm(){
    alarm_button.classList.remove("hide");
}
function hide_alarm_disp(){
    const sh_disp = document.getElementById("alarmed");
    sh_disp.classList.remove("show");
    sh_disp.classList.add("hide");

}
function start_alarm(){
    const hours_data = Number(document.getElementById("hours").value);
    const minutes_data = Number(document.getElementById("minutes").value);
    const song = document.getElementById("choose-song");
    var total_alarm = hours_data * 60 + minutes_data;
    const cur = new Date();
    var total_cur = cur.getHours() * 60 + cur.getMinutes();
    diff = Math.abs(total_alarm-total_cur);
    if(total_cur > total_alarm) {
        diff = 24 * 60 - total_cur + total_alarm;
    }
    diff *= 60;
    diff -= cur.getSeconds();
    const disp = document.getElementById("show-alarm-time");
    hide_set_alarm();
    show_alarm_disp();
    disp.innerHTML = (hours_data.toString()).padStart(2, '0') + ":" + (minutes_data.toString()).padStart(2, '0');
    const inter = setInterval(() => {
        if(diff <= 1){
            show_set_alarm();
            hide_alarm_disp();
            clearInterval(inter);
        }
        diff--;
        var rem_sec = Math.floor(diff % 60, 2);
        rem_sec = rem_sec.toString();
        var rem_min = Math.floor(diff / 60 % 60, 2);
        var rem_hours = Math.floor(diff / 60 / 60, 2);
        rem_hours = rem_hours.toString();
        rem_min = rem_min.toString();
        var last = rem_hours.padStart(2, '0') + ':' +  rem_min.padStart(2, '0') + ":" + rem_sec.padStart(2, '0');
        const disp_timer = document.getElementById("show-timer-time");
        disp_timer.innerHTML = last;
    }, 1000);
    console.log(disp)
}

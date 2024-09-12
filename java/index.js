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

let text = document.getElementById("time-text");
function callTime(){
    let time = new Date();
    let hour =time.getHours();
    let minute = time.getMinutes();
    let seconds = time.getSeconds();
    if(hour>12){
        let hourInPm = hour-12;
        text.innerHTML = `${hourInPm}:${minute}:${seconds} PM`;
    }
    else
     text.innerHTML = `${hour}:${minute}:${seconds} AM`;
}
setInterval(callTime,1000);
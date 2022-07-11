let text = document.getElementById("time-text");
function callTime(){
    let time = new Date();
    let hour =time.getHours();
    let minute = time.getMinutes();
    let seconds = time.getSeconds();
    let timestamps = "AM"
    if(hour>12){
        hour = hour-12;
        timestamps = "PM"
    }
     if(hour<10)
      hour = "0" + hour;
     if(minute<10)
      minute = "0" + minute;
     if(seconds<10)
      seconds = "0" + seconds;
     if(hour == 0)
      hour = 12;
     text.innerHTML = `${hour}:${minute}:${seconds} ${timestamps}`;
}
setInterval(callTime,1000);
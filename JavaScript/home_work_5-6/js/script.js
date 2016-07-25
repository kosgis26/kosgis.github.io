start.addEventListener("click", start_click);
// pause.addEventListener("click", pause_click);
stp.addEventListener("click", stp_click);
var intId;
var sec = 0;
var min = 0;
var hour = 0;

function start_click() {
  if (start.innerHTML == "Start") {    
    intId = setInterval(updateTime, 1000);
    start.innerHTML = "Pause";
  } else {
    if (start.innerHTML == "Pause") {
      start.innerHTML = "Start";
      clearInterval(intId);
    }
  }
};

function updateTime() {
  sec++;
  if (sec >= 60) {
    min++;
    sec = 0;
  }
  if (min >= 60) {
    hour++;
    min = 0;
  }
  var secZ = sec;
  if (sec < 10) {
     secZ = "0" + sec;
  }
  var minZ = min;
  if (min < 10) {
     minZ = "0" + min; 
  }
  var hourZ = hour;
  if (hour < 10) {
     hourZ = "0" + hour; 
  } 
  document.querySelector(".hour").innerHTML = hourZ;
  document.querySelector(".min").innerHTML = minZ;
  document.querySelector(".sec").innerHTML = secZ;
}

function stp_click() {
  if (start.innerHTML == "Pause") {
    start.innerHTML = "Start";
    clearInterval(intId);
  } 
  hour = 0;
  min = 0;
  sec = 0;
  document.querySelector(".hour").innerHTML = "00";
  document.querySelector(".min").innerHTML = "00";
  document.querySelector(".sec").innerHTML = "00";
}

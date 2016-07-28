start.addEventListener("click", start_click);
stp.addEventListener("click", stp_click);
var intId;
var ms = 0;
var sec = 0;
var min = 0;
var hour = 0;
// По іншому не правильно веде відлік мілісекунд
var tick = 4; // Мало = 13

function start_click() {
  if (start.innerHTML == "start") {   
    intId = setInterval(updateTime);
    start.innerHTML = "pause";
  } else {
    if (start.innerHTML == "pause") {
      start.innerHTML = "start";
      clearInterval(intId);
    }
  }
};

function updateTime() {
  ms += tick;
  if (ms >=999) {
    sec++;
    ms = 0;
  }
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
  document.querySelector(".ms").innerHTML = ms;
}

function stp_click() {
  if (start.innerHTML == "pause") {
    start.innerHTML = "start";
    clearInterval(intId);
  } 
  hour = 0;
  min = 0;
  sec = 0;
  ms = 0;
  document.querySelector(".hour").innerHTML = "00";
  document.querySelector(".min").innerHTML = "00";
  document.querySelector(".sec").innerHTML = "00";
  document.querySelector(".ms").innerHTML = "000";
}

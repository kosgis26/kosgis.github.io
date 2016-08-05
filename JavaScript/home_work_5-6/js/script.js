start.addEventListener("click", start_click);
stp.addEventListener("click", stp_click);
var intId;
var ms = 0;
var sec = 0;
var min = 0;
var hour = 0;
var startTime = 0; 
var pauseTime = 0;
var timerTime = 0;

function start_click() {
  var currentTime = new Date();
  if (start.innerHTML == "start") {       
    if (pauseTime == 0) {      
      startTime = currentTime; // Сохраняем время когда пользователь нажал на кнопку START    
    } else { // Если на таймере не "нули" (была нажата кнопка PAUSE), то берем не текущее время, а то что было когда нажали на паузу      
      startTime = new Date(currentTime - pauseTime);
    }
    // Пусть работает каждую миллисикунду, как можно чаще
    intId = setInterval(updateTime, 1);
    start.innerHTML = "pause";
  } else {
    if (start.innerHTML == "pause") {
      pauseTime = new Date(currentTime - startTime); // Сохраняем сколько времени на таймере в момент нажатия кнопки PAUSE
      start.innerHTML = "start";
      clearInterval(intId);
    }
  }
};

function updateTime() {  
  var currentTime = new Date(); // Смотрим сколько сейчас время  
  timerTime = new Date(currentTime - startTime); // Получаем разницу, чтобы понимать сколько времени прошло с момента запуска таймера  
  hour = timerTime.getUTCHours(); // Берем по отдельности часы, минуты, секунды и миллисекунды
  min = timerTime.getMinutes();
  sec = timerTime.getSeconds();
  ms = timerTime.getMilliseconds();
  var msZ = ms;
  if (ms < 10) {
    msZ = "00" + ms;
  }
  if (ms < 100) {
    msZ = "0" + ms;
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
  document.querySelector(".ms").innerHTML = msZ;
}

function stp_click() {
  if (start.innerHTML == "pause") {
    start.innerHTML = "start";
    clearInterval(intId);
  } 
  pauseTime = 0;
  document.querySelector(".hour").innerHTML = "00";
  document.querySelector(".min").innerHTML = "00";
  document.querySelector(".sec").innerHTML = "00";
  document.querySelector(".ms").innerHTML = "";
}

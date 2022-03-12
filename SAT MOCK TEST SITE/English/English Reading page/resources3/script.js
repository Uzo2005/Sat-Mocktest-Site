const startingminutes = 65;
let time = startingminutes * 60;


const clock = document.getElementById('clock');
const countdown = document.getElementById('countdown_minutes');
const counts = document.getElementById('countdown_seconds');

//Time countdown
setInterval(updateCountdown_minutes, 1000)

function updateCountdown_minutes() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  

  seconds = seconds < 10 ? `0` + seconds : seconds;

  countdown.innerHTML = `${minutes}`;
  counts.innerHTML = `${seconds}`;
  time--;

  if(minutes === 64){
    clock.style.background = "#80ff80"
  }else if(minutes === 50) {
    clock.style.background = "#bfff80"
  }else if(minutes === 40) {
    clock.style.background = "#dfff80"
  }else if(minutes === 30) {
    clock.style.background = "#ffff80"
  }else if(minutes === 20) {
    clock.style.background = "#ffdf80"
  }else if(minutes === 10) {
    clock.style.background = "#ff4000"
  }else if(minutes === 5) {
    clock.style.background = "#ff0000"
  }
}

//WHEN TIME IS UP
function redirectpage(){
  window.location = " C:/Users/Igwe Peter/Desktop/SAT MOCK TEST SITE/Instruction pages/after reading/writing_instructions.html"
}
setTimeout("redirectpage()", 3902000)


//BUTTON ALERTS

function confirmAction() {
  var popup = confirm(" Are Sure You Want To Submit?\n                      And Start The Next Section");
  if (popup == false){
    event.preventDefault();
  }
}


/*function noReturn() {
  if (localStorage.getItem("visited")) {
    window.location.href = "C:/Users/Igwe Peter/Desktop/SAT MOCK TEST SITE/instruction pages/after reading/writing_instructions.html"
  }
  localStorage.setItem("visited", "true");  
}

setTimeout("noReturn()", 3902000);*/
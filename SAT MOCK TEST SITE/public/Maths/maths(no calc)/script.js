const startingminutes = 25;
let time = startingminutes * 60;


const clock = document.getElementById('clock');
const countdown = document.getElementById('countdown_minutes');
const counts = document.getElementById('countdown_seconds');


setInterval(updateCountdown_minutes, 1000)

function updateCountdown_minutes() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  

  seconds = seconds < 10 ? `0` + seconds : seconds;

  countdown.innerHTML = `${minutes}`;
  counts.innerHTML = `${seconds}`;
  time--;

  if(minutes === 25){
    clock.style.background = "#80ff80"
  }else if(minutes === 20) {
    clock.style.background = "#bfff80"
  }else if(minutes === 16) {
    clock.style.background = "#dfff80"
  }else if(minutes === 12) {
    clock.style.background = "#ffff80"
  }else if(minutes === 8) {
    clock.style.background = "#ffdf80"
  }else if(minutes === 5) {
    clock.style.background = "#ff4000"
  }else if(minutes === 2) {
    clock.style.background = "#ff0000"
  }

  //Trying to write a better redirect page code:)
  if(minutes==0 && seconds==0){
    window.location = "../../instruction pages/after MathsNoCalc/mathsCalc_instructions.html"
  }
}

const modal      = document.querySelector("#modal");
const openModal  = document.querySelector(".skip");
const closeModal = document.querySelector(".no");

openModal.addEventListener('click', () => {
  modal.showModal();
})
closeModal.addEventListener('click', () => {
  modal.close();
})

/*function noReturn() {
  if (localStorage.getItem("visited")) {
    window.location.href = "C:/Users/Igwe Peter/Desktop/SAT MOCK TEST SITE/instruction pages/after MathsNoCalc/mathsCalc_instructions.html"
  }
  localStorage.setItem("visited", "true");  
}

setTimeout("noReturn()", 1502000);*/
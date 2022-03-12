const minutes = 10
let time = minutes * 60

const countdown = document.getElementById('mins');
const counts = document.getElementById('sec');


setInterval(updateCountdown_minutes, 1000)

function updateCountdown_minutes() {
  const mins = Math.floor(time / 60);
  let secs = time % 60;
  

  secs = secs < 10 ? `0` + secs : secs;

  countdown.innerHTML = `${mins}`;
  counts.innerHTML = `${secs}`;
  time--;
}
function redirectpage(){
  window.location = "C:/Users/Igwe Peter/Desktop/SAT MOCK TEST SITE/instruction pages/after writing/mathsNoCalc_instructions.html"
}
setTimeout("redirectpage()", 602000)

//BUTTON ALERTS

function confirmAction() {
  var popup = confirm("You Dont Need A Break?");
  if (popup == false){
    event.preventDefault();
  }
}
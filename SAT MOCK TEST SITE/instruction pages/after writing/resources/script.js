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
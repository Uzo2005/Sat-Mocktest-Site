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

  //Trying to write a better redirect page code:)
  if(mins==0 && secs==0){
    window.location = "../after writing/mathsNoCalc_instructions.html"
  }
}

const modal      = document.querySelector("#modal");
const openModal  = document.querySelector(".next_section");
const closeModal = document.querySelector(".no");

openModal.addEventListener('click', () => {
  modal.showModal();
})
closeModal.addEventListener('click', () => {
  modal.close();
})

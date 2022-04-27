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


const unserious = document.querySelector(".unserious");
const joke = document.querySelector('#joke');
const times = document.querySelector(".times");



unserious.addEventListener('click', () => {
  joke.showModal();
})

times.addEventListener('click', () => {
  joke.close();
})

//Styling the Slideshow joke Modals
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("jokepics");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
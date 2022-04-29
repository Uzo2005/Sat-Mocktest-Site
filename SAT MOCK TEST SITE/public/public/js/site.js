const modal      = document.querySelector("#modal");
const openModal  = document.querySelector(".Start");
const closeModal = document.querySelector(".no");

openModal.addEventListener('click', () => {
  modal.showModal();
})
closeModal.addEventListener('click', () => {
  modal.close();
})

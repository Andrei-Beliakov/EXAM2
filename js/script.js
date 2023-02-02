const modal = document.querySelector(".modal");
const black = document.querySelector(".black");
const btn = document.querySelector(".button");

btn.addEventListener("click", showModal);
black.addEventListener("click", closeModal);

function showModal() {
  modal.style.display = "block";
  black.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal(event) {
  modal.style.display = "none";
  black.style.display = "none";
  document.body.style.overflow = "visible";
}

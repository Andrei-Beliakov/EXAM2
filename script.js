let modal = document.querySelector(".modal");
let black = document.querySelector(".black");
let btn = document.querySelector(".button");
let html = document.querySelector("html");

btn.addEventListener("click", showModal);
black.addEventListener("click", closeModal);

function showModal() {
  modal.style.display = "block";
  black.style.display = "block";
  html.style.overflow = "hidden";
}

function closeModal(event) {
  if (event.targer == modal) {
    modal.style.display = "block";
    black.style.display = "block";
  } else {
    modal.style.display = "none";
    black.style.display = "none";
  }
}

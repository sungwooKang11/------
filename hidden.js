const modalOpen = document.querySelector(".modalOpen");
const modalClose = document.querySelector(".modalClose");
const a = document.querySelector(".a");

const openModal = () => {
    a.classList.remove("hidden");
    modalClose.classList.remove("hidden");
}

const closeModal = () => {
    a.classList.add("hidden");
    modalClose.classList.add("hidden");
}

modalOpen.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);
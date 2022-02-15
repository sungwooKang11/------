const answerOpen = document.querySelector(".answerOpen");
const answerClose = document.querySelector(".answerClose");
const a = document.querySelector(".a");

const openanswer = () => {
    a.classList.remove("hidden");
    answerOpen.classList.add("hidden");
    answerClose.classList.remove("hidden");
}

const closeanswer = () => {
    a.classList.add("hidden");
    answerClose.classList.add("hidden");
    answerOpen.classList.remove("hidden");
}

answerOpen.addEventListener("click", openanswer);
answerClose.addEventListener("click", closeanswer);
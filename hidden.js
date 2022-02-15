const answerOpen = document.querySelector(".answerOpen");
const answerClose = document.querySelector(".answerClose");
const a = document.querySelector(".a");

const openanswer = () => { //삼항연산자 적용하기
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
const signinBtn = document.querySelector(".signinBtn");
const signupBtn = document.querySelector(".signupBtn");
const formBx = document.querySelector(".formBx");
const main = document.querySelector("main");

signupBtn.onclick = function () {
formBx.classList.add("active");
main.classList.add("active");
};

signinBtn.onclick = function () {
formBx.classList.remove("active");
main.classList.remove("active");
};
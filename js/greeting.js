const loginContainer = document.querySelector("#login-container");
const mainContainer = document.querySelector("#main-container");
const loginForm = loginContainer.querySelector("#login-form");
// loginInput 과 loginButton 을 loginForm 안에서 검색 가능하다.
const loginInput = loginForm.querySelector("input");
const continueBtn = loginForm.querySelector('button');
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleLoginSubmit(event) {
    event.preventDefault();
    // validate : 이름을 입력했을 때만 버튼이 동작하도록 한다.
    loginContainer.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // template literal 은 string 안에서 variable 을 사용할 수 있도록 해준다.
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    mainContainer.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLoginSubmit);
} else {
    // show the greetings
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}

function handleFocus(event) {
  loginInput.placeholder = "";
  setTimeout(() => { continueBtn.classList.add('show') }, 500);
}
loginInput.addEventListener("focus", handleFocus);
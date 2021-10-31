const clock = document.querySelector("h2#clock");

function showCurrentTime() {
    const date = new Date();
    // let hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
    // let minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
    // let seconds = date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`;
    let hours = String(date.getHours()).padStart(2, "0")
    let minutes = String(date.getMinutes()).padStart(2, "0")
    clock.innerText = `${hours}:${minutes}`; 
}

// 1st argument: 우리가 호출하려는 함수, 2nd argument: 우리가 몇 초를 주기로 콜백 함수를 실행시킬 것인가?
// setInterval(sayHello, 5000);

// 일정 시간이 흐른 뒤에 함수를 한 번 실행시키고 싶다.
// setTimeout(sayHello, 5000);

showCurrentTime();
setInterval(showCurrentTime, 1000);
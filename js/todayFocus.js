const todayFocusForm = document.getElementById('today-focus');
const mainFocusInput = todayFocusForm.querySelector("input");
const todayFocusResultScreen = document.getElementById("today-focus-result");
const focusList = document.getElementById("focus-list");

const TODAY_FOCUS = "today-focus";
let todayFocus = [];

// 로컬 스토리지에 today focus 데이터 저장
function saveTodayFocus() {
    localStorage.setItem(TODAY_FOCUS, JSON.stringify(todayFocus));
}

function handleDeleteTodayFocus(event) {
    // 클릭된 deleteBtn 을 가지고 있는 상위 요소 li 에 접근.
    const li = event.target.parentElement;
    // toDoList 에서 해당 요소만 제거한다면 어떻게 되는가?
    todayFocus = todayFocus.filter(toDo => toDo.id !== parseInt(li.id));
    // HTML Element 에서 제거
    li.remove();
    // localStorage 에서 제거
    saveTodayFocus();
    todayFocusForm.classList.remove("disappear");
    todayFocusResultScreen.classList.add("disappear");
    mainFocusInput.focus();
}

function paintTodayFocus(todayFocus) {
    const li = document.createElement('li');
    li.id = todayFocus.id;
    const span = document.createElement('span');
    span.innerText = todayFocus.focus;
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = '❌';
    deleteBtn.addEventListener('click', handleDeleteTodayFocus);

    li.appendChild(span);
    li.appendChild(deleteBtn);

    focusList.appendChild(li);
}

function handleTodayFocusSubmit(event) {
    event.preventDefault();
    const value = mainFocusInput.value;
    mainFocusInput.value = '';

    const todayFocusObj = {
        focus: value,
        id: Date.now()
    };

    todayFocus.push(todayFocusObj);
    paintTodayFocus(todayFocusObj);
    saveTodayFocus();
    todayFocusForm.classList.add("disappear");
    todayFocusResultScreen.classList.remove("disappear");
}

window.addEventListener('load', () => {
    todayFocusResultScreen.classList.add('disappear');

    todayFocusForm.addEventListener('submit', handleTodayFocusSubmit);
    
    mainFocusInput.focus();

    const savedTodayFocus = localStorage.getItem(TODAY_FOCUS);
    const parsedTodayFocus = JSON.parse(savedTodayFocus);
    if (parsedTodayFocus.length !== 0) {
        todayFocus = parsedTodayFocus;
        
        parsedTodayFocus.forEach(parsedTodayFocus => paintTodayFocus(parsedTodayFocus));
        todayFocusForm.classList.add("disappear");
        todayFocusResultScreen.classList.remove("disappear");
    } else {
        todayFocusForm.classList.remove("disappear");
        todayFocusResultScreen.classList.add("disappear");
        mainFocusInput.focus();
    }
});
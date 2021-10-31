const todoPopup = document.querySelector('.todo-popup');
const todoBtn = document.querySelector('.open-todo');
const todoInputBtn = document.querySelector('.open-todo-input');
const todoDefaultScreen = document.querySelector('.default-screen');
const todoScreen = document.querySelector('.todo-screen');
const todoPopupForm = document.querySelector('#todo-popup-form');
const todoInput = todoPopupForm.querySelector('input');
const todoPopupList = document.querySelector('#todo-popup-list');

const TODOS_KEY = "todos";
// toDos 는 항상 빈 채로 시작된다.
let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function handleBtnClick(event) {
    todoPopup.classList.toggle("open");
}

function handleOpenInput(event) {
    todoInputBtn.classList.add('disappear');
    todoScreen.classList.remove('hidden');
    todoInput.focus();
}

function handleTodoPopupSubmit(event) {
    event.preventDefault();
    const value = todoInput.value;
    todoInput.value = '';

    const newTodoObj = {
        text: value,
        id: Date.now()
    };
    todos.push(newTodoObj);

    todoDefaultScreen.classList.add('hidden');
    paintToDo(newTodoObj);
    saveTodos();
}

function handleDeleteToDo(event) {
    // 클릭된 deleteBtn 을 가지고 있는 상위 요소 li 에 접근.
    const li = event.target.parentElement;
    // toDoList 에서 해당 요소만 제거한다면 어떻게 되는가?
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    // HTML Element 에서 제거
    li.remove();
    // localStorage 에서 제거
    saveTodos();
    if (!todoPopupList.hasChildNodes()) {
        todoDefaultScreen.classList.remove('hidden');
        todoInputBtn.classList.remove('disappear');
        todoScreen.classList.add('hidden');
    }
}

function paintToDo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = '❌';
    deleteBtn.addEventListener('click', handleDeleteToDo);
    li.appendChild(span);
    li.appendChild(deleteBtn)
    todoPopupList.appendChild(li);
}

todoBtn.addEventListener('click', handleBtnClick);
todoInputBtn.addEventListener('click', handleOpenInput);
todoPopupForm.addEventListener('submit', handleTodoPopupSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

// if localStorage has todos data, then~
if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    // 기존에 localStorage 에 todos 데이터가 존재한다면, todos 는 빈 배열이 아닌 기존 todos 데이터를 저장한 채 시작
    todos = parsedTodos;
    
    // paint Todos saved in the localStorage
    parsedTodos.forEach(parsedTodo => paintToDo(parsedTodo));
    todoDefaultScreen.classList.add('hidden');
    todoInputBtn.classList.add('disappear');
    todoScreen.classList.remove('hidden');
}
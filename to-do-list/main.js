/* 시계 */
const clock = document.querySelector('.js-clock h1');
function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clock.innerText = `${hours<10?`0${hours}`:`${hours}`}:${minutes<10?`0${minutes}`:`${minutes}`}:${seconds<10?`0${seconds}`:`${seconds}`}`
}

/* 사용자 이름 확인 */
const nameForm = document.querySelector('.js-nameForm'),
    nameInput = nameForm.querySelector('input'),
    greeting = document.querySelector('.js-greetings'),
    user_ls = 'username',
    show = 'show';

function loadName(){
    const currentUser = localStorage.getItem(user_ls);
    if(currentUser === null){
        askforName();
    }else{
        addName(currentUser);
    }
}

function askforName(){
    nameForm.classList.add(show);
    nameForm.addEventListener('submit', handler);
}
function handler(event){
    event.preventDefault();
    const currentValue = nameInput.value;
    // console.log(currentValue);
    addName(currentValue);
    saveName(currentValue);
}

function addName(name){
    nameForm.classList.remove(show);
    greeting.classList.add(show);
    greeting.innerText = `왔냐, ${name}`;
}
function saveName(name){
    localStorage.setItem(user_ls, name);
}

/* to-do-list */
const todoForm = document.querySelector('.js-todoForm'),
    todoInput = todoForm.querySelector('input'),
    todoList = document.querySelector('.js-todolist'),
    todos_ls = 'todos';

function loadTodos(){
    const todos = localStorage.getItem(todos_ls);
    if(todos !== null){
        
    }
}

function todoHandler(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    addTodo(currentValue);
    todoInput.value = '';
}
function addTodo(text){
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = text;
    const delBtn = document.createElement('button');
    delBtn.innerText = 'X';
    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
}

// console.log(todoFo);






function init(){
    /* clock */
    getTime();
    setInterval(getTime,1000);
    /* user name */
    loadName();
    /* to-do-list */
    loadTodos();
    todoForm.addEventListener('submit', todoHandler);
}
init();
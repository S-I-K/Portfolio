/* real-time clock */
const clock = document.querySelector('.js-clock h1');
function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clock.innerText = `${hours<10?`0${hours}`:`${hours}`}:${minutes<10?`0${minutes}`:`${minutes}`}:${seconds<10?`0${seconds}`:`${seconds}`}`
}

/* user name check */
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

/* to-do-list just add */
const todoForm = document.querySelector('.js-todoForm'),
    todoInput = todoForm.querySelector('input'),
    todoList = document.querySelector('.js-todolist'),
    todos_ls = 'todos';
let todosArr = [];

function loadTodos(){
    const todos = localStorage.getItem(todos_ls);
    if(todos !== null){
        const parsedTodo = JSON.parse(todos);
        parsedTodo.forEach(function(todo){
            addTodo(todo.text);
        });
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
    const newId = todosArr.length + 1;
    const span = document.createElement('span');
    span.innerText = text;
    const delBtn = document.createElement('button');
    delBtn.innerText = 'X';
    delBtn.addEventListener('click', deleteTodo);
    li.id = newId;
    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
    const todosObj = {
        text: text,
        id: newId
    };
    todosArr.push(todosObj);
    saveTodos();
}
function deleteTodo(event){
    const btn = this;
    const li = btn.parentNode;
    todoList.removeChild(li);
    const cleanTodos = todosArr.filter(function(todo){
        return todo.id !== parseInt(li.id);
    });
    console.log(cleanTodos);
    todosArr = cleanTodos;
    saveTodos();
}
function saveTodos(){
    localStorage.setItem(todos_ls, JSON.stringify(todosArr));
}













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
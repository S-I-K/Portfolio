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
    greeting = document.querySelector('.greetings'),
    user_ls = 'username',
    show = 'show';

function askforName(){
    nameForm.classList.add(show);
    nameForm.addEventListener('submit', handler);
}
function handler(event){
    event.preventDefault();
    const currentValue = nameInput.value;
    saveName(currentValue);
    addName(currentValue);
}
function saveName(name){
    localStorage.setItem(user_ls, name);
}

function addName(name){
    nameForm.classList.remove(show);
    greeting.classList.add(show);
    greeting.innerText = `왔냐, ${name}`;
}

function loadName(){
    const currentUser = localStorage.getItem(user_ls);
    if(currentUser === null){
        askforName();
    }else{
        addName(currentUser);
    }
    console.log(currentUser);
}







// const user_ls = 'currentUser',
//     show = 'show',
//     nameForm = document.querySelector('.js-nameForm'),
//     nameInput = nameForm.querySelector('input'),
//     greeting = document.querySelector('.js-greetings');

// function saveName(text){
//     localStorage.setItem(user_ls, text);
// }

// function askforName(){
//     nameForm.classList.add(show);
//     nameForm.addEventListener('submit', handler);
// }

// function handler(event){
//     event.preventDefault();
//     const currentValue = nameInput.value;
//     addName(currentValue);
//     saveName(currentValue);
// }

// function addName(text){
//     nameForm.classList.remove(show);
//     greeting.classList.add(show);
//     greeting.innerText = `왔냐, ${text}`;
// }

// function loadName(){
//     const currentUser = localStorage.getItem(user_ls);
//     if(currentUser === null){
//         askforName();
//     }else{
//         addName(currentUser);
//     }
// }

function init(){
    getTime();
    setInterval(getTime,1000);

    loadName();
}
init();
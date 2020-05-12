const addBtnEl = document.getElementById('addBtn');
const subtractBtnEl = document.getElementById('subtractBtn');
const inputEl = document.getElementById('input');
const displayEl = document.getElementById('display');


addBtnEl.addEventListener('click', addNumber);
subtractBtnEl.addEventListener('click', subtractNumber);

function addNumber (){
   displayEl.innerText = parseInt(inputEl.value) + parseInt(displayEl.innerText);
}

function subtractNumber (){
    displayEl.innerText = parseInt(displayEl.innerText) - inputEl.value;
}


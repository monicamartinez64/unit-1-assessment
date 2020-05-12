const addBtnEl = document.getElementById('addBtn');
const subtractBtnEl = document.getElementById('subtractBtn');
const inputEl = document.getElementById('input');
const displayEl = document.getElementById('display');


addBtnEl.addEventListener('click', addNumber);
subtractBtnEl.addEventListener('click', subtractNumber);

function render() {
    displayEl.textContent = inputEl.value
}

function addNumber (){
   displayEl.value += inputEl.value;
    render();
}

function subtractNumber (){
    displayEl.value -= inputEl.value;
    render();
}


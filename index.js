let saveEl = document.getElementById("save-el");
let countEl= document.getElementById("count-el");

console.log("saveEl");

let count = 0;


function increment() {
    count += 1;
    countEl.innerText = count;
}

function decrease() {
    count -= 1;
    countEl.innerText = count;
}

function reset() {
    count = 0;
    countEl.innerText = count;
}

function save() {
    let entries = count + " - ";

    saveEl.textContent += entries;

    console.log(count);
}
let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let ul = document.getElementById('ulLi');

let items = localStorage.getItem("todoItems") ? JSON.parse(localStorage.getItem("todoItems")) : [];
let str = "";
items.forEach((e, i) => {
    str += `<li>${e}</li>`;
})
ul.innerHTML = str;

btn.addEventListener('click', () => {
    let val = inp.value;
    items = [...items, val];
    localStorage.setItem("todoItems", JSON.stringify(items));
    let strHtml = "";
    items.forEach((e, i) => {
        strHtml += `<li>${e}</li>`;
    })
    ul.innerHTML = strHtml;
    inp.value = "";
})
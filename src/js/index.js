const addForm = document.querySelector('.td-add-form');
const addInput = document.querySelector('.td-add-input');
const toDoParent = document.querySelector('.todos');

let toDoArray = [];

//配列要素
addForm.addEventListener("submit", e => {
    e.preventDefault();
    toDoArray.push(addInput.value);
    toDoParent.innerHTML = "";

    toDoArray.forEach( ToDo => {
     
        const toDoEl = document.createElement('li');   
        toDoEl.classList.add("todos--list");
        toDoEl.textContent = ToDo;
        toDoParent.appendChild(toDoEl);
    });
    addInput.value = "";
})

// addForm.addEventListener("submit", e => {
//     e.preventDefault();
//     toDoArray.push(addInput.value);
//     console.log(toDoArray);
//     toDoParent.textContent(toDoArray);
// })
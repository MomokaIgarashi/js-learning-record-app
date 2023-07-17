const addForm = document.querySelector('.td-add-form');
const addInput = document.querySelector('.td-add-input');
const toDoParent = document.querySelector('.todos');

let toDoArray = [];

addForm.addEventListener("submit", e => {
    e.preventDefault();
    toDoArray.push(addInput.value);
    toDoParent.innerHTML = "";
    
    toDoArray.forEach( ToDo => {
        const toDoEl = document.createElement('li');   
        toDoEl.classList.add("todos--list");
        toDoEl.textContent = ToDo;
        toDoParent.appendChild(toDoEl);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            toDoEl.remove();
        });
        toDoEl.appendChild(deleteBtn);
    });
    
    addInput.value = "";
});

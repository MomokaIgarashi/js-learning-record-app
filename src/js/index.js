// const addForm = document.querySelector('.td-add-form');
// const addCategory = document.querySelector('.td-add-category');
// const addInput = document.querySelector('.td-add-input');
// const toDoParent = document.querySelector('.todos');

// let toDoArray = [];

// addForm.addEventListener("submit", e => {
//     e.preventDefault();
//     toDoArray.push(addInput.value, addCategory.value);
//     toDoParent.innerHTML = "";
    
//     toDoArray.forEach( ToDo => {
//         const toDoEl = document.createElement('li');   
//         toDoEl.classList.add("todos--list");
//         toDoEl.textContent = ToDo;
//         toDoParent.appendChild(toDoEl);
        
//         const deleteBtn = document.createElement('button');
//         deleteBtn.textContent = "Delete";
//         deleteBtn.addEventListener("click", () => {
//             toDoEl.remove();
//         });
//         toDoEl.appendChild(deleteBtn);
//     });
    
//     addInput.value = "";
// });

const addForm = document.querySelector('.td-add-form');
const addCategory = document.querySelector('.td-add-category');
const addInput = document.querySelector('.td-add-input');
const addTime = document.querySelector('.td-add-time');
const toDoParent = document.querySelector('.todos');
let toDoArray = [];

addForm.addEventListener("submit", e => {
    e.preventDefault();
    toDoArray.push({ 
        text: addInput.value, 
        category: addCategory.value,
        time: addTime.value   
    });
    toDoParent.innerHTML = "";
    
    toDoArray.forEach( toDoItem => {
        const toDoEl = document.createElement('li');   
        toDoEl.classList.add("todos--list");

        const categorySpan = document.createElement('span');
        categorySpan.textContent = toDoItem.category;
        toDoEl.appendChild(categorySpan);
        
        const textSpan = document.createElement('span');
        textSpan.textContent = toDoItem.text;
        toDoEl.appendChild(textSpan);

        const timeSpan = document.createElement('span');
        timeSpan.textContent = toDoItem.time;
        toDoEl.appendChild(timeSpan);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            toDoEl.remove();
            toDoArray = toDoArray.filter(item => item !== toDoItem);
        });
        toDoEl.appendChild(deleteBtn);
        
        toDoParent.appendChild(toDoEl);
    });
    
    addInput.value = "";
    addCategory.value = "";
});


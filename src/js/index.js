const addForm = document.querySelector('.td-add-form');
const addDate = document.querySelector('.td-add-date');
const addCategory = document.querySelector('.td-add-category');
const addInput = document.querySelector('.td-add-input');
const addTime = document.querySelector('.td-add-time');
const toDoParent = document.querySelector('.todos');
let toDoArray = [];

addForm.addEventListener("submit", e => {
    e.preventDefault();
    toDoArray.push({ 
        date: addDate.value,
        category: addCategory.value,
        text: addInput.value, 
        time: addTime.value   
    });
    toDoParent.innerHTML = "";

    toDoArray.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    toDoArray.forEach( toDoItem => {
        const toDoEl = document.createElement('li');   
        toDoEl.classList.add("todos--list");

        const dateSpan = document.createElement('span');
        dateSpan.textContent = toDoItem.date;
        toDoEl.appendChild(dateSpan);

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

    addDate.value = "";
    addCategory.value = "";
    addInput.value = "";
    addTime.value = ""
});


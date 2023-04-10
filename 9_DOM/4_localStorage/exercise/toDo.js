// get document add button and list element
let addBtn = document.querySelector('#addBtn');
let listElement = document.querySelector('ul');

// get storageArray from local storage
let storageArr = localStorage.getItem('toDoList') == null ? 
                    [] : JSON.parse(localStorage.getItem('toDoList'));   

// update list using storageArr
for (let item of storageArr) {
    // create new variables we will use & define them
    let newLi   = document.createElement('li');
    let newBtn  = document.createElement('button');
    newLi.innerText = item;
    newBtn.innerText = 'Done!';
    newLi.append(newBtn);
    listElement.append(newLi);
};

// listen for add button click
addBtn.addEventListener('click', function(event) {
    event.preventDefault();
    let newItem = document.querySelector('#item');
    let newLi   = document.createElement('li');
    let newBtn  = document.createElement('button');
    
    // create list element with "Done!" button & append to ul
    newLi.innerText = newItem.value;
    newBtn.innerText = 'Done!';
    newLi.append(newBtn);
    listElement.append(newLi);

    // add item to storage array and update local storage
    storageArr.push(newItem.value);
    localStorage.setItem('toDoList', JSON.stringify(storageArr));

    form.reset();
});

// listen for remove list element button click
let valRemove;
let valRemIdx;
listElement.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') { 
        // remove item from storage array and update local storage
        valRemove = event.target.parentElement.firstChild.textContent;
        valRemIdx = storageArr.indexOf(valRemove);
        storageArr.splice(valRemIdx, valRemIdx !== -1 ? 1 : 0); 
        localStorage.setItem('toDoList', JSON.stringify(storageArr));

        // remove element from list
        event.target.parentElement.remove();
    }
});
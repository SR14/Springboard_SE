// 1. Select the section with an id of container without using querySelector.
let container = document.getElementById('container')

// 2. Select the section with an id of container using querySelector.
document.querySelector('section')

// 3. Select all of the list items with a class of “second”.
document.getElementsByClassName('second')

// 4. Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector('ol').getElementsByClassName('third')

// 5. Give the section with an id of container the text “Hello!”.
container.prepend('Hello!')

// 6. Add the class main to the div with a class of footer.
let footer = document.querySelectorAll('div')[1];
footer.classList.add('main');

// 7. Remove the class main on the div with a class of footer.
footer.classList.remove('main');

// 8. Create a new li element.
let newLi = document.createElement('li');

// 9. Give the li the text “four”.
newLi.innerText = 'four';

// 10. Append the li to the ul element.
let ul = document.querySelector('ul');
ul.append(newLi)

// 11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
let olLitems = document.querySelector('ol').querySelectorAll('li');
for (let item of olLitems) {
    item.style.backgroundColor = 'green'};

// 12. Remove the div with a class of footer
footer.remove()
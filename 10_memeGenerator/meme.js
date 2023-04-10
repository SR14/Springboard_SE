// intialize create button & meme container
let counter = 0;
let form = document.querySelector('form');
let createBtn = document.querySelector('#createBtn');
let memeContainer = document.querySelector('#meme-container');

// get storage array from localStorage
let memeArrays = localStorage.getItem('memeArrays') == null ?
                    [] : JSON.parse(localStorage.getItem('memeArrays'));

function createMeme(topText, bottomText, url) {
    // keep track of meme number to set meme id 
    counter++;

    // create meme divs and remove button
    let newDiv = document.createElement('div');
    let memeDiv = document.createElement('div');
    let topTextDiv = document.createElement('div');
    let bottomTextDiv = document.createElement('div');
    let removeBtn = document.createElement('button');

    // define div attributes
    newDiv.setAttribute('id', `meme${counter}`)
    memeDiv.setAttribute('class', 'meme');
    memeDiv.style.backgroundImage = `url(${url})`;
    
    topTextDiv.setAttribute('class', 'text');
    topTextDiv.innerText = topText;
    bottomTextDiv.setAttribute('class', 'text');
    bottomTextDiv.innerText = bottomText;
    removeBtn.innerText = 'Delete Meme'

    // append meme components and button do memeContainer
    memeDiv.append(topTextDiv);
    memeDiv.append(bottomTextDiv);
    newDiv.append(memeDiv);
    newDiv.append(removeBtn);
    memeContainer.append(newDiv);

};

// create memes stored in localStorage
for (let memeArr of memeArrays) {
    // retrieve form inputs
    let topText    = memeArr[0];
    let bottomText = memeArr[1];
    let url        = memeArr[2];

    // call create meme function
    createMeme(topText, bottomText, url);
};

// listen for create meme button
createBtn.addEventListener('click', function(event) {
    event.preventDefault();
    // retrieve form inputs
    let topText    = document.querySelector('#topText').value;
    let bottomText = document.querySelector('#bottomText').value;
    let url        = document.querySelector('#url').value;

    // call createMeme function
    createMeme(topText, bottomText, url);

    // append meme to local storage
    memeArrays.push([topText, bottomText, url]);
    localStorage.setItem('memeArrays', JSON.stringify(memeArrays));

    form.reset();
});

let memeRemoveID;
let memeRemove;
// listen for delete meme button 
memeContainer.addEventListener('click', function(event) {
    if (event.target.tagName == 'BUTTON') {
        // get meme div ID and create a variable with its instance
        memeRemoveID = event.target.parentElement.id;
        memeRemove = document.querySelector(`#${memeRemoveID}`)

        // get number of previous siblings to get meme idx
        let memeIdx = -1;
        let prevSibling = memeRemove;
        while((prevSibling = prevSibling.previousSibling) != null) {memeIdx++;};

        // delete meme from memeContainer and storage array
        memeRemove.remove()
        memeArrays.splice(memeIdx, 1);
        localStorage.setItem('memeArrays', JSON.stringify(memeArrays));
    }
});
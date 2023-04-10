let h1 = document.querySelector('h1');


function colorGen() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}


setInterval(function() {
    let letters = document.querySelectorAll('.letter');
    for (let letter of letters) {
        letter.style.color = colorGen();}
    }, 500);
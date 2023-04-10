function countDown(number) {
    number--;
    const printInterval = setInterval(
        function() {
            if (!(number == 0)) {
                console.log(number);
                number--;

            } else {
                console.log("DONE!")
                clearInterval(printInterval)

            } 
        }, 1000)
}

function randomGame() {
    let counter = 0;
    const counterID = setInterval(
        function() {
            let random = Math.random()

            if (random <= 0.75 ) {
                counter++;

            } else {
                counter++;
                console.log(`Number of tries it took to get a number greater than 0.75: ${counter}`);
                console.log(`This is our final number: ${random}`)
                clearInterval(counterID);

            } 
        }, 1000)
}
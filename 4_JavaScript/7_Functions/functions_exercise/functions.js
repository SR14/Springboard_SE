// difference
function difference(x1, x2) {
    let diff = x1 - x2;
    return diff 
}

// product
function product(x1, x2) {
    let prod = x1 * x2;
    return prod
}

// printDay
function printDay(number) {
    switch(number) {
        case 1:
            return 'Sunday'
        
        case 2:
            return 'Monday'

        case 3:
            return 'Tuesday'

        case 4:
            return 'Wednesday'

        case 5:
            return 'Thursday'

        case 6:
            return 'Friday'
        
        case 7:
            return 'Saturday'

        default:
            return undefined
    }
}

// lastElement
function lastElement(array) {
    return array[array.length - 1];
}

//  numberCompare
function numberCompare(x1, x2) {
    if (x1 > x2) {
        return 'First is greater';
    } else if (x1 < x2) {
        return 'Second is greater'
    } else if (x1 == x2) {
        return 'Numbers are equal'
    }

}

// singleLetterCount
function singleLetterCount (word, letter) {
    // process word and letter into lowercase
    word = word.toLowerCase();
    letter  = letter.toLowerCase();
    // begin count at 0
    count = 0;
    for (let w of word) {
        if (w == letter) {
            count += 1;
        }
    }
    return count;
}

// multipleLetterCount
function multipleLetterCount(str) {
    // preprocess string
    str = str.toLowerCase();
    // initialize letter count
    let letterCount = {};
    for (let idx = 0; idx < str.length; idx++) {
        if (str[idx] in letterCount) {
            letterCount[str[idx]] += 1;
        } else {
            letterCount[str[idx]] = 1;
        }
    }
    return letterCount    
}

// arrayManipulation
function arrayManipulation(array, command, location, value) {
    if (command == 'remove') {
        if (location == 'beginning') {
            value = array.shift();
            return value
        } else {
            value = array.pop();
            return value
        }
    } else {
        if (location == 'beginning') {
            array.unshift(value);
            return array
        } else {
            array.push(value);
            return array
        }
    }

}

// isPalindrome
function isPalindrome(palindrome) {
    // pre-process palindrome
    palindrome = palindrome.toLowerCase();
    palindrome = palindrome.replace(/\s+/g, '');

    // reversed palindrome
    let revPal = [];
    for (let idx = palindrome.length-1; idx >= 0; idx--) {
        revPal.push(palindrome[idx]);
    }
    revPal = revPal.join('');
    return revPal == palindrome
}
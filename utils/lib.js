const {par} = require("./index");
const {ask} = require("./read-from-terminal");

function isEven(number) {
    return number % 2 === 0;
}

function isNanOrNot(number) {
    return Number.isNaN(number);
}

function isInteger(number) {
    return Number.isInteger(number);
}

function isOdd(number) {
    return number % 2 !== 0;
}

function isTwoDigit(number) {
    return number > 9 && number < 100;
}

function isThreeDigit(number) {
    return number > 99 && number < 1000;
}

function isFourDigit(number) {
    return number > 999 && number < 10000;
}

function isPalindrome(number) {
    let digitOne = number % 10;
    let digitTwo = Math.trunc(number / 10) % 10;
    let digitThree = Math.trunc(number / 100);

    return digitOne === digitThree && digitThree !== digitTwo;
}

function isNatural(number) {
    return number > 0 && isInteger(number);
}

function isValidTriangle(n1, n2, n3) {
    return n1 + n2 + n3 === 180;
}

function findMaximumValue(number1, number2, number3) {
    return Math.max(number1, number2, number3);
}

function findMinimumValue(number1, number2, number3) {
    return Math.min(number1, number2, number3);
}

function doubleValues(number) {
    return number * 2;
}

function changeSign(number) {
    return number * -1;
}

function squareNumber(number) {
    return number ** 2;
}

function sortedDescending(array) {
    for (let firstIndex = 0; firstIndex < array.length; firstIndex++) {
        let secondIndex = firstIndex >= 1 ? firstIndex - 1 : 0;
        if (array[secondIndex] - array[firstIndex] < 0) return false;
    }
    return true;
}

function sortedAscending(array) {
    for (let firstIndex = 0; firstIndex < array.length; firstIndex++) {
        let secondIndex = firstIndex + 1;
        if (array[secondIndex] - array[firstIndex] < 0) return false;
    }
    return true;
}

function factorial(n) {
    let answer = 1;
    if (n === 0 || n === 1) {
        return answer;
    } else {
        for (let i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}

function checkPrime(number) {
    if (number <= 1) {
        return false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
}

function random(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function perfectNumber(number) {
    let array = [];

    for (let i = 1; i < 1000; i++) {
        if (number % i === 0) {
            array.push(i);
        }
    }

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    if (number === sum - number) {
        return true;
    } else return false;

}

function duplicateNumbers(numbers) {
    const unique = Array.from(new Set(numbers));

    if (numbers.length === unique.length) {
        return true;
    } else {
        return false;
    }
}

async function readString(question) {
    return ask(question);
}

function isLowerCase(str) {
    for (let i = 0; i < str.length; i++) {
        if (!(str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123)) {
            return false
        }
    }
    return true;
}

function isUpperCase(str) {
    for (let i = 0; i < str.length; i++) {
        if (!(str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91)) {
            return false
        }
    }
    return true;
}

function doesContainSomeSymbols(str) {
    function doesContain(str, i) {
        return (
            str.charCodeAt(i) === 32 ||
            str.charCodeAt(i) === 33 ||
            str.charCodeAt(i) === 34 ||
            str.charCodeAt(i) === 39 ||
            str.charCodeAt(i) === 40 ||
            str.charCodeAt(i) === 41 ||
            str.charCodeAt(i) === 44 ||
            str.charCodeAt(i) === 46 ||
            str.charCodeAt(i) === 58 ||
            str.charCodeAt(i) === 63
        );
    }

    for (let i = 0; i < str.length; i++) {
        if (!doesContain(str, i)) {
            return false;
        }
    }
    return true;
}

function isAlphabetWithSymbols(str) {
    function doesContain(str, i) {
        return (
            str.charCodeAt(i) === 32 ||
            str.charCodeAt(i) === 33 ||
            str.charCodeAt(i) === 34 ||
            str.charCodeAt(i) === 39 ||
            str.charCodeAt(i) === 40 ||
            str.charCodeAt(i) === 41 ||
            str.charCodeAt(i) === 44 ||
            str.charCodeAt(i) === 46 ||
            str.charCodeAt(i) === 58 ||
            str.charCodeAt(i) === 63 ||
            str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91 ||
            str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123
        );
    }

    for (let i = 0; i < str.length; i++) {
        if (!doesContain(str, i)) {
            return false;
        }
    }
    return true;
}

function isLowerAndUpperCase(str) {
    function doesContain(str, i) {
        return (
            str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91 ||
            str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123
        );
    }

    for (let i = 0; i < str.length; i++) {
        if (!doesContain(str, i)) {
            return false;
        }
    }
    return true;
}


module.exports = {
    isEven,
    isInteger,
    isOdd,
    isTwoDigit,
    isThreeDigit,
    isFourDigit,
    isPalindrome,
    isNatural,
    isValidTriangle,
    findMaximumValue,
    findMinimumValue,
    doubleValues,
    changeSign,
    squareNumber,
    isNanOrNot,
    sortedDescending,
    sortedAscending,
    factorial,
    checkPrime,
    random,
    perfectNumber,
    duplicateNumbers,
    readString,
    isLowerCase,
    isUpperCase,
    doesContainSomeSymbols,
    isAlphabetWithSymbols,
    isLowerAndUpperCase
}
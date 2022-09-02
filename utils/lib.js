const {par} = require("./index");

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

function findMaximumValue (number1, number2, number3) {
    return Math.max(number1, number2, number3);
}

function findMinimumValue (number1, number2, number3) {
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

function areaOfCube(side) {
    return side ** 3;
}

function lateralSurface(side) {
    return 6 * side * side;
}

function sortedDescending(array) {
    let second_index;
    for (let first_index = 0; first_index < array.length; first_index++) {
        second_index = first_index - 1;
        if (array[second_index] - array[first_index] < 0) return false;
    }
    return true;
}

function sortedAscending(array) {
    let second_index;
    for (let first_index = 0; first_index < array.length; first_index++) {
        second_index = first_index + 1;
        if (array[second_index] - array[first_index] < 0) return false;
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
    }else return false;

}

function duplicateNumbers(numbers) {
    const unique = Array.from(new Set(numbers));

    if(numbers.length === unique.length) {
        return true;
    } else {
        return false;
    }
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
    areaOfCube,
    lateralSurface,
    isNanOrNot,
    sortedDescending,
    sortedAscending,
    factorial,
    checkPrime, random, perfectNumber, duplicateNumbers
}
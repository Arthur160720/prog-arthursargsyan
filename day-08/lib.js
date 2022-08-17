function isEven(number) {
    return number % 2 === 0;
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

function isPalindrome(number) {
    let digitOne = number % 10;
    let digitTwo = Math.trunc(number / 10) % 10;
    let digitThree = Math.trunc(number / 100);

    return digitOne === digitThree && digitThree !== digitTwo;
}

function isNatural(number) {
    return number > 0;
}

function isValidTriangle(n1, n2, n3) {
    return n1 + n2 + n3 === 180;
}

function findMaximumValue (...numbers) {
    return Math.max(...numbers);
}

function findMinimumValue (...numbers) {
    return Math.min(...numbers);
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

module.exports = {
    isEven,
    isInteger,
    isOdd,
    isTwoDigit,
    isThreeDigit,
    isPalindrome,
    isNatural,
    isValidTriangle,
    findMaximumValue,
    findMinimumValue,
    doubleValues,
    changeSign,
    squareNumber
}


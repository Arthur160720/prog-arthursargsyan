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

module.exports = {
    isEven,
    isInteger,
    isOdd,
    isTwoDigit,
    isThreeDigit,
    isPalindrome,
    isNatural,
    isValidTriangle
}


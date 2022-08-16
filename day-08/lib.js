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

module.exports = {
    isEven,
    isInteger,
    isOdd,
    isTwoDigit,
    isThreeDigit
}


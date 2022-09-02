const {isEven, isPalindrome, isNatural, isValidTriangle, findMaximumValue, findMinimumValue, doubleValues, changeSign, squareNumber, isInteger, isOdd, isTwoDigit, isThreeDigit,
    sortedAscending,
    sortedDescending,
    factorial,
    isFourDigit, checkIsArrayOrNot,
    checkPrime,
    perfectNumber,
    duplicateNumbers
} = require('../utils/lib');

describe('test math functions', function () {
    test('test sum', () => {
        expect(isEven( 2)).toBe(true);
        expect(isEven( 13)).toBe(false);
    });

    test('check is it palindrome number', ()=>{
        expect(isPalindrome(797)).toBe(true);
        expect(isPalindrome(697)).toBe(false);
    })

    test('check is it natural number', ()=>{
        expect(isNatural(5)).toBe(true);
        expect(isNatural(0)).toBe(false);
        expect(isNatural(-45)).toBe(false);
    })

    test('check is it triangle valid', ()=>{
        expect(isValidTriangle(60, 90, 30)).toBe(true);
        expect(isValidTriangle(90, 40, 60)).toBe(false);
    })

    test('find maximum value', ()=>{
        expect(findMaximumValue(4, 5, 6)).toBe(6);
        expect(findMaximumValue(-5, 4, 7)).toBe(7);
    })

    test('find minimum value', ()=>{
        expect(findMinimumValue(4, 5, 6)).toBe(4);
        expect(findMinimumValue(-5, 4, -3000)).toBe(-3000);
    })

    test('double values', ()=>{
        expect(doubleValues(4)).toBe(8);
        expect(doubleValues(3)).toBe(6);
    })

    test('change sign of number', ()=>{
        expect(changeSign(4)).toBe(-4);
        expect(changeSign(-3)).toBe(3);
    })

    test('find square of the number', ()=>{
        expect(squareNumber(3)).toBe(9);
        expect(squareNumber(9)).toBe(81);
    })

    test('check if number is integer', () => {
        expect(isInteger(12)).toBe(true);
        expect(isInteger(12.78)).toBe(false);
        expect(isInteger(-12)).toBe(true);
    })

    test('test if number is odd', () => {
        expect(isOdd(9)).toBe(true);
        expect(isOdd(14)).toBe(false);
    });

    test('check if number is two digit', () => {
        expect(isTwoDigit(45)).toBe(true);
        expect(isTwoDigit(489)).toBe(false);
    })

    test('check if number is three digit', () => {
        expect(isThreeDigit(45)).toBe(false);
        expect(isThreeDigit(489)).toBe(true);
    })

    test('check if number is four digit', () => {
        expect(isFourDigit(159)).toBe(false);
        expect(isFourDigit(4897)).toBe(true);
    })

    test('check if array sorted in ascending order or not', () => {
        expect(sortedAscending([4, 5, 7, 9])).toBe(true);
        expect(sortedAscending([9, 8, 9])).toBe(false);
    })

    test('check if array sorted in descending order or not', () => {
        expect(sortedDescending([4, 5, 7, 9])).toBe(false);
        expect(sortedDescending([9, 8, 7, 3])).toBe(true);
    })

    test('check factorial', () => {
        expect(factorial(5)).toBe(120);
        expect(factorial(4)).toBe(24);
    })

    test('check prime numbers', () => {
        expect(checkPrime(5)).toBe(true);
        expect(checkPrime(4)).toBe(false);
    })

    test('check perfect numbers', () => {
        expect(perfectNumber(6)).toBe(true);
        expect(perfectNumber(50)).toBe(false);
    })

    test('check duplicate numbers', () => {
        expect(duplicateNumbers([1, 2, 8, 6])).toBe(true);
        expect(duplicateNumbers([1, 4, 5, 1])).toBe(false);
    })
});
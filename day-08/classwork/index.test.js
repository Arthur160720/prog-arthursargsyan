const {isEven, isInteger, isOdd, isTwoDigit, isThreeDigit} = require('../lib');

describe('test math functions', function () {
    test('test if number is even', () => {
        expect(isEven(2)).toBe(true);
        expect(isEven(13)).toBe(false);
    });


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
});

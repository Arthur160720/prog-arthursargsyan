const {isEven, isPalindrome, isNatural, isValidTriangle, findMaximumValue, doubleValues, changeSign, squareNumber} = require('../lib');

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
        expect(findMaximumValue(4, 5, 6, 5000));
        expect(findMaximumValue(-5, 4, 7, -3000));
    })

    test('find minimum value', ()=>{
        expect(findMaximumValue(4, 5, 6, 5000));
        expect(findMaximumValue(-5, 4, 7, -3000));
    })

    test('double values', ()=>{
        expect(doubleValues(4));
        expect(doubleValues(3));
    })

    test('change sign of number', ()=>{
        expect(changeSign(4));
        expect(changeSign(-3));
    })

    test('find square of the number', ()=>{
        expect(squareNumber(3));
        expect(squareNumber(9));
    })
});
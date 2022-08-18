const {sum, diff} = require('./math');

describe('test math functions', function () {
    test('test sum', () => {
        expect(sum(1, 2)).toBe(3);
        expect(sum(7, 8)).toBe(15);
    });

    test('test diff', () => {
        expect(diff(1, 2)).toBe(-1);
        expect([1, 2, 3, 'null'].length).toBe(4);
        expect(Number('23')).toBe(23);

        expect(() => {
            meetup.date.getDate()
        }).toThrowError(new Error("meetup is not defined"));
    });

    test('test product', ()=>{
        expect(10 * 10).toBe(100);
    })
});
const {isEven} = require('./lib');

describe('test math functions', function () {
    test('test sum', () => {
        expect(isEven( 2)).toBe(true);
        expect(isEven( 13)).toBe(false);
    });
});
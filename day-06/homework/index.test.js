const {isEven, areaOfCube, lateralSurface} = require('./lib');

describe('test math functions', function () {
    test('test sum', () => {
        expect(isEven( 2)).toBe(true);
        expect(isEven( 13)).toBe(false);
    });
});

const {areaOfCube} = require('./lib');
const {lateralSurface} = require('./lib');

    test('test sum', () => {
        expect(areaOfCube(2)).toBe(2 ** 3);
        expect(lateralSurface(5)).toBe(6 * 5 * 5);
    });

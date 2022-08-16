function isEven(number) {
    return number % 2 === 0;
}

function areaOfCube(side) {
    return side ** 3;
}

function lateralSurface(side) {
    return 6 * side * side;
}

module.exports = {
    isEven,
    areaOfCube,
    lateralSurface
}
const {ask, close, readNumber, readArray} = require('../utils/read-from-terminal');
const problems = require('./problems.json');
const {ProblemRegistry} = require("../utils/index");
const {
    isInteger,
    isEven,
    isOdd,
    isNatural,
    isNanOrNot,
    isTwoDigit,
    sortedDescending,
    sortedAscending,
    isThreeDigit,
    factorial, isFourDigit, checkIsArrayOrNot, checkPrime, random, perfectNumber
} = require("../utils/lib");
const {par, problemLogging} = require("../utils");

async function processInputs() {
    await codeGoesHere();
    close();
}

let problemsRegistry = new ProblemRegistry(problems, 'am');
problemsRegistry.registerExecutors(
    problem1);

async function codeGoesHere() {
    const showProblems = async () => problemsRegistry.showAllProblems();
    const executeProblem = async () => {
        let number = +await ask('which problem you want to execute type the number of the problem - ');
        await problemsRegistry.execute(number);
    }
    await showProblems();
    await executeProblem();
}

processInputs();


/** 1.  */

async function problem1() {

    function isNaturalOrNot(row, col) {
        return !isNatural(row, col);
    }

    function isIntegerOrNot(min, max) {
        return !isInteger(min, max);
    }

    let row = await readNumber('input number of rows - ', 'wrong input', isNaturalOrNot);
    let col = await readNumber('input number of cols - ', 'wrong input', isNaturalOrNot);
    let min = await readNumber('input minimum limit - ', 'wrong input', isIntegerOrNot);
    let max = await readNumber('input maximum limit - ', 'wrong input', isIntegerOrNot);

    let matrix = [];
    for (let i = 0; i < row; i++) {
        matrix.push([]);
        for (let j = 0; j < col; j++) {
            matrix[i][j] = random(min, max);
        }
    }

    console.log(matrix);

    // let a = matrix.reduce(function (p, c) {
    //     let rowSort = c.sort((a, b) => a - b);
    //     p.push(rowSort);
    //     return p;
    // }, [])
    // console.log(a);
    //
    // let b = matrix.reduce(function (p, c) {
    //     let rowSort = c.sort((a, b) => b - a);
    //     p.push(rowSort);
    //     return p;
    // }, [])
    // console.log(b);

    let array = [];
    for (let i = 0; i < matrix.length; i++) {
            array.push(Math.max(...matrix[i]));
            matrix[i].reduce((p, c) => Math.max(...matrix[i]), [])

        }
    console.log(array);

    matrix.reduce(function (p, c) {
        p.push(c.reduce((p, c) => Math.max(...c)));
        return p;

    }, [])

}
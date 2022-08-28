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


/** 1. Տրված է բնական թվերի մատրից: Արտածել մատրիցի
 ա) այն տողերի քանակը, որոնցում կա գոնե երկու կենտ թիվ,
 բ) այն տողերի քանակը, որոնց բոլոր տարրերը՝ սկսած երկ-
 րորդից, բաժանվում են առաջին տարրի վրա,
 գ) այն  տողերի  քանակը,  որոնցում  կա  գոնե  մեկ  կատարյալ
 թիվ,
 դ) այն տողերի տարրերի գումարները, որոնցում կա 5
 թվանշանը պարունակող գոնե մեկ տարր,
 ե) այն  տողերի  տարրերի  գումարները,  որոնցում  կա  գոնե
 երկու պարզ թիվ,
 զ) այն տողերը, որոնց տարրերի գումարը պարզ թիվ է: */

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

    let oddsCount = 0;
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].filter(x => x % 2 === 1).length >= 2) {
            oddsCount += 1;
        }
    }

    console.log(`a) quantity of rows that contain 2 and more odd numbers = ${oddsCount}`);


    for (let i = 0; i < matrix.length; i++) {
        console.log(`b) division of rows elements = ${matrix[i].reduce((p, c) => c % p === 0)}`);
    }

    let perfectNumsCount = 0;
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].filter(x => perfectNumber(x)).length >= 1) {
            perfectNumsCount += 1;
        }
    }
    console.log(`c) quantity of rows that contain 1 and more perfect number ${perfectNumsCount}`);


    let numsCount = 0;
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].filter(x => x === 5).length >= 1) {
            numsCount += matrix[i].reduce((p, c) => p + c);
        }
    }

    console.log(`d) sum of rows that contain 1 and more 5 numbers = ${numsCount}`);

    let numsCount1 = 0;
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].filter(x => checkPrime(x)).length >= 2) {
            numsCount1 += matrix[i].reduce((p, c) => p + c);
        }
    }
    console.log(`e) sum of rows that contain 2 and more prime numbers = ${numsCount1}`);


    let array = [];
    for (let i = 0; i < matrix.length; i++) {
        array.push(matrix[i].reduce((p, c) => p + c));
    }

    console.log(`f) rows digit sum is prime = ${array.filter(x => checkPrime(x))}`);
}



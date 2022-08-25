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
    factorial, isFourDigit, checkIsArrayOrNot
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


/** 1. Նկարագրել ֆունկցիա, որն արգումենտում ստանում է n
 բնական թիվը եւ վերադարձնում է այդ թվի
 ա) ամենամեծ թվանշանի կարգահամարը (եթե այդ թվանշա-
 նը թվում հանդիպում է մի քանի անգամ վերադարձնել ա-
 մենաձախի կարգահամարը),
 բ) բոլոր պարզ բաժանարարների քանակը,
 գ) 16-ական ներկայացման մեջ զրոների քանակը,
 դ) հարեւան զույգ թվանշանների քանակը: */

async function problem1() {

    function isNaturalOrNot(number) {
        return isNatural(number);
    }

    let number = await readNumber('insert number - ', 'wrong input', isNaturalOrNot);
    console.log("aa")
}
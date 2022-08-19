const {ask, close} = require('../utils/read-from-terminal');
const problems = require('./problems.json');
const {ProblemRegistry, readNumber} = require("../utils/index");
const {isInteger, isEven, isOdd, isNatural, isNanOrNot} = require("../utils/lib");
const {par, problemLogging} = require("../utils");
async function processInputs() {
    await codeGoesHere();
    close();
}
let problemsRegistry = new ProblemRegistry(problems, 'am');
problemsRegistry.registerExecutors(
    problem1, problem2);
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


/**
 15. Արտածել տրված բնական թվի
 ա) թվանշանների գումարը, քանակը, արտադրյալը, բ) կենտ թվանշաններից ամենափոքրը,
 գ) 4-ից մեծ կենտ թվանշանների գումարը,
 դ) 7-ից փոքր զույգ թվանշանների արտադրյալը,
 ե) ամենամեծ եւ ամենափոքր թվանշանների տարբերության քառակուսին:
 */

async function problem1() {
    async function showResult() {

        function checkNumberIsInteger(number) {
            return !isNatural(number);
        }

        let number = await readNumber('enter natural number', `${par('entered number is not satisfy for requirement')}`, checkNumberIsInteger);
        let sumOfDigits = 0;
        let quantityOfDigits = 0;
        let productOfDigits = 1;
        let arr = [];
        let minimumOfDigitsOdd = "";
        let sumOfOddDigits = 0;
        let productOfEvenDigits = 1;
        let arr1 = [];
        let max = "";
        let min = "";
        let squareOfMaxAndMinDifference = "";

        while (number) {
            let digit = number % 10;
            sumOfDigits += digit;
            quantityOfDigits ++;
            productOfDigits *= digit;

            if (isOdd(digit)) {
           arr.push(digit);
            }
            minimumOfDigitsOdd = Math.min(...arr);

            if (digit > 4 && isOdd(digit)) {
                sumOfOddDigits += digit;
            }

            if (digit < 7 && isEven(digit)) {
                productOfEvenDigits *= digit;
            }

            arr1.push(digit);
            min = Math.min(...arr1);
            max = Math.max(...arr1);
            squareOfMaxAndMinDifference = (max - min) ** 2;

            number = Math.trunc(number / 10);
        }
        console.log(`a) sum of digits = ${sumOfDigits}\n   quantity of digits = ${quantityOfDigits}\n   product of digits = ${productOfDigits}`);
        console.log(`b) Minimum of odd digits = ${minimumOfDigitsOdd}`);
        console.log(`c) sum of odd digits = ${sumOfOddDigits}`);
        console.log(`d) product of even digits = ${productOfEvenDigits}`);
        console.log(`e) square of max and min difference = ${squareOfMaxAndMinDifference}`);


    }

    const requirement = `1. enter natural number`;
    await problemLogging(requirement, showResult);
}


/* 2. Տեղերով փոխել տրված թվի առաջին եւ վերջին թվանշաննե- րը: Օրինակ` 8547-ից պետք է ստացվի 7548: */

async function problem2() {
    async function showResult() {

        function checkNumberIsNaN(number) {
            return isNanOrNot(number);
        }

        let number = await readNumber('enter number - ', `${par('entered number is not satisfy for requirement')}`, checkNumberIsNaN);
        let changeNumber = "";

            let lastDigit = number % 10;
            let firstDigit = Math.trunc(number / 1000);
            let secondAndThirdNumber = Math.trunc(Math.trunc(number % 1000) / 10);

        let result = changeNumber + lastDigit + secondAndThirdNumber + firstDigit;

        console.log(`swap first and last digits = ${result}`);
    }
    const requirement = `1. enter number`;
    await problemLogging(requirement, showResult);
}

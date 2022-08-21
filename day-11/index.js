const {ask, close} = require('../utils/read-from-terminal');
const problems = require('./problems.json');
const {ProblemRegistry, readNumber} = require("../utils/index");
const {isInteger, isEven, isOdd, isNatural, isNanOrNot, isTwoDigit, sortedDescending, sortedAscending} = require("../utils/lib");
const {par, problemLogging} = require("../utils");
async function processInputs() {
    await codeGoesHere();
    close();
}
let problemsRegistry = new ProblemRegistry(problems, 'am');
problemsRegistry.registerExecutors(
    problem1, problem2, problem3, problem4, problem5, problem6);
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
        let array = [];
        let minimumOfDigitsOdd = "";
        let sumOfOddDigits = 0;
        let productOfEvenDigits = 1;
        let array1 = [];
        let max = "";
        let min = "";
        let squareOfMaxAndMinDifference = "";

        while (number) {
            let digit = number % 10;
            sumOfDigits += digit;
            quantityOfDigits ++;
            productOfDigits *= digit;

            if (isOdd(digit)) {
           array.push(digit);
            }
            minimumOfDigitsOdd = Math.min(...array);

            if (digit > 4 && isOdd(digit)) {
                sumOfOddDigits += digit;
            }

            if (digit < 7 && isEven(digit)) {
                productOfEvenDigits *= digit;
            }

            array1.push(digit);
            min = Math.min(...array1);
            max = Math.max(...array1);
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


/** 16. Տեղերով փոխել տրված թվի առաջին եւ վերջին թվանշանները: Օրինակ` 8547-ից պետք է ստացվի 7548: */

async function problem2() {
    async function showResult() {

        function checkNumberIsNatural(number) {
            return !isNatural(number);
        }

        let number = await readNumber('enter number - ', `${par('entered number is not satisfy for requirement')}`, checkNumberIsNatural);
        let array = [];

        while (number) {

            let lastDigit = number % 10;
            array.unshift(lastDigit);
            number = Math.trunc(number / 10);
        }

        let array1 = array.shift();
        let array2 = array.pop();
        let array3 = array2 + array + array1;
        let result = array3.replaceAll(',', '');

        console.log(`swap first and last digits = ${result}`);
    }
    const requirement = `16. enter number`;
    await problemLogging(requirement, showResult);
}


/**17.  Տրված է բնական թիվ: Արտածել YES, եթե
ա) թվի թվանշանների մեջ կա 3 թվանշան,
բ) թվի թվանշանների մեջ չկա 5 թվանշան,
գ) թվի թվանշանները աճման կարգով են դասավորված,
դ) թվի թվանշանները նվազման կարգով չեն դասավորված,
ե) թվի թվանշանների գումարը մեծ է քսանից,
զ) թվի թվանշանների արտադրյալը փոքր է երեսունից:
Հակառակ դեպքում արտածել NO*/

async function problem3() {
    async function showResult() {

        function checkNumberIsNatural(number) {
            return !isNatural(number);
        }

        let number = await readNumber('enter natural number - ', `${par('entered number is not satisfy for requirement')}`, checkNumberIsNatural);
        let array = [];
        let sumOfDigits = 0;
        let productOfDigits = 1;

        while (number) {
            let digit = number % 10;
            array.unshift(digit);
            sumOfDigits += digit;
            productOfDigits *= digit;
            number = Math.trunc(number / 10);
        }

        if (array.includes(3)){
            console.log('a) YES');
        }else  console.log('a) NO');

        if (array.includes(5)){
            console.log('b) NO');
        }else  console.log('b) YES');

        if (sortedAscending(array) === true) {
            console.log("c) YES");
        }else console.log("c) NO");

        if (sortedDescending(array) === true) {
            console.log("d) NO");
        }else console.log("d) YES");

        if (sumOfDigits > 20) {
            console.log("e) YES");
        }else console.log("e) NO");

        if (productOfDigits < 30) {
            console.log("f) YES");
        }else console.log("f) NO");

    }

    const requirement = `17. enter natural number`;
    await problemLogging(requirement, showResult);
}


/** 25. Արտածել տրված բնական թիվը՝ շրջելով այն եւ նրա ամեն մի
թվանշանից  հետո  ավելացնելով  0:  Օրինակ՝  125-ի  դեպքում
պետք է արտածել 502010: */

async function problem4() {
    async function showResult() {

        function checkNumberIsNatural(number) {
            return !isNatural(number);
        }

        let number = await readNumber('enter natural number - ', `${par('entered number is not satisfy for requirement')}`, checkNumberIsNatural);
        let arraySwap = [];

        while (number) {

            let lastDigit = number % 10;
            arraySwap.push(lastDigit, 0);
            number = Math.trunc(number / 10);
        }

        let concatArrayElements = arraySwap.join();
        let result = concatArrayElements.replaceAll(",", "");

        console.log(`result is ${result}`);
    }
    const requirement = `25. enter natural number`;
    await problemLogging(requirement, showResult);
}


/** 26. Արտածել  YES,  եթե  տրված  բնական  թիվը  հավասար  է  իր
 թվանշանների գումարի կրկնապատիկին, NO՝ հակառակ դեպքում: */

async function problem5() {
    async function showResult() {

        function checkNumberIsNatural(number) {
            return !isNatural(number);
        }

        let number = await readNumber('enter natural number - ', `${par('entered number is not satisfy for requirement')}`, checkNumberIsNatural);
        let number1 = number;
        let sumOfDigits = 0;

        while (number) {

            let lastDigit = number % 10;
            sumOfDigits += lastDigit;
            number = Math.trunc(number / 10);
        }

        if (number1 === sumOfDigits * 2) {
            console.log('YES');
        } else console.log('NO');

    }

    const requirement = `26. enter natural number`;
    await problemLogging(requirement, showResult);
}


/** 24. Ստուգել՝ տրված թվի թվանշանները ձախից աջ դիտարկելիս
 արդյո՞ք  կազմում  են    նվազող  հաջորդականություն,  թե  ոչ:
 Օրինակ՝  76431  թվի  համար  պատասխանը  դրական  է,  իսկ
 6331 եւ 9782 թվերի համար՝ բացասական: */

async function problem6() {
    async function showResult() {

        function checkNumberIsNatural(number) {
            return !isNatural(number);
        }

        let number = await readNumber('enter natural number - ', `${par('entered number is not satisfy for requirement')}`, checkNumberIsNatural);
        let array = [];

        while (number) {

            let lastDigit = number % 10;
            array.unshift(lastDigit);
            number = Math.trunc(number / 10);
        }

        let concatArrayItems = array.join();
        let result = concatArrayItems.replaceAll(",", "");

        if (sortedDescending(array) === true) {
            console.log(`digits are sorted in descending order - ${result}`);
        }else console.log(`${par('digits are not sorted in descending order')} - ${result}`);
    }

    const requirement = `24. enter natural number`;
    await problemLogging(requirement, showResult);
}

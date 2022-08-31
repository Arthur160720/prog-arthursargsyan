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
    factorial, isFourDigit, checkIsArrayOrNot, checkPrime
} = require("../utils/lib");
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


/** 1. Նկարագրել ֆունկցիա, որն արգումենտում ստանում է n
 բնական թիվը եւ վերադարձնում է այդ թվի
 ա) ամենամեծ թվանշանի կարգահամարը,
 բ) բոլոր պարզ բաժանարարների քանակը,
 գ) հարեւան զույգ թվանշանների քանակը: */

async function problem1() {

    function isNaturalOrNot(number) {
        return !isNatural(number);
    }

    let number = await readNumber('insert number - ', 'wrong input', isNaturalOrNot);
    let array = [];
    let indexOfMaxDigit = 0;

    while (number) {
        let digit = number % 10;
        array.unshift(digit);
        number = Math.trunc(number / 10);
    }


    for (let i = 0; i < array.length; i++) {
        if (indexOfMaxDigit < array[i]) {
            indexOfMaxDigit = i;
        }
    }
    console.log(`a) the index of the max digit = ${indexOfMaxDigit}`);


    let quantity = 0;
    array.forEach(function (element) {
        const isPrime = checkPrime(element);
        if (isPrime) {
            quantity++;
        }
    });
    console.log(`b) quantity of prime numbers = ${quantity++}`)


    let quantity1 = 0;
    for (let i = 0; i < array.length; i++) {
        if (isEven(array[i]) && isEven(array[i + 1])) {
            quantity1++;
        }
    }
    console.log(`c) quantity of even neighbour digits = ${quantity1}`);

}


/** 2. Նկարագրել ֆունկցիա, որն արգումենտում ստանում է n
 բնական թիվը եւ վերադարձնում է
 ա) թե  քանի  անգամ  է  դրանում  հանդիպում  առաջին  թվա-
 նշանը,
 բ) դրանում կրկնվող թվանշանների միջին թվաբանականը,
 գ) true, եթե դրանում թվանշանները դասավորված են
 չնվազման կարգով, եւ վերադարձնում է false՝ հակառակ
 դեպքում,
 դ) true, եթե դրանում  կան կրկնվող թվանշաններ, եւ վերա-
 դարձնում է false՝ հակառակ դեպքում: */

async function problem2() {

    function isNaturalOrNot(number) {
        return !isNatural(number);
    }

    let number = await readNumber('insert number - ', 'wrong input', isNaturalOrNot);
    let array = [];
    let quantity = 0;
    let sum = 0;
    let quantity1 = 0;

    while (number) {
        let digit = number % 10;
        array.unshift(digit);

        if (digit === 1) {
            quantity++;
        }

        number = Math.trunc(number / 10);
    }

    // for (let i = 0; i < array.length; i++) {
    //     for (let j = i + 1; j < array.length; j++) {
    //         if (array[i] === array[j]) {
    //             sum += array[j];
    //         }
    //     }
    // }

    console.log(`quantity of number 1 = ${quantity}`);
    //console.log(sum, quantity1);


}
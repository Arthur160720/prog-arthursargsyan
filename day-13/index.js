const {ask, close, readArray} = require('../utils/read-from-terminal');
const problems = require('./problems.json');
const {ProblemRegistry, readNumber} = require("../utils/index");
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
const {par, problemLogging, parb, parg} = require("../utils");

async function processInputs() {
    await codeGoesHere();
    close();
}

let problemsRegistry = new ProblemRegistry(problems, 'am');
problemsRegistry.registerExecutors(
    problem1, problem2, problem3);

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


/** 36. Ներածել  թվեր:  Արտածել  դրանցից  բացասականների  քառա-
 կուսիների արտադրյալը, քանի դեռ այն մեծ չէ 400-ից: */

async function problem1() {

    let array = await readArray("insert array - ");

    let product = 1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            let square = array[i] ** 2;
            product *= square;
        }
    }
    return product < 400 ? console.log(product) : console.log('product is greater than 400');
}


/** 1. Տրված  է  ամբողջ  թվերի  հաջորդականություն:  Արտածել  այդ
 հաջորդականության
 ա) [-5,10] միջակայքին պատկանող տարրերի քանակը,
 բ) դրական եւ կենտ տարրերի քանակը,
 գ) 5-ից մեծ զույգ տարրերի գումարը,
 դ) 15-ից փոքր եւ 3-ին պատիկ տարրերի արտադրյալը,
 ե) բոլոր տարրերի միջին թվաբանականը,
 զ) բացասական  եւ  7-ին  պատիկ  տարրերի  միջին  թվաբա-
 նականը,
 է) 3-ով սկսվող թվերի քանակը,
 ը) բոլոր զույգ դրական տարրերը, այնուհետեւ բոլոր բացա-
 սական տարրերը: */

async function problem2() {
    function integerNumbers(array) {
        console.log(`${parb('input array is:')} ${parg(array)}`);

        let quantity = 0;
        array.filter(x => isInteger(x)).forEach(x => x >= -5 && x <= 10 ? quantity++ : null);
        console.log(`a) the quantity of elements belonging to the range [-5, 10] = ${quantity}`);

        let quantity1 = 0;
        array.filter(x => isInteger(x)).forEach(x => x % 2 === 1 ? quantity1++ : null);
        console.log(`b) the quantity of positive and odd elements = ${quantity1}`);

        let sum = 0;
        array.filter(x => isInteger(x)).forEach(x => x > 5 && x % 2 === 0 ? sum += x : null);
        console.log(`c) the sum of elements greater than 5 = ${sum}`);

        let product = 1;
        array.filter(x => isInteger(x)).forEach(x => x < 15 && x !== 0 && x % 3 === 0 ? product *= x : null);
        console.log(`d) the product of less than 15 = ${product}`);

        let sum1 = 0;
        let quantity2 = 0;
        array.filter(x => isInteger(x)).forEach(x => {
            sum1 += x;
            quantity2++;
        });
        if (quantity2 > 0) {
            console.log(`e) the arithmetic average = ${sum1 / quantity2}`);
        }

        let sum2 = 0;
        let quantity3 = 0;
        array.filter(x => isInteger(x)).forEach(x => {
            if (x < 0 && x % 7 === 0) {
                sum2 += x;
                quantity3++;
            }
        });

        if (quantity3 > 0) {
            console.log(`f) the arithmetic average of negative = ${sum2 / quantity3}`);
        }

        let array1 = array.filter(x => isInteger(x));
        let quantity4 = 0;
        for (let i = 0; i < array1.length; i++) {
            let sliceFirstIndex = Number(array1[i].toString().replaceAll("-", "").slice(0, 1));
            if (sliceFirstIndex === 3) {
                quantity4++;
            }
        }
        console.log(`g) quantity of first digit begins 3 = ${quantity4}`);

        let array2 = array.filter(x => isInteger(x) && x > 0 && x % 2 === 0);
        let array3 = array.filter(x => isInteger(x) && x < 0);
        let concatArray = array2.concat(array3);
        console.log(`h) quantity of even and positive numbers and then negative numbers = ${concatArray}`);
    }

    integerNumbers([1, 2.5, 0, -7, -3, 8, 4.6, 30, 9, -34, 6, -5, 13, 314]);
}


/** 2. Տրված  է  իրական  թվերի  հաջորդականություն: Արտածել  այդ
 հաջորդականության
 ա) այն տարրերի քանակը, որոնք փոքր են իրենց կարգահա-
 մարի քառակուսուց,
 բ) բոլոր  տարրերի  միջին  թվաբանականի  եւ  տարրերի  տար-
 բերությունները,
 գ) այն  տարրերի  քանակը,  որոնք  փոքր  են  իրենց  ձախ  եւ  աջ
 հարեւանների կիսագումարից,
 դ) մեծագույն տարրը եւ նրա կարգահամարը,
 ե) մեծագույն եւ փոքրագույն տարրերի տարբերությունը,
 զ) առաջին մեծագույն եւ վերջին փոքրագույն տարրերի միջեւ
 գտնվող անդամների  գումարը,
 է) մեծագույն եւ մեծությամբ երկրորդ տարրերը,
 ը) դրական  տարրերից  փոքրագույնի  արժեքը  ( եթե  դրական
 տարր  չկա,  արտածել  համապատասխան  հաղորդագրու-
 թյուն): */

async function problem3() {
    function realNumbersArray(array) {
        console.log(`${parb('input array is:')} ${parg(array)}`);

        let quantity = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i] < i ** 2) {
                quantity++;
            }
        }
        console.log(`a) the number of elements that are small in their index square = ${quantity}`);


        let sum = 0;
        let quantity1 = 0;
        let arithmeticAverage;
        let difference = "";

        for (let i = 0; i < array.length; i++) {
            sum += array[i];
            quantity1++;
            arithmeticAverage = sum / quantity1;
        }

        for (let i = 0; i < array.length; i++) {

            if (arithmeticAverage > array[i]) {
                difference += arithmeticAverage - array[i] + "\n";
            } else difference += array[i] - arithmeticAverage + "\n";
        }
        console.log(`b) the arithmetic mean of all elements and the difference of elements \n${difference}`);


        let quantity2 = 0;
        for (let i = 1; i < array.length - 1; i++) {
            let leftNeighbour = array[i - 1];
            let rightNeighbour = array[i + 1];
            let halfPrice = (leftNeighbour + rightNeighbour) / 2;

            if (array[i] < halfPrice) {
                quantity2++;
            }
        }
        console.log(`c) the number of elements that are smaller to their left and right from half of the neighbors ${quantity2}`);
    }

    realNumbersArray([4, 1, 2, 2.2, 8, -5, 6]);
}


const {ask, close} = require('../../utils/read-from-terminal');
const {problemLogging, par, parg} = require('../../utils/index');
const {isEven} = require('./lib');
const {isInteger, isOdd, isNatural} = require("../../day-08/lib");
const {readNumber} = require("../../utils");

async function processInputs() {
    await codeGoesHere();
    close();
}

const problems = {
    problem1: '1. Insert a number and print YES if number is even otherwise NO.\n',
    problem2: '2. insert two integers and print their sum\n',
    problem3: '3. Ներածել երկու բնական թիվ եւ արտածել դրանց միջին թվաբանականն ու միջին երկրաչափականը:\n',
    problem4: '4. Տրված է խորանարդի կողմը: Ստանալ խորանարդի ծավալը եւ կողմնային մակերեւույթի մակերեսը:\n',
    problem5: '5. Տրված են ուղղանկյան երկու կողմերի երկարությունները: Գտնել այդ ուղղանկյան ա) պարագիծը, բ) մակերեսը, գ) անկյունագիծը:\n',
    problem6: '6. Տրված են եռանկյան երեք կողմերի երկարությունները: Գտնել այդ եռանկյանա) պարագիծը, բ) մակերեսը, գ) որեւէ երկու կողմերի կազմած անկյան սինուսը, դ) որեւէ երկու կողմերի կազմած անկյան կոսինուսը, ե) որեւէ կողմին տարված բարձրությունը:\n',
    problem7: '7. Ներածել ուղղանկյուն եռանկյան էջերը, գտնել եւ արտածել ներքնաձիգն ու եռանկյան մակերեսը:\n',
    problem8: '8. Ներածել շրջանագծի տրամագիծը եւ արտածել նրա երկարությունը:\n',
    problem9: '9. Ներածել քառանիշ թիվ: Արտածել թվի թվանշանները` դրանց միջեւ տեղադրելով գծիկներ (օր. 6508, 6-5-0-8):\n',
    problem10: '10. Ներածել մի թիվ: Այն բազմապատկել 5-ով, գումարել 6, բազմապատկել 4-ով, գումարել 9, բազմապատկել 5-ով: Ջնջել ստացված թվի վերջին երկու թվանշանները, հանել 1 եւ արտածել:\n',
    problem11: ' 11. Ներածել ծննդյան թիվ եւ տարիք: Տարեթիվը կրկնապատկել, գումարել 5, բազմապատկել 50-ով, գումարել տարիքը, հանել 250 եւ բաժանել 100-ի: Ստացված թիվն արտածել էկրանին ստորակետից հետո 2 նիշի ճշտությամբ:\n'
}

async function codeGoesHere() {
    for (const key in problems) {
        console.log(parg(problems[key]));
    }

    let number = +await ask('which problem you want to execute type from 1 to 11 - ');

    switch (number) {
        case 1:
            await problem1();
            break;
        case 2:
            await problem2();
            break;

        case 3:
            await problem3();
            break;

        case 4:
            await problem4();
            break;

        case 5:
            await problem5();
            break;

        case 6:
            await problem6();
            break;

        case 7:
            await problem7();
            break;

        case 8:
            await problem8();
            break;

        case 9:
            await problem9();
            break;

        case 10:
            await problem10();
            break;

        case 11:
            await problem11();
            break;

        default:
            console.log('no such problem');
            break;
    }
}

processInputs();


/**
 1. Insert a number and print YES if number is even otherwise NO.
 */

async function problem1() {
    async function showResult() {

        function checkNumberIsInteger(number) {
            return !(isInteger(number));
        }

        let number = await readNumber('enter integer number - ', `${par('entered number is not satisfy for requirement')}`, checkNumberIsInteger);

        if (isEven(number)) {
            console.log("YES");
        } else console.log("NO");
    }

    const requirement = `1. Insert a number and print YES if number is even otherwise NO.`;
    await problemLogging(requirement, showResult);
}


/**
 2. insert two integers and print their sum.
 */

async function problem2() {
    async function showResult() {

        function checkNumberIsInteger(number) {
            return !(isInteger(number));
        }

        let number1 = await readNumber('enter first integer number - ', `${par('entered number is not satisfy for requirement')}`, checkNumberIsInteger);
        let number2 = await readNumber('enter second integer number - ', `${par('entered number is not satisfy for requirement')}`, checkNumberIsInteger);
        let result = number1 + number2;

        console.log(result);
    }

    const requirement = `insert two integers and print their sum.`;
    await problemLogging(requirement, showResult);
}


/**
 3. Ներածել երկու բնական թիվ եւ արտածել դրանց միջին թվաբանականն ու միջին երկրաչափականը:
 */

async function problem3() {
    async function showResult() {

        function checkNumberIsNatural(number) {
            return !isNatural(number);
        }

        let number1 = await readNumber('enter first natural number - ', `${par('entered number is not satisfy for requirement')}`, checkNumberIsNatural);
        let number2 = await readNumber('enter second natural number - ', `${par('entered number is not satisfy for requirement')}`, checkNumberIsNatural);

            console.log(`arithmetic mean of numbers ${number1} and ${number2} = ${(number1 + number2) / 2}`);
            console.log(`geometric mean of numbers ${number1} and ${number2} = ${Math.pow(number1 * number2, 1 / 2)}`);
    }

    const requirement = `3. Ներածել երկու բնական թիվ եւ արտածել դրանց միջին թվաբանականն ու միջին երկրաչափականը:`;
    await problemLogging(requirement, showResult);
}


/**
 4. Տրված է խորանարդի կողմը: Ստանալ խորանարդի ծավալը եւ կողմնային մակերեւույթի մակերեսը:
 */
async function problem4() {
    function logResultArea(side) {
        return `area of a cube with a side of ${side} = ${areaOfCube(side)}`;
    }
    function logResultLateralSurface(side) {
        return `lateral surface of a cube with a side of ${side} = ${lateralSurface(side)}`;
    }

    function showResult() {
        console.log(logResultArea(10))
        console.log(logResultLateralSurface(5))
    }
    const requirement = ` 4. Տրված է խորանարդի կողմը: Ստանալ խորանարդի ծավալը եւ կողմնային մակերեւույթի մակերեսը:`
    await problemLogging(requirement, showResult);

}

/**
5. Տրված են ուղղանկյան երկու կողմերի երկարությունները: Գտնել այդ ուղղանկյան ա) պարագիծը, բ) մակերեսը, գ) անկյունագիծը:
 */
async function problem5() {
    function logResultPerimeter(side1, side2) {
        return `perimeter of a rectangle with a sides of ${side1} and ${side2} = ${perimeterOfRectangle(side1, side2)}`;
    }
    function logResultArea(side1, side2) {
        return `area of a rectangle with a sides of ${side1} and ${side2} = ${areaOfRectangle(side1, side2)}`;
    }
    function logResultDiagonal(side1, side2) {
        return `diagonal of a rectangle with a sides of ${side1} and ${side2} = ${areaOfDiagonal(side1, side2)}`;
    }

    function showResult() {
        console.log(logResultPerimeter(10, 15))
        console.log(logResultArea(5, 10))
        console.log(logResultDiagonal(3,4))
    }
    const requirement = `5. Տրված են ուղղանկյան երկու կողմերի երկարությունները: Գտնել այդ ուղղանկյան ա) պարագիծը, բ) մակերեսը, գ) անկյունագիծը:`
    await problemLogging(requirement, showResult);

}

/**
 6. Տրված են եռանկյան երեք կողմերի երկարությունները: Գտնել այդ եռանկյանա) պարագիծը, բ) մակերեսը, գ) որեւէ երկու կողմերի կազմած անկյան սինուսը, դ) որեւէ երկու կողմերի կազմած անկյան կոսինուսը, ե) որեւէ կողմին տարված բարձրությունը:
 */
async function problem6() {

    function logResultPerimeter(side1, side2, side3) {
        return `perimeter of a triangle with a sides of ${side1}, ${side2} nad ${side3} = ${perimeterOfTriangle(side1, side2, side3)}`;
    }

    function logResultArea(side1, side2, side3) {
        return `area of a triangle with a sides of ${side1}, ${side2} nad ${side3}= ${areaOfTriangleWith3Sides(side1, side2, side3)}`;
    }

    function logResultSin(side1, side2, side3){
        return `the sine of the angle formed by the two sides ${side1} and ${side2}, when 3rd side is ${side3}= ${sinAngleFormedBySide1AndSide2(side1, side2, side3)}`
    }

    function showResult() {
        console.log(logResultPerimeter(10, 14, 9))
        console.log(logResultArea(8, 10, 15))
        console.log(logResultSin(10, 10, 10))
    }

    const requirement = ` 6. Տրված են եռանկյան երեք կողմերի երկարությունները: Գտնել այդ եռանկյանա) պարագիծը, բ) մակերեսը, գ) որեւէ երկու կողմերի կազմած անկյան սինուսը, դ) որեւէ երկու կողմերի կազմած անկյան կոսինուսը, ե) որեւէ կողմին տարված բարձրությունը:`
    await problemLogging(requirement, showResult);

}

/**
 7. Ներածել ուղղանկյուն եռանկյան էջերը, գտնել եւ արտածել ներքնաձիգն ու եռանկյան մակերեսը:
 */

async function problem7() {
    async function showResult() {
        let side1 = +await ask('enter side 1: ');
        let side2 = +await ask('enter side 2: ');

        let isValidSide = side1 > 0 && side2 > 0


        if (isValidSide) {
            console.log(`hypotenuse of the right triangle  = ${Math.pow((side1 ** 2) + (side2 ** 2), 1/2)}`);
            console.log(`area of the right triangle = ${side1 * side2 / 2}`);
        } else {
            isValidSide = false
            while (!isValidSide) {
                side1 = +await ask('side must by above zero. please enter valid side 1: ');
                side2 = +await ask('side must by above zero. please enter valid side 2: ');
                if (side1 > 0 && side2 > 0){
                    isValidSide = true
                }
            }
            console.log(`hypotenuse = ${(side1 ** 2 + side2 ** 2) ** 1/2}`);
            console.log(`area of the right triangle = ${side1 * side2 / 2}`);
        }
    }

    const requirement = ` 7. Ներածել ուղղանկյուն եռանկյան էջերը, գտնել եւ արտածել ներքնաձիգն ու եռանկյան մակերեսը:`;
    await problemLogging(requirement, showResult);
}

/**
 8. Ներածել շրջանագծի տրամագիծը եւ արտածել նրա երկարությունը:
 */

async function problem8() {
    async function showResult() {
        let diameter = +await ask('enter diameter: ');



        let isValidDiameter = diameter > 0 && typeof diameter === "number"


        if (isValidDiameter) {
            console.log(`length of circle = ${2 * Math.PI * diameter / 2}`)
        } else {
            isValidDiameter = false
            while (!isValidDiameter) {
                diameter = +await ask('diameter must by number and above zero. please enter valid diameter: ');
                if (diameter > 0 && typeof diameter === "number"){
                    isValidDiameter = true
                }
            }
            console.log(`length of circle = ${2 * Math.PI * diameter / 2}`)
        }
    }

    const requirement = `8. Ներածել շրջանագծի տրամագիծը եւ արտածել նրա երկարությունը:`;
    await problemLogging(requirement, showResult);
}

/**
 9. Ներածել քառանիշ թիվ: Արտածել թվի թվանշանները` դրանց միջեւ տեղադրելով գծիկներ (օր. 6508, 6-5-0-8):
 */
async function problem9() {
    async function showResult() {
        let number = +await ask('enter four-digit number: ');

        let isValid = typeof number === 'number' && number > 999 && number < 10000 || number < -999 && number > -10000


        if (isValid) {
            console.log(`eg ${number}:   ${Math.floor(number / 1000) % 10}-${Math.floor(number / 100) % 10}-${Math.floor(number / 10 )% 10}-${number % 10}`);
        } else {
            isValid = false
            while (!isValid) {
                number = +await ask('enter FOUR-DIGIT NUMBER 😡: ');
                if (typeof number === 'number' && number > 999 && number < 10000 || number < -999 && number > -10000){
                    isValid = true
                }
            }

            console.log(`eg ${number}:   ${Math.floor(number / 1000) % 10}-${Math.floor(number / 100) % 10}-${Math.floor(number / 10 )% 10}-${number % 10}`);
        }
    }

    const requirement = `9. Ներածել քառանիշ թիվ: Արտածել թվի թվանշանները\` դրանց միջեւ տեղադրելով գծիկներ (օր. 6508, 6-5-0-8):`;
    await problemLogging(requirement, showResult);
}

/**
 10. Ներածել մի թիվ: Այն բազմապատկել 5-ով, գումարել 6, բազմապատկել 4-ով, գումարել 9, բազմապատկել 5-ով: Ջնջել ստացված թվի վերջին երկու թվանշանները, հանել 1 եւ արտածել:
 */

async function problem10() {
    async function showResult() {
        let number = +await ask('enter number: ');

        let isValid = typeof number === 'number';


        if (isValid) {
            console.log(`result = ${Math.floor((((number * 5 + 6) * 4 + 9) * 5) / 100) - 1}`);
        } else {
            isValid = false
            while (!isValid) {
                number = +await ask('enter FOUR-DIGIT NUMBER 😡: ');
                if (typeof number === 'number'){
                    isValid = true
                }
            }
            console.log(`result = ${Math.floor((((number * 5 + 6) * 4 + 9) * 5) / 100) - 1}`);
        }
    }

    const requirement = `10. Ներածել մի թիվ: Այն բազմապատկել 5-ով, գումարել 6, բազմապատկել 4-ով, գումարել 9, բազմապատկել 5-ով: Ջնջել ստացված թվի վերջին երկու թվանշանները, հանել 1 եւ արտածել:`;
    await problemLogging(requirement, showResult);
}

/**
 11. Ներածել ծննդյան թիվ եւ տարիք: Տարեթիվը կրկնապատկել, գումարել 5, բազմապատկել 50-ով, գումարել տարիքը, հանել 250 եւ բաժանել 100-ի: Ստացված թիվն արտածել էկրանին ստորակետից հետո 2 նիշի ճշտությամբ:
 */

async function problem11() {
    async function showResult() {
        let birthNumber = +await ask('enter birth number: ');
        let age = +await ask('enter age: ');

        let isValid = typeof birthNumber === 'number'
            && typeof age === "number"
            && birthNumber > (new Date().getFullYear()) - 120
            && birthNumber < new Date().getFullYear()
            && age > 0
            && age < 120;


        if (isValid) {
            console.log(`result = ${(((birthNumber * 2 + 5) * 50 + age - 250) / 100).toFixed(2)}`);
        } else {
            isValid = false
            while (!isValid) {
                let birthNumber = +await ask('enter birth number: ');
                let age = +await ask('enter age: ');
                if (typeof birthNumber === 'number'
                    && typeof age === "number"
                    && birthNumber > (new Date().getFullYear()) - 120
                    && birthNumber < new Date().getFullYear()
                    && age > 0
                    && age < 120){
                    isValid = true
                }
            }
            console.log(`result = ${(((birthNumber * 2 + 5) * 50 + age - 250) / 100).toFixed(2)}`);
        }
    }

    const requirement = `11. Ներածել ծննդյան թիվ եւ տարիք: Տարեթիվը կրկնապատկել, գումարել 5, բազմապատկել 50-ով, գումարել տարիքը, հանել 250 եւ բաժանել 100-ի: Ստացված թիվն արտածել էկրանին ստորակետից հետո 2 նիշի ճշտությամբ:`;
    await problemLogging(requirement, showResult);
}


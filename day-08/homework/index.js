const {ask, close} = require('../../utils/read-from-terminal');
const {problemLogging, par, parg, readNumber} = require('../../utils/index');
const {isEven, isInteger, isThreeDigit, isPalindrome, isNatural, isValidTriangle, findMaximumValue, findMinimumValue,
    doubleValues, changeSign, squareNumber
} = require('../lib');

async function processInputs() {
    await codeGoesHere();
    close();
}

const problems = {
    problem5: '15. Տրված է a եռանիշ թիվը: Արտածել YES, եթե\n' +
        '   ա) նրա բոլոր թվանշանները տարբեր են,\n' +
        '   բ) նրա թվանշանները կազմում են աճող հաջորդականություն,\n' +
        '   գ) այն սիմետրիկ (պոլինդրոմ) է, այսինքն աջից ձախ եւ ձախից\n' +
        '   աջ նույն կերպ է կարդացվում: Հակառակ դեպքում արտածել NO:',
    problem6: '6. Տրված են x,y թվերը: Արտածել YES, եթե (x,y) կոորդինատներով կետն ընկած է կոորդինատային հարթության\n' +
        '   ա) երկրորդ քառորդում,\n' +
        '   բ) չորրորդ քառորդում,\n' +
        '   գ) երկրորդ կամ երրորդ քառորդում,\n' +
        '   դ) առաջին կամ երրորդ քառորդում: Հակառակ դեպքում արտածել NO:',
    problem9: '9. Տրված են a,b,c բնական թվերը, որոնք եռանկյան կողմերի երկարություններն են: Արտածել YES, եթե a,b,c կողմերով եռանկյունը\n' +
        '   ա) հավասարակողմ է,\n' +
        '   բ) հավասարասրուն է,\n' +
        '   գ) ուղղանկյուն է:\n' +
        '   Հակառակ դեպքում արտածել NO:',
    problem12: '12. Տրված են երեք ամբողջ թվեր: Արտածել ա) դրանցից փոքրագույնի արժեքը,\n' +
        '    բ) դրանցից մեծագույնի արժեքը\n' +
        '    գ) մեծությամբ երկրորդ թվի արժեքը:',
    problem16: 'Տրված են a,b,c իրական թվերը: Եթե դրանք դասավորված են աճման կամ նվազման կարգով, դրանց արժեքները կրկնապատկել,\n' +
        '    հակառակ դեպքում յուրաքանչյուրի նշանը փոխել: Արտածել ստացված թվերը:',
    problem22: '22. Ներածել n թիվը: Արտածել 1, եթե դրա միավորների թվանշա- նը 3-ով մեծ է հարյուրավորների թվանշանից, հակառակ դեպքում՝ այդ\n' +
        '    թվի քառակուսին:'
}

async function codeGoesHere() {
    for (const key in problems) {
        console.log(parg(problems[key]));
    }

    let number = +await ask('which problem you want to execute type from 1 to 22 - ');

    switch (number) {
        case 5:
            await problem5();
            break;

        case 6:
            await problem6();
            break;

        case 9:
            await problem9();
            break;

        case 12:
            await problem12();
            break;

        case 16:
            await problem16();
            break;

        case 22:
            await problem22();
            break;

        default:
            console.log('no such problem');
            break;
    }
}

processInputs();


/*5. Տրված է a եռանիշ թիվը: Արտածել YES, եթե
   ա) նրա բոլոր թվանշանները տարբեր են,
   բ) նրա թվանշանները կազմում են աճող հաջորդականություն,
   գ) այն սիմետրիկ (պոլինդրոմ) է, այսինքն աջից ձախ եւ ձախից
   աջ նույն կերպ է կարդացվում: Հակառակ դեպքում արտածել NO:
*/

async function problem5() {
    async function showResult() {
        let number = +await ask('enter three digit number ');

        while (!isThreeDigit(number)) {
            number = +await ask(`${par('enter three digit number')}`);
        }

        let digitOne = number % 10;
        let digitTwo = Math.trunc(number / 10) % 10;
        let digitThree = Math.trunc(number / 100);

        if (digitOne === digitTwo && digitTwo === digitThree) {
            console.log("a) YES");
        }else console.log("a) NO");

        if (digitOne > digitTwo && digitTwo > digitThree) {
            console.log("b) YES");
        }else console.log("b) NO");

        if (isPalindrome(number)) {
            console.log("c) YES");
        }else console.log("c) NO");

    }

    const requirement = `5. enter three digit number`;
    await problemLogging(requirement, showResult);
}


/*6. Տրված են x,y թվերը: Արտածել YES, եթե (x,y) կոորդինատներով կետն ընկած է կոորդինատային հարթության
   ա) երկրորդ քառորդում,
   բ) չորրորդ քառորդում,
   գ) երկրորդ կամ երրորդ քառորդում,
   դ) առաջին կամ երրորդ քառորդում: Հակառակ դեպքում արտածել NO:
   */

async function problem6() {
    async function showResult() {
        let coordinateX = +await ask('enter x coordinate ');
        let coordinateY = +await ask('enter y coordinate ');

        while (coordinateX === 0) {
            coordinateX = +await ask(`${par('enter x coordinate')}`);
        }

        while (coordinateY === 0) {
            coordinateY = +await ask(`${par('enter y coordinate')}`);
        }

        if (coordinateX < 0 && coordinateY > 0 || coordinateX < 0 && coordinateY < 0) {
            console.log("a) YES");
        }else console.log("a) NO");

        if (coordinateX > 0 && coordinateY > 0 || coordinateX > 0 && coordinateY < 0) {
            console.log("b) YES");
        }else console.log("b) NO");

        if (coordinateX < 0 && coordinateY > 0) {
            console.log("c) YES");
        }else console.log("c) NO");

        if (coordinateX > 0 && coordinateY < 0) {
            console.log("d) YES");
        }else console.log("d) NO");

    }

    const requirement = `6. enter x and y coordinates`;
    await problemLogging(requirement, showResult);
}


/*9. Տրված են a,b,c բնական թվերը, որոնք եռանկյան կողմերի երկարություններն են: Արտածել YES, եթե a,b,c կողմերով եռանկյունը
   ա) հավասարակողմ է,
   բ) հավասարասրուն է,
   գ) ուղղանկյուն է:
   Հակառակ դեպքում արտածել NO:
   */

async function problem9() {
    async function showResult() {
        let number1 = +await ask('enter first natural number ');
        let number2 = +await ask('enter second natural number ');
        let number3 = +await ask('enter third natural number ');

        while (!isNatural(number1)){
            console.log(`${par(`${number1} is not a natural number`)}`);
            number1 = +await ask('enter first natural number ');
        }

        while (!isNatural(number2)){
            console.log(`${par(`${number2} is not a natural number`)}`);
            number2 = +await ask('enter second natural number ');
        }

        while (!isNatural(number3)){
            console.log(`${par(`${number3} is not a natural number`)}`);
            number3 = +await ask('enter third natural number ');
        }

        while (!isValidTriangle(number1, number2, number3)) {
            console.log(`${par('invalid triangle')}`);
            number1 = +await ask('enter first natural number ');
            number2 = +await ask('enter second natural number ');
            number3 = +await ask('enter third natural number ');
        }

        if (number1 === number2 && number2 === number3) {
            console.log("a) YES");
        }else console.log("a) NO");

        if (number1 === number2 && number2 !== number3 || number1 === number3 && number3 !== number2 || number2 === number3 && number3 !== number1) {
            console.log("b) YES");
        }else console.log("b) NO");

        if (number1 === 90 || number2 === 90 || number3 === 90) {
            console.log("c) YES");
        }else console.log("c) NO");

    }

    const requirement = `9. enter three natural numbers`;
    await problemLogging(requirement, showResult);
}


/*12. Տրված են երեք ամբողջ թվեր: Արտածել ա) դրանցից փոքրագույնի արժեքը,
    բ) դրանցից մեծագույնի արժեքը
    գ) մեծությամբ երկրորդ թվի արժեքը:
    */

async function problem12() {
    async function showResult() {

        function checkIsItIntegerNumber(number) {
            return !isInteger(number);
        }

        let number1 = await readNumber('enter first integer number - ', `${par('entered number is not satisfy for requirement')}`, checkIsItIntegerNumber);
        let number2 = await readNumber('enter second integer number - ', `${par('entered number is not satisfy for requirement')}`, checkIsItIntegerNumber);
        let number3 = await readNumber('enter third integer number - ', `${par('entered number is not satisfy for requirement')}`, checkIsItIntegerNumber);

        console.log(`a) minimum is ${findMinimumValue(number1, number2, number3)}`);
        console.log(`b) maximum is ${findMaximumValue(number1, number2, number3)}`);

        if (number1 > number2 && number1 < number3 || number1 < number2 && number1 > number3) {
            console.log(`c) value of second biggest number is ${number1}`);
        }

        if (number2 > number1 && number2 < number3 || number2 < number1 && number2 > number3) {
            console.log(`c) value of second biggest number is ${number2}`);
        }

        if (number3 > number1 && number3 < number2 || number3 < number1 && number3 > number2) {
            console.log(`c) value of second biggest number is ${number3}`);
        }

    }

    const requirement = `12. enter three integer numbers`;
    await problemLogging(requirement, showResult);
}


/*16. Տրված են a,b,c իրական թվերը: Եթե դրանք դասավորված են աճման կամ նվազման կարգով, դրանց արժեքները կրկնապատկել,
    հակառակ դեպքում յուրաքանչյուրի նշանը փոխել: Արտածել ստացված թվերը:
    */

async function problem16() {
    async function showResult() {

        let number1 = +await ask('enter first number ');
        let number2 = +await ask('enter second number ');
        let number3 = +await ask('enter third number ');

        if (number1 < number2 && number2 < number3 || number1 > number2 && number2 > number3) {
            console.log(` ${number1} double value is ${doubleValues(number1)}\n ${number2} double value is ${doubleValues(number2)}\n ${number3} double value is ${doubleValues(number3)}`);
        }
        else console.log(` ${number1} change sign is ${changeSign(number1)}\n ${number2} change sign is ${changeSign(number2)}\n ${number3} change sign is ${changeSign(number3)}`);

    }

    const requirement = `16. enter three numbers`;
    await problemLogging(requirement, showResult);
}


/*22. Ներածել n թիվը: Արտածել 1, եթե դրա միավորների թվանշա- նը 3-ով մեծ է հարյուրավորների թվանշանից, հակառակ դեպքում՝ այդ
    թվի քառակուսին:
    */

async function problem22() {
    async function showResult() {

        function checkIsItThreeDigitNumber(number) {
            return !isThreeDigit(number);
        }

        let number = await readNumber('enter three digit number - ', `${par('entered number is not satisfy for requirement')}`, checkIsItThreeDigitNumber);

        let digitOne = number % 10;
        let digitThree = Math.trunc(number / 100);

        if (digitOne - digitThree === 3) {
            console.log(1);
        }else console.log(squareNumber(number));

    }

    const requirement = `22. enter three digit number`;
    await problemLogging(requirement, showResult);
}

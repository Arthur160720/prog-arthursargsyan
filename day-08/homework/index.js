const {ask, close} = require('../../utils/read-from-terminal');
const {problemLogging, par, parg} = require('../../utils/index');
const {isEven, isInteger, isThreeDigit, isPalindrome, isNatural, isValidTriangle} = require('../lib');

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
        '   Հակառակ դեպքում արտածել NO:'
}

async function codeGoesHere() {
    for (const key in problems) {
        console.log(parg(problems[key]));
    }

    let number = +await ask('which problem you want to execute type from 1 to 11');

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
        let result = "NO";

        while (!isThreeDigit(number)) {
            number = +await ask(`${par('enter three digit number')}`);
        }

        let digitOne = number % 10;
        let digitTwo = Math.trunc(number / 10) % 10;
        let digitThree = Math.trunc(number / 100);

        if (digitOne === digitTwo && digitTwo === digitThree) {
            result = "a) YES";
        }

        if (digitOne > digitTwo && digitTwo > digitThree) {
            result = "b) YES";
        }

        if (isPalindrome(number)) {
            result = "c) YES";
        }

        console.log(result);
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
        let result = "NO";

        while (coordinateX === 0) {
            coordinateX = +await ask(`${par('enter x coordinate')}`);
        }

        while (coordinateY === 0) {
            coordinateY = +await ask(`${par('enter y coordinate')}`);
        }

        if (coordinateX < 0 && coordinateY > 0 || coordinateX < 0 && coordinateY < 0) {
            result = "c) YES"
        }

        if (coordinateX > 0 && coordinateY > 0 || coordinateX > 0 && coordinateY < 0) {
            result = "d) YES"
        }

        if (coordinateX < 0 && coordinateY > 0) {
            result = "a) YES";
        }

        if (coordinateX > 0 && coordinateY < 0) {
            result = "b) YES";
        }

        console.log(result);
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
        let result = "NO";

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
            result = "a) YES";
        }

        if (number1 === number2 && number2 !== number3 || number1 === number3 && number3 !== number2 || number2 === number3 && number3 !== number1) {
            result = "b) YES";
        }

        if (number1 === 90 || number2 === 90 || number3 === 90) {
            result = "c) YES";
        }

        console.log(result);
    }

    const requirement = `9. enter three natural numbers`;
    await problemLogging(requirement, showResult);
}

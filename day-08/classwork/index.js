const {ask, close} = require('../../utils/read-from-terminal');
const {problemLogging, par, parg, readNumber} = require('../../utils/index');
const {isEven, isInteger, isOdd, isTwoDigit, isThreeDigit, isNatural} = require('../lib');

async function processInputs() {
    await codeGoesHere();
    close();
}

const problems = {
    problem2: '2. Տրված են a, b եւ c ամբողջ թվերը: Արտածել YES, եթե դրանցից\n' +
        '   ա) գոնե մեկը զրո է,\n' +
        '   բ) ճիշտ մեկը հինգ է,\n' +
        '   գ) ոչ մեկը մյուսներին հավասար չէ,\n' +
        '   դ) ճիշտ երկուսն են հավասար,\n' +
        '   ե) բոլոր երեքն իրար հավասար են,\n' +
        '   զ) գոնե մեկը բացասական է, Հակառակ դեպքում արտածել NO:\n',
    problem4: '4. Տրված է a դրական ամբողջ թիվը: Արտածել YES, եթե այն\n' +
        '   ա) երկնիշ եւ զույգ թիվ է,\n' +
        '   բ) եռանիշ եւ կենտ թիվ է:\n' +
        '   Հակառակ դեպքում արտածել NO:',
    problem10: '10. Տրված են x,y ամբողջ թվերը, որոնք շախմատի տախտակի\n' +
        '    մի վանդակի կոորդինատներն են (այսինքն այդ թվերն ընկած են [1,8] հատվածում): Հաշվի առնելով, որ (1,1) վանդակը սեւ է,\n' +
        '    արտածել white, եթե (x,y) վանդակը սպիտակ է: Հակառակ դեպքում արտածել black:'
}

async function codeGoesHere() {
    for (const key in problems) {
        console.log(parg(problems[key]));
    }

    let number = +await ask('which problem you want to execute type from 1 to 11');

    switch (number) {
        case 2:
            await problem2();
            break;

        case 4:
            await problem4();
            break;

        case 10:
            await problem10();
            break;

        default:
            console.log('no such problem');
            break;
    }
}

processInputs();

/*
* 2. Տրված են a, b եւ c ամբողջ թվերը: Արտածել YES, եթե դրանցից
   ա) գոնե մեկը զրո է,
   բ) ճիշտ մեկը հինգ է,
   գ) ոչ մեկը մյուսներին հավասար չէ,
   դ) ճիշտ երկուսն են հավասար,
   ե) բոլոր երեքն իրար հավասար են,
   զ) գոնե մեկը բացասական է, Հակառակ դեպքում արտածել NO:
*  */

async function problem2() {
    async function showResult() {

        function checkNumberIsInteger(number) {
            return !isInteger(number);
        }

        let number1 = await readNumber("enter first integer number", `${par('entered number is not satisfy for requirement')}`, checkNumberIsInteger);
        let number2 = await readNumber("enter second integer number", `${par('entered number is not satisfy for requirement')}`, checkNumberIsInteger);
        let number3 = await readNumber("enter third integer number", `${par('entered number is not satisfy for requirement')}`, checkNumberIsInteger);
        let result = "NO";

        // while (number1 !== Math.trunc(number1)) {
        //    number1 = +await ask('enter first integer number ');
        // }
        //
        // while (number2 !== Math.trunc(number2)) {
        //    number2 = +await ask('enter second integer number ');
        // }
        //
        // while (number3 !== Math.trunc(number3)) {
        //    number3 = +await ask('enter third integer number ');
        // }

        if (number1 === 0 || number2 === 0 || number3 === 0) {
            result = "a) YES";
        }

        if (number1 === 5 || number2 === 5 || number3 === 5) {
            result = "b) YES";
        }

        if (number1 !== number2 && number2 !== number3 && number1 !== number3) {
            result = "c) YES";
        }

        if (number1 === number2 || number2 === number3 || number1 === number3) {
            result = "d) YES";
        }

        if (number1 === number2 && number2 === number3) {
            result = "e) YES";
        }

        if (number1 < 0 || number2 < 0 || number3 < 0) {
            result = "f) YES";
        }
        console.log(result);
    }

    const requirement = `2. enter three integer numbers`;
    await problemLogging(requirement, showResult);
}

/*4. Տրված է a դրական ամբողջ թիվը: Արտածել YES, եթե այն
   ա) երկնիշ եւ զույգ թիվ է,
   բ) եռանիշ եւ կենտ թիվ է:
   Հակառակ դեպքում արտածել NO:
   */

async function problem4() {
        async function showResult() {
            let number = +await ask('enter integer and positive number ');
            let result = "NO";

            while (!isInteger(number)) {
                console.log(`${number} is not a integer, input integer`);
                number = +await ask('enter integer and positive number ');
            }

            while (number < 0) {
                console.log(`${par(`${number} is not a positive, input positive`)}`);
                number = +await ask('enter integer and positive number ');
            }

            if (isTwoDigit(number) && isEven(number)) {
                result = "a) YES";
            }

            if (isThreeDigit(number) && isOdd(number)) {
                result = "b) YES";
            }
            console.log(result);
        }

        const requirement = `4. enter integer and positive number`;
        await problemLogging(requirement, showResult);
    }


/*10. Տրված են x,y ամբողջ թվերը, որոնք շախմատի տախտակի
    մի վանդակի կոորդինատներն են (այսինքն այդ թվերն ընկած են [1,8] հատվածում): Հաշվի առնելով, որ (1,1) վանդակը սեւ է,
    արտածել white, եթե (x,y) վանդակը սպիտակ է: Հակառակ դեպքում արտածել black:
    */

async function problem10() {
        async function showResult() {

            function checkNumberIsInteger(number) {
                return !(isInteger(number) && number > 0 && number < 9);
            }

            let number1 = await readNumber('enter first integer number', `${par('entered number is not satisfy for requirement')}`, checkNumberIsInteger);
            let number2 = await readNumber('enter second integer number', `${par('entered number is not satisfy for requirement')}`, checkNumberIsInteger);
            let result = "White";

            if (isEven(number1) && isEven(number2) || isOdd(number1) && isOdd(number2)) {
                result = "Black";
            }

            console.log(result);
        }

        const requirement = `10. enter two integer numbers`;
        await problemLogging(requirement, showResult);
}
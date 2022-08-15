const {ask, close} = require('../../utils/read-from-terminal');
const {problemLogging, par, parg} = require('../../utils/index');
const {isEven} = require('./lib');

async function processInputs() {
    await codeGoesHere();
    close();
}

const problems = {
    problem1: '1. Insert a number and print YES if number is even otherwise NO.\n',
    problem2: '2. insert two integers and print their sum\n'
}

async function codeGoesHere() {
    for (const key in problems) {
        console.log(parg(problems[key]));
    }

    let number = +await ask('which problem you want to execute type from 1 to 10');

    switch (number) {
        case 1:
            await problem1();
            break;
        case 2:
            await problem2();
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
function problem1() {


    function logResult(number) {
        return `number ${par(number)} is ${isEven(number) ? 'YES' : 'NO'}`;
    }

    function showResult() {
        console.log(`${logResult(2463)}`);
        console.log(`${logResult(6)}`);
        console.log(`${logResult(45689)}`);
    }

    const requirement = `Insert a number and print YES if number is even otherwise NO.`;
    problemLogging(requirement, showResult);
}

/**
 2. insert two integers and print their sum
 */
async function problem2() {
    async function showResult() {
        let number1 = +await ask('enter first number ');
        let number2 = +await ask('enter second number ');
        console.log(`sum of numbers ${number1} and ${number2} = ${number1 + number2}`);
    }

    const requirement = `2. insert two integers and print their sum`;
    await problemLogging(requirement, showResult);
}



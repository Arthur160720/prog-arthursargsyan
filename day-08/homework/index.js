const {ask, close} = require('../../utils/read-from-terminal');
const {problemLogging, par, parg} = require('../../utils/index');
const {isEven} = require('../lib');

async function processInputs() {
    await codeGoesHere();
    close();
}

const problems = {
    problem1: '1. Insert a number and print YES if number is even otherwise NO.\n'
}

async function codeGoesHere() {
    for (const key in problems) {
        console.log(parg(problems[key]));
    }

    let number = +await ask('which problem you want to execute type from 1 to 11');

    switch (number) {
        case 1:
            await problem1();
            break;

        default:
            console.log('no such problem');
            break;
    }
}

processInputs();
const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');
const {convertStringToArray} = require("./index");
const rl = readline.createInterface({input, output});

function ask(text) {
    return new Promise((resolve, reject) => {
        rl.question(text, (answer) => {
            resolve(answer);
        });
    })
}

async function readArray(question) {
    let string = await ask(question);

    return convertStringToArray(string, " ");
}

async function readNumber(question, errorMessage, callback) {
    let number = +await ask(question);
    if (typeof callback !== 'function') {
        throw Error('callback is not a function');
    }

    while (callback(number)) {
        console.log(errorMessage);
        number = +await ask(question);
    }

    return number;
}


module.exports = {
    ask,
    readArray,
    close: () => rl.close(),
    readNumber,
}
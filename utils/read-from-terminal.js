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

module.exports = {
    ask,
    readArray,
    close: () => rl.close()
}
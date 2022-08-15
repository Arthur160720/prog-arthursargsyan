const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');
const rl = readline.createInterface({input, output});

function ask(text) {
    return new Promise((resolve, reject) => {
        rl.question(text, (answer) => {
            resolve(answer);
        });
    })
}

module.exports = {
    ask,
    close: () => rl.close()
}
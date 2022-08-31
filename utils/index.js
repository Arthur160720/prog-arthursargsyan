const {ask} = require("./read-from-terminal");
const Reset = "\x1b[0m"
const Bright = "\x1b[1m"
const Dim = "\x1b[2m"
const Underscore = "\x1b[4m"
const Blink = "\x1b[5m"
const Reverse = "\x1b[7m"
const Hidden = "\x1b[8m"
const FgBlack = "\x1b[30m"
const FgRed = "\x1b[31m"
const FgGreen = "\x1b[32m"
const FgYellow = "\x1b[33m"
const FgBlue = "\x1b[34m"
const FgMagenta = "\x1b[35m"
const FgCyan = "\x1b[36m"
const FgWhite = "\x1b[37m"
const BgBlack = "\x1b[40m"
const BgRed = "\x1b[41m"
const BgGreen = "\x1b[42m"
const BgYellow = "\x1b[43m"
const BgBlue = "\x1b[44m"
const BgMagenta = "\x1b[45m"
const BgCyan = "\x1b[46m"
const BgWhite = "\x1b[47m"

function par(p) {
    return `${FgRed}${p}${Reset}`;
}

function parb(p) {
    return `${FgBlue}${p}${Reset}`;
}

function parg(p) {
    return `${FgGreen}${p}${Reset}`;
}


async function problemLogging(problemRequirements, callback) {
    console.log(problemRequirements);
    console.log('----------------------------------------------------------------------------');
    await callback();
    console.log('\n');
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

async function convertStringToArray (string, delimiter) {
    return  string
        .split(delimiter)
        .filter(element =>
            !isNaN(Number(element)));
}

class ProblemRegistry {
    #problems;
    #locale = 'en';
    #executors = {};

    constructor(problems, locale = 'en') {
        this.#problems = problems;
        this.#locale = locale;
    }

    set locale(locale) {
        this.#locale = locale;
    }

    get local() {
        return this.#locale;
    }

    showAllProblems() {
        for (const key in this.#problems) {
            console.log(parg(this.#problems[key][this.#locale]));
        }
    }

    registerExecutor(executor) {
        this.#executors[executor.name] = executor;
    }

    async execute(executorIndex) {
        console.log(this.#problems[`problem${executorIndex}`][this.local]);
        console.log('----------------------------------------------------------------------------');
        await this.#executors[`problem${executorIndex}`]();
        console.log('\n');
    }

    registerExecutors(...executors) {
        executors.forEach(executor => {
            this.#executors[executor.name] = executor;
        });
    }

    getProblem(executerName) {
        return this.#executors[executerName];
    }
}

module.exports = {
    problemLogging,
    par,
    parg,
    parb,
    readNumber,
    ProblemRegistry,
    convertStringToArray
}
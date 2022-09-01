const {ask, close, readNumber, readArray} = require('../utils/read-from-terminal');
const problems = require('./problems.json');
const {ProblemRegistry} = require("../utils/index");
const {
    isInteger,
    isEven,
    isOdd,
    isNatural,
    isNanOrNot,
    isTwoDigit,
    sortedDescending,
    sortedAscending,
    isThreeDigit,
    factorial,
    isFourDigit,
    checkIsArrayOrNot,
    checkPrime,
    random,
    perfectNumber,
    readString,
    isLowerCase,
    isUpperCase,
    doesContainSomeSymbols,
    isAlphabetWithSymbols, isLowerAndUpperCase
} = require("../utils/lib");
const {par, problemLogging} = require("../utils");

async function processInputs() {
    await codeGoesHere();
    close();
}

let problemsRegistry = new ProblemRegistry(problems, 'am');
problemsRegistry.registerExecutors(
    problem1, problem2, problem3, problem4, problem5, problem6, problem12);

async function codeGoesHere() {
    const showProblems = async () => problemsRegistry.showAllProblems();
    const executeProblem = async () => {
        let number = +await ask('which problem you want to execute type the number of the problem - ');
        await problemsRegistry.execute(number);
    }
    await showProblems();
    await executeProblem();
}

processInputs();


/** 1. Գրել ծրագիր, որն առաջարկում է ներածել անուն եւ ապա ար-
 տածում է "Hello, x", որտեղ x-ը ներածված անունն է: */

async function problem1() {

    let string = await readString('input some name - ');

    let hiString = "Hello ";

    console.log(hiString + string);
}


/** 2. Տրված է մինչեւ 60 սիմվոլից բաղկացած տող: Արտածել տողի
 մեջ մտնող բոլոր փոքրատառերը: */

async function problem2() {

    let string = await readString('input string - ');
    let copy = string + '';

    while (string.length > 60) {
        console.log("string length is greater than 60");
        string = await readString('input string - ');
    }

    let array = [];
    while (string) {
        let a = string.slice(-1);

        if (isLowerCase(a)) {
            array.unshift(a);
        }

        string = string.slice(0, -1);
    }

    let lowerCaseItems = array.toString().replaceAll(",", "");
    console.log(`Lower case elements = ${lowerCaseItems}`);


    while (copy.length > 60) {
        console.log("string length is greater than 60");
        copy = await readString('input string - ');
    }

    let lowerCaseString = '';
    for (let i = 0; i < copy.length; i++) {
        if (isLowerCase(copy, i)) {
            lowerCaseString += copy[i];
        }
    }
    console.log('Lower case', lowerCaseString);
}


/** 3. Տրված է մինչեւ 60 սիմվոլ պարունակող փոքրատառերից
 բաղկացած  տող,  որն  ավարտվում  է  կետով:  Արտածել  այդ
 տողը՝ բոլոր տառերը դարձնելով մեծատառ: */

async function problem3() {

    let string = await readString('input string - ');

    while (!isLowerCase(string)) {
        string = await readString('input string - ');
    }

    while (string.length > 60) {
        console.log("string length is greater than 60");
        string = await readString('input string - ');
    }

    let stringWithDot = string + ".";
    let convertStringUpperCase = stringWithDot.toUpperCase();
    console.log(`convert string to Upper case ${convertStringUpperCase}`);
}


/** 4. Տրված  է  մինչեւ  60  սիմվոլ  պարունակող  մեծատառերից
 բաղկացած  տող:  Արտածել  YES,  եթե  այդ  տառերը  դասավորված
 են այբբենական կարգով եւ արտածել NO՝ հակառակ դեպքում: */

async function problem4() {

    let string = await readString('input string - ');

    while (!isUpperCase(string)) {
        string = await readString('input string - ');
    }

    while (string.length > 60) {
        console.log("string length is greater than 60");
        string = await readString('input string - ');
    }

    let isStringAlphabeticalOrder = "";
    let quantity = 0;

    for (let i = 0; i < string.length - 1; i++) {
        if (string[i] < string[i + 1]) {
            quantity += 1;
        }
        if (quantity === string.length - 1) {
            isStringAlphabeticalOrder = "YES";
        } else isStringAlphabeticalOrder = "NO";
    }

    console.log(`string is alphabetical order or not = ${isStringAlphabeticalOrder}`);
}


/** 5. Տրված  է  մինչեւ  200  սիմվոլ  պարունակող  փոքրատառերից
 բաղկացած  տող:  Այբբենական  կարգով  արտածել  տողի  մեջ
 մտնող տառերը: */

async function problem5() {

    let string = await readString('input string - ');

    while (!isLowerCase(string)) {
        string = await readString('input string - ');
    }

    while (string.length > 200) {
        console.log("string length is greater than 200");
        string = await readString('input string - ');
    }

    string = string.split("");
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (string[j] > string[i]) {
                let temp = string[i];
                string[i] = string[j];
                string[j] = temp;
            }
        }
    }
    let stringInAlphabeticalOrder = string.join("");

    console.log(stringInAlphabeticalOrder);

    //let sortString = string.split('').sort().join('');
    //console.log(sortString);
}


/** 6. Տրված  է  մինչեւ  40  սիմվոլ  պարունակող  տող:  Արտածել  այդ
 տողը՝  նախապես  դրանում  կատարելով  հետեւյալ  փոփոխությունը.
 ա)  բոլոր abc-երը փոխարինել def-ով,
 բ) հեռացնել առաջին w տառը,
 գ) հեռացնել բոլոր th-երը,
 դ) առաջին x-ը փոխարինել ks-ով,
 ե) բոլոր q տառերից հետո ավելացնել u,
 զ) բոլոր  ph-երը  փոխարինել  f-ով,  իսկ  բոլոր  ed-երը  ing-երով: */

async function problem6() {

    let string = await readString('input string - ');

    while (string.length > 40) {
        console.log("string length is greater than 40");
        string = await readString('input string - ');
    }

    let replaceAbcToDef = string.replaceAll("abc", "def");
    console.log(`a) replace all abc letters to def = ${replaceAbcToDef}`);

    let removeFirstLetter = string.replace("w", "");
    console.log(`b) remove first w-letter = ${removeFirstLetter}`);

    let removeAllThLetters = string.replaceAll("th", "");
    console.log(`c) remove all th letters = ${removeAllThLetters}`);

    let replaceFirstXLetterToKs = string.replace("x", "ks");
    console.log(`d) replace first x-letter to ks = ${replaceFirstXLetterToKs}`);

    let addULetter = string.replaceAll("q", "qu");
    console.log(`e) adding u-letter after q-letter = ${addULetter}`);

    let replaceLetters = string.replaceAll("ph", "f").replaceAll("ed", "ing");
    console.log(`f) replace ph-letters to f and ed-letters to ing = ${replaceLetters}`);

}


/** 12. Տրված է մի քանի տողանոց տեքստ՝ բաղկացած անգլերեն այբուբենի  տառերից,
 կետադրական  նշաններից  ու  բացատներից: Համարելով, որ բառերն իրարից բաժանվում են
 բացատներով  ու  կետադրական  նշաններով,  իսկ  նախադասությունները վերջանում են կետով՝
 ա)  արտածել տեքստի տառերի, բառերի, նախադասությունների եւ տողերի քանակները,
 բ) արտածել տեքստը՝ բոլոր բառերի առաջին տառերը դարձնելով մեծատառ, իսկ մնացածը՝ փոքրատառ,
 գ) արտածել տեքստի ամենաերկար բառերից որեւէ մեկը,
 դ) արտածել  տեքստի  բոլոր  n  տառանի  բառերը,  որտեղ  n-ը տրված թիվ է,
 ե) արտածել  տեքստի  մեծատառով  սկսվող  եւ  փոքրատառով վերջացող բառերը,
 զ) արտածել տեքստում ամենաշատը հանդիպող 3 բառերը,
 է) արտածել տեքստի ամենաշատ փոքրատառ պարունակող բառերը,
 ը) արտածել տեքստի բոլոր բառերը՝ այբբենական կարգով եւ առանց կրկնությունների,
 թ) արտածել տեքստը՝ բոլոր հարեւան բառերի միջեւ մեկից ավելի բացատների փոխարեն թողնելով դրանցից մեկը,
 բոլոր  նախադասությունների  առաջին  տառերը  դարձնելով մեծատառ, իսկ տեքստի մնացած տառերը՝ փոքրատառ: */

async function problem12() {

    let defaultVal = "The guitar is a fretted musical instrument that typically has six strings. It is usually held flat against the player's body and played by strumming or plucking the strings with the dominant hand, while simultaneously pressing selected strings against frets with the fingers of the opposite hand. A plectrum or individual finger picks may also be used to strike the strings. The sound of the guitar is projected either acoustically, by means of a resonant chamber on the instrument, or amplified by an electronic pickup and an amplifier."
    let string = (await readString('input string - ')) || defaultVal;
    console.log(string);

    while (!isAlphabetWithSymbols(string)) {
        string = await readString('input string - ');
    }

    let quantityOfLetters = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            i += 1;
        }

        if (string[i] !== "," &&
            string[i] !== "." &&
            string[i] !== "'") {
            quantityOfLetters += 1;

        }
    }

    let quantityOfWords = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            quantityOfWords += 1;
        }
    }

    let quantityOfSentence = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ".") {
            quantityOfSentence += 1;
        }
    }
    console.log(`a)  quantity of letters = ${quantityOfLetters}
    quantity of words = ${quantityOfWords}
    quantity of sentence = ${quantityOfSentence}`);

}
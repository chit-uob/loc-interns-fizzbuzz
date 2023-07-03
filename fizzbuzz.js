// This is our main function
function fizzbuzz(max,
                  rule3,
                  rule5,
                  rule7,
                  rule11,
                  rule13,
                  rule17) {

    for (let i = 1; i <= max; i++) {
        let wordList = [];
        if (i % 3 === 0 && rule3) {
            wordList.push('Fizz');
        }
        if (i % 5 === 0 && rule5) {
            wordList.push('Buzz');
        }
        if (i % 7 === 0 && rule7) {
            wordList.push('Bang');
        }
        if (i % 11 === 0 && rule11) {
            wordList = ['Bong'];
        }
        if (i % 13 === 0 && rule13) {
            let bIndex = wordList.findIndex(word => word.startsWith('B'))
            if (bIndex > -1) {
                wordList = wordList.slice(0, bIndex) + 'Fezz' + wordList.slice(bIndex)
            } else {
                wordList.push('Fezz');
            }
        }
        if (i % 17 === 0 && rule17) {
            wordList.reverse();
        }

        if (wordList.length === 0) {
            console.log(i)
        } else {
            console.log(wordList.join(''))
        }

    }

}

function hasRule(num, string) {
    return string.indexOf('-' + num) > -1;
}


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is the max number?", function(maxNum) {
    fizzbuzz(maxNum.split(' ')[0], hasRule(3, maxNum), hasRule(5, maxNum), hasRule(7, maxNum), hasRule(11, maxNum), hasRule(13, maxNum), hasRule(17, maxNum));
    process.exit(0);
});

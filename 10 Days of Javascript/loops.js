'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    var letters = s.split('');
    var vowelsFound = []
    var consonantsFound = []
    for (var i in letters) {
        if (vowels.includes(letters[i])) {
            vowelsFound.push(letters[i]);
        } else {
            consonantsFound.push(letters[i]);
        }
    }
    console.log(vowelsFound.join('\n'));
    console.log(consonantsFound.join('\n'));
}


function main() {
    const s = readLine();

    vowelsAndConsonants(s);
}
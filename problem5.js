'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.trim().split('\n').map(function(string) {
        return string.trim();
    });
    
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const PI = Math.PI;

    const r = parseFloat(readLine());
        // Print the area of the circle:

    console.log(PI * r * r);
     // Print the perimeter of the circle:
    console.log(2 * PI * r);

    try {
        PI = 0;
        console.log(PI);
    } catch (error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}
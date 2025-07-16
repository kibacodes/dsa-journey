// Revision of concepts from Days 1-3

// Star Pattern
// (i + 1) -> Affects rows
// (j + 1) -> Affects columns


// let n = 5;

// let toggle = 1;
// for(let i = 0; i < n; i++) {
//     let row="";
//     for (let j = 0; j < n - i; j++) {
//         row = row + "*";
//     }
//     console.log(row);
// }


// Count Digits

// Input - 150; Output - 3 ; since 150 has 3 digits

function countDigits(num) {
    if (num === 0) return 1;

    Math.abs(num);

    let count = 0;

    while (num > 0) {
        num = Math.floor(num/ 10);
        count++;
    }

    return count;

}

// let result = countDigits(150);
// let result1 = countDigits(-150);

// console.log(result);
// console.log(result1);

// Palindrome Number

function palindromeNum (num) {

    if (num < 0) return false;

    let rev = 0;

    let numCopy = num;

    while (num > 0) {
        let rem = num % 10;
        rev = (10*rev) + rem;
        num = Math.floor(num / 10);
    }

    return rev === numCopy;
}

// let result = palindromeNum(121);
// let result1 = palindromeNum(-121);
// console.log(result);
// console.log(result1);

// Reverse Integer

function reverseInt(x) {
    let rev = 0;

    let xCopy = x;
    x = Math.abs(x);// -1 * x

    while (x > 0) {
        let rem = x % 10;
        rev = (10 * rev) + rem;
        x = Math.floor(x / 10);
    }

    let limit = 2 ** 31;

    if (x > limit || x < -limit) return 0;

    return (xCopy < 0) ? -rev : rev;
}

let result = reverseInt(-42);
let result1 = reverseInt(150);

console.log(result);
console.log(result1);
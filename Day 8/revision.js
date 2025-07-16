// Sum of first n numbers

// function sum(n) {
//     if (n === 0) return 0;

//     return n + sum(n-1);
// };

// console.log(sum(20));

// Sum of all elements in array

// let arr = [2,3,4,5,6];

// function sumArray(n) {
//     if (n === 0) return arr[0];

//     return arr[n] + sumArray(n-1);
// }

// console.log(sumArray(arr.length-1));


let arr = [2,3,4,5,6,7];


function oddSumArray (n) {
    let isOdd = arr[n] % 2 !== 0;

    if (n === 0) {
        return isOdd ? arr[n] : 0;
    }

    return isOdd ? arr[n] + oddSumArray(n-1) : 0 + oddSumArray(n-1);
}

// console.log(oddSumArray(arr.length - 1));


// Single Number

let a = [1,1,2,3,2,4,4,5,5,3,8,8,7]

function singleNumber(a) {
    let xor = 0;

    for (let i = 0; i < a.length; ++i) {
        xor = xor ^ a[i]
    }
    return xor;
}

// console.log(singleNumber(a));


let factorial = n => {
    if (n === 1) return 1;

    return n * factorial(n-1);
}

// console.log(factorial(5));
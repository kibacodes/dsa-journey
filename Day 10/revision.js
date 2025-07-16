// Linear Search

// let arr = [2,3,5,7,9,15]

// const linearSearch = (arr, target) => {
//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }

// let result = linearSearch(arr, 9);
// console.log(result);

// Binary Search 

let arr = [2,3,5,7,9,15]

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    
    for(let i = 0; i < arr.length; ++i) {

        let middle = Math.floor((left + right) / 2);

        if (arr[middle] === target) {
            return middle;
        } else if (target < arr[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}

// let result = binarySearch(arr, 9);
// console.log(result);

// merge sorted arrays: [1,2,3,0,0,0] m = 3, n=3, [2,5,6]

const merge = (nums1, m, nums2, n) => {
    let p1 = m-1;
    let p2= n-1;

    for (let i = m+n-1; i >= 0; i--) {
        if (p2 <0) break;

        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }
    return nums1;
};

// let result = merge([1,2,3,0,0,0], 3, [2,5,6], 3);
// console.log(result);

// Palindrome Number

const palindrome = n => {

    if (n < 0) return false;

    let rev = 0;
    let nCopy = n;
    n = Math.abs(n);

    for (let i = 0; i < n; i++) {
        let rem = n % 10;
        rev = (10*rev) + rem;
        n = Math.floor(n / 10);
    }

    return rev === nCopy;
}

// let result = palindrome(343);
// let result1 = palindrome(-343);
// console.log(result);
// console.log(result1);

// let n = 20;

// function print(x) {

//     if (x > n) return;

//     console.log(x);

//     x += 1;

//     print(x);
// }

// print(1);

// Fibonacci Numbers using Recursion

const fib = n => {

    if (n <= 1) return n;

    return fib(n-1) + fib(n-2);
}

// console.log(fib(5));

// Power of Two

const powerOfTwo = n => {

    if (n === 1) return true;

    if (n % 2 !== 0 || n < 1) return false;

    return powerOfTwo(n/2);
}

// console.log(powerOfTwo(64));
// console.log(powerOfTwo(65));
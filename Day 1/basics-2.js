// for (let i = 0; i < 20; i++) {
//     console.log("Hello World!");
// }

// for (let i = 0; i <= 4; i = i + 1) {
//     console.log("Hello world " + i);
// }

// for (let i = 3; i < 5; i++) {
//     console.log("Hello world " + i);
// }

// for (let i = 2; i < 9; i = i + 2) {
//     console.log("HW ", + i);
// }

// for (let i = 5; i > 0; i--) {
//     console.log("HW ", + i);
// }


// let arr = [10,5,7,0,8,3,80];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     } 
// }

// Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1

// let arr = [4, 2, 0, 10, 8, 30];

// function searchElement(arr, x) { 
//     for (let i = 0; i < arr.length; i++) { 
//         if (arr[i] === x) { 
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(searchElement(arr, 10));
// console.log(searchElement(arr, 49));

// searchElement(arr, 4) => 0
// searchElement(arr, 10) => 3
// searchElement(arr, 49) => -1

// Write a function that returns the number of negative numbers in an array

// function countNegatives(arr) { 
//     // TODO
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) { 
//         if (arr[i] < 0) { 
//             count++;
//         }
//     }
//     return count;    
// }

// let arr = [2,-9,17,0,1,-10,-4,8];
// let res = countNegatives(arr);
// console.log(res); // 3


// Write a function that returns the largest number in an array

// let arr = [5, 0, 7, 10, 8, 17, 1];

// function findLargest(arr) { 
//     let largest = -Infinity;
//      arr[0] is also another possible value we can put here.
//     for (let i = 0; i < arr.length; i++) { 
//         if (arr[i] > largest) { 
//             largest = arr[i];
//         }
//     }
//     return largest;
// }

// console.log(findLargest(arr)); // 17

// Write a function that returns the smallest number in an array

// let arr = [-9, -19, -3];

// function findSmallest(arr) { 
//     let smallest = Infinity;
//      arr[0] is also another possible value here
//     for (let i = 0; i < arr.length; i++) { 
//         if (arr[i] < smallest) { 
//             smallest = arr[i];
//         }
//     }
//     return smallest;
// }

// console.log(findSmallest(arr)); // -19
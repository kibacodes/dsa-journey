// Find Second Largest number in an array

let arr = [4, 9, 0, 2, 8, 7, 1];
let arr1 = [10, 20, 8, 9, 3, 5, 20];


function secondLargest(arr) { 
    // if array has less than 2 numbers
    if (arr.length < 2) { 
        return -1;
    }

    let first = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] !== first) { 
            second = arr[i];
        }
    }

    return second;
}

let result = secondLargest(arr);
let result1 = secondLargest(arr1);
console.log(result);
console.log(result1);

// Corner Cases

// -> Array is empty
// -> Array has negative values
// -> Array has duplicates
// -> Array has infinite numbers
// Count Digits

const countDigits = (n) => {

    if (n === 0) return 1;

    let count = 0;

    n = Math.abs(n);

    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }

    return count;
}

// let result = countDigits(-343);
// console.log(result);

// Reverse Integer

const reverseInteger = n => {
    let rev = 0;
    let nCopy = n;

    n = Math.abs(n);

    while (n > 0) {
        let rem = n % 10;
        rev = (10*rev) + rem;
        n = Math.floor(n / 10);
    }

    let limit = 2 ** 31;

    if (n > limit || n < -limit) return 0;

    return nCopy < 0 ? -rev : rev;
}

// let result = reverseInteger(-341);
// console.log(result);

// [2,3,3,1]

const removeDuplicate = n => {
    let x = 0

    for (let i = 0; i < n.length; ++i) {
        // xor = xor ^ n[i];
        if (n[i] > n[x]) {
            x = x + 1;
            n[x] = n[i];
        }
    }

    // return xor;
    return x + 1;
}

// let result = removeDuplicate([2,3,3,1]);
// console.log(result);

// Bubble Sort

const bubbleSort = (a) => {
    let n = a.length;
    let isSwapped = false;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-1-i;j++){
            if (a[j] > a[j+1]) {
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped) break;
    }
    return a;
}

// let result = bubbleSort([5,2,4,1]);
// console.log(result);

// Selection Sort
// [7,1,5,4,3,2]

const selectionSort = (a) => {
  let n = a.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = a[i];
      a[i] = a[min];
      a[min] = temp;
    }
  }
  return a;
};

// let result = selectionSort([7,1,5,4,3,2]);
// console.log(result);

const insertionSort = (a) => {
    let n = a.length;

    for (let i = 1; i < n; i++) {
        let curr = a[i];
        let prev = i - 1;

        while (a[prev] > curr && prev >= 0) {
            a[prev + 1] = a[prev];
            prev -= 1;
        }
        a[prev + 1] = curr;
    }

    return a;
};

let result = insertionSort([7,4,3,5,1,2]);
console.log(result);
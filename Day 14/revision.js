// Remove Element

function removeElement(arr, val) {
    let x =0;
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== val) {
            arr[x] = arr[i];
            x += 1;
        }
    }
    return x, arr;
}

// let result = removeElement([3,2,2,3], 3);
// console.log(result);

// Merge Sort

// Reverse String

const reverseString = s => {
    let len = s.length;
    let halfLen = Math.floor(len / 2);

    for (let i = 0; i < halfLen; ++i) {
        let temp = s[i];
        s[i] = s[len - i - 1];
        s[len - i - 1] = temp;
    }

};

// let result = reverseString('hello');
// console.log(result);

// Best Time to Buy and Sell Stock

function buyAndSell (prices) {
    let n = prices.length;

    let min = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < n; ++i) {
        if (prices[i] - min > maxProfit) {
            maxProfit = prices[i] - min;
        }

        if (prices[i] < min) {
            min = prices[i];
        }
    }

    return maxProfit;
}

// let result = buyAndSell([7,1,5,3,6,4]);
// console.log(result);

// Merge Sort

const mergeSort = arr => {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
};

const merge = (left, right) => {
    let i = 0;
    let j = 0;
    let res = [];

    while (i < left.length && j<right.length) {
        if (left[i] < right[j]) {
            res.push(left[i]);
            i++;
        } else {
            res.push(right[j]);
            j++;
        }
    }

    return [...res, ...left.slice(i), ...right.slice(j)];

};

console.log(mergeSort([7,11,4,2,5,3,8]));
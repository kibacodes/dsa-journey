// Count Digits

// 121 --> should return 3 since we have 3 digits

function countDigits (n) {

    if (n === 0) return 1;

    let count = 0;

    n = Math.abs(n);

    while (n > 0) {

        n = Math.floor(n / 10)

        count++;
    }

    return count;
}

// let result = countDigits(121);
// let result1 = countDigits(-12);

// console.log(result);
// console.log(result1);

// Palindrome Number
// 121 -> 121; -121 -> 121-; 343 -> 343

function palindromeNumber(n) {

    if (n < 0) return false;

    let rev = 0;
    let nCopy = n;

    while (n > 0) {
        let rem = n % 10;
        rev = (10*rev)+rem;
        n = Math.floor(n/10);
    }

    return rev === nCopy;
}

// let result = palindromeNumber(121);
// let result1 = palindromeNumber(-12);

// console.log(result);
// console.log(result1);

function reverseInt(x) {

    let rev = 0;
    let xCopy = x;
    x = Math.abs(x);

    while(x > 0) {
        let rem = x % 10;
        x = Math.floor(x/10);
        rev = (10*rev) + rem;
    }

    let limit = Math.pow(2, 31);

    if (rev > limit || rev < -limit) return 0;

    return (xCopy < 0) ? -rev : rev;

}

// let result = reverseInt(121);
// let result1 = reverseInt(-12);

// console.log(result);
// console.log(result1);

// Remove Duplicates
// [1,2,2,3,3,4] -> 1,2,3,4

function removeDuplicates(a) {
    let x = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > a[x]) {
            x = x+1;
            a[x] = a[i];
        }
    }
    return x + 1;
}

// let result = removeDuplicates([1,2,2,3,3,4]);

// console.log(result);


function removeElements (a, val) {
    let x = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== val) {
            a[x] = a[i];
            x += 1;
        }
    }
    return x, a;
}

// let result = removeElements([1,2,2,2,3,3,4], 2);

// console.log(result);

// String Reverse

// ['h', 'e', 'l', 'l', 'o'] --> olleh

function reversedString(s) {
    let len = s.length;
    let halfLen = Math.floor(len / 2);

    for (let i = 0; i < halfLen; i++) {
        let temp = s[i];
        s[i] = s[len-1-i];
        s[len-1-i] = temp;
    }
}

// best time for buying and selling stock

var maxProfit = function(prices) {
    let min = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; ++i) {
        if (prices[i] - min > maxProfit) {
            maxProfit = prices[i] - min;
        }

        if (prices[i] < min) {
            min = prices[i];
        }
    }

    return maxProfit;

};

// let result = maxProfit([7,1,5,3,6,4]);

// console.log(result);

// Merge Sorted Arrays

var merge = function(nums1, m, nums2, n) {
    let p1 = m-1;
    let p2 = n-1;

    for (let i = m + n - 1; i>= 0; i--) {

        if (p2 < 0) break; 

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

// Move Zeroes

var moveZeroes = function(a) {
    let x = 0;

    for (let i = 0; i< a.length; i++) {
        if (a[i] !== 0) {
            a[x] = a[i];
            x += 1;
        }
    }

    for (let j = x; j < a.length; j++) {
        a[j] = 0;
    }

    return a;
};

// let result = moveZeroes([0,1,0,3,12]);

// console.log(result);

// Max Consecutive Ones

var findMaxConsecutiveOnes = function(nums) {
    let currCount = 0;
    let maxCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currCount++;
        } else {
            maxCount = Math.max(currCount, maxCount)
            currCount = 0;
        }
    }

    return Math.max(currCount, maxCount);
};

let result = findMaxConsecutiveOnes([1,1,0,1,1,1]);

console.log(result);
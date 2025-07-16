// Revision

// Missing Number

// [0,1]

function missingNumber (a) {
    let n = a.length;

    let totalSum = n * (n + 1) / 2;

    let partialSum = 0;

    for (let i = 0; i < n; ++i) {
        partialSum += a[i]
    }

    return totalSum - partialSum;
};

// console.log(missingNumber([3,0,1]));

// Consecutive Ones

// [1,1,0,0,1,1,1]

function consecutiveOnes (a) {
    let currCount = 0;
    let maxCount = 0;

    for (let i = 0 ; i < a.length; ++i) {
        if (a[i] !== 0) {
            currCount++;
        } else {
            maxCount = Math.max(currCount, maxCount);
            currCount = 0;
        }
    }

    return Math.max(maxCount, currCount);
};

// console.log(consecutiveOnes([1,1,0,0,1,1,1]));

// [1,2,3,0,0,0]  [2,5,6] m=3 n=3

function merge(nums1, nums2, m, n) {
    let p1= m-1;
    let p2 = n-1;

    for (let i = m+n-1; i >= 0 ; --i) {
        if(p2 < 0) break;

        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }
    return nums1;
}

// console.log(merge([1,2,3,0,0,0], [2,5,6], 3, 3));
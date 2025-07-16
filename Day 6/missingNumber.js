// 286. Missing Number

let missingNumber = (nums) => {
    let n = nums.length;
    let totalSum = n * (n + 1) / 2;

    let partialSum = 0;

    for (let i = 0; i<n; i++) {
        partialSum += nums[i];
    }

    return totalSum - partialSum;
};

let result = missingNumber([4,1,0,2,5]);
console.log(result);
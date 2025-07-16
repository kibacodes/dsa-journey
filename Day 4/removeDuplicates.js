// Leetcode 26: Remove Duplicates from a sorted array

var removeDuplicates = function(nums) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > nums[x]) {
            x = x + 1;
            nums[x] = nums[i];
        }
    }
    return x + 1;
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

// [0,0,1,1,1,2,2,3,3,4]
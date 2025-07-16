// Leetcode 27: Remove Element

var removeElement = function(nums, val) {
    let x = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[x] = nums[i];
            x = x + 1;
        }
    }
    return x;
}

let result = removeElement([3,2,2,3], 3);
console.log(result);
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end)/ 2);

        if (target === nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
};

let result = binarySearch([4, 9, 1, 0, 2], 0);
console.log(result);
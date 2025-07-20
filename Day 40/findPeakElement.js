/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        let m = l + Math.floor((r - l) / 2);

        if (nums[m + 1] > nums[m]) {
            l = m + 1;
        } else {
            r = m;
        }
    }

    return l; // can return r too, since our peak is where l and r coincide or l === r, hence we can return either l or r.
};
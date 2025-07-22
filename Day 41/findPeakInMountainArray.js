/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    let l = 0;
    let r = arr.length - 1;

    while (l < r) {
        let m = l + Math.floor((r - l) / 2);

        // if peak is on right side of arr
        if (arr[m + 1] > arr[m]) {
            l = m + 1;
        } // else peak is on the left side or m is peak of arr
        else {
            r = m;
        }
    }

    return l;
};
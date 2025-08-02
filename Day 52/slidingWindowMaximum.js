/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (arr, k) {
    let res = [];
    let q = [];

    let i = j = 0;
    while (j < arr.length) {

        // push current element only after removing all smaller elements from last(back) of queue
        while (q.length && arr[j] > q[q.length - 1]) { q.pop(); }
        q.push(arr[j]);

        // when window size is k
        if (j >= k - 1) {
            res.push(q[0]);
            // if the leftmost element for current window(arr[i]) is the largest (q[0]), then remove it.
            arr[i] === q[0] && q.shift();
            ++i;
        }
        ++j;
    }
    return res;
};
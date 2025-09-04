/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    // all the elements in first column into the MinPQ
    let n = matrix[0].length;

    let heap = new MinPriorityQueue(x => x.val);
    // Math.min(n, k) or n is ok to use 
    for (let i = 0; i < Math.min(n, k); i++) {
        heap.enqueue({ val: matrix[i][0], row: i, col: 0 });
    }

    // one by one find the min value in P and increase the count till k

    for (let count = 0; count < k - 1; count++) {
        let { val, row, col } = heap.dequeue();
        // add the next element if it is present
        if (col + 1 < n) {
            heap.enqueue({ val: matrix[row][col + 1], row: row, col: col + 1 });
        }
    }

    return heap.dequeue().val;
};
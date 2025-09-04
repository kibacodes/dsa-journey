/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (arr, k) {
    // create a map of freq- O(n)
    let map = {};
    for (let i = 0; i < arr.length; ++i) {
        if (!map[arr[i]]) map[arr[i]] = 0;
        ++map[arr[i]];
    }

// add elements to MinP and restrict its size to k - O(n log k)
    let pq = new MinPriorityQueue(x => x.freq);
    for (key in map) {
        // O(log k)
        pq.push({ val: key, freq: map[key] });

        if (pq.size() > k) {
            // O(log k)
            pq.pop(); // removing the smallest element
        }
    }

    // return remaining k elements in PQ
    return pq.toArray().map(x => Number(x.val));

};
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let l =0;
    let r= arr.length-1;
    while(l<r) {
        let m = Math.floor((r-l)/2) +l;
        if((arr[m+k]-x) < (x-arr[m])) {
            // shift window to left
            l=m+1;
        } else {
            r=m;
        }
    }

    // let ans=[];
    // for(let i = l; i< l+k; i++) {
    //     ans.push(arr[i]);
    // }
    // return ans;

    return arr.slice(r,r+k);
};
/**
 * @param {number[]} nums
 * @return {number[]}
 * Approach #1: We double the array
 */
var nextGreaterElements = function(nums) {
    // This is how we double the array which cancels the
    // circular property
     let arr = [...nums, ...nums];
     let n = arr.length;

     let stack = [];
     let ans = Array(n).fill(-1);   

     stack.push(arr[n-1]);

     for(let i=n-2; i>=0; --i) {
        while(stack.length) {
            let top = stack[stack.length-1];
            if(arr[i] < top) {
                ans[i] = top;
                break;
            } else {
                stack.pop();
            }
        }

        if(!stack.length) {
            ans[i] = -1;
        }

        stack.push(arr[i]);
     }

    return ans.slice(0,n/2); 
};

// Approach #2 -> We manipulate the index numbers so they act as array is doubled

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (arr) {
    // This is how we double the array which cancels the
    // circular property
    //  let arr = [...nums, ...nums];
    let n = arr.length;

    let stack = [];
    let ans = Array(n).fill(-1);

    stack.push(arr[n - 1]);

    for (let i = (2 * n) - 2; i >= 0; --i) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (arr[i % n] < top) {
                ans[i % n] = top;
                break;
            } else {
                stack.pop();
            }
        }

        if (!stack.length) {
            ans[i] = -1;
        }

        stack.push(arr[i % n]);
    }

    return ans.slice(0, n);
};
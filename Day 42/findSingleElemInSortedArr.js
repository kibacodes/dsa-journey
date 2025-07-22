/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(arr) {
    let l =0;
    let r=arr.length-1;
    while(l<=r){
        let m=Math.floor((r-l)/2)+l;
        // pair exists on left
        if (arr[m]===arr[m-1]) {
            leftCount = (m-1)-l;
            if(leftCount %2===1){
                r=m-2;
            } else {
                l=m+1;
            }
        } 
        // pair element exists on right side
        else if (arr[m]===arr[m+1]){
            rightCount= r-(m+1);
            if(rightCount %2 !==0){
                l=m+2;
            } else {
                r=m-1;
            }
        } 

        /*
        else if (arr[m]===arr[m+1]){
            leftCount= m-l;
            if(leftCount %2 ===1){
                r=m-1;
            } else {
                l=m+2;
            }
        } 
        
         */
        // single element
        else {
            return arr[m];
        }
    }
};
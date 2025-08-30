let arr= [1,4,10,5,26,73,99,0,-1,-8,3,7,9,2];

function heapSort(arr) {
    let n = arr.length;

    // create a max heap - O(n)
    for (let i = n-1; i>= 0; i--) {
        heapifyDown(arr, i, n);
    }

    // console.log(arr);

    // sort the array - O(n log n)

    for (let i = n-1; i>0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapifyDown(arr,0,i);
    }

    return arr;
}

function heapifyDown(arr, i, n) {
    let largest = i;

    let left = 2*i+1;
    let right = 2*i+2;

    if(left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapifyDown(arr, largest, n);
    }
}

console.log(heapSort(arr));
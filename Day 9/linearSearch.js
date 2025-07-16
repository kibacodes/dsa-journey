const linearSearch = (arr, target) => { 
    for (let i = 0; i < arr.length; ++i) { 
        if (arr[i] === target) { 
            return i;
        }
    }
    return -1;
}

let result = linearSearch([4, 9, 1, 0, 2], 0);
console.log(result);
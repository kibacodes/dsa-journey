// [1,3,4,5,5,4,3]

function singleNumber (a) {
    let xor = 0;

    for (let i = 0; i < a.length; ++i) {
        xor = xor ^ a[i];
    }

    return xor;
}

console.log(singleNumber([1,3,4,5,5,4,3]));
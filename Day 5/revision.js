// Palindrome Number

function palindromeNum (n) {

    if (n < 0) return false;

    let rev = 0;

    let nCopy = n;

    while (n > 0) {
        rem = n % 10;
        rev = (10 * rev) + rem;
        n = Math.floor(n / 10);
    }

    return rev === nCopy;
}

// let result = palindromeNum(121)
// let result1 = palindromeNum(-121)

// console.log(result)
// console.log(result1)

// Count Digits

function countDigits (n) {

    if (n === 0) return 1;

    n = Math.abs(n);

    let count = 0;

    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }

    return count;
}

// let num = 680125;
// let result = countDigits(num);
// console.log(result);


// Reverse Integer

function reverseInt(x) {

    let rev = 0;

    let xCopy = x;
    x = Math.abs(x);


    while (x > 0) {
        rem = x % 10;
        rev = (10*rev) + rem;
        x = Math.floor(x/10);
    }

    let limit = 2 ** 31

    if (rev > limit || rev < -limit) return 0;

    return (xCopy < 0) ? -rev : rev;
}

// let result = reverseInt(121)
// let result1 = reverseInt(-121)

// console.log(result)
// console.log(result1)


// Remove Duplicates

// [0,0,1,1,1,2,2,3,3,4]

function removeDuplicates (a) {
    let x = 0;
    for (let i = 0; i< a.length; i++) {
        if (a[i] > a[x]) {
            x = x+1;
            a[x] = a[i];
        }
    }
    return x+1;
}

// let result = removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
// console.log(result);

// Remove Elements

function removeElement(a, val) {
    let x = 0;

    for (let i = 0; i<a.length; i++) {
        if (a[i] !== val) {
            a[x] = a[i];
            x = x+1;
        }
    }
    return x;
}

// let result = removeElement([3,2,2,3], 3);
// console.log(result);

function reverseString(s) {
    let len = s.length;
    let halfLen = Math.floor(len / 2);

    for (let i = 0; i < halfLen; i++) {
        let temp = s[i];
        s[i] = s[len - 1 - i];
        s[len -1 - i] = temp;
    }
    return s;
}

// let result = reverseString(['h', 'e', 'l', 'l', 'o']);
// console.log(result);
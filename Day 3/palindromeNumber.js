// Palindrome Number

var isPalindrome = function (x) {

    // since negative numbers can never be palindromes
    if (x < 0) return false;

    let xCopy = x; // storing the copy of the original number

    let rev = 0;

    while (x > 0) {
        let rem = x % 10;
        rev = (10 * rev) + rem;
        x = Math.floor(x / 10);
    }

    return rev === xCopy;
};
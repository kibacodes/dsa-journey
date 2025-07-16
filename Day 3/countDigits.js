function countDigits(n) {

    if (n === 0) return 1;

    n = Math.abs(n); // changes negative number to positive number
    let count = 0;

    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}


let num = 680125;
let result = countDigits(num);
console.log(result);
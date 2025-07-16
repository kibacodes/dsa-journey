// let n = 4;

// for (let i = 0; i < n; i++) { 
    // i is responsible for rows
//     let row = "";

    // j is responsible for columns
//     for (let j = 0; j < n; j++) { 
//         row = row + "*";
//     }

//     console.log(row);
// }

// let n = 4;

// for (let i = 0; i < n; i++) { 
//     let row = "";

    // for (let j = 0; j < i + 1; j++) { 
        // j < i + 1 is the same as j <= i, both are fine.
        // row += "*"; // row = row + "*"
//     }

//     console.log(row);
// }

// i   j (j loop to run i + 1 times)
// 0   * (0 + 1)
// 1   ** (1 + 1)
// 2   *** (2 + 1)
// 3   **** (3 + 1)


// let n = 5;

// for (let i = 0; i < n; i++) {
//     let row = "";

//     for (let j = 0; j < i + 1; j++) { 
//         row = row + (j + 1);
//     }

//     console.log(row)
// }

// i   j       
// 0   0
// 1   0 1
// 2   0 1 2
// 3   0 1 2 3
// 4   0 1 2 3 4

// i   j + 1      
// 0   1
// 1   1 2
// 2   1 2 3
// 3   1 2 3 4
// 4   1 2 3 4 5

// let n = 5;

// for (let i = 0; i < n; i++) { 
//     let row = "";

//     for (let j = 0; j <= i ; j++) { 
//         row = row  + (i + 1)
//     }

//     console.log(row)
// }

// i  j
// 0  1 (i+1)
// 1  2 (i+1) * 2
// 2  3 (i+1) * 3
// 3  4 (i+1) * 4
// 4  5 (i+1) * 5


// for (let i = 1; i <= n; i++) {
//     let row = "";

//     for (let j = 1; j <= i; j++) {
//         row = row + i
//     }

//     console.log(row)
// }

// i  j
// 1  1 
// 2  2 2
// 3  3 3 3
// 4  4 4 4 4
// 5  5 5 5 5 5


// let n = 5;

// for (let i = 0; i < n; i++) { 
//     let row = "";

//     for (let j = 0; j < n - i; j++) { 
//         row = row + (j + 1);
//     }

//     console.log(row);
// }

// let n = 5;

// for (let i = 0; i < n; i++) { 
//     let row = "";

//     for (let j = 0; j < n - i; j++) { 
//         row = row + "*";
//     }

//     console.log(row);
// }

// let n = 5;

// for (let i = 0; i < n; i++) { 
//     let row = "";

//      loop for adding empty spaces or dots
//     for (let j = 0; j < n - (i + 1); j++) { 
//         row = row + " ";
//     }

//      loop for adding the stars
//     for (let k = 0; k < i + 1; k++) { 
//         row = row + "*";
//     }

//     console.log(row)
// }

// let n = 5;
// let switchNum = 1;

// for (let i = 0; i < n; i++) { 
//     let row = "";

//     for (let j = 0; j < i + 1; j++) { 
//         row += switchNum;

//         switch the switchNum
//         if (switchNum === 1) {
//             switchNum = 0;
//         } else { 
//             switchNum = 1;
//         }
//     }

//     console.log(row)
// }

let n = 5;

for (let i = 0; i < n; i++) { 
    let row = "";
    let switchNum = 1;

    for (let j = 0; j < i + 1; j++) { 
        row += switchNum;

        // switch the switchNum
        if (switchNum === 1) {
            switchNum = 0;
        } else { 
            switchNum = 1;
        }
    }

    console.log(row)
}
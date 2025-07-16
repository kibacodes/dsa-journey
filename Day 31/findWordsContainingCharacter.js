const findWordsContaining = (words, x) => {
  let res = []; // ignore it when calculating space complexity for our logic as we are using this to store values needed

  for (let i = 0; i < words.length; ++i) {
    // find if char x is present in words[i]
    for (let j = 0; j < words[i].length; ++j) {
      if (words[i][j] === x) {
        res.push(i);
        break; // basically we are breaking the loop since we found the char in word
      }
      /*
      SOLUTION NOT RECOMMENDED FOR INTERVIEWS
        if (words[i].includes(x)) {
            res.push(i);
        } 
      */
    }
  }
  return res;
};

let result = findWordsContaining(["leet", "code"], "e");
console.log(result);


// m - no of words
// n - max length of each word

// Time Complexity - O(n*m)
// Space Complexity - O(1) 
// --> ask interviewer if the array res should be included in space complexity calculation
// --> If they say yes, then say O(n) else, O(1)
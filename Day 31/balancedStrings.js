const balancedStrings = (s) => {
  let temp = 0
  let count = 0;

  for (let i = 0; i < s.length; ++i) {
    if (s[i] === "L") {
      ++temp;
    } else {
      --temp;
    }

    if (temp === 0) {
        ++count;
    }
  }

  return count;
};

let result = balancedStrings("RLRRLLRLRL");
console.log(result);

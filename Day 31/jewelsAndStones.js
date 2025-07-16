const jewelsInStones = (jewels, stones) => {
    const jewelSet = new Set();
    let jewelCount = 0;

    for (let i = 0; i < jewels.length;++i) {
        jewelSet.add(jewels[i]);
    }

    for(let i=0; i < stones.length; ++i) {
        if (jewelSet.has(stones[i])) {
            ++jewelCount;
        }
    }

    return jewelCount;
}

let result = jewelsInStones("aA", "aAAbbbb");
console.log(result);
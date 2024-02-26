function generateRandomPairs(numPairs, minNum, maxNum) {
    let pairs = [];
    for (let i = 0; i < numPairs; i++) {
        let pair = [getRandomInt(minNum, maxNum),
        getRandomInt(minNum, maxNum)];
        pairs.push(pair);
    }
    return pairs;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * 
    (max - min + 1)) + min;
}

let randomPairs = generateRandomPairs(5, 1, 10);
console.log(randomPairs);
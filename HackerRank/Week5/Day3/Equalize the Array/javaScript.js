const equalizeArray = (arr) => {
    let numMap = {};
    let maxCount = 1;
    for (let num of arr) {
        numMap[num] ? numMap[num]++ : (numMap[num] = 1);
    }
    for (let num in numMap) {
        if (numMap[num] > maxCount) {
            maxCount = numMap[num];
        }
    }
    return arr.length - maxCount;
};

console.log(equalizeArray([3, 3, 2, 1, 3]));

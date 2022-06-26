const secondLargest = (arr) =>
    Array.from([...new Set(arr)]).sort((a, b) => b - a)[1];

console.log(secondLargest(arrOfNum));

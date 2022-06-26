const arrOfNum = [10, 5, 15, 5, 6, 79];

const findSum = (arr) => {
    let sumition = 0;
    for (let index = 0; index < arr.length; index++) {
        sumition += arr[index];
    }
    return sumition;
};

console.log(findSum(arrOfNum));

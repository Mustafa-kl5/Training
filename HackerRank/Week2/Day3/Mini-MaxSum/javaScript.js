const miniMaxSum = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    let sum = 0;
    arr.forEach((element) => {
        sum += element;
    });
    const resultWithOutMax = sum - max;
    const resultWithOutMin = sum - min;

    console.log(resultWithOutMax, resultWithOutMin);
};
const arr = [1, 3, 5, 7, 9];
console.log(miniMaxSum(arr));

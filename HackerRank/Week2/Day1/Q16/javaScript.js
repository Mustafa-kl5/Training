const arr = [10, 5, 10, 4, 10, 4, 10, 5, 1, 1, 1];

const birthdayCakeCandles = (a) => {
    let max = Math.max(...a);
    let count = 0;
    for (let index = 0; index < a.length; index++) {
        if (a[index] == max) {
            count++;
        }
    }
    return count;
};
console.log(birthdayCakeCandles(arr));

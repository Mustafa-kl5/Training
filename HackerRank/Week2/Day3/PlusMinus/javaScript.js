const plusMinus = (arr) => {
    let numberOfPositiveValue = 0;
    let numberOfNegativeValue = 0;
    let numberOfZeroValue = 0;
    arr.forEach((element) => {
        if (element < 0) {
            numberOfNegativeValue++;
        } else if (element > 0) {
            numberOfPositiveValue++;
        } else {
            numberOfZeroValue++;
        }
    });
    console.log((numberOfPositiveValue / arr.length).toFixed(6));
    console.log((numberOfNegativeValue / arr.length).toFixed(6));
    console.log((numberOfZeroValue / arr.length).toFixed(6));
};
const arr = [1, 1, 0, -1, -1];
console.log(plusMinus(arr));

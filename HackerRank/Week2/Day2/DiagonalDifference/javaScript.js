const diagonalDifference = (arr) => {
    let leftToRight = 0,
        rightToLeft = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i == j) leftToRight += arr[i][j];
            if (i + j == arr.length - 1) rightToLeft += arr[i][j];
        }
    }

    return Math.abs(leftToRight - rightToLeft);
};
const a = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
console.log(diagonalDifference(a));

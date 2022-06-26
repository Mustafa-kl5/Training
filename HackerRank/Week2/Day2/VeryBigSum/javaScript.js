const aVeryBigSum = (ar) => {
    let result = 0;
    for (let index = 0; index < ar.length; index++) {
        result += ar[index];
    }
    return result;
};
const ar = [
    1001458909, 1004570889, 1007019111, 1003302837, 1002514638, 1006431461,
    1002575010, 1007514041, 1007548981, 1004402249,
];

console.log(aVeryBigSum(ar));

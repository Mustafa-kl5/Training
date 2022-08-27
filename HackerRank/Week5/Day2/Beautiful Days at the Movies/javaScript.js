const beautifulDays = (i, j, k) => {
    let beautifulDay = 0;
    for (let index = i; index <= j; index++) {
        let revers = index.toString().split("").reverse().join("");
        let result = Math.abs((index - revers) / k);
        if (Number.isInteger(result)) {
            beautifulDay++;
        }
    }
    return beautifulDay;
};

console.log(beautifulDays(20, 23, 6));

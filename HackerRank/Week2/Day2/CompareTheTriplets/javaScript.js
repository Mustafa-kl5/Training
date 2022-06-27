const compareTriplets = (a, b) => {
    let scoreForBob = 0;
    let scoreForAlice = 0;
    const result = [];

    for (let index = 0; index < a.length; index++) {
        if (a[index] > b[index]) {
            scoreForAlice++;
        }

        if (a[index] < b[index]) {
            scoreForBob++;
        }
        if (a[index] == b[index]) {
            scoreForAlice;
            scoreForBob;
        }
    }

    result.push(scoreForAlice);
    result.push(scoreForBob);
    return result;
};
const a = [1, 2, 3];
const b = [3, 2, 1];
console.log(compareTriplets(a, b));

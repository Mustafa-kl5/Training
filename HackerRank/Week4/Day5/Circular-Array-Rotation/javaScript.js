const circularArrayRotation = (a, k, queries) => {
    let result = [];

    for (let index = 0; k > 0; index++) {
        let currentValue = a.pop();
        a.unshift(currentValue);
        k--;
    }

    queries.forEach((element) => {
        result.push(a[element]);
    });

    return result;
};

console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]));

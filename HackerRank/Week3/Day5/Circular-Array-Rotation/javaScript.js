const circularArrayRotation = (a, k, queries) => {
    let result = [];

    while (k > 0) {
        let tmp = a.pop();
        a.unshift(tmp);
        k--;
    }

    for (let i = 0; i < queries.length; i++) {
        result.push(a[queries[i]]);
    }

    return result;
};
console.log(circularArrayRotation(3, 2, 3));

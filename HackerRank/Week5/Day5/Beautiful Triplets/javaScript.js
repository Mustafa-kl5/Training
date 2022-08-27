const beautifulTriplets = (d, arr) => {
    let hash = {};
    let counter = 0;
    for (let index = 0; index < arr.length; index++)
        hash[arr[index]] = arr[index];

    for (let index = 0; index < arr.length; index++) {
        if (hash[arr[index] + d] && hash[arr[index] + 2 * d]) counter++;
    }
    return counter;
};

console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]));

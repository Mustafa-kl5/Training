const sockMerchant = (n, ar) => {
    const uniqueValues = [...new Set(ar)];
    let count = 0;
    uniqueValues.forEach((value) => {
        const filterValues = ar.filter((element) => element == value);
        const pairsNumber = Math.floor(filterValues.length / 2);
        count += pairsNumber;
    });
    return count;
};
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

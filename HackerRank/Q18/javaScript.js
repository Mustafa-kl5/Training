const a = [1, 2, 1, 2, 1, 3, 3, 2, 3, 1, 1, 1];
const sockMerchant = (n, ar) => {
    const uniqeNumber = [...new Set(ar)];

    for (let index = 0; index < uniqeNumber.length; index++) {
        let count = 0;
        for (let j = 0; j < ar.length; j++) {
            if (uniqeNumber[index] == ar[j]) count++;
        }
        if (count % 2 == 0) {
            return count / 2;
        } else {
            return count - (count % 2);
        }
    }
};
console.log(sockMerchant(7, a));

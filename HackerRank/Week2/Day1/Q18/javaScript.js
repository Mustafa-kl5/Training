const a = [1, 1, 2, 2, 3, 3];
const sockMerchant = (ar) => {
    const uniqeNumber = [...new Set(ar)];
    let result = 0;
    for (let index = 0; index < uniqeNumber.length; index++) {
        let count = 0;
        for (let j = 0; j < ar.length; j++) {
            if (uniqeNumber[index] == ar[j]) count++;
        }
        if (count % 2 == 0) {
            result += count / 2;
        } else {
            result += count - (count % 2);
        }
    }
    return result;
};
console.log(sockMerchant(a));

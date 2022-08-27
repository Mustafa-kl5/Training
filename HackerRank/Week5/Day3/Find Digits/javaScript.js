const findDigits = (n) => {
    let number;
    let counter = 0;
    number = n.toString();
    for (let i = 0; i < number.length; i++) {
        if (number[i] != 0 && n % number[i] === 0) {
            counter += 1;
        }
    }
    return counter;
};

console.log(findDigits(12));

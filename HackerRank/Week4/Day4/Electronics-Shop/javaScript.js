const getMoneySpent = (keyboards, drives, b) => {
    let max = -1;
    let keyboardPrice = 0;
    let drivePrice = 0;
    keyboards.forEach((element) => {
        keyboardPrice = element;
        drives.forEach((item) => {
            drivePrice = item;
            if (
                keyboardPrice + drivePrice <= b &&
                keyboardPrice + drivePrice > max
            ) {
                max = keyboardPrice + drivePrice;
            }
        });
    });

    return max;
};

console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60));

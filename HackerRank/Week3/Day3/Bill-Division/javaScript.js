const bonAppetit = (bill, k, b) => {
    let result = "";
    bill.splice(k, 1);
    const billCost = bill.reduce((previous, next) => previous + next, 0) / 2;
    if (billCost == b) {
        result = "Bon Appetit";
    } else {
        result = b - billCost;
    }
    console.log(result);
};
bonAppetit([3, 10, 2, 9], 2, 1);

const migratoryBirds = (arr) => {
    let obj = {
        type1: 0,
        type2: 0,
        type3: 0,
        type4: 0,
        type5: 0,
    };
    arr.forEach((element) => {
        if (element == 1) {
            obj.type1++;
        } else if (element == 2) {
            obj.type2++;
        } else if (element == 3) {
            obj.type3++;
        } else if (element == 4) {
            obj.type4++;
        } else if (element == 5) {
            obj.type5++;
        }
    });
    const values = Object.values(obj);
    const max = Math.max(...values);
    return max;
};
console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));

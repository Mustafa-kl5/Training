const getTotalX = (a, b) => {
    let result = 0;
    let index = 1;
    let cloneA = a.splice(1, a.length); //6
    while (a[0] * index <= b[0]) {
        if (
            cloneA.every((item) => (a[0] * index) % item === 0) &&
            b.every((item) => item % (a[0] * index) === 0)
        ) {
            result++;
        }
        index++;
    }
    return result;
};

console.log(getTotalX([2, 6], [24, 36]));

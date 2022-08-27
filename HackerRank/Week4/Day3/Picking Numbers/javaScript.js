const pickingNumbers = (a) => {
    // let result = 0;
    // a.forEach((element) => {
    //     a.forEach((index) => {
    //         if (Math.abs(element - index) <= 1) {
    //             result++;
    //         }
    //     });
    // });
    // return result;
    let values = Array(a.length).fill(0);
    let max = 0;

    values.forEach((element, index) => {
        element;
    });
    for (let i = 0; i < a.length; i++) {
        array[a[i]]++;
    }

    for (let i = 0; i < a.length; i++) {
        if (array[i] + array[i + 1] > max) {
            max = array[i] + array[i + 1];
        }
    }
    return max;
};

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));

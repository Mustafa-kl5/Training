const cutTheSticks = (arr) => {
    let result = [];
    while (arr.length != 0) {
        let minValue = Math.min(...arr);
        result.push(arr.length);
        for (let index = 0; index < arr.length; index++) {
            let subArray = arr[index] - minValue;

            if (subArray === 0) {
                arr.splice(index, 1);
                index--;
            } else {
                arr[index] = subArray;
            }
        }
    }
    return result;
};

console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));

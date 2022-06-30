const sum = (arr) => {
    let max = Math.max(...arr);
    let result = 0;
    for (let index = 0; index < arr.length; index++) {
        result += arr[index];
    }

    return `${result - max} ${result}`;
};

const arr = [1, 2, 3, 4, 5, 8, 9];
console.log(sum(arr));

const squares = (a, b) => {
    let result = 0;
    for (let index = a; index <= b; index++) {
        if (Math.sqrt(index) % 1 === 0) {
            result++;
        }
    }
    return result;
};

console.log(squares(17, 24));

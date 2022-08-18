const staircase = (n) => {
    const arr = [n];
    const hashSymbol = "#";
    const spaceSymbol = " ";
    for (let index = n; index > arr.length; index++) {
        arr.push(spaceSymbol);
    }
    console.log(arr);
};
console.log(staircase(6));

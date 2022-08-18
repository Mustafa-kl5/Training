const staircase = (n) => {
    const hashSymbols = "#";
    const spaceSymbols = " ";
    let stairElement = [];
    let counter = n;
    for (let index = 0; index < n; index++) {
        stairElement.push(spaceSymbols);
    }

    for (let element = n - 1; element >= 0; element--) {
        stairElement[element] = hashSymbols;
        console.log(stairElement.toString().replace(/,/g, ""));
    }
};
console.log(staircase(6));

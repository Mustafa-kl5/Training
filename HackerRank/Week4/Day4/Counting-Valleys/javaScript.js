const countingValleys = (steps, path) => {
    let pathChar = path.split("");
    let counter = 0;
    let total = 0;
    for (let index = 0; index < steps; index++) {
        if (counter == 0 && pathChar[index].toLowerCase() == "d") {
            counter--;
            total++;
        } else if (pathChar[index].toLowerCase() == "d") {
            counter--;
        } else {
            counter++;
        }
    }
    return total;
};

console.log(countingValleys(8, "UDDDUDUU"));

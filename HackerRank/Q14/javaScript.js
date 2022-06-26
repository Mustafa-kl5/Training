const narcissistic = (value) => {
    const temp = value.toString();
    const arrOfNum = temp.split("");
    let result = 0;
    for (let i = 0; i < arrOfNum.length; i++) {
        result += Math.pow(parseInt(arrOfNum[i]), temp.length);
    }
    if (result == value) {
        return true;
    } else {
        return false;
    }
};
console.log(narcissistic(1652));
console.log(narcissistic(153));

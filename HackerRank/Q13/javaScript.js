let str1 = "the-stealth-warrior/mustafa_mahmood";

const toCamelCase = (str) => {
    let arr = str.split(/[/ _ -]/);
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return result;
};

console.log(toCamelCase(str1));

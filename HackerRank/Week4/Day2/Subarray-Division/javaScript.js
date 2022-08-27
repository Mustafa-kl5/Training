const birthday = (s, d, m) => {
    let result;
    for (let i = 1; i < s.length; i++) {
        s[i] += s[i - 1];
    }

    for (let i = m - 1; i < s.length; i++) {
        if (i === m - 1) {
            if (s[i] === d) result++;
        } else {
            if (s[i] - s[i - m] === d) result++;
        }
    }
    return result;
};

let x = [1, 2, 1, 3, 2];
console.log(birthday(x, 3, 2));

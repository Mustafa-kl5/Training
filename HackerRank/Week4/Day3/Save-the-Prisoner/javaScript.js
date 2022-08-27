const saveThePrisoner = (n, m, s) => {
    let result = (((m + n) % n) + (s % n) - 1) % n;
    if (result == 0) {
        return n;
    } else {
        return (result + n) % n;
    }
};

console.log(saveThePrisoner(7, 19, 2));

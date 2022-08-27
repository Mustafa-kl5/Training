const pageCount = (n, p) => {
    let front = Math.floor(p / 2);
    let back = Math.floor(n / 2 - front);
    return Math.min(front, back);
};

console.log(pageCount(6, 2));

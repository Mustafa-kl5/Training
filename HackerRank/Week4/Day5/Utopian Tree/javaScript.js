const utopianTree = (n) => {
    let height = 0;
    for (let index = 0; index <= n; index++) {
        console.log(height);
        if (index % 2 == 0) {
            height += 1;
            continue;
        }
        height *= 2;
    }
    return height;
};

console.log(utopianTree(5));

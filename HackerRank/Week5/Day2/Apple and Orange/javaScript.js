const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    console.log(apples.filter((d) => s - a <= d && d <= t - a).length);
    console.log(oranges.filter((d) => s - b <= d && d <= t - b).length);
};

console.log(
    countApplesAndOranges(5, 10, 15, 20, [10, 20, 15], [15, 18, 74, 62])
);

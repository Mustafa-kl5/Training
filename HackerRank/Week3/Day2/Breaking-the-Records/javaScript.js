const breakingRecords = (score) => {
    let games = score;
    let min = games[0];
    let max = games[0];

    let minCounter = 0;
    let maxCounter = 0;

    for (const score of games) {
        if (max < score) {
            max = score;
            maxCounter++;
        } else if (score < min) {
            min = score;
            minCounter++;
        }
    }

    return [maxCounter, minCounter];
};
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));

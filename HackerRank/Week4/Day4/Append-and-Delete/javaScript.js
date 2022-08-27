const appendAndDelete = (s, t, k) => {
    let firstWord = s.split("");
    let secondWord = t.split("");
    let counter = 0;
    for (let i = 0; i === counter && i < s.length; i++) {
        if (firstWord[i] === secondWord[i]) {
            counter++;
        }
    }

    let firstWordCount = t.length - counter;
    let secondWordCount = s.length - counter;

    let numberOfMoved = k - (firstWordCount + secondWordCount);

    if (
        firstWordCount + secondWordCount < k &&
        t.length + s.length > k &&
        numberOfMoved % 2 !== 0
    ) {
        return "No";
    } else if (firstWordCount + secondWordCount <= k) {
        return "Yes";
    } else {
        return "No";
    }
};

console.log(appendAndDelete("hackerhappy", "hackerhappy", 9));

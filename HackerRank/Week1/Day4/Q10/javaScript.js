function isIsogram(str) {
    str = str.toLowerCase();
    for (let i = 0; i < str.length; ++i)
        for (let j = i + 1; j < str.length; ++j)
            if (str[i] === str[j]) return false;
    return true;
}

let tag1 = document.getElementById("tag1");
let text = "mustafe";
let text2 = "mustafa";
tag1.innerHTML +=
    "test with no repeat char in text => " +
    isIsogram(text) +
    "\n test with repeat char in text => " +
    isIsogram(text2);

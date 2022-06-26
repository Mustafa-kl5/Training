function longest(s1, s2) {
    let str = new Set([...s1, ...s2]);
    return [...str].sort().join("");
}

console.log(longest("sdasdafdssdfsd", "sdfsdfsddghjpldapodiofnejnv"));

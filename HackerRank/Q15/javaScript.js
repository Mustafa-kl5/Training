const disemvowel = (str) => {
    return str.replace("[ueaio UAEIO]gm", "");
};

let name1 = "This website is for losers LOL!";

console.log(disemvowel(name1));

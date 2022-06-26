function incrementNum(NUM) {
    return ++NUM;
}
let tag1 = document.getElementById("tag1");
tag1.innerHTML = incrementNum(65);

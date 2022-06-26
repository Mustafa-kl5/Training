function cubes(num) {
    return Math.pow(num, 3);
}
let tag1 = document.getElementById("tag1");
tag1.innerHTML = cubes(3);

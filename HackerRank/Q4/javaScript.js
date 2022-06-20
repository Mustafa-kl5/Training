function maxResult(a, b, c) {
    let p1 = a * (b + c);
    let p2 = a * b * c;
    let p3 = a + b * c;
    let p4 = (a + b) * c;
    let result = 0;
    if (p1 >= p2 && p1 >= p3 && p1 >= p4) {
        result = p1;
    } else if (p2 >= p1 && p2 >= p3 && p2 >= p4) {
        result = p2;
    } else if (p3 >= p1 && p3 >= p2 && p3 >= p4) {
        result = p4;
    } else {
        result = p4;
    }
    return result;
}
let tag1 = document.getElementById("tag1");
tag1.innerHTML += maxResult(2, 3, 5);

const hurdleRace = (k, height) => {
    let faultToJump = 0;
    height.forEach((element) => {
        if (element > k) {
            let result = element - k;
            if (result > faultToJump) {
                faultToJump = result;
            }
        }
    });
    return faultToJump;
};

console.log(hurdleRace(4, [1, 6, 3, 5, 2]));

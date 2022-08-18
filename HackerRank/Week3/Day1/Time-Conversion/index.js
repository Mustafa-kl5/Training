const timeConversion = (s) => {
    let time = s;
    let hour;
    let minutes;
    let second;
    let splitTime;
    splitTime = time.split(":");

    if (splitTime[2].indexOf("PM") == 2) {
        if (splitTime[0] === "12") {
            hour = "12";
        } else {
            hour = parseInt(splitTime[0]) + 12;
        }
        minutes = splitTime[1];
        second = splitTime[2].replace(/PM/g, "");
        return `${hour}:${minutes}:${second}`;
    } else {
        if (splitTime[0] === "12") {
            hour = "00";
        } else {
            hour = splitTime[0];
        }
        minutes = splitTime[1];
        second = splitTime[2].replace(/AM/g, "");
        return `${hour}:${minutes}:${second}`;
    }
};

console.log(timeConversion("12:50:00AM"));

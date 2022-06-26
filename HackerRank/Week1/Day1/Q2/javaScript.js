console.log("test");
console.log("////////////////////");
let date = "06/22/2022";

const getDateAsText = (date) => {
    let Day = new Date(date);
    let dateAsText = Day.toLocaleDateString("en-us", { weekday: "long" });
    return dateAsText;
};
console.log(getDateAsText(date));

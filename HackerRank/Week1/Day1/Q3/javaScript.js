const library = [
    {
        title: "Bill Gates",
        author: "The Road Ahead",
        readingStatus: true,
    },
    {
        title: "Steve Jobs",
        author: "Walter Isaacson",
        readingStatus: true,
    },
    {
        title: "Mockingjay: The Final Book of The Hunger Games",
        author: "Suzanne Collins",
        readingStatus: false,
    },
];
let tag1 = document.getElementById("tag1");
let tag2 = document.getElementById("tag2");
library.forEach((element) => {
    if (element.readingStatus == true) {
        tag1.innerHTML += `Already read ${element.title} by ${element.author}.`;
    } else {
        tag2.innerHTML += `You still need to read ${element.title} by ${element.author}. \n`;
    }
});

const designerPdfViewer = (h, word) => {
    let tallestCharHeight = 0;
    let index = 0;
    for (let i = 0; i < word.length; i++) {
        index = word.charCodeAt(i) - 97;

        if (h[index] > tallestCharHeight) {
            tallestCharHeight = h[index];
        }
    }
    return tallestCharHeight * word.length;
};
console.log(
    designerPdfViewer(
        [
            1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            5, 5, 7,
        ],
        "zebra"
    )
);

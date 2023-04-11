const strings = ["asd", "afffd", "cc", "kk"];

const compareStrings = (array) => {
    const res = [];

    array.forEach((item, index, arr) => {
        if (index === arr.length - 1) return;
        if (
            item[0] === arr[index + 1][0] &&
            item[item.length - 1] === arr[index + 1][arr[index + 1].length - 1]
        ) {
            res.push(true);
        } else {
            res.push(false);
        }
    });

    return res;
};

const result = compareStrings(strings);

console.log(result)
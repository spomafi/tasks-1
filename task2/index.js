const strings = ["asd", "afffd", "cc", "kk"];

const compareStrings = (array) => {
  const res = [];

  array.forEach((item, index, arr) => {
    if (index === arr.length - 1) {
      return;
    }

		const nextItem = arr[index + 1];

    const valueRes = item[0] === nextItem[0] && 
			item[item.length - 1] === 
      nextItem[nextItem.length - 1]

    res.push(valueRes)
  });
  return res;
};

const result = compareStrings(strings);

console.log(result);

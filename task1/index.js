const test = [{
  name: "John",
  address: {
    city: "London",
    country: "UK",
  },
  num: [1, 2],
}];

const getValues = (obj) => {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === "object") {
      obj[key] = getValues(obj[key]);
    } else {
      obj[key] = obj[key];
      return obj;
    }
  });
  return obj;
};

const result = getValues(test)
 
console.log(result)

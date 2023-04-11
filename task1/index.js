const test = {
  name: "John",
  address: {
    city: "London",
    country: "UK",
  },
};
  
const getValues = (obj) => {
  let res = {};

  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === "object") {
      // res = {...res, [key]: getValues(obj[key])};
      res[key] = getValues(obj[key]);
    } else {
      // res = {...res, [key]: obj[key]};
      res[key] = obj[key];
      return res;
    }
  })

  return res;
};
  
const result = getValues(test);
  
console.log(result)
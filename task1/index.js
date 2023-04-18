const test = [{
  name: "John",
  address: {
    city: "London",
    country: "UK",
  },
  num: [1, 2],
}];

const getValues = (obj) => {
  if (obj === null) {
    return null
  }

  let result = Object.assign({}, obj);

  Object.keys(result).forEach(key => 
    (result[key] = typeof obj[key] === "object" ? 
    getValues(obj[key]) : obj[key]));

  if (Array.isArray(obj) && obj.length) {
    return (result.length = obj.length) && Array.from(result)
  } else if(Array.isArray(obj)){
    return Array.from(obj)
  } else {
    return result
  }
};

const clone = getValues(test)
 
console.log(clone)

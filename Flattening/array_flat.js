// Flattening of an array recursively

let arr = [1, 2, 3, ["a", "b"], "r", "s", [10, 13.4, ["pqr", "1t"]]];

// function to recursively flatten the array
const flatArr = (arr) => {
  let newArr = [];
  arr.forEach((ele) => {
    if (Array.isArray(ele)) {
      flatArr(ele);
    } else {
    }
  });
};

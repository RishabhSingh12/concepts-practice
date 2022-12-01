// Flattening of an array recursively

let arr = [1, 2, 3, ["a", "b"], "r", "s", [10, 13.4, ["pqr", "1t"]]];

// function to recursively flatten the array
const flatArr = (arg) => {
  let newArr = [];
  function getResult(ar) {
    ar.forEach((ele, idx) => {
      if (Array.isArray(ele)) {
        getResult(ele);
      } else {
        newArr.push(ele);
      }
    });
  }
  getResult(arg);
  return newArr;
};

// priting the flattened array
console.log(flatArr(arr));

// Using flat method
// console.log(arr.flat(Infinity));

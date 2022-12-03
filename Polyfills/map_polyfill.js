// polyfill for the array map method

Array.prototype.myMap = function (cb) {
  let resArr = [];
  for (let i = 0; i < this.length; i++) {
    resArr.push(cb(this[i], i, this));
  }
  return resArr;
};

let arr = [1, 2, 3, 4, 5];
const result = arr.myMap((ele, idx, arr) => {
  return ele * 2;
});

console.log(result);

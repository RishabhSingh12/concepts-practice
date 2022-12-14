// polyfill for array find method

// example array
let arr = [5, 8, 15, 20, 39];

// polyfill implementation
Array.prototype.myFind = function (cb) {
  for (let i = 0; i < this.length; i++) {
    let result = cb(this[i], i, this);
    if (result) {
      return this[i];
    }
  }
  return undefined;
};

// test
const result = arr.myFind((ele, idx) => ele % 13 === 0);
console.log(result); // result = 39

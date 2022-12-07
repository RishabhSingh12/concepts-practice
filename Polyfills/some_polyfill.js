// polyfill for array some method

// example array
let arr = ["alex", "sharon", "bob", "alexa"];

// polyfill implementation
Array.prototype.mySome = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

// testing polyfill
const result1 = arr.mySome((ele, idx) => ele.length === 5);
console.log(result1);
const result2 = arr.mySome((ele, idx) => ele === "alix");
console.log(result2);

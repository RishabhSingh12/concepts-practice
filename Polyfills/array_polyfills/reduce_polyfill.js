// custom reduce polyfill method

// example array
let arr = [140, 120, 52, 48, 90];

Array.prototype.myreduce = function (cb, initialValue) {
  let res = initialValue;

  for (let i = 0; i < this.length; i++) {
    if (res === undefined) {
      res = this[i];
    } else {
      res = cb(res, this[i], i, this);
    }
  }

  return res;
};

console.log(
  arr.myreduce((acc, val) => {
    if (acc < val) {
      acc = val;
    }
    return acc;
  }, 100)
);
console.log(
  arr.myreduce((acc, val) => {
    if (acc < val) return val;
  })
);

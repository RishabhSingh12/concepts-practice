// custom reduce polyfill method

// example array
let arr = [140, 120, 52, 48, 90];

Array.prototype.myreduce = function (cb, intialValue) {
  let res = intialValue;

  for (let i = 0; i < this.length; i++) {
    if (!res) {
      res = this[i];
    } else {
      cb(res, this[i], i, this);
    }
  }
};

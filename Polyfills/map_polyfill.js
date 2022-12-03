// polyfill for the array map method

Array.prototype.myMap = function (cb) {
  let resArr = [];
  for (let i = 0; i < this.length; i++) {
    resArr.push(cb(this[i], i, this));
  }
};

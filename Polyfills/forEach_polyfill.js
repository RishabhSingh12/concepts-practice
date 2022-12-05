// polyfill for map forEach method

// test array
let arr = [1, 2, 3, 4, 5];

// Implentation
Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

arr.myForEach((value, index, array) => console.log(value * 2));

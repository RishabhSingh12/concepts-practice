// polyfill for array some method

// example array
let array = ["alex", "sharon", "bob", "alexa"];

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

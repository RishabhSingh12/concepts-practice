// Implementation for custom filter function

// example array
let arrch = ["a", "b", "c", "d", "e", "f"];

Array.prototype.myFilter = function (cb) {
  let resArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      resArr.push(this[i]);
    }
  }
  return resArr;
};

let result = arrch.myFilter((ele, idx, arrch) => {
  //   let ascii = ele.charCodeAt(0) === 97;
  return ele.charCodeAt(0) === 102;
});
console.log(result);

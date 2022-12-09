// custom implementation for the call method

// example object
let car = {
  color: "red",
  company: "rivian",
};

// example function
function purchaseCar(price) {
  console.log(`I purchased ${this.color} - ${this.company} for Rs ${price}`);
}

// Custom implementation
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("not callable");
  }

  context.fn = this;
  context.fn(...args);
};

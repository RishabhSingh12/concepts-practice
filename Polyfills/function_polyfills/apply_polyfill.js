// custom implementation for apply method

// example object
let car = {
  color: "red",
  company: "rivian",
};

// example function
function purchaseCar(price) {
  console.log(`I purchased ${this.color} - ${this.company} for Rs ${price}`);
}

// Custom Implementation
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "It's not callable");
  }

  if (!Array.isArray(args)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }

  context.fn = this;
  context.fn(...args);
};

// example implementation
purchaseCar.myApply(car, [500000]);

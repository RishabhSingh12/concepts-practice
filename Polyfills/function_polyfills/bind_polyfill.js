// bind polyfill implementation

// example object
let car = {
  color: "red",
  company: "rivian",
};

// example function
function purchaseCar(price) {
  console.log(`I purchased ${this.color} - ${this.company} for Rs ${price}`);
}

// implementation
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not callable");
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

// test
const newres = purchaseCar.myBind(car);
console.log(newres("rs 500000"));

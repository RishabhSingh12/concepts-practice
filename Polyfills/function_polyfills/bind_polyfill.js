// bind polyfill implementation

let car = {
  color: "red",
  company: "rivian",
};

// example function
function purchaseCar(price) {
  console.log(`I purchased ${this.color} - ${this.company} for Rs ${price}`);
}

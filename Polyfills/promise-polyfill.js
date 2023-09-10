//state of Promise
const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

//custom promise implemnentation
function customPromise(executor) {
  //initial state is pending and value is null
  let state = PENDING;
  let value = null;

  //for promise chaining
  let handlers = [];
  let catchers = [];

  //resolve callback function
  function resolve(result) {
    if (state !== PENDING) return;

    state = FULFILLED;
    value = result;

    handlers.forEach((h) => h(value));
  }

  //reject callback function
  function reject(err) {
    if (state !== PENDING) return;

    state = REJECTED;
    value = err;

    catchers.forEach((c) => c(value));
  }

  //then for handling success case
  this.then = function (callback) {
    //until the state is fulfilled keep pushing callbacks to the handlers arr
    if (state === FULFILLED) {
      callback(value);
    } else {
      handlers.push(callback);
    }
  };

  //catch for handling error cases
  this.catch = function (callback) {
    if (state === REJECTED) {
      callback(value);
    } else {
      catchers.push(callback);
    }
  };

  //calling the executor function
  executor(resolve, reject);
}

//executor function replicating an async behaviour
const executorFn = (res, rej) => {
  if (2 === 2) {
    setTimeout(() => {
      res("Promise Resolved");
    }, 1000);
  } else {
    setTimeout(() => {
      rej("Error Occured");
    }, 1000);
  }
};

//creating instance of the custom promise
const greetMsg = new customPromise(executorFn);

greetMsg.then((val) => console.log(val));
greetMsg.catch((err) => console.log(err));

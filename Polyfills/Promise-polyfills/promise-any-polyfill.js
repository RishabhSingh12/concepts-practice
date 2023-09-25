//Promise.any takes an array of promises and returns a single promise that fulfills with the value of the fulfilled promise. If no promises fulfill then it rejects with the aggreagted result of the failed promises.

const myPromiseAny = function (promisesArr) {
  let promiseError = new Array(promisesArr.length);

  let counter = 0;

  return new Promise((resolve, reject) => {
    promisesArr.forEach((promise, idx) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((error) => {
          promiseError[counter] = error;
          counter += 1;
          if (counter === promisesArr.length) {
            //all promises rejected, reject outer promise
            reject(promiseError);
          }
        });
    });
  });
};

//Inputs for testing"
const test1 = new Promise((res, rej) => {
  setTimeout(rej, 500, "one");
});
const test2 = new Promise((res, rej) => {
  setTimeout(rej, 300, "two");
});

myPromiseAny([test1, test2])
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

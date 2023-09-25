//promise.all implementation
const myPromiseAll = function (taskList) {
  //to store the results
  const result = [];

  let promisesCompleted = 0;

  return new Promise((resolve, reject) => {
    //iterating through ezch promise
    taskList.forEach((promise, idx) => {
      promise
        .then((val) => {
          //store the outcome and increment the count
          result[idx] = val;
          promisesCompleted += 1;

          //if all the promises are completed
          if (promisesCompleted === taskList.length) {
            resolve(result);
          }
        })
        //if any promise fails reject
        .catch((err) => {
          reject(err);
        });
    });
  });
};

//checking the implementation for success case
function task(time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(time);
    }, time);
  });
}

//for failure case

const taskList = [task(1000), task(5000), task(3000)];

myPromiseAll(taskList)
  .then((res) => {
    console.log("All results", res);
  })
  .catch(console.error);

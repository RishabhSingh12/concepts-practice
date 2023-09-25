//promise.all implementation
const myPromiseAll = function (taskList) {
  const result = [];

  let promisesCompleted = 0;

  return new Promise((resolve, reject) => {
    //iterating through ezch promise
    taskList.foreach((promise, idx) => {
      promise
        .then((val) => {
          //store the outcome and increment the count
          result[idx] = val;
          promisesCompleted++;

          if (promisesCompleted === taskList.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

//checking the implementation

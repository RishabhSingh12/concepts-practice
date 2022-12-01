// Flattening of an object recursively

let obj = {
  name: "abc",
  nos: {
    address: "123 lane",
    pin: 123,
    phone: 00000,
  },
  key: "pan",
  selection: {
    members: {
      ide: 1,
      rating: 4.6,
      info: "shane",
      group: "2t",
    },
  },
};

// function to flatten obj recursively
const flattenobj = (ob) => {
  let newObj = {};

  const getResult = (ob) => {
    Object.keys(ob).forEach((ele) => {
      if (typeof [ele] === "object") {
        flattenobj(ele);
      } else {
        newObj[ele] = ob[ele];
      }
    });
  };
  getResult(ob);

  return newObj;
};

console.log(flattenobj(obj));

// console.log({ ...obj });

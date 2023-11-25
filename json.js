// JSON === JavaScript Object Notation

/**
 * normal js to string JSON --> stringify
 * string js to normal JSON --> parse
 */

const obj = {
  info: {
    name: "shafin",
    birthDate: 29,
  },
  color: ["blue", "purple"],
};

console.log(obj);

// convert into Json string

const stringified = JSON.stringify(obj);
console.log(stringified);

// convert to again normal type
const parsed = JSON.parse(stringified);
console.log(parsed);



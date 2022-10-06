// const { pipe, compose } = require("lodash/fp");

// const input = "    Javascript     ";
// const type = "span";
// const output = "<span>J A V A S C R I P T</span>";

// const trim = (str) => str.trim();

// const upperCase = (str) => str.toUpperCase();

// const separator = (str = "") => str.split("").join(" ");

// const wrap = (type) => (str) => `<${type}>${str}</${type}>`; // currying

// // const transform = compose(wrap(type), separator, upperCase, trim);
// const transform = pipe(trim, upperCase, separator, wrap(type));

// console.log("result = ", transform(input));

// const person = {
//   name: "arslonbek",
//   age: 20,
//   address: {
//     state: "UZB",
//     cities: {
//       tashkent: {
//         district: "Sebzor",
//       },
//       urganch: {
//         district: "Chorsu",
//       },
//     },
//   },
// };

// function test(obj, state) {
//   const temp = { ...obj };
//   temp.address = { ...obj.address };
//   temp.address.state = state;

//   return temp;
// }

// const result1 = test(person, "RU"); // { name: 'arslonbek', age: 20 }
// const result2 = test(person, "RU"); // { name: 'arslonbek', age: 20 }

const { produce } = require("immer");

const person = {
  name: "arslonbek",
  age: 20,
  address: {
    state: "UZB",
    city: "Tashkent",
    data: {
      list: {
        paths: ["path-1", "path-2"],
      },
    },
  },
};

const person2 = produce(person, (draft) => {
  draft.name = "Boburbek";
  draft.address.city = "Urgench";
  draft.address.data.list.paths[1] = "path-test";
});

console.log("person = ", JSON.stringify(person));
console.log("person2 = ", JSON.stringify(person2));

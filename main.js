// const person = {
//   name: "arslonbek",
//   age: 20,
//   run: () => {
//     console.log(`${this.name} is running...`);
//   },
// };

// console.log("person = ", person);

// // person.run.call(person); // arslonbek is running...

function createFunction() {
  let count = 0;
  // console.log("result = ", result);

  return function () {
    console.log("count = ", ++count);
  };
}

const age = new Number(20); //

// const result = "arslonbek";
// const test = createFunction();
// console.dir(createFunction);

// test();

// console.log(createFunction.__proto__ === Function.prototype);
// console.log(age.__proto__ === Number.prototype);

// console.log(age instanceof Number);

// const person = {
//   name: "arslonbek",
//   job: "teacher",
//   jump() {
//     //     function app() {
//     console.log(this.name + " is jumping...");
//     //     }
//     //     app();
//   },
// };

// person.jump(); //

// // const jumpTwo = person.jump; //

// // // jumpTwo();

// function first() {
//   console.log("first  = ", this);
//   let a = 20;
//   function second() {
//     console.log("second  = ", this);
//     console.log("a = ", a);
//   }
//   second();
// }

// window.first();

class Book extends String {
  constructor(name) {
    super();
    this.name = name;
  }

  read() {
    console.log(`book's name is ${this.name}`);
  }
}

const book = new Book("Storybook");
let a = new Boolean();
console.log(a);
console.log(book);
console.log(book.__proto__ === String.prototype); // false
console.log(book.__proto__ === Book.prototype); // true
console.log("--------------");
console.log(book instanceof String); // true
console.log(book instanceof Book); // true
console.log(book instanceof Object); //
console.log(a instanceof Object); //

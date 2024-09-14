// Exercise 1:
// • Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literals and for..of
//
// function gretter(myArray, counter) {
//  var greetText = 'Hello' ;
//  for (var index = 0; index < myArray.length; index++) {
//   console.log(greetText + myArray[index]);
//  }
// }
// gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

const greeter = (myArray, counter) => {
  let greetText = "Hello";
  myArray.forEach((name) => {
    console.log(`${greetText} ${name}`);
  });
};
greeter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3);

// Exercise 2:
// • Using destructuring assignment syntax and the spread operator, write a function will capitalize the first letter of a string.

// console.log(capitalize('fooBar'));
// console.log(capitalize('nodeJs'));
// Output:
// Foobar
// Nodejs

const capitalize = (str) => {
  const [firstChar, ...remainingChars] = str;
  return firstChar.toUpperCase() + remainingChars.join("").toLowerCase();
};

console.log(capitalize("fooBar"));
console.log(capitalize("nodeJs"));

// Exercise 3:
// • Using array.proto.map create function to use the capitalize method in Exercise 2 to upper case the first character of each Color in the following array..
//
// const colors = ['red', 'green', 'blue'];
// code ...
// console.log(capitalizedColors)
//
// Output:
// ['Red', 'Green', 'Blue']

const colors = ["red", "green", "blue"];
const capitalizedColors = colors.map((color) => capitalize(color));

console.log(capitalizedColors);

// Exercise 4:
// • Using array.proto.filter create a function that will filter out all the values of the array that are less than twenty.
//
// var values = [1, 60, 34, 30, 20, 5]
// Code...
// console.log(filteredValues)
// Output
// [1, 5]

var values = [1, 60, 34, 30, 20, 5];
const filteredValues = values.filter((value) => value < 20);

console.log(filteredValues);

// Exercise 5:
// • Using array.proto.reduce create calculate the sum and product of a given array.
//
// var array = [1, 2, 3, 4]
// Code ...
// console.log(calculateSum);
// console.log(calculateProduct);
// Output:
// 10
// 24

var array = [1, 2, 3, 4];
const calculateSum = array.reduce((acc, value) => acc + value, 0);
const calculateProduct = array.reduce((acc, value) => acc * value, 1);

console.log(calculateSum);
console.log(calculateProduct);

// Exercise 6:
// • Using ES6 syntax for class and subclass using extends to create a Sedan subclass which derives from Car Class. The parameters for the Car class is the model and year. The parameters for the subclass is the model, year and balance.
// • Use the super key word in the Sedan subclass to set the model and name in base Car constructor.

// const car2 = new Car('Pontiac Firebird', 1976);
// console.log(car2.details());
// Subclass - extends Car super class
// const sedan = new Sedan('Volvo SD', 2018, 30000);
// console.log(sedan.info());
// Output:
// Model: Pontiac Firebird Engine 1976
// Volvo SD has a balance of $30000.00

class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  details() {
    return `Model: ${this.model} Engine ${this.year}`;
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }

  info() {
    return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
  }
}

const car2 = new Car("Pontiac Firebird", 1976);
console.log(car2.details());
const sedan = new Sedan("Volvo SD", 2018, 30000);
console.log(sedan.info());

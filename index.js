// *****Q1 ******/
let greet = (name) => {
  return `Hello ${name}`;
};
console.log(greet("Dana"));

// *****Q2***** //

let sum = (num1, num2) => {
  return num1 + num2;
};

console.log(sum(10, 20));

// *****Q3 *******/
let sqrt = (number) => {
  return number * number;
};

console.log(sqrt(4));
// ******Q4*******

let squaredNumbers = (numbers) => {
  return numbers.map((number) => number * number);
};

console.log(squaredNumbers([4, 3, 2, 1]));

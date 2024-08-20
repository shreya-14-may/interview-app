//1. What is the output of the following code?
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) { //10times
  setTimeout(() => console.log(b[i]), 1000);
 
}
// 1 2 3 4 5 6 7 8 9 10

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}
 //undefined (10times) because it searches for the last index element till it reaches to 1000ms so searching for b[i] = b[10] and we have till b[0]
//output: undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined




_______________________________________________________________________


// 2. In JavaScript, how do you turn an Object into an Array []?

let obj = { id: "1", name: "user22", age: "26", work: "programmer" };

console.log(Object.keys(obj));
// ["id", "name", "age", "work"]

console.log(Object.values(obj));
// ["1", "user22", "26", "programmer"]

console.log(Object.entries(obj));
// [["id", "1"], ["name", "user22"], ["age", "26"],

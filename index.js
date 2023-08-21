// Callback - 1
// function greeting(name) {
//   alert("Hello" + name);
// }
// function proccesUserInput(callback) {
//   var name = prompt("please enter your name");
//   callback(name);
// }
// proccesUserInput(greeting);

// Callback - 2
// function proccesUserInput(callback) {
//   //-> fungsi pemanggil
//   var name = prompt(`please enter your name`);
// }
// proccesUserInput(function greeting(name) {
//   alert("Hello" + name); //-> Deklarasi di dalam argumen
// });

// Callback - 3
// function proccesUserInput(callback) {
//   var name = prompt(`please enter your name`);
// }
// proccesUserInput(function (name) {
//   alert("Hello" + name);
// });

// Callback - Arrow Function
// const greeting = (name) => {
//   alert(`Hello` + name);
// };
// const proccesUserInput = (callback) => {
//   var name = prompt(`please enter your name.`);
//   callback(name);
// };
// proccesUserInput(greeting);

// Callback - Ekspresi arrow function
// const proccesUserInput = (callback) => {
//   var name = prompt(`please enter your name`);
//   callback(name);
// };
// proccesUserInput();

// Kustomisasi fungsi - abjad
let list = ["celana", "sabuk", "alas kaki", "baju"];
console.log(list.sort());
// result
// ["alas kaki", "baju", "celana", "sabuk"];

// Parameters - contoh
// function compare(a, b) {
//   if ("a is less than b by some ordering criterion") {
//     return -1;
//   }
//   if ("a is greater than b by the ordering criterion") {
//     return 1;
//   }
//   return 0;
// }
// compare();

// mengurutkan array index =
function compareNumber(a, b) {
  return a - b;
}
var lists = [1, 30, 4, 21, 100000];
var a = lists.sort(compareNumber);
console.log(a);
// hapus komentar untuk mencobanya
// (5) [1, 4, 21, 30, 100000]

// menggunakan arrow function
var list2 = [1, 30, 4, 21, 100000];
list.sort((a, b) => {
  return a - b;
});
console.log(list2.sort((a, b) => a - b));
// akan mengembalikan [1,4,21,30,100000]

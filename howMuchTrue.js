// Create a function which returns the number of
// true values there are in an array.
// Examples
// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0
// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

//FIRST TRY!
// function countTrue(arr) {
//   let count = 0
//   if (arr.length == 0) {
//     let emptyArr = 0
//     return emptyArr
//   } else {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === true) {
//         count++
//       }
//     }
//   }
//   return count
// }
// console.log(countTrue([]))
// console.log(countTrue([true, false, false, true, false]))
// Test.assertEquals(countTrue([true, false, false, true, false]), 2)

//filter
// let howTrue = (arr) => arr.filter((e) => e == true).length
// console.log(howTrue([true, false, false, true, false]))
//reduce
// let howTrueR = (arr) =>
//   arr.reduce((count, currentValue) => count + (currentValue ? 1 : 0), 0)
// console.log(howTrueR([true, false, false, true, false]))
// console.log(howTrueR([]))
//find


// let names = ['Alice', 'Bob', 'Alice', 'Charlie', 'Bob'];
// let count = names.reduce((obj, name) => {
//     obj[name] = (obj[name] || 0) + 1;
//     console.log(`Name: ${name}, Current State:`, obj); // Log the name and the current state of the object
//     return obj;
// }, {});
// console.log('Final count:', count);
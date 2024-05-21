// 1.write a function that return the revese of a string ?
   
  // function reversestring(str){
  //   return str.split('').reverse().join('');
  // }
  // console.log(reversestring("happy,interview"))

// 2.write a function that return the longest word in the sentance?

// function findLongestWord(sentence) {
//     const words = sentence.split(' ');
//     let longestWord = '';

//     for (let word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }

// console.log(findLongestWord("javascript is a scripting a language")); 

// 3.function that checks whether a given string a palindrome or not?


// function isPalindrome(str){
//   const reversedstr =str.split('').reverse().join("");
  
//   return str=== reversedstr
// }
// console.log(isPalindrome("racecar"));

// 4. write a function to remove duplicate elements from an array?

// function removeduplicate(arr){
//     return[...new Set(arr)];
// }
// console.log(removeduplicate([1,2,3,4,4,5,5,6]));

// => Hello world!
// console.log('Hello world!');

// // => Hello QuickRef.ME
// console.warn('hello %s', 'QuickRef.ME');

// Prints error message to stderr
// console.error(new Error('Oops!'));

// The parameter is name
// function sayHello(name) {
//     return `Hello, ${name}!`;
//   }
  
// console.log(sayHello)



// function maxSubArray(nums) {
//   let maxSum = currentSum = nums[0];
  
//   for (i = 1; i < nums.length; i++) {
//       currentSum = Math.max(nums[i], currentSum + nums[i]);
//       maxSum = Math.max(maxSum, currentSum);
//   }
  
//   return maxSum;
// }

// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSubArray(nums));
// Output: 6 (corresponding to [4, -1, 2, 1])

//  function reversestring(str){
//     return str.split('').reverse().join('');
//   }
//   console.log(reversestring("happy,interview"))

// let num="game"
// num1=num.split('').reverse().join('')
// console.log(num1)

// function sumOfPositiveIntegers(arr) {
//   return arr.filter(num => num > 0).reduce((acc, curr) => acc + curr, 0);
// }

// // Example usage:
// const numbers = [1, -2, 3, -4, 5];
// console.log(sumOfPositiveIntegers(numbers)); // Output should be 9 (1 + 3 + 5 = 9)


// function isPalindrome(str){
//   const reversedstr =str.split('').reverse().join("");
  
//   return str=== reversedstr
// }
// console.log(isPalindrome("racecar"));

// fizz buzz
// function fizzbuzz(n) {
//   for ( i = 1; i <= n; i++) {
//       if (i % 3 === 0 && i % 5 === 0) {
//           console.log("FizzBuzz");
//       } else if (i % 3 === 0) {
//           console.log("Fizz");
//       } else if (i % 5 === 0) {
//           console.log("Buzz");
//       } else {
//           console.log(i);
//       }
//   }
// }
// fizzbuzz(15);

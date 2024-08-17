function sumOfTwoNumbers(a, b) { 
    return a + b; 
} 

function findMaxNumber(arr) { 
    return Math.max(...arr); 
} 
const reverseString = (str) => str.split('').reverse().join(''); 

function isPalindrome(str) { 
    return str === str.split('').reverse().join(''); 
}
// A factorial number is the product of all positive integers, which are equal to or less than the given number.  
function factorial(number) { 
  if (number === 0 || number === 1) { 
    return 1; 
  } else { 
    return number * factorial(number – 1); 
  } 
} 

// To check if a given number is prime, loop from 2 to the square root of the number. If any integer evenly divides it, the number is not prime. 

function isPrime(num) { 
  if (num <= 1) return false; 
  for (let i = 2; i <= Math.sqrt(num); i++) { 
    if (num % i === 0) return false; 
  } 
  return true; 
} 

function findLargestElement(nestedArray) { 
    let largest = nestedArray[0][0]; 
    for (let arr of nestedArray) { 
      for (let num of arr) { 
        if (num > largest) { 
          largest = num; 
        } 
      } 
    } 
    return largest; 
} 

function fibonacciSequence(numTerms) { 
    if (numTerms <= 0) return []; 
    if (numTerms === 1) return [0]; 
    let sequence = [0, 1]; 
    while (sequence.length < numTerms) { 
      let nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2]; 
      sequence.push(nextNumber); 
    } 
    return sequence; 
} 
function toTitleCase(str) { 
    return str.replace(/\b\w/g, l => l.toUpperCase()); 
} 
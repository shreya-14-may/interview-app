//By delaying the execution of the debounce function until the specified time frame has passed, the frequency can be limited. 
function debounce(func,delay){
    let timer = 0;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(func,delay)
    }
}
//The following function takes an array of objects and a key to sort the array based on the values in ascending order. 
function sortByKey(arr,key){
    return arr.sort((a,b)=>a[key]-b[key])
}
//By using two methods together and creating a deep clone, I can serialize the object to a JSON string. I would then parse it back into a new object, thereby removing any reference to the original object. 
function deepCLone(obj){
    return JSON.parse(JSON.stringify(obj))
}

function factorial(num){
    if(num <=1) return 1;
    return num * factorial(num-1)
}

function mergeSortedArrays(arr1, arr2) { 

    return [...arr1, ...arr2].sort((a, b) => a - b); 
  
  } 
function mergeSortedArraysDSA(arr1,arr2){
    let result =[];
    let i=0;
    let j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++
        }else{
            result.push(arr2[j]);
            j++
        }
    }
       // If there are remaining elements in arr1, add them to result
       while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2, add them to result
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
    
}
// let arr1 = [1, 3, 5, 7];
// let arr2 = [2, 4, 6, 8];
// console.log(mergeSortedArrays(arr1, arr2)); 
// Output: [1, 2, 3, 4, 5, 6, 7, 8]


function isPalindrome(str) { 

    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    const reversedStr = normalizedString.split('').reverse().join('');
  
    return cleanStr === reversedStr; 
  
}

function isPalindromeDSA(s) {
    // Normalize the string: convert to lowercase and remove non-alphanumeric characters
    const normalizedString = s
        .toLowerCase()                  // Convert to lowercase
        .replace(/[^a-z0-9]/g, '');     // Remove non-alphanumeric characters

    let left = 0;
    let right = normalizedString.length - 1;

    // Two-pointer approach
    while (left < right) {
        if (normalizedString[left] !== normalizedString[right]) {
            return false;  // Not a palindrome
        }
        left++;
        right--;
    }

    return true;  // Is a palindrome
}

// console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
// console.log(isPalindrome("No 'x' in Nixon"));                // Output: true
// console.log(isPalindrome("Hello, World!"));                  // Output: false


//Question  7
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Method to insert a node at the beginning
    insertAtBeginning(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.size++;
    }

    // Method to insert a node at the end
    insertAtEnd(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Method to insert a node at a specific position
    insertAtPosition(value, position) {
        if (position < 0 || position > this.size) {
            console.log("Invalid position");
            return;
        }

        if (position === 0) {
            this.insertAtBeginning(value);
        } else if (position === this.size) {
            this.insertAtEnd(value);
        } else {
            const newNode = new Node(value);
            let current = this.head;
            let previous;
            let index = 0;

            while (index < position) {
                previous = current;
                current = current.next;
                index++;
            }

            previous.next = newNode;
            newNode.next = current;
            this.size++;
        }
    }

    // Method to delete a node from a given position
    deleteFromPosition(position) {
        if (position < 0 || position >= this.size) {
            console.log("Invalid position");
            return;
        }

        if (position === 0) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            let previous;
            let index = 0;

            while (index < position) {
                previous = current;
                current = current.next;
                index++;
            }

            previous.next = current.next;
        }
        this.size--;
    }

    // Method to print the linked list
    printList() {
        let current = this.head;
        let result = "";
        while (current !== null) {
            result += current.value + " -> ";
            current = current.next;
        }
        console.log(result + "null");
    }
}

//Question  7

// 1. Using Recursion
// This method involves creating a recursive function that processes each element, and if an element is an array, the function recursively flattens it.

function flattenArrayDSA(arr) {
    let result = [];

    arr.forEach(item => {
        if (Array.isArray(item)) {
            // Recursively flatten the item if it's an array
            result = result.concat(flattenArray(item));
        } else {
            // Otherwise, add the item to the result
            result.push(item);
        }
    });

    return result;
}

// 2. Using Array.prototype.flat()
// ES2019 introduced the flat() method, which can flatten an array to a specified depth. By providing Infinity as the depth, you can flatten the array completely.
const flattenArray = (nestedArray) => { 
    return nestedArray.flat(Infinity); 
}; 

// const nestedArray1 = [1, [2, [3, [4, 5]]], 6];
// console.log(flattenArray(nestedArray1)); // Output: [1, 2, 3, 4, 5, 6]


function areAnagrams(str1, str2) { 
    return str1.split('').sort().join('') === str2.split('').sort().join(''); 
} 




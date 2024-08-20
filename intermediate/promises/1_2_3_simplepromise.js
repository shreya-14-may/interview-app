// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    // Do some asynchronous operation
    let success = true;
    
    if (success) {
        resolve("Operation succeeded!");  // Fulfill the promise
    } else {
        reject("Operation failed.");  // Reject the promise
    }
});

//Using Promises
/*
To interact with a Promise, you use the .then(), .catch(), and .finally() methods.

.then(): Handles the case where the Promise is fulfilled. It takes two optional arguments:
A function to handle the resolved value.
A function to handle the rejection (though this is often handled in a .catch()).
*/
myPromise.then((value) => {
    console.log(value);  // "Operation succeeded!"
}).catch((error) => {
    console.log(error);  // If the promise was rejected, this will run
});

//.catch(): Handles the case where the Promise is rejected.

myPromise.catch((error) => {
    console.log("Error:", error);
});

//.finally(): Executes a callback once the Promise is settled, regardless of its outcome (fulfilled or rejected).
myPromise.finally(() => {
    console.log("Promise has been settled.");
});


//COMPLETE EXAMPLE
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;  // Simulate success/failure
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 2000);
    });
}

fetchData().then((message) => {
    console.log(message);  // "Data fetched successfully!"
}).catch((error) => {
    console.error(error);
}).finally(() => {
    console.log("Fetch operation completed.");
});


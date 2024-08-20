//Chain Multiple Promises
firstPromise()
    .then(result1 => {
        // Handle the result of firstPromise
        return secondPromise(result1);
    })
    .then(result2 => {
        // Handle the result of secondPromise
        return thirdPromise(result2);
    })
    .then(result3 => {
        // Handle the result of thirdPromise
        console.log("Final result:", result3);
    })
    .catch(error => {
        // Handle any error that occurs in the chain
        console.error("An error occurred:", error);
    });
/*
Example: Chaining Promises
Fetch user data from a database.
Fetch user's posts based on the user data.
Display the posts.
*/

function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched user data");
            resolve({ userId: 1, name: "John Doe" });
        }, 1000);
    });
}

function fetchUserPosts(userData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetched posts for user ${userData.name}`);
            resolve(["Post 1", "Post 2", "Post 3"]);
        }, 1000);
    });
}

function displayPosts(posts) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Displaying posts:", posts);
            resolve("Posts displayed successfully");
        }, 1000);
    });
}

fetchUserData()
    .then(userData => {
        return fetchUserPosts(userData);
    })
    .then(posts => {
        return displayPosts(posts);
    })
    .then(message => {
        console.log(message);  // "Posts displayed successfully"
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });

// Example of Error Handling in a Chain
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Failed to fetch data.");  // Simulate an error
        }, 1000);
    });
}

function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Processed data: " + data);
        }, 1000);
    });
}

fetchData()
    .then(data => {
        return processData(data);
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error("Error occurred:", error);  // "Error occurred: Failed to fetch data."
    });
    /*
    In this example, since fetchData() rejects, the .catch() block is executed, and the chain is effectively terminated, preventing processData() from running.

    Chaining Promises provides a powerful and clean way to handle complex sequences of asynchronous operations in JavaScript. */

    
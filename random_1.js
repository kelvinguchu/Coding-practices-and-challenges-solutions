// Asynchronous function to add two numbers
async function addNumbers() {
    // Create a new Promise that immediately resolves to the sum of 5 + 5
    let myPromise = new Promise((resolve, reject) => {
      resolve(5 + 5);
    });
    // Wait for the Promise to resolve and return the result
    return await myPromise;
  }
  
  // Call the addNumbers function and log the result when it resolves
  addNumbers().then(value => console.log(value));
  
  
  // Function to multiply two numbers
  async function multiplyNumbers() {
    // Create a new Promise that immediately resolves to the product of 5 * 5
    let myPromise = new Promise((resolve, reject) => {
      resolve(5 * 5);
    });
    // Wait for the Promise to resolve and return the result
    return await myPromise;
  }
  
  // Call the multiplyNumbers function and log the result when it resolves
  multiplyNumbers().then(value => console.log(value));
  
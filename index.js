// 1. Declare a global variable `customerName`
var customerName = 'bob';

// 2. Function to uppercase the global `customerName` variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Define `setBestCustomer` function to set a global variable
function setBestCustomer() {
  // Declare a global variable `bestCustomer`
  window.bestCustomer = 'not bob'; // Use `window` if in the browser
}

// 4. Define `overwriteBestCustomer` function to overwrite a global variable
function overwriteBestCustomer() {
  // Overwrite the global `bestCustomer` variable
  window.bestCustomer = 'maybe bob'; // Use `window` if in the browser
}

// 5. Declare a constant `leastFavoriteCustomer`
const leastFavoriteCustomer = 'Alice';

// Function that attempts to change the constant
function changeLeastFavoriteCustomer() {
  // Attempting to reassign a `const` variable should throw an error
  leastFavoriteCustomer = 'Bob'; // This should throw a TypeError
}

// Export the functions and variables if using a module system
module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer,
  leastFavoriteCustomer
};



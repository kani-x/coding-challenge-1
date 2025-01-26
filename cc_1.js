let employeeName = "Harry Potter";
const employeeID = 12345;
var isActive = true;
console.log("Employee Name: " + employeeName, "Type: " + typeof employeeName);
console.log("Employee ID: " + employeeID, "Type: " + typeof employeeID);
console.log("Is Active: " + isActive, "Type: " + typeof isActive);

// Task 2 - Product Details

let productName = "Wireless Mouse";  
const productPrice = 29.99;          
var isAvailable = true;              

console.log("Product Name: " + productName + ", Type: " + typeof productName);
console.log("Product Price: " + productPrice + ", Type: " + typeof productPrice);
console.log("Is Available: " + isAvailable + ", Type: " + typeof isAvailable);

// Task 3 - Financial Transactions

let accountBalance = 5000;  

accountBalance += 2000;  
console.log("After deposit: " + accountBalance);  

accountBalance -= 1500; 
console.log("After withdrawal: " + accountBalance); 

accountBalance *= 1.05;  
console.log("After interest: " + accountBalance);  

accountBalance /= 2;  
console.log("After division: " + accountBalance); 

// Task 4 - Customer Messaging

let customerName = "Percy Jackson";

let message = "Hello, " + customerName + "! Welcome to our store!";
console.log(message); 

let messageTemplate = `Hello, ${customerName}! Welcome to our store!`;
console.log(messageTemplate); 

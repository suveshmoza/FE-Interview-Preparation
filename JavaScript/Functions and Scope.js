// Task 3: Functions and Scope
// Write JavaScript code that includes the following:

// 1. Define a function called add that takes two parameters and returns their sum.
//    Call the add function with some sample values and log the result to the console.
// 2. Create a global variable and a local variable inside a function with the same name.
//    Log the values of these variables inside and outside the function to observe scope differences.
// 3  Write a function called isEven that takes a number as a parameter and returns true if it's even and false if it's odd.
//    Call this function with different numbers to test it.

function add(a, b) {
	return a + b;
}

console.log(add(20, 10));
console.log(add(-50, 220));

const temp = 10;

function innerScope() {
	const temp = 20;
	console.log(temp);
}

innerScope();
console.log(temp);

function isEven(n) {
	if (n % 2 === 0) {
		return true;
	}
	return false;
}

console.log(isEven(20));
console.log(isEven(3));

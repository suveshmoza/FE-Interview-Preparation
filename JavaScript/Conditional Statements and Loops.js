// Task 2: Conditional Statements and Loops
// Write JavaScript code that includes the following:

// 1. Use an if statement to check if a variable holds a number greater than 10.
// 	  If it does, log "Greater than 10" to the console; otherwise, log "Less than or equal to 10."
// 2. Use a for loop to print the numbers from 1 to n to the console.
// 3. Use a while loop to print the numbers from n to 1 to the console in reverse order.

function valueGreaterThan10(x) {
	if (x > 10) {
		console.log('Greater than 10');
	} else {
		console.log('Lesser than 10');
	}
}

function printNumbers(n) {
	let res = '';
	for (let i = 1; i <= n; i++) {
		res += i + ' ';
	}
	console.log(res);
}

function printNumbersInReverse(n) {
	let res = '';
	while (n >= 1) {
		res += n + ' ';
		n--;
	}
	console.log(res);
}

valueGreaterThan10(25);
printNumbers(10);
printNumbersInReverse(10);

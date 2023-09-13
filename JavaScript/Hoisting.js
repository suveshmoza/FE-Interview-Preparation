// Task 6: Hoisting

// Create a JavaScript function called hoistingExample. Inside this function, try to log a variable x before
// declaring it and another variable y after declaring it but before assigning a value. Make sure to call the
// hoistingExample function and observe the results.

function hoistingExample() {
	console.log(x);
	var x;
	console.log(y);
}

hoistingExample();

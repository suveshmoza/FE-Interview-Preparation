// Task 7: Closures

//1. Define a function called outerFunction that takes a parameter outerParam.
//2. Inside outerFunction, define another function called innerFunction that takes a parameter innerParam.
//3. innerFunction should return the sum of outerParam and innerParam.
//4. Call outerFunction with some values and store the result in a variable.
// Then, call innerFunction with some values and log the result to the console.

function outerFunction(outerParam) {
	return function innerFunction(innerParam) {
		return outerParam + innerParam;
	};
}

const temp = outerFunction(10);
console.log(temp(10));

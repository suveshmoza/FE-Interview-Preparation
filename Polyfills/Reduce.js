// Demonstrating the 'reduce' function and its custom polyfill
const numbers = [1, 2, 3, 4, 5];

// Using the built-in 'reduce' function to calculate the sum of elements
const sum = numbers.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
}, 0);
console.log('Sum (Using reduce): ', sum);

// Implementing a custom 'myReduce' function as a polyfill for 'reduce'
Array.prototype.myReduce = function (cb, initialValue) {
	let accumulator = initialValue;
	for (let i = 0; i < this.length; i++) {
		accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
	}
	return accumulator;
};

// Using the custom 'myReduce' function to achieve the same result as above
const sumUsingMyReduce = numbers.myReduce(
	(accumulator, currentValue) => accumulator + currentValue,
	0
);

console.log('Sum (Using myReduce): ', sumUsingMyReduce);

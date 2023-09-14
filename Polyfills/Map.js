// Demonstrating the 'map' function and its custom polyfill
const myArr = [1, 2, 3, 4, 5];

// Using the built-in 'map' function to square array elements and multiply them by their indices
const squaredArrUsingMap = myArr.map((item) => item * item);
const multByIndexUsingMap = myArr.map((item, index) => item * index);

console.log('Squared Array (Using map): ', squaredArrUsingMap);
console.log('Multiplied By Index (Using map): ', multByIndexUsingMap);

// Implementing a custom 'myMap' function as a polyfill for 'map'
Array.prototype.myMap = function (cb) {
	if (typeof cb !== 'function') {
		throw new TypeError('Callback must be a function');
	}
	const temp = [];
	for (let i = 0; i < this.length; i++) {
		temp.push(cb(this[i], i, this));
	}
	return temp;
};

// Using the custom 'myMap' function to achieve the same results as above
const squaredArrUsingMyMap = myArr.myMap((item) => item * item);
const multByIndexUsingMyMap = myArr.myMap((item, index) => item * index);

console.log('Squared Array (Using myMap): ', squaredArrUsingMyMap);
console.log('Multiplied By Index (Using myMap): ', multByIndexUsingMyMap);

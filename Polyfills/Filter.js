// Demonstrating the 'filter' function and its custom polyfill
const myArr = [1, 2, 3, 4, 5];

// Using the built-in 'filter' function to select odd and even elements
const oddElements = myArr.filter((item) => item & 1);
const evenElements = myArr.filter((item) => item % 2 === 0);

console.log('Odd Elements (Using filter): ', oddElements);
console.log('Even Elements (Using filter): ', evenElements);

// Implementing a custom 'myFilter' function as a polyfill for 'filter'
Array.prototype.myFilter = function (cb) {
	if (typeof cb !== 'function') {
		throw new TypeError('Callback must be a function');
	}
	const temp = [];
	for (let i = 0; i < this.length; i++) {
		if (cb(this[i], i, this)) {
			temp.push(this[i]);
		}
	}
	return temp;
};

// Using the custom 'myFilter' function to achieve the same results as above
const oddElementsUsingMyFilter = myArr.myFilter((item) => item & 1);
const evenElementsUsingMyFilter = myArr.myFilter((item) => item % 2 === 0);

console.log('Odd Elements (Using myFilter): ', oddElementsUsingMyFilter);
console.log('Even Elements (Using myFilter): ', evenElementsUsingMyFilter);

// Task 4: Arrays and Functions

// 1. Create an array of numbers.
// 2. Write a function called sumArray that takes an array of numbers as a parameter
//    and returns the sum of all the numbers in the array.
// 3. Write a function called filterEvenNumbers that takes an array of numbers as a
//    parameter and returns a new array containing only the even numbers.
// 4. Write a function called mapDouble that takes an array of numbers as a parameter
//    and returns a new array where each number is doubled.

// Use the array you created in step 1 and test each of the functions you've written.

function sumArray1(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function sumArray2(arr) {
	return arr.reduce((acc, curr) => acc + curr, 0);
}

function filterEvenNumbers1(arr) {
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

function filterEvenNumbers2(arr) {
	return arr.filter((i) => i % 2 == 0);
}

function mapDouble1(arr) {
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(arr[i] * 2);
	}
	return newArr;
}

function mapDouble2(arr) {
	return arr.map((item) => item * 2);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sumArray1(arr));
console.log(sumArray2(arr));

const newArr1 = filterEvenNumbers1(arr);
const newArr2 = filterEvenNumbers2(arr);

console.log(newArr1);
console.log(newArr2);

const doubleArr1 = mapDouble1(arr);
const doubleArr2 = mapDouble2(arr);

console.log(doubleArr1);
console.log(doubleArr2);

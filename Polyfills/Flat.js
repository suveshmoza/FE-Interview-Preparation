// Demonstrating the 'flat' function and its custom polyfill
const deeplyNestedArray = [1, [2, [3, [4, [5]]]]];

// Using the built-in 'flat' function to flatten the array up to different levels
const flatUptoOneLevel = deeplyNestedArray.flat(1);
const flatUptoThreeLevel = deeplyNestedArray.flat(3);
const flatUptoInfiniteLevel = deeplyNestedArray.flat(Infinity);

console.log('Flat Up to One Level (Using flat): ', flatUptoOneLevel);
console.log('Flat Up to Three Levels (Using flat): ', flatUptoThreeLevel);
console.log('Flat Up to Infinite Level (Using flat): ', flatUptoInfiniteLevel);

// Implementing a custom 'myFlat' function as a polyfill for 'flat'
Array.prototype.myFlat = function (depth = 1) {
	const flatArray = [];

	function flatten(arr, currentDepth) {
		for (let item of arr) {
			if (Array.isArray(item) && currentDepth < depth) {
				flatten(item, currentDepth + 1);
			} else {
				flatArray.push(item);
			}
		}
	}
	flatten(this, 0);
	return flatArray;
};

// Using the custom 'myFlat' function to achieve the same results as above
const flatUptoOneLevelUsingMyFlat = deeplyNestedArray.myFlat(1);
const flatUptoThreeLevelUsingMyFlat = deeplyNestedArray.myFlat(3);
const flatUptoInfiniteLevelUsingMyFlat = deeplyNestedArray.myFlat(Infinity);

console.log(
	'Flat Up to One Level (Using myFlat): ',
	flatUptoOneLevelUsingMyFlat
);
console.log(
	'Flat Up to Three Levels (Using myFlat): ',
	flatUptoThreeLevelUsingMyFlat
);
console.log(
	'Flat Up to Infinite Level (Using myFlat): ',
	flatUptoInfiniteLevelUsingMyFlat
);

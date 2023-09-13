// Task 8: Currying

// 1. Create a function called curry that takes a binary function func (a function that
//    takes two arguments) as its parameter.
// 2. Inside curry, return a new function that takes one argument a.
// 3. The new function should return another function that takes one argument b.
// 4. When the final inner function is called, it should return the result of calling the
//    original func with the arguments a and b.
// 5. Test your curry function with a binary function, such as addition or multiplication,
//    and try currying it with different arguments.

function curr(func) {
	return function curried(...args) {
		if (args.length >= func.length) {
			return func(...args);
		} else {
			return function (...moreArgs) {
				return curried(...args, ...moreArgs);
			};
		}
	};
}

function add(a, b) {
	return a + b;
}

const curriedAdd = curry(add);

const addFive = curriedAdd(5);

console.log(addFive(10));
console.log(addFive(20));

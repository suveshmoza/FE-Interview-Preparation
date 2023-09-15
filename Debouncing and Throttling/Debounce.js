function debounce(cb, delay) {
	let timer = null;
	return function (...args) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			cb(...args);
		}, delay);
	};
}

function printData(...args) {
	console.log('Data: ', args);
}

const a = 10;
const b = 20;
const delayedFunction = debounce(printData, 1000);

delayedFunction(a, b);

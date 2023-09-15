function throttle(cb, delay) {
	let isThrottled = false;
	return function (...args) {
		if (!isThrottled) {
			isThrottled = true;
			setTimeout(() => {
				cb(...args);
			}, delay);
		}
	};
}

function printTime() {
	const currentTime = new Date();
	console.log(currentTime.toLocaleTimeString());
}

const throttleFunction = throttle(printTime, 500);

throttleFunction();
throttleFunction();
throttleFunction();

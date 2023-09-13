// Task 5: Promises and Async/Await

// 1. Create a function called fetchData that simulates an asynchronous operation. Inside this function,
//    use setTimeout to delay for 2 seconds, and then resolve a Promise with a message like "Data fetched successfully."
// 2. Call the fetchData function and handle the Promise using .then() to log the resolved message to the console.
// 3. Modify the fetchData function to reject the Promise with an error message after a 2-second delay.
// 4. Add a .catch() block to handle the rejected Promise and log the error message to the console.
// 5. Create an async function called fetchDataAsync that uses await to call the fetchData function.
//    Handle both success and error cases within the fetchDataAsync function and log appropriate messages.

function fetchData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Data fetched successfully!');
			// reject('Data fetch failed!');
		}, 2000);
	});
}

fetchData()
	.then((msg) => {
		console.log(msg);
	})
	.catch((err) => console.log(err));

async function fetchDataAsync() {
	try {
		const res = await fetchData();
		console.log(res);
	} catch (err) {
		console.log(err);
	}
}

fetchDataAsync();

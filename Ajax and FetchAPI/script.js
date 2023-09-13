document.addEventListener('DOMContentLoaded', () => {
	const userList = document.getElementById('userList');
	const jsonEndpoint = 'https://jsonplaceholder.typicode.com/users';

	fetch(jsonEndpoint)
		.then((res) => {
			if (!res.ok) {
				throw new Error('API request failed!');
			}
			return res.json();
		})
		.then((users) => {
			users.forEach((user) => {
				const listItem = document.createElement('li');
				listItem.textContent = user.name;
				userList.appendChild(listItem);
			});
		})
		.catch((err) => {
			console.log(err);
		});
});

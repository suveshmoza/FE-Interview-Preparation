document.addEventListener('DOMContentLoaded', () => {
	const taskInput = document.getElementById('task-input');
	const addButton = document.getElementById('add-button');
	const taskList = document.getElementById('task-list');

	function addTask() {
		const taskText = taskInput.value.trim();
		if (taskText !== '') {
			const listItem = document.createElement('li');
			listItem.textContent = taskText;

			const removeButton = document.createElement('button');
			removeButton.id = 'removeButton';
			removeButton.textContent = 'Remove';
			removeButton.addEventListener('click', () => {
				taskList.removeChild(listItem);

				if (taskList.children.length === 0) {
					removeButton.style.display = 'none';
				}
			});

			listItem.appendChild(removeButton);
			taskList.appendChild(listItem);
			taskInput.value = '';
		}
	}

	addButton.addEventListener('click', addTask);

	taskInput.addEventListener('keydown', (event) => {
		if (event.key === 'Enter') {
			addTask();
		}
	});
});

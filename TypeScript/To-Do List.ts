// Task: Creating a To-Do List

// Create a simple TypeScript program to manage a to-do list. You'll define types and interfaces
// to represent tasks and task lists.

// 1. Define an interface called Task with the following properties:

// id (number)
// title (string)
// completed (boolean)

// 2. Create a type called TaskList which is an array of Task objects.

// 3. Write a function called addTask that takes a TaskList and a new Task as parameters.
//    It should add the new task to the task list.

// 4. Write a function called markTaskComplete that takes a TaskList and a task id as parameters.
//    It should find the task with the given id and mark it as completed (set completed to true).

// 5. Write a function called listTasks that takes a TaskList and logs all the tasks (both completed
//    and incomplete) to the console. Each task should be displayed with its id, title, and a status
//    (e.g., "Completed" or "Incomplete").

// 6. Create an empty task list and add several tasks to it using the addTask function.

// 7. Mark some of the tasks as completed using the markTaskComplete function.

// 8. Finally, use the listTasks function to display the current state of your to-do list.

interface Task {
	id: number;
	title: string;
	completed: boolean;
}

type TaskList = Task[];

function addTask(myTaskList: TaskList, newTask: Task) {
	myTaskList.push(newTask);
}

function markTaskComplete(myTaskList: TaskList, id: number) {
	const task = myTaskList.find((task) => task.id === id);
	if (task) {
		task.completed = true;
	}
}

function listTasks(taskList: TaskList): void {
	console.log('To-Do List:');
	taskList.forEach((task) => {
		const status = task.completed ? 'Completed' : 'Incomplete';
		console.log(`ID: ${task.id}, Title: ${task.title}, Status: ${status}`);
	});
	console.log('\n');
}

const todoList: TaskList = [];

addTask(todoList, { id: 1, title: 'Buy groceries', completed: false });
addTask(todoList, { id: 2, title: 'Finish homework', completed: false });
addTask(todoList, { id: 3, title: 'Walk the dog', completed: false });

markTaskComplete(todoList, 1);
markTaskComplete(todoList, 3);

listTasks(todoList);

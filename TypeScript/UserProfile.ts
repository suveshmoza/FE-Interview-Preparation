// Task: Create a User Profile

// Create a TypeScript program that defines a user profile using types and interfaces.
// This program should showcase how to use types and interfaces effectively.

// 1. Define an interface called UserProfile with the following properties:

// id (number)
// username (string)
// email (string)
// isPremium (boolean)

// 2. Create a type called UserAddress with the following properties:

// street (string)
// city (string)
// zipCode (string)

// 3. Define a type alias called User that combines the UserProfile and UserAddress types to
//    represent a complete user profile with both personal information and address.

// 4. Create an object of type User with sample data for a user's profile and address.
//    Ensure that you provide values for each property.

// 5. Write a function called printUserProfile that takes a User object as a parameter and
//    prints the user's information to the console in a user-friendly format.

interface UserProfile {
	id: number;
	username: string;
	email: string;
	isPremium: boolean;
}

type UserAddress = {
	street: string;
	city: string;
	zipCode: string;
};

type User = UserProfile & { address: UserAddress };

const myUserInfo: User = {
	id: 123,
	username: 'John Doe',
	email: 'john.doe@xyz.com',
	isPremium: true,
	address: {
		street: 'XYZ Street',
		city: 'XYZ Street',
		zipCode: '123456',
	},
};

function printUserProfile(user: User): void {
	console.log('User Profile:');
	console.log(`ID: ${user.id}`);
	console.log(`Username: ${user.username}`);
	console.log(`Email: ${user.email}`);
	console.log(`Premium User: ${user.isPremium}\n`);

	console.log('Address:');
	console.log(`Street: ${user.address.street}`);
	console.log(`City: ${user.address.city}`);
	console.log(`Zip Code: ${user.address.zipCode}`);
}

printUserProfile(myUserInfo);

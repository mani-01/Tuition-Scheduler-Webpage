"use strict";

// let addNewStudentButtonClicked = () => {
// 	const addNewStudentButton = document.getElementById("addNewStudentButton");
// 	addNewStudentButton.onclick = function () {
// 		console.log("submit button clicked");
// 		// createToDatabase(userInputArray);
// 	};
// };

// @ user clicks the create (submit) button on the modal
const confirmButton = document.querySelector("#addStudentConfirmationButton");
confirmButton.onclick = function () {
    console.log("submit button clicked");
    createToDatabase(inputsToJson(userInput()))
    location.reload();
};


// use DOM to get the input fields values.
let userInput = () => {
	let userInputFirstName = document.getElementById("userInputFirstName")
		.value;
	let userInputLastName = document.getElementById("userInputLastName").value;
	let userInputAge = document.getElementById("userInputAge").value;
	let userInputParentName = document.getElementById("userInputParentName")
		.value;
	let userInputContactNumber = document.getElementById(
		"userInputContactNumber"
	).value;

	let userInputArray = [
		userInputFirstName,
		userInputLastName,
		userInputAge,
		userInputParentName,
		userInputContactNumber,
	];

    return userInputArray;

	
};

let inputsToJson = (userInputArray) => {
    console.log(typeof userInputArray[2]);
	// generate json from the input fields
	let jsonUpdatedContactNumber = {
		firstName: userInputArray[0],
		lastName: userInputArray[1],
		age: parseInt(userInputArray[2]),
		parentName: userInputArray[3],
		contactNumber: userInputArray[4],
	};
    
	return jsonUpdatedContactNumber;
};



let createToDatabase = (userInputJSON) => {
	console.log(userInputJSON);
	fetch("http://localhost:9999/student/create", {
		method: `POST`,
		headers: { "Content-type": "application/json" },
		body: JSON.stringify(userInputJSON),
	}).then((response) => {
		response
			.json()
			.then((data) => {
				console.log(`POSTED SUCCESSFULLY ${data}`);
			})
			.catch((error) => console.log(error));
	});
};

"use strict";

// @ user clicks the create (submit) button on the modal
const confirmButton = document.querySelector("#addStudentConfirmationButton");
confirmButton.onclick = function () {
	console.log("submit button clicked");

	// get the user inputs
	let userInputsRawArray = userInput();

	// checking if inputs sanitised.
	let sanitisedInputs = userInputSanitisationCheck(userInputsRawArray);

	//just setting a true array to check against
	let allTrue = [true, true, true, true, true];
	console.log(allTrue);
	console.log(sanitisedInputs);

	if (JSON.stringify(sanitisedInputs) !== JSON.stringify(allTrue)) {
		// a strange way of checking if arrays are equal but it works....
		console.log("inputs are not correct");
		//pass the sanitisation array into another function to outut error to user
		userErrorDisplay(sanitisedInputs);
	} else {
		// make it into json
		let jsonatedInputs = inputsToJson(userInputsRawArray);
		createToDatabase(jsonatedInputs);
		location.reload();
	}
}; //@-----------------------------------

let userErrorDisplay = (sanitisedInputs) => {
	// using DOM to show where to put the error text
	const formAndErrorTextHolderDiv = document.querySelector(
		"#formAndErrorTextHolder"
	);
	console.log(formAndErrorTextHolderDiv);

	let showWhatIsInvalidText = () => {
		let createNewStudentErrorTextToAppend = "";
		let fieldNamesArray = [
			"First Name",
			"Last Name",
			"Age",
			"Parent Name",
			"Contact Number",
		];
		let n = 0;
		for (let i = 0; i < 5; i++) {
			if (sanitisedInputs[i] != true) {
				console.log(`${fieldNamesArray[i]}`);
				if (n > 0) {
					createNewStudentErrorTextToAppend +=
						", " + fieldNamesArray[i];
					n++;
				} else {
					createNewStudentErrorTextToAppend += fieldNamesArray[i];
					n++;
				}

				console.log(createNewStudentErrorTextToAppend);
			}
		}
		return createNewStudentErrorTextToAppend;
	};

	const createNewStudentErrorText = document.createElement("h6");
	createNewStudentErrorText.className = "aBitOfPadding errorColor";
	createNewStudentErrorText.id = "createNewStudentErrorText";
	createNewStudentErrorText.textContent =
		"Error with fields: " + showWhatIsInvalidText() + ".";

	// checking if there is already an error box that has been put there and removing it
	if (
		document.contains(document.querySelector("#createNewStudentErrorText"))
	) {
		document.querySelector("#createNewStudentErrorText").remove();
	}

	formAndErrorTextHolderDiv.appendChild(createNewStudentErrorText);
};

let userInputSanitisationCheck = (inputArray) => {
	let nameRegEx = /^[a-zA-Z\s]+$/;
	let phoneNumberRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
	let ageRegEx = /\b(0?[1-9]|[1-9][0-9]|100)\b/; // ints 0-100

	let sanitisedCheckArray = [
		nameRegEx.test(inputArray[0]),
		nameRegEx.test(inputArray[1]),
		ageRegEx.test(inputArray[2]),
		nameRegEx.test(inputArray[3]),
		phoneNumberRegEx.test(inputArray[4]),
	];
	return sanitisedCheckArray;
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

let inputsToJson = (inputArray) => {
	console.log(typeof inputArray[2]);
	// generate json from the input fields
	let jsonated = {
		firstName: inputArray[0],
		lastName: inputArray[1],
		age: parseInt(inputArray[2]),
		parentName: inputArray[3],
		contactNumber: inputArray[4],
	};

	return jsonated;
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

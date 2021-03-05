"use strict";

// reads information from the database when page opens
window.onload = () => {
	readFromSpring();
};

let readFromSpring = () => {
	fetch("http://localhost:9999/student/readAll")
		.then((response) => { // gets the response
				response.json() // promise - converts json data ready for us to use
					.then((data) => {
						createCard(data);
					})
		})
		.catch((error) => {
			console.log(error);
		});
};

let createCard = (data) => {
	for (let i = 0; i < data.length; i++) {
		// choosing where to put the card <div class="row row-cols-1 row-cols-md-3 g-4">
		const cardGrid = document.querySelector("#cardGrid");
		console.log(cardGrid);

		// creating the new card here
		const cardColInGrid = document.createElement("div");
		cardColInGrid.className = "col";
		console.log(cardColInGrid);

		const createNewCard = document.createElement("div");
		createNewCard.className = "card h-100 cardColor btn btnStudentCard";
		createNewCard.id = "alignLeft"; 
		createNewCard.setAttribute("data-bs-toggle", "modal");
		createNewCard.setAttribute("data-bs-target", `#updateDeleteModal${i}`);

		modalUpdateDelete(data[i], i)

		console.log(createNewCard);

		const cardBodyDiv = document.createElement("div");
		cardBodyDiv.className = "card-body";
		console.log(cardBodyDiv);

		const cardRow = document.createElement("div");
		cardRow.className = "row";
		console.log(cardRow);

		const cardCol1 = document.createElement("div");
		cardCol1.className = "col-8";
		console.log(cardCol1);

		const cardTitle = document.createElement("h5");
		cardTitle.className = "card-title";
		cardTitle.innerText = `${data[i].firstName} ${data[i].lastName}`;
		cardTitle.id = "alignLeft";

		const cardIDNumber = document.createElement("div");
		cardIDNumber.className = "col-4 text-end";
		cardIDNumber.innerText = `${data[i].studentID}`;

		const cardTextAge = document.createElement("p");
		cardTextAge.className = "card-text";
		cardTextAge.innerText = `Age: ${data[i].age}`;

		const cardTextParentName = document.createElement("p");
		cardTextParentName.className = "card-text";
		cardTextParentName.innerText = `Parent's Name: ${data[i].parentName}`;

		const cardTextContactNum = document.createElement("p");
		cardTextContactNum.className = "card-text";
		cardTextContactNum.innerText = `Contact: ${data[i].contactNumber}`;

		//adding everything to its child

		cardCol1.appendChild(cardTitle);
		cardRow.appendChild(cardCol1);
		cardRow.appendChild(cardIDNumber);

		cardBodyDiv.appendChild(cardRow);

		// cardBodyDiv.appendChild(cardTextAge);
		// cardBodyDiv.appendChild(cardTextParentName);
		// cardBodyDiv.appendChild(cardTextContactNum);

		createNewCard.appendChild(cardBodyDiv);
		cardColInGrid.appendChild(createNewCard);

		cardGrid.appendChild(cardColInGrid);

		

	} // finally putting everything in grid
};

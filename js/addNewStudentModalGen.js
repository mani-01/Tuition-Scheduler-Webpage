'use strict';


let addNewStudentModalGen = (data) => {
    for (let i = 0; i < data.length; i++) {
        const cardGrid = document.querySelector("#cardGrid");
        // console.log(cardGrid);

        // creating the new card here
        const cardColInGrid = document.createElement("div");
        cardColInGrid.className = "col";

        const createNewCard = document.createElement("div");
        createNewCard.className = "card h-100 cardColor btn btnStudentCard";
        createNewCard.id = "alignLeft";
        createNewCard.setAttribute("data-bs-toggle", "modal");
        createNewCard.setAttribute("data-bs-target", `#updateDeleteModal${i}`);

        studentCardModalGen(data[i], i)

        const cardBodyDiv = document.createElement("div");
        cardBodyDiv.className = "card-body";

        const cardRow = document.createElement("div");
        cardRow.className = "row";

        const cardCol1 = document.createElement("div");
        cardCol1.className = "col-8";

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

        createNewCard.appendChild(cardBodyDiv);
        cardColInGrid.appendChild(createNewCard);

        cardGrid.appendChild(cardColInGrid);


    }
};
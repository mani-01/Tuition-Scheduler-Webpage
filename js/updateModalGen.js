
//update student modal info and logic
let updateStudent = (dataI, modalInfoRowChild, modelBodyContactNumber) => {
    console.log("Update clicked");

    const newContactNumberLabel = document.createElement("h6");
    newContactNumberLabel.className = "col-form-label editFormLabelColor";
    newContactNumberLabel.innerText = `New Number :`;
    newContactNumberLabel.id = "alignLeft";

    const newContactNumberUpdateInput = document.createElement("input");
    newContactNumberUpdateInput.setAttribute("type", "text");
    newContactNumberUpdateInput.setAttribute("class", "form-control");
    newContactNumberUpdateInput.setAttribute("placeholder", `${dataI.contactNumber}`);
    newContactNumberUpdateInput.setAttribute("aria-label", "Username");
    newContactNumberUpdateInput.setAttribute("aria-describedby", "basic-addon1");
    newContactNumberUpdateInput.id = "newContactNumberInputID";


    const newContactNumberLabelDiv = document.createElement("div");
    newContactNumberLabelDiv.className = "col-auto";

    const newContactNumberUpdateInputDiv = document.createElement("div");
    newContactNumberUpdateInputDiv.className = "col-auto";

    const newContactNumberRowDiv = document.createElement("div");
    newContactNumberRowDiv.className = "row";

    const newContactNumberRowError = document.createElement("h6");
    newContactNumberRowError.className = "aBitOfPadding";
    newContactNumberRowError.textContent = "Invalid phone number, please re-enter the number or cancel.";

    const newContactNumberRowErrorEmpty = document.createElement("h6");

    const newContactNumberSaveButtonDiv = document.createElement("div");
    newContactNumberSaveButtonDiv.className = "col-auto newContactNumberSaveButtonDiv";

    const saveContactNumberButton = document.createElement("button");
    saveContactNumberButton.innerText = "Save";
    saveContactNumberButton.className = "btn btn-secondary";
    saveContactNumberButton.setAttribute("type", "button");
    saveContactNumberButton.onclick = function () {
        let newNumber = document.getElementById("newContactNumberInputID").value;

        let phoneNumberRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        //  if statement to filter out bad inputs
        if (phoneNumberRegEx.test(newNumber)) {
            modalInfoRowChild.appendChild(newContactNumberRowErrorEmpty)

            //json string with updated contact number
            let jsonUpdatedContactNumber = {
                firstName: dataI.firstName,
                lastName: dataI.lastName,
                age: dataI.age,
                parentName: dataI.parentName,
                contactNumber: newNumber
            };

            sendUpdateToAPI(dataI, jsonUpdatedContactNumber)


        } else {
            modalInfoRowChild.appendChild(newContactNumberRowError)
        }
    };

    newContactNumberLabelDiv.appendChild(newContactNumberLabel);
    newContactNumberUpdateInputDiv.appendChild(newContactNumberUpdateInput);
    newContactNumberSaveButtonDiv.appendChild(saveContactNumberButton);
    newContactNumberRowDiv.appendChild(newContactNumberLabelDiv);
    newContactNumberRowDiv.appendChild(newContactNumberUpdateInputDiv);
    newContactNumberRowDiv.appendChild(newContactNumberSaveButtonDiv);


    modalInfoRowChild.replaceChild(newContactNumberRowDiv, modelBodyContactNumber);

};












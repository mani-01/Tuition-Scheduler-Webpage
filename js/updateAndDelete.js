"use strict";
// ! update and delete modal generation for each card
let modalUpdateDelete = (dataI, i) => {
	// doing the same here as i did for the card

	//need to put the modal in the body of the html...
	const modalGenDiv = document.querySelector("#modalGeneratorDiv");

	const modalRoot = document.createElement("div");
	modalRoot.className = "modal fade";
	modalRoot.id = `updateDeleteModal${i}`;
	modalRoot.setAttribute("data-bs-backdrop", "static");
	modalRoot.setAttribute("data-bs-keyboard", "false");
	modalRoot.setAttribute("tabindex", "-1");
	modalRoot.setAttribute("aria-labelledby", "staticBackdropLabel");
	modalRoot.setAttribute("aria-hidden", "true");

	const modalDialog = document.createElement("div");
	modalDialog.className = "modal-dialog";

	const modalContent = document.createElement("div");
	modalContent.className = "modal-content";

	const modalHeader = document.createElement("div");
	modalHeader.className = "modal-header";

  const modalTitle = document.createElement("h5");
  modalTitle.className = "modal-title";
  modalTitle.id = "staticBackdropLabel";
  modalTitle.innerText = "Update Details or Delete Student.";

  const modalXButton = document.createElement("button");
  modalXButton.type = "button";
  modalXButton.className = "btn-close";
  modalXButton.setAttribute("data-bs-dismiss", "modal");
  modalXButton.setAttribute("aria-label", "Close");
  modalXButton.onclick = function() { location.reload(); };


  const modalBody = document.createElement("div");
  modalBody.className = "modal-body";
  
  const modalInfo = document.createElement("div");

  const modalInfoRow = document.createElement("div");
	modalInfoRow.className = "row mb-4";

  const modalInfoRowChild = document.createElement("div");
	modalInfoRowChild.className = "row";

  // *---------------------------DATABASE INFO
  const modelBodyStudentID = document.createElement("p");
  modelBodyStudentID.className = "";
  modelBodyStudentID.innerText = `Student ID : ${dataI.studentID}`;
  modelBodyStudentID.id = "alignLeft";

  const modelBodyFirstName = document.createElement("h6");
  modelBodyFirstName.className = "";
  modelBodyFirstName.innerText = `First Name : ${dataI.firstName}`;
  modelBodyFirstName.id = "alignLeft";

  const modelBodyLastName = document.createElement("h6");
  modelBodyLastName.className = "";
  modelBodyLastName.innerText = `Last Name : ${dataI.lastName}`;
  modelBodyLastName.id = "alignLeft";

  const modelBodyAge = document.createElement("h6");
  modelBodyAge.className = "";
  modelBodyAge.innerText = `Age : ${dataI.age}`;
  modelBodyAge.id = "alignLeft";

  const modelBodyParentName = document.createElement("h6");
  modelBodyParentName.className = "";
  modelBodyParentName.innerText = `Parent Name : ${dataI.parentName}`;
  modelBodyParentName.id = "alignLeft";

  const modelBodyContactNumber = document.createElement("h6");
  modelBodyContactNumber.className = "";
  modelBodyContactNumber.innerText = `Contact Number : ${dataI.contactNumber}`;
  modelBodyContactNumber.id = "alignLeft";
  // *---------------------------DATABASE INFO

  const modalFooter = document.createElement("div");
  modalFooter.className = "modal-footer";

  const modalEditButton = document.createElement("button"); // @ update
  modalEditButton.innerText = "Edit";
  modalEditButton.className = "btn btn-secondary";
  modalEditButton.setAttribute("type", "button")
  modalEditButton.onclick = function() { updateStudent(dataI, modalInfoRowChild, modelBodyContactNumber) };
  // modalUpdateDelete(data[i], i)
  

  const modalDeleteButton = document.createElement("button"); // @ delete
  modalDeleteButton.innerText = "Delete";
  modalDeleteButton.className = "btn btn-secondary";
  modalDeleteButton.id = "withDeleteConfirmation";
  modalDeleteButton.setAttribute("type", "submit")
  modalDeleteButton.onclick = function() { deleteStudent(dataI.studentID) };
  
  
  const modalCloseButton = document.createElement("button");
  modalCloseButton.innerText = "Cancel";
  modalCloseButton.className = "btn btn-secondary";
  modalCloseButton.setAttribute("type", "button")
  modalCloseButton.setAttribute("data-bs-dismiss", "modal")
  modalCloseButton.onclick = function(){ location.reload() }// note




  modalGenDiv.appendChild(modalRoot);
    modalRoot.appendChild(modalDialog);
      modalDialog.appendChild(modalContent);
        modalContent.appendChild(modalHeader);
          modalHeader.appendChild(modalTitle);
          modalHeader.appendChild(modalXButton);
        modalContent.appendChild(modalBody);
          modalBody.appendChild(modalInfo);
            modalInfo.appendChild(modalInfoRow)
              modalInfoRow.appendChild(modalInfoRowChild)
                modalInfoRowChild.appendChild(modelBodyStudentID)
                modalInfoRowChild.appendChild(modelBodyFirstName)
                modalInfoRowChild.appendChild(modelBodyLastName)
                modalInfoRowChild.appendChild(modelBodyAge)
                modalInfoRowChild.appendChild(modelBodyParentName)
                modalInfoRowChild.appendChild(modelBodyContactNumber)
          modalContent.appendChild(modalFooter);
            modalFooter.appendChild(modalEditButton);
            modalFooter.appendChild(modalDeleteButton);
            modalFooter.appendChild(modalCloseButton);

};



let deleteStudent = (studentID) => {

  fetch(`http://localhost:9999/student/delete/studentID/${studentID}`,{method:`DELETE`})
  .then((studentID) => {
    location.reload()})
  .catch((error) => console.log(error));

}

let updateStudent = (dataI , modalInfoRowChild, modelBodyContactNumber) => {
	console.log("updateupdateupdateupdateupdate");

  const newContactNumberLabel = document.createElement("h6");
  newContactNumberLabel.className = "col-form-label editFormLabelColor";
  newContactNumberLabel.innerText = `New Number :`;
  newContactNumberLabel.id = "alignLeft";

	const newContactNumberUpdateInput = document.createElement("input");
	newContactNumberUpdateInput.setAttribute("type", "text");
	newContactNumberUpdateInput.setAttribute("class", "form-control");
	newContactNumberUpdateInput.setAttribute("placeholder",`${dataI.contactNumber}`);
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
    let phoneNumberRegEx =  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
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


      // @ update sent to database
      fetch(`http://localhost:9999/student/update/studentID/${dataI.studentID}`, {
			method: `PUT`, 
			headers: {"Content-type": "application/json",},
			body: JSON.stringify(jsonUpdatedContactNumber)})
      .then((response) => {
        response.json()
        .then((data) => {console.log(`something idno ${data}`)
        location.reload() 
      })
				.catch((error) => console.log(error));
		})
    ;

    // @ ------------------------



    

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

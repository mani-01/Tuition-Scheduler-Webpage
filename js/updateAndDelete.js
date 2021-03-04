"use strict";
// ! update and delete modal generation for each card
let modalUpdateDelete = (dataI, i) => {
	console.log(dataI);
	// doing the same here as i did for the card

	//need to put the modal in the body of the html...
	const modalGenDiv = document.querySelector("#modalGeneratorDiv");
	console.log(modalGenDiv);

	const modalRoot = document.createElement("div");
	modalRoot.className = "modal fade";
	modalRoot.id = `updateDeleteModal${i}`;
	// modalRoot.setAttribute("data-bs-backdrop", "static");
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
  modalTitle.innerText = "Update Contact Number or Delete Student.";

  const modalXButton = document.createElement("button");
  modalXButton.type = "button";
  modalXButton.className = "btn-close";
  modalXButton.setAttribute("data-bs-dismiss", "modal");
  modalXButton.setAttribute("aria-label", "Close");


  const modalBody = document.createElement("div");
  modalBody.className = "modal-body";
  
  const modalInfo = document.createElement("div");

  const modalInfoRow = document.createElement("div");
	modalInfoRow.className = "row mb-4";

  const modalInfoRowChild = document.createElement("div");
	modalInfoRowChild.className = "row";

  // formatting from card--------------------------
  // const cardBodyDiv = document.createElement("div");
  // cardBodyDiv.className = "card-body";
  // console.log(cardBodyDiv);

  // const cardRow = document.createElement("div");
  // cardRow.className = "row";
  // console.log(cardRow);
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
};

/*

<!-- ! UPDATE STUDENT/ DELETE STUDENT MODAL -->
<div class="modal fade" id="deleteUpdateStudentModal" data-bs-backdrop="static" data-bs-keyboard="false"
  tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel" style="color:red">Delete or update student details.</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      /*
      */
     /*
        <!-- % form (inside modal) here ------------------------->
        <form>
        <!--first and last name input -->
        <div class="row mb-4">
        <div class="row">
        
        <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">First Name</span>
                <input type="text" class="form-control" placeholder="first name" aria-label="Username"
                  aria-describedby="basic-addon1">
              </div>
            </div>
            <div class="row">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Last Name</span>
                <input type="text" class="form-control" placeholder="last name" aria-label="Username"
                  aria-describedby="basic-addon1">
              </div>
            </div>
          </div>
          <!-- age input -->
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Age</span>
            <input type="number" class="form-control" placeholder="age" aria-label="Username"
              aria-describedby="basic-addon1">
          </div>

          <!-- parent name input -->
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Parent's Name</span>
            <input type="text" class="form-control" placeholder="parent's name" aria-label="Username"
              aria-describedby="basic-addon1">
          </div>


          <!-- contact number input -->
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Contact Number</span>
            <input type="number" class="form-control" placeholder="contact number" aria-label="Username"
              aria-describedby="basic-addon1">
          </div>
          <!-- % form (inside modal) here END ---------->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary mani-button">Understood</button>
      </div>
    </div>
  </div>
</div>
<!-- ! UPDATE STUDENT/ DELETE STUDENT MODAL END------------------------------->
*/

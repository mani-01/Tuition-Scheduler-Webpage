"use strict";
// ! update and delete modal generation for each card
let modalUpdateDelete = (cardDataAtI, i) => {
	console.log(cardDataAtI);
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
  modalTitle.id = "staticBackdropLabel"
  modalTitle.innerText = `this is a test ID = ${cardDataAtI.studentID}`

  modalHeader.appendChild(modalTitle)
	modalContent.appendChild(modalHeader);
	modalDialog.appendChild(modalContent);
	modalRoot.appendChild(modalDialog);
	modalGenDiv.appendChild(modalRoot);
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

"use strict";
// generates the student popup with student details, update button, and delete buttons.
let studentCardModalGen = (dataI, i) => {

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
    modalXButton.onclick = function () {
        location.reload();
    };


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
    modalEditButton.onclick = function () {
        updateStudent(dataI, modalInfoRowChild, modelBodyContactNumber)
    };
    // studentCardModalGen(data[i], i)


    const modalDeleteButton = document.createElement("button"); // @ delete
    modalDeleteButton.innerText = "Delete";
    modalDeleteButton.className = "btn btn-secondary";
    modalDeleteButton.id = "withDeleteConfirmation";
    modalDeleteButton.setAttribute("type", "submit")
    modalDeleteButton.onclick = function () {
        sendDeleteToAPI(dataI.studentID)
    };


    const modalCloseButton = document.createElement("button");
    modalCloseButton.innerText = "Cancel";
    modalCloseButton.className = "btn btn-secondary";
    modalCloseButton.setAttribute("type", "button")
    modalCloseButton.setAttribute("data-bs-dismiss", "modal")
    modalCloseButton.onclick = function () {
        location.reload()
    }


    modalGenDiv.appendChild(modalRoot)
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






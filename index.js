'use strict'
// ? INDEX PAGE MODALS --------------------------------------

// * ADD STUDENT MODAL -------------------------------------
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
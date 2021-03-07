'use strict';

let deleteStudent = (studentID) => {

    fetch(`http://localhost:9999/student/delete/studentID/${studentID}`,{method:`DELETE`})
        .then((studentID) => {
            location.reload()})
        .catch((error) => console.log(error));

}
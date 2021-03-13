'use strict';

// sends delete to api
let sendDeleteToAPI = (studentID) => {

    fetch(`http://${ip()}/student/delete/studentID/${studentID}`, {method: `DELETE`})
        .then((studentID) => {
            location.reload()
        })
        .catch((error) => console.log(error));

}
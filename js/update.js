'use strict';

// sending put method to api which then updates student in the database.
let sendUpdateToAPI = (dataI, jsonUpdatedContactNumber) => {
    fetch(`http://localhost:9999/student/update/studentID/${dataI.studentID}`, {
        method: `PUT`,
        headers: {"Content-type": "application/json",},
        body: JSON.stringify(jsonUpdatedContactNumber)
    })
        .then((response) => {
            response.json()
                .then((data) => {
                    console.log(`Put ${data}`)
                    location.reload()
                })
                .catch((error) => console.log(error));
        })
    ;
}
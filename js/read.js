"use strict";

// reads information from the database when page opens
window.onload = () => {
    readAllFromAPI();
};

// gets all the students that are in the api/database.
let readAllFromAPI = () => {
    fetch(`http://${ip()}/student/readAll`)
        .then((response) => { // gets the response
            response.json() // promise - converts json data ready for us to use
                .then((data) => {
                    addNewStudentModalGen(data);
                })
        })
        .catch((error) => {
            console.log(error);
        });
};



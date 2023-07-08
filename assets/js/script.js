let titleInput = document.getElementById("title-input");
let dateInput = document.getElementById("date-input");
let timeInput = document.getElementById("time-input");
let locationInput = document.getElementById("location-input");
let importanceInput = document.getElementById("importance-input");
let submitterNameInput = document.getElementById("name-input");
let submitButton = document.getElementById("submitButton");
let output = document.getElementById("response-output");

let urlParams = new URLSearchParams(window.location.search);
let username = urlParams.get('username');
let password = urlParams.get('password');

submitButton.addEventListener("click", function() {

    if (titleInput.value == null || locationInput.value == null || dateInput.value == null || timeInput.value == null || submitterNameInput.value == null || importanceInput.value == null) {
        throw new Error('Niet alles is ingevuld!');
    }

    let credentials = username + ":" + password;
    console.log(credentials);
    let appointment = {
        "activityTitle" : titleInput.value,
        "location" : locationInput.value,
        "date": dateInput.value,
        "time": timeInput.value,
        "submitterName" :submitterNameInput.value,
        "importance" : parseInt(importanceInput.value)
    }

    console.log(appointment);

    fetch("https://localhost:5148/Appointment",
    {
        headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json',
        'Authorization' : "Basic " + btoa(credentials)
        },
        body: JSON.stringify(appointment),
        method: "POST"
    })
    .then(output.innerHTML = "Als je alles correct hebt ingevuld, zal hij optijd zijn!")  
});
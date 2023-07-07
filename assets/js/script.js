let titleInput = document.getElementById("title-input");
let dateInput = document.getElementById("date-input");
let timeInput = document.getElementById("time-input");
let locationInput = document.getElementById("location-input");
let importanceInput = document.getElementById("importance-input");
let submitterNameInput = document.getElementById("name-input");
let submitButton = document.getElementById("submitButton");
let output = document.getElementById("response");

submitButton.addEventListener("click", function() {
    let appointment = {
         "activityTitle" : titleInput.value,
         "location" : locationInput.value,
         "date": dateInput.value,
        "time": timeInput.value,
        "submitterName" :submitterNameInput.value,
        "importance" : importanceInput.value
    }

    fetch("https://localhost:5148/Appointment",
    {
        headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(appointment)
    })
    .then(response => response.json())
    .then(result => {
        console.log(result);
    })
    
    
});
let usernameInput = document.getElementById("username-input");
let passwordInput = document.getElementById("password-input");
let titleInput = document.getElementById("title-input");
let dateInput = document.getElementById("date-input");
let timeInput = document.getElementById("time-input");
let locationInput = document.getElementById("location-input");
let importanceInput = document.getElementById("importance-input");
let submitterNameInput = document.getElementById("name-input");
let submitButton = document.getElementById("submitButton");
let output = document.getElementById("response-output");


submitButton.addEventListener("click", function() {
    let credentials = usernameInput.value + ":" + passwordInput.value;
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
        'Content-Type': 'application/json',
        'Authorization' : "Basic " + btoa(credentials)
        },
        body: JSON.stringify(appointment),
        method: "POST"
    })
    .then(output.innerHTML = "Yarne zal optijd zijn!")
    .catch(output.innerHTML = "Not all fields were filled in correctly");  
});
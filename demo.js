document.getElementById("submitBtn").addEventListener("click", function() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const dateTime = document.getElementById("dateTime").value;
    const gender = document.getElementById("genderMale").checked ? "Male" : document.getElementById("genderFemale").checked ? "Female" : "";
    const termsAndConditions = document.getElementById("termsAndConditions").checked;

    if (firstName === "" || lastName === "" || email === "" || dob === "" || dateTime === "" || gender === "" || !termsAndConditions) {
        alert("Please fill in all fields and accept terms and conditions.");
        return;
    }

    alert("Successfully Booked!");
});

function showHotelList() {
    document.getElementById("hotelList").style.display = "block";

}



function goBack() {
    window.history.back();
}
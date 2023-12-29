function generateCard() {
    const nameElement = document.getElementById("name");
    const nameValue = nameElement.value;

    const cardNameElement = document.getElementById("cardName");
    cardNameElement.innerHTML = nameValue;

    const collegeNameValue = document.getElementById("collegeName").value;
    document.getElementById("cardCollegeName").innerHTML = collegeNameValue;

    const locationValue = document.getElementById("location").value;
    document.getElementById("cardLocation").innerHTML = locationValue;

    document.getElementById("collegeCard").style.display = "block";
}
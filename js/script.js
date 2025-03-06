document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("sign-up-form");
    const birthdateInput = document.getElementById("birthdate");
    const errorMessage = document.createElement("p");
    errorMessage.style.color = "red";
    errorMessage.style.fontWeight = "bold";
    birthdateInput.insertAdjacentElement("afterend", errorMessage);

    form.addEventListener("submit", function (event) {
        const dobValue = new Date(birthdateInput.value);
        const today = new Date();
        let age = today.getFullYear() - dobValue.getFullYear();
        const monthDiff = today.getMonth() - dobValue.getMonth();
        const dayDiff = today.getDate() - dobValue.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        if (age < 18) {
            errorMessage.textContent = "You must be at least 18 years old to sign up.";
            event.preventDefault();
        } else {
            errorMessage.textContent = "";
        }
    });
});

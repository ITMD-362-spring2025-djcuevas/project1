document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("sign-up-form");
    const birthdateInput = document.getElementById("birthdate");
    const errorMessage = document.createElement("p");
    errorMessage.style.color = "red";
    errorMessage.style.fontWeight = "bold";
    birthdateInput.insertAdjacentElement("afterend", errorMessage);

    // Create a modal for the success message
    const modal = document.createElement("div");
    modal.id = "success-modal";
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.background = "white";
    modal.style.padding = "20px";
    modal.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
    modal.style.display = "none";
    modal.style.textAlign = "center";
    modal.innerHTML = `
        <h2>Success!</h2>
        <p>You have successfully signed up!</p>
        <button id="close-modal">Close</button>
    `;
    document.body.appendChild(modal);

    const closeModal = document.getElementById("close-modal");
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    form.addEventListener("submit", function (event) {
        const dobValue = new Date(birthdateInput.value);
        const today = new Date();
        let age = today.getFullYear() - dobValue.getFullYear();
        const monthDiff = today.getMonth() - dobValue.getMonth();
        const dayDiff = today.getDate() - dobValue.getDate();

        // Adjust age if birthday hasn't happened this year
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        if (age < 18) {
            errorMessage.textContent = "You must be at least 18 years old to sign up.";
            event.preventDefault(); // Prevent form submission
        } else {
            errorMessage.textContent = ""; // Clear error message if valid
            event.preventDefault(); // Stop actual submission for demo purposes

            // Show confirmation modal
            modal.style.display = "block";
        }
    });
});

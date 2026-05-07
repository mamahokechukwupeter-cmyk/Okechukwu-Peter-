alert("Welcome! Fill the form correctly.");

const form = document.getElementById("myForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const ageInput = document.getElementById("age");

/* =========================
   REAL-TIME VALIDATION
========================= */

// FULL NAME
nameInput.addEventListener("input", () => {

    if (nameInput.value.trim().split(" ").length < 2) {
        setError(nameInput, "Enter first and last name");
    } else {
        setSuccess(nameInput);
    }

});

// EMAIL
emailInput.addEventListener("input", () => {

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailInput.value.match(emailPattern)) {
        setError(emailInput, "Invalid email");
    } else {
        setSuccess(emailInput);
    }

});

// PASSWORD
passwordInput.addEventListener("input", () => {

    let passwordPattern =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[\W]).{8,}$/;

    if (!passwordInput.value.match(passwordPattern)) {
        setError(passwordInput, "Weak password");
    } else {
        setSuccess(passwordInput);
    }

});

// CONFIRM PASSWORD
confirmPasswordInput.addEventListener("input", () => {

    if (confirmPasswordInput.value !== passwordInput.value) {
        setError(confirmPasswordInput, "Passwords do not match");
    } else {
        setSuccess(confirmPasswordInput);
    }

});

// AGE
ageInput.addEventListener("input", () => {

    if (ageInput.value < 18) {
        setError(ageInput, "Must be 18 or older");
    } else {
        setSuccess(ageInput);
    }

});

/* =========================
   FORM SUBMIT
========================= */

form.addEventListener("submit", function(e) {

    e.preventDefault();

    if (
        nameInput.classList.contains("success") &&
        emailInput.classList.contains("success") &&
        passwordInput.classList.contains("success") &&
        confirmPasswordInput.classList.contains("success") &&
        ageInput.classList.contains("success")
    ) {

        alert("Registration Successful!");

    } else {

        alert("Please correct the errors.");

    }

});

/* =========================
   HELPER FUNCTIONS
========================= */

function setError(input, message) {

    input.classList.add("error");
    input.classList.remove("success");

    input.nextElementSibling.textContent = message;

}

function setSuccess(input) {

    input.classList.add("success");
    input.classList.remove("error");

    input.nextElementSibling.textContent = "";

}
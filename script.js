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

function validateName() {
    const nameParts = nameInput.value.trim().split(/\s+/).filter(Boolean);

    if (nameParts.length < 2) {
        setError(nameInput, "Enter first and last name");
        return false;
    }

    setSuccess(nameInput);
    return true;
}

function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;

    if (!emailPattern.test(emailInput.value.trim())) {
        setError(emailInput, "Invalid email. Example: user@example.com");
        return false;
    }

    setSuccess(emailInput);
    return true;
}

// FULL NAME
nameInput.addEventListener("input", validateName);

// EMAIL
emailInput.addEventListener("input", validateEmail);

// PASSWORD
passwordInput.addEventListener("input", () => {

    let passwordPattern =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[\W]).{8,}$/;

    if (!passwordInput.value.match(passwordPattern)) {
        setError(passwordInput, "Password must be 8+ chars, include uppercase, number, and symbol");
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

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = passwordInput.classList.contains("success");
    const isConfirmPasswordValid = confirmPasswordInput.classList.contains("success");
    const isAgeValid = ageInput.classList.contains("success");

    if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isAgeValid) {
        alert("Registration Successful!");
        form.reset();
        [nameInput, emailInput, passwordInput, confirmPasswordInput, ageInput].forEach(input => input.classList.remove("success", "error"));
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
    input.title = message;

    input.nextElementSibling.textContent = message;

}

function setSuccess(input) {

    input.classList.add("success");
    input.classList.remove("error");
    input.removeAttribute("title");

    input.nextElementSibling.textContent = "";

}
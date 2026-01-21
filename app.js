const form = document.querySelector("form"),
    emailField = form.querySelector(".email-field"),
    emailInput = emailField.querySelector(".email"),
    passField = form.querySelector(".create-password"),
    passInput = passField.querySelector(".password"),
    cPassField = form.querySelector(".confirm-password"),
    cPassInput = cPassField.querySelector(".cPassword");

// EMAIL VALIDATION
function checkEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.match(emailPattern)) {
        emailField.classList.add("invalid");
    } else {
        emailField.classList.remove("invalid");
    }
}

// PASSWORD VALIDATION
function createPass() {
    const passPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passInput.value.match(passPattern)) {
        passField.classList.add("invalid");
    } else {
        passField.classList.remove("invalid");
    }
}

// CONFIRM PASSWORD
function confirmPass() {
    if (passInput.value !== cPassInput.value || cPassInput.value === "") {
        cPassField.classList.add("invalid");
    } else {
        cPassField.classList.remove("invalid");
    }
}

// SHOW / HIDE PASSWORD
document.querySelectorAll(".show-hide").forEach(icon => {
    icon.addEventListener("click", () => {
        const input = icon.previousElementSibling;
        if (input.type === "password") {
            input.type = "text";
            icon.classList.replace("bx-eye", "bx-eye-slash");
        } else {
            input.type = "password";
            icon.classList.replace("bx-eye-slash", "bx-eye");
        }
    });
});

// REAL-TIME VALIDATION
emailInput.addEventListener("keyup", checkEmail);
passInput.addEventListener("keyup", createPass);
cPassInput.addEventListener("keyup", confirmPass);

// FORM SUBMIT
form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkEmail();
    createPass();
    confirmPass();

    if (
        !emailField.classList.contains("invalid") &&
        !passField.classList.contains("invalid") &&
        !cPassField.classList.contains("invalid")
    ) {
        alert("Form submitted successfully!");
        // location.href = form.getAttribute("action");
    }
});
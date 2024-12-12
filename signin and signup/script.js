function toggleForms() {
    var createAccountForm = document.getElementById('createAccountForm');
    var loginForm = document.getElementById('loginForm');
    if (createAccountForm.style.display === "none") {
        createAccountForm.style.display = "block";
        loginForm.style.display = "none";
    } else {
        createAccountForm.style.display = "none";
        loginForm.style.display = "block";
    }
}


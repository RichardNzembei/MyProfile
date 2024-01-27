
document.addEventListener('DOMContentLoaded', function () {
    showHome();
});

function showHome() {
    // Toggle visibility of the home, registration, and login content
    document.getElementById('homeContent').style.display = 'block';
    document.getElementById('registrationContent').style.display = 'none';
    document.getElementById('loginContent').style.display = 'none';
}

function showRegistration() {
    // Toggle visibility of the registration content
    document.getElementById('homeContent').style.display = 'none';
    document.getElementById('registrationContent').style.display = 'block';
    document.getElementById('loginContent').style.display = 'none';
}

function showLogin() {
    // Toggle visibility of the login content
    document.getElementById('homeContent').style.display = 'none';
    document.getElementById('registrationContent').style.display = 'none';
    document.getElementById('loginContent').style.display = 'block';
}

function registerUser() {
    // Perform user registration logic
    // You can add server-side validation and registration logic here
    alert('User registered successfully!');
}

function loginUser() {
    // Perform user login logic
    // You can add server-side validation and login logic here
    alert('User logged in successfully!');
}
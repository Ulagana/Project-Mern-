const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Define the expected username and password
    const expectedUsername = 'admin';
    const expectedPassword = 'Ulaga123';

    // Validate the login credentials
    if (username === expectedUsername && password === expectedPassword) {
        // Save the username in local storage
        localStorage.setItem('username', username);
        // Redirect to the dashboard
        window.location.assign('nn.html');
    } else {
        alert('Invalid username or password');
    }
});
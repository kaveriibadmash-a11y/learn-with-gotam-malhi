// Sample valid users (edit this array to add more friends)
const validUsers = [
    { username: 'friend1', password: 'learnlit2023' },
    { username: 'friend2', password: 'learnlit2023' },
    // Add more: { username: 'friend3', password: 'yourpassword' }
];

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('login-message');
    
    // Check if credentials match
    const user = validUsers.find(u => u.username === username && u.password === password);
    if (user) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('content-section').style.display = 'block';
        message.textContent = '';
    } else {
        message.textContent = 'Invalid username or password. Try again!';
        message.style.color = 'red';
    }
});

// Dark mode toggle
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
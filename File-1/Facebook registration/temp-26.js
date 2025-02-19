document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    alert(`Welcome, ${firstName} ${lastName}! Your signup is successful.`);
    // You can add further processing or form submission here.
});

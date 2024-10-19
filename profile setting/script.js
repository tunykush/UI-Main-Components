// Avatar image preview functionality
document.getElementById('avatar-upload').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const img = document.getElementById('avatar-preview');
        img.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});

// Basic password match check (remains unchanged)
document.querySelector('form').addEventListener('submit', function(event) {
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (newPassword !== confirmPassword) {
        alert('Passwords do not match');
        event.preventDefault();
    }
});

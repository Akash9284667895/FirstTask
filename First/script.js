function closeForm() {
    document.querySelector('.form-container').style.display = 'none';
}

document.getElementById('new-client').addEventListener('click', function() {
    alert('New client functionality is not implemented.');
});

document.getElementById('back').addEventListener('click', function() {
    alert('Back button functionality is not implemented.');
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});

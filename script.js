// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const header = document.querySelector('header h1');
    if (header) {
        header.addEventListener('click', () => {
            alert('Welcome to my website!');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let dataSpan = document.getElementById('data');

    let savedText = localStorage.getItem('savedText');

    if (savedText) {
        dataSpan.textContent = savedText;
    } else {
        dataSpan.textContent = 'No hay texto guardado.';
    }
});
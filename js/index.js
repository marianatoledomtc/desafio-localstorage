document.addEventListener('DOMContentLoaded', function() {
    let inputText = document.getElementById('inputText');
    let buttonText = document.getElementById('buttonText');

    function saveText() {
        let text = inputText.value; 
        localStorage.setItem('savedText', text); 
    }

    buttonText.addEventListener('click', saveText);
});
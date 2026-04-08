const colorPicker = document.querySelector('#colorPicker');
const colorPreview = document.querySelector('#colorPreview');
const colorHistory = document.querySelector('#colorHistory');
const clearHistoryButton = document.querySelector('#clearHistoryButton');

colorPicker.addEventListener('input', function() {
    const selectedColor = colorPicker.value;

    colorPreview.style.backgroundColor = selectedColor;
    colorPreview.textContent = selectedColor;

    const newItem = document.createElement('li');
    newItem.style.backgroundColor = selectedColor;

    // Clicking history color sets it as active
    newItem.addEventListener('click', function() {
        colorPreview.style.backgroundColor = selectedColor;
        colorPreview.textContent = selectedColor;
        colorPicker.value = selectedColor;
    });

    colorHistory.appendChild(newItem);
});

clearHistoryButton.addEventListener('click', function() {
    colorHistory.innerHTML = '';
});
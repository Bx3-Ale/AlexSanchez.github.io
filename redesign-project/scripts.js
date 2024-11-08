// scripts.js

// Basic Image Comparison Slider Code
document.addEventListener("DOMContentLoaded", function() {
    const comparison = document.querySelector('.comparison');
    const beforeImage = comparison.querySelector('.before');
    const afterImage = comparison.querySelector('.after');

    let isDragging = false;

    comparison.addEventListener('mousedown', function(e) {
        isDragging = true;
        moveSlider(e);
    });

    window.addEventListener('mouseup', function() {
        isDragging = false;
    });

    comparison.addEventListener('mousemove', function(e) {
        if (isDragging) {
            moveSlider(e);
        }
    });

    function moveSlider(e) {
        const rect = comparison.getBoundingClientRect();
        const position = ((e.clientX - rect.left) / rect.width) * 100;
        beforeImage.style.width = `${position}%`;
    }
});

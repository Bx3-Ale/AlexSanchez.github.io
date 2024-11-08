// scripts.js

// Basic Image Comparison Slider Code
const slider = document.querySelector('.comparison-slider');
const overlay = document.querySelector('.comparison-overlay');

slider.addEventListener('input', (e) => {
    const value = e.target.value;
    overlay.style.width = `${value}%`;
});


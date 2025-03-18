const tg = window.Telegram.WebApp;
tg.expand();

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
let isDragging = false;
let startX = 0;
let startY = 0;
let draggedButton = null;

button1.addEventListener('touchstart', handleTouchStart);
button2.addEventListener('touchstart', handleTouchStart);

function handleTouchStart(event) {
    isDragging = true;
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
    draggedButton = event.target;
}

document.addEventListener('touchmove', handleTouchMove);
document.addEventListener('touchend', handleTouchEnd);

function handleTouchMove(event) {
    if (!isDragging) return;
    const currentX = event.touches[0].clientX;
    const currentY = event.touches[0].clientY;
    const deltaX = currentX - startX;
    const deltaY = currentY - startY;

    if (Math.abs(deltaX) > 50 || Math.abs(deltaY) > 50) {
        if (draggedButton === button1 && deltaX > 50) {
            swapButtons();
            resetDrag();
        } else if (draggedButton === button2 && deltaX < -50) {
            swapButtons();
            resetDrag();
        }
    }
}

function handleTouchEnd() {
    resetDrag();
}

function swapButtons() {
    const tempText = button1.textContent;
    button1.textContent = button2.textContent;
    button2.textContent = tempText;
}

function resetDrag() {
    isDragging = false;
    draggedButton = null;
}
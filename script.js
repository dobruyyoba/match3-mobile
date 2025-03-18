const tg = window.Telegram.WebApp;
tg.expand();

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;
let draggedButton = null;

button1.addEventListener('touchstart', handleTouchStart);
button2.addEventListener('touchstart', handleTouchStart);

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
    draggedButton = event.target;
    document.addEventListener('touchend', handleTouchEnd); // Добавляем обработчик touchend на документ
}

document.addEventListener('touchmove', handleTouchMove);

function handleTouchMove(event) {
    endX = event.touches[0].clientX;
    endY = event.touches[0].clientY;
}

function handleTouchEnd() {
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    if (Math.abs(deltaX) > 50 || Math.abs(deltaY) > 50) {
        if (draggedButton === button1 && deltaX > 50) {
            swapButtons();
        } else if (draggedButton === button2 && deltaX < -50) {
            swapButtons();
        }
    }

    document.removeEventListener('touchend', handleTouchEnd); // Удаляем обработчик touchend
}

function swapButtons() {
    const tempText = button1.textContent;
    button1.textContent = button2.textContent;
    button2.textContent = tempText;
}
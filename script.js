const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

const hammer1 = new Hammer(button1);
const hammer2 = new Hammer(button2);

hammer1.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
hammer2.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });

hammer1.on('swipeleft', () => swapButtons(button1, button2));
hammer2.on('swiperight', () => swapButtons(button2, button1));

function swapButtons(btn1, btn2) {
    const tempText = btn1.textContent;
    btn1.textContent = btn2.textContent;
    btn2.textContent = tempText;
}
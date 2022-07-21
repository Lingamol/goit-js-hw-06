let counterValue = 0;
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const counterTextRef = document.querySelector('#value');

incrementBtnRef.addEventListener('click', () => {
  counterValue += 1;
  counterTextRef.textContent = counterValue;
});

decrementBtnRef.addEventListener('click', () => {
  counterValue -= 1;
  counterTextRef.textContent = counterValue;
});

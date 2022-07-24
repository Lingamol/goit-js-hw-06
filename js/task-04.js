let counterValue = 0;
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const counterTextRef = document.querySelector('#value');

incrementBtnRef.addEventListener('click', incrementСounter);
function incrementСounter() {
  counterValue += 1;
  counterTextRef.textContent = counterValue;
}

decrementBtnRef.addEventListener('click', decrementСounter);
function decrementСounter() {
  counterValue -= 1;
  counterTextRef.textContent = counterValue;
}

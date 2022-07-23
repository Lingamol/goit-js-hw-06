function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnRef = document.querySelector('button.change-color');
const textRef = document.querySelector('span.color');
console.log(btnRef);
btnRef.addEventListener('click', () => {
  const backgroundColor = getRandomHexColor();
  document.body.style.backgroundColor = backgroundColor;
  textRef.textContent = backgroundColor;
});

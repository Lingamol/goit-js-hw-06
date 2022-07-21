const inputTextRef = document.querySelector('input#name-input');
const outputTextRef = document.querySelector('span#name-output');

inputTextRef.addEventListener('input', event => {
  if (event.currentTarget.value !== '') {
    outputTextRef.textContent = event.currentTarget.value;
  } else {
    outputTextRef.textContent = 'Anonymous';
  }
});

const inputTextRef = document.querySelector('input#validation-input');

inputTextRef.addEventListener('blur', validationInput);
function validationInput(event) {
  if (Number(inputTextRef.dataset.length) === event.currentTarget.value.length) {
    if (inputTextRef.classList.contains('invalid')) {
      inputTextRef.classList.remove('invalid');
    }
    inputTextRef.classList.add('valid');
  } else {
    if (inputTextRef.classList.contains('valid')) {
      inputTextRef.classList.remove('valid');
    }
    inputTextRef.classList.add('invalid');
  }
}

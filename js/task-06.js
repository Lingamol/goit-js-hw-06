const inputTextRef = document.querySelector('input#validation-input');

inputTextRef.addEventListener('blur', event => {
  // console.log('dataset :', inputTextRef.dataset.length);
  // console.log('value:', event.currentTarget.value.length);
  if (Number(inputTextRef.dataset.length) === event.currentTarget.value.length) {
    // console.log(inputTextRef.classList);

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
});

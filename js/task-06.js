const inputTextRef = document.querySelector('input#validation-input');

inputTextRef.addEventListener('blur', event => {
  //   console.log('dataset :', inputTextRef.dataset.length);
  //   console.log('value:', event.currentTarget.value.length);
  if (Number(inputTextRef.dataset.length) === event.currentTarget.value.length) {
    inputTextRef.classList.add('valid');
  } else {
    inputTextRef.classList.add('invalid');
  }
});

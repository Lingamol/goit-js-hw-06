const inputRangeRef = document.querySelector('input#font-size-control');
const outputTextRef = document.querySelector('span#text');
inputRangeRef.addEventListener('input', event => {
  console.log(event.currentTarget.value);
  outputTextRef.style.fontSize = event.currentTarget.value + 'px';
});

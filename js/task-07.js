const inputRangeRef = document.querySelector('input#font-size-control');
const outputTextRef = document.querySelector('span#text');
inputRangeRef.addEventListener('input', changeFontSizeByControl);
function changeFontSizeByControl(event) {
  outputTextRef.style.fontSize = event.currentTarget.value + 'px';
}

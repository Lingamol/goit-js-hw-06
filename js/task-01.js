// console.dir(document);
const categoriesEl = document.querySelectorAll('#categories .item');
console.log('Number of categories:', categoriesEl.length);
for (const element of categoriesEl) {
  console.log('Category:', element.querySelector('h2').innerText);
  console.log('Elements:', element.querySelectorAll('li').length);
}

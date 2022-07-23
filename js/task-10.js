function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  divBoxes: document.querySelector('div#boxes'),
  input: document.querySelector('input[type="number"]'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
};

function createBoxes(amount) {
  const items = [];
  for (let i = 0; i < amount; i += 1) {
    // items.push('<div></div>');
    const elem = document.createElement('div');
    elem.style.height = 30 + i * 10 + 'px';
    elem.style.width = 30 + i * 10 + 'px';
    elem.style.backgroundColor = getRandomHexColor();
    items.push(elem);
  }

  return items;
}

function CreateDiv() {
  const items = createBoxes(refs.input.value);
  refs.divBoxes.append(...items);
}

function DestroyDiv() {
  refs.divBoxes.innerHTML = '';
}

refs.btnCreate.addEventListener('click', CreateDiv);
refs.btnDestroy.addEventListener('click', DestroyDiv);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector('#boxes');
const input = document.querySelector('input[type="number"]');
const buttonCreate = document.querySelector('[data-create]')
const buttonDestroy = document.querySelector('[data-destroy]');
const amount = input.value

buttonCreate.addEventListener('click', getAmount)
buttonDestroy.addEventListener('click', destroyBoxes)
function getAmount () {
  let amount = +input.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let baseboxSize = 30;
  let array = [];
  for (let i = 0; i < amount; i += 1) {
    let newBoxes = document.createElement('div');
    newBoxes.append(i);
    array.push(newBoxes);

    baseboxSize += 10;
    addStyleNewBoxes(newBoxes, baseboxSize);

  }
  boxes.append(...array);
}
function destroyBoxes() {
  boxes.innerHTML = '';
 
}

function addStyleNewBoxes(newBoxes, baseboxSize) {
  newBoxes.style.backgroundColor = getRandomHexColor();
  newBoxes.style.height = baseboxSize + 'px';
  newBoxes.style.width = baseboxSize + 'px';
  newBoxes.style.margin = '10px';
}


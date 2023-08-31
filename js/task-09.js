
const bodyColor = document.querySelector('body');
const clickButton = document.querySelector('.change-color')
const colorName = document.querySelector('.color')
clickButton.addEventListener( 'click', onClick)
function onClick () {

bodyColor.style.backgroundColor = colorName.textContent = getRandomHexColor();

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}




const sizeInput = document.querySelector('#font-size-control');
const changeText = document.querySelector('#text');
changeText.style.fontSize = sizeInput.value +'px';
const handler = event => {
    const changeValue = event.target.value +'px';
    changeText.style.fontSize = changeValue
}

sizeInput.addEventListener('input', handler)



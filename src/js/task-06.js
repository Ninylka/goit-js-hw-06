const textInput = document.querySelector('#validation-input');
const handler = event => {
    const lengthInput = event.currentTarget.value.length;
    
if(lengthInput === Number(textInput.dataset.length)){
    textInput.classList.remove('invalid')
    textInput.classList.add('valid')
    
} else{
    textInput.classList.add('invalid')
    textInput.classList.remove('valid')
}
}
textInput.addEventListener('blur', handler)



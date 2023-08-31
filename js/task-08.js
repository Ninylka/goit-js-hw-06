const formElement = document.querySelector('.login-form')
formElement.addEventListener('submit', onSubmit)
function onSubmit(evt){
    evt.preventDefault();

const {email, password} = evt.currentTarget.elements
// console.log(email.value)
// console.log(password.value)


if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
}
const data = {
    email: email.value,
    password: password.value,
}
console.log(data)
formElement.reset();
}


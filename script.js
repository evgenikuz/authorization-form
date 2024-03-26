let createAccountBtn = document.querySelector('.main__create-account-btn');
let loginBtn = document.querySelector('.main__login-btn');
let registrationForm = document.querySelector('.registration-form');
let loginForm = document.querySelector('.login-form');
let coverLayer = document.querySelector('.cover');

createAccountBtn.addEventListener('click', function() {
    registrationForm.classList.remove('hidden')
    coverLayer.classList.remove('d-none')
})

loginBtn.addEventListener('click', function() {
    loginForm.classList.remove('hidden')
    coverLayer.classList.remove('d-none')
})

coverLayer.addEventListener('click', closeWindow)

registrationForm.addEventListener('click', function(event) {
    if (event.target.closest('button').classList.contains('registration-form__close-btn')) {
        closeWindow();
    }
})

loginForm.addEventListener('click', function(event) {
    if (event.target.closest('button').classList.contains('login-form__close-btn')) {
        closeWindow();
    }
})

function closeWindow() {
    loginForm.classList.add('hidden')
    registrationForm.classList.add('hidden')
    coverLayer.classList.add('d-none')
}
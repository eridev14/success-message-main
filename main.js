
//variables template thanks
const templateThanks = document.getElementById('thanks').content;
const tanksContainer = templateThanks.querySelector('.thanks');

const templateConatiner = document.getElementById('container').content;
const mainContainer = templateConatiner.querySelector('.container');

const form = mainContainer.querySelector('.form');
const emailIn = mainContainer.querySelector('.form__email');
const inv = mainContainer.querySelector('.form__invalid');
let emailSucces;

document.addEventListener('DOMContentLoaded', () => {
    document.body.append(mainContainer);
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    let emailTxt = formData.get('email');
    validEmail(emailTxt);
})

function validEmail(email) {
    if (!email) {
        emailIn.classList.add('form__email--error')
        inv.textContent = 'email vacio'
        return;
    } else {
        emailIn.classList.remove('form__email--error')
    }

    if (isValidEmail(email)) {
        emailIn.classList.remove('form__email--error')
        inv.textContent = ''
        emailSucces = emailIn.value;
        document.body.innerHTML = '';
        document.body.append(tanksContainer)
        tanksContainer.querySelector('.thanks__email').textContent = emailSucces;

    } else {
        emailIn.classList.add('form__email--error')
        inv.textContent = 'email no valido'
    }
}

function isValidEmail(email) {
    let emailRegEx = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
    return emailRegEx.test(email);
}

//functions templates thanks

const btnDismiss = tanksContainer.querySelector('.thanks__btn');
btnDismiss.addEventListener('click', (e) => {
    document.body.innerHTML = '';
    emailIn.value = emailSucces;
    document.body.append(mainContainer)
})
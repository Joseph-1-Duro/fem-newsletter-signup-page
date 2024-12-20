const form = document.forms[0];
const emailField = document.getElementById('email')
const userEmail = document.getElementById('user-email');
const modal = document.querySelector('.success-modal');
const newsLetter = document.querySelector('.newsletter-wrapper')
const dismissBtn = document.querySelector('.dismiss-btn')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(!validateEmail(emailField)) {
        showError(emailField)
    } else {
        removeError(emailField)
        userEmail.textContent = emailField.value
        setTimeout(() => {
            newsLetter.style.display = 'none';
            modal.style.display = 'grid'
        }, 1500)
    }
    
})

function validateEmail (field) {
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    return pattern.test(field.value.trim())
}

function showError (field) {
    const errorMessage = field.previousElementSibling;

    console.log(errorMessage)
    errorMessage.style.visibility = 'visible'

    field.classList.add('error-state')
}

function removeError (field) {
    const errorMessage = field.previousElementSibling;

    console.log(errorMessage)
    errorMessage.style.visibility = 'hidden'

    field.classList.remove('error-state')
}

dismissBtn.addEventListener('click', () => {
    setTimeout(() => {
        modal.style.display = 'none'
        newsLetter.style.display = 'grid'
        emailField.value = ''
    }, 1500)
})
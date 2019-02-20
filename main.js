
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const emailField = document.getElementById('email');


firstName.addEventListener('click', function() {
    document.querySelector('#animate-1 > div').classList.add('animation-border');
})

firstName.addEventListener('focusout', function() {
    document.querySelector('#animate-1 > div').classList.remove('animation-border');
})
  
lastName.addEventListener('click', function() {
    document.querySelector('#animate-2 > div').classList.add('animation-border');
})

lastName.addEventListener('focusout', function() {
    document.querySelector('#animate-2 > div').classList.remove('animation-border');
})

emailField.addEventListener('click', function() {
    document.querySelector('#animate-3 > div').classList.add('animation-border');
})

emailField.addEventListener('focusout', function() {
    document.querySelector('#animate-3 > div').classList.remove('animation-border');
})


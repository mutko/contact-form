
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const emailField = document.getElementById('email');
const radioMonday = document.querySelector('.contact-monday');
const radioTuesday = document.querySelector('.contact-tuesday');

const contactForm = document.getElementById('contact-form');
const btn = document.getElementById('submit-button');

let isValidFirst;
let isValidLast;
let isValidEmail;

firstName.addEventListener('click', function() {
    document.querySelector('#animate-1 > div').classList.add('animation-border');
})

firstName.addEventListener('focusout', function() {

    document.querySelector('#animate-1 > div').classList.remove('animation-border');  

    if ( isValidFirst = firstName.checkValidity() ) {
        document.querySelector('#animate-1').classList.add('animation-styles');
        document.querySelector('#animate-1 > div + span').innerHTML = "&#10004;";
    }

})
  

lastName.addEventListener('click', function() {
    document.querySelector('#animate-2 > div').classList.add('animation-border');
})

lastName.addEventListener('focusout', function() {
    document.querySelector('#animate-2 > div').classList.remove('animation-border');

    if ( isValidLast = lastName.checkValidity() ) {
        document.querySelector('#animate-2').classList.add('animation-styles');
        document.querySelector('#animate-2 > div + span').innerHTML = "&#10004;";
    }
})


emailField.addEventListener('click', function() {
    document.querySelector('#animate-3 > div').classList.add('animation-border');
})

emailField.addEventListener('focusout', function() {
    document.querySelector('#animate-3 > div').classList.remove('animation-border');

    if ( isValidEmail = emailField.checkValidity() ) {
        document.querySelector('#animate-3').classList.add('animation-styles');
        document.querySelector('#animate-3 > div + span').innerHTML = "&#10004;";
    }
})


radioMonday.addEventListener('click', function() {
    document.querySelector('#animate-4').classList.add('animation-styles');
    document.querySelector('#animate-4 > div + span').innerHTML = "&#10004;";
})
radioTuesday.addEventListener('click', function() {
    document.querySelector('#animate-4').classList.add('animation-styles');
    document.querySelector('#animate-4 > div + span').innerHTML = "&#10004;";
})

  
btn.addEventListener('click', function() {
    if ( isValidFirst && isValidLast && isValidEmail ) {
        contactForm.submit();
    } else {
        alert("Please fill all fields");
    }
});
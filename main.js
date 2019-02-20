
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

let percent = 0;
let elem = document.getElementById('percent-complete');

firstName.addEventListener('focusin', function() {
    document.querySelector('#animate-1 > div').classList.add('animation-border');
})

firstName.addEventListener('focusout', function() {
    setTimeout(function() {

        document.querySelector('#animate-1 > div').classList.remove('animation-border');
        if ( isValidFirst = firstName.checkValidity() ) {
            document.querySelector('#animate-1').classList.add('animation-styles');
            document.querySelector('#animate-1 > div + span').innerHTML = "&#10004;";
            document.querySelector('.form-title .animation-circle > div').classList.add('border-top');
            percent += 25;
            elem.innerHTML = percent + '%';
        }

    }, 1000);
})
  

lastName.addEventListener('focusin', function() {
    document.querySelector('#animate-2 > div').classList.add('animation-border');
})

lastName.addEventListener('focusout', function() {
    setTimeout(function() {

        document.querySelector('#animate-2 > div').classList.remove('animation-border');
        if ( isValidLast = lastName.checkValidity() ) {
            document.querySelector('#animate-2').classList.add('animation-styles');
            document.querySelector('#animate-2 > div + span').innerHTML = "&#10004;";
            document.querySelector('.form-title .animation-circle > div').classList.add('border-right');
            percent += 25;
            elem.innerHTML = percent + '%';
        }
    }, 1000);  
})


emailField.addEventListener('focusin', function() {
    document.querySelector('#animate-3 > div').classList.add('animation-border');
})

emailField.addEventListener('focusout', function() {
    setTimeout(function() {
        document.querySelector('#animate-3 > div').classList.remove('animation-border');
        if ( isValidEmail = emailField.checkValidity() ) {
            document.querySelector('#animate-3').classList.add('animation-styles');
            document.querySelector('#animate-3 > div + span').innerHTML = '&#10004;';
            document.querySelector('.form-title .animation-circle > div').classList.add('border-bottom');
            percent += 25;
            elem.innerHTML = percent + '%';
        }
    }, 1000);
})


radioMonday.addEventListener('change', function() {
    setTimeout(function() {
        document.querySelector('#animate-4').classList.add('animation-styles');
        document.querySelector('#animate-4 > div + span').innerHTML = '&#10004;';
        document.querySelector('.form-title .animation-circle > div').classList.add('border-left');
        percent += 25;
        elem.innerHTML = percent + '%';
    }, 1000);
})
radioTuesday.addEventListener('change', function() {
    setTimeout(function() {
        document.querySelector('#animate-4').classList.add('animation-styles');
        document.querySelector('#animate-4 > div + span').innerHTML = '&#10004;';
        document.querySelector('.form-title .animation-circle > div').classList.add('border-left');
    }, 1000);
})


btn.addEventListener('click', function() {
    if ( isValidFirst && isValidLast && isValidEmail ) {
        contactForm.submit();
    } else {
        alert('Please fill all fields');
    }
});
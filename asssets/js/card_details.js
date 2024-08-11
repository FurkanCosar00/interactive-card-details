// İNPUTS

let cardholderName = document.querySelector('.cardholder_name');
let cardNumber = document.querySelector('.card_number');
let months = document.querySelector('.mm');
let years = document.querySelector('.yy');
let cvc = document.querySelector('.cvc');

// İNPUT TEXTS

let cardholderText = document.querySelector('.cardholder_name_text');
let cardNumberText = document.querySelector('.card_number_text');
let mmText = document.querySelector('.mm_text');
let yyText = document.querySelector('.yy_text');
let cvcText = document.querySelector('.cvc_text');

// FUNCTİONS AND KEYUPS

function submitToCardholder() {cardholderText.innerText = cardholderName.value}
function submitToNumber() {cardNumberText.innerText = cardNumber.value}
function submitToMm() {mmText.innerText = months.value}
function submitToYy() {yyText.innerText = years.value}
function submitToCvc() {cvcText.innerText = cvc.value}

cardholderName.addEventListener('keyup', submitToCardholder);
cardNumber.addEventListener('keyup', submitToNumber);
months.addEventListener('keyup', submitToMm);
years.addEventListener('keyup', submitToYy);
cvc.addEventListener('keyup', submitToCvc);


// ERROR TEXTS

let cardholderError =document.querySelector('.cardholder_error');
let cardNumberError =document.querySelector('.card_number_error');
let mmError =document.querySelector('.mm_error');
let yyError =document.querySelector('.yy_error');
let cvcError =document.querySelector('.cvc_error');


// BUTTON

let btns = document.querySelector('.submit_button');

function ConfirmToButton() {
    cardholderName = cardholderName.value;
    cardNumber = cardNumber.value;
    months = months.value;
    years = years.value;
    cvc = cvc.value;

    if (cardholderName == '' || cardholderName == null) {
        cardholderError.innerText = 'Can’t be blank';
        cardholderError.style.color = '#FF5050';
    }

    if (cardNumber == '' || cardNumber == null) {
        cardNumberError.innerText = 'Can’t be blank';
        cardNumberError.style.color = '#FF5050';
    }

    if (months == '' || months == null) {
        mmError.innerText = 'Can’t be blank';
        mmError.classList.add('errorcss');
    }

    if (years == '' || years == null) {
        yyError.innerText = 'Can’t be blank';
        yyError.classList.add('errorcss');
        yyError.style.color = '#FF5050';
    }

    if (cvc == '' || cvc == null) {
        cvcError.innerText = 'Can’t be blank';
        cvcError.style.color = '#FF5050';
        mmError.style.color = '#FF5050';
    }
}

btns.addEventListener('click', ConfirmToButton);







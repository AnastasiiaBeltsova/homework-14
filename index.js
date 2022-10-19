function Validation() {
    const password = document.querySelector('.password');
    const letter = document.querySelector('.letter');
    const number = document.querySelector('.number');
    const punctuation = document.querySelector('.punctuation');
    const length = document.querySelector('.length');

    password.addEventListener('input', function () {
        const reg1 = /(?=.*[A-ZА-Я])/;
        if (password.value.match(reg1)) {
            letter.classList.remove('invalid');
            letter.classList.add('valid');
        } else {
            letter.classList.add('invalid');
        }
        
        const reg2 = /(?=.*[0-9])/;
        if (password.value.match(reg2)) {
            number.classList.remove('invalid');
            number.classList.add('valid');
        } else {
            number.classList.add('invalid');
        }

        const reg3 = /[,.!?;:()]/; 
        if (password.value.match(reg3)) {
            punctuation.classList.remove('invalid');
            punctuation.classList.add('valid');
        } else {
            punctuation.classList.add('invalid');
        }

        const reg4 = /[0-9a-zA-Z]{8,}/;
        if (password.value.match(reg4)) {
            length.classList.remove('invalid');
            length.classList.add('valid');
        } else {
            length.classList.add('invalid');
        }
    })
        
}  

const validation = new Validation();

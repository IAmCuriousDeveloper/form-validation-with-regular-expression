document.getElementById('name').addEventListener('blur',validateName);

document.getElementById('zip').addEventListener('blur',validateZip);

document.getElementById('email').addEventListener('blur',validateEmail);

document.getElementById('phone').addEventListener('blur',validatePhoneNO);



function validateName(){
    const name = document.getElementById('name');
    const re = /^[A-Za-z]{2,10}$/i;//accept only 2-8 character capital/lower

    if (!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
        
    }

}

function validateZip(){
    
    const zip = document.getElementById('zip');
    const re = /^[0-9]{6}$/;//six digit zip code for india

    if (!re.test(zip.value)) {
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
        
    }
}
function validateEmail(){
    
    const email = document.getElementById('email');
    const re = /^([A-Za-z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([A-Za-z]{2,5})$/i;//re for email

    if (!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
        
    }
    
}
function validatePhoneNO(){
    
    const phone = document.getElementById('phone');
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;//re for phone

    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
        
    }

    
}

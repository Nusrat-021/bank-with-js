// event handler for submit button

document.getElementById('btn-submit').addEventListener('click', function(event){

    // email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // password input field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // validation
    if(email === 'nusrat@gmail.com' &&password === '12345')
    {
        window.location.href= 'bank.html';
        
    }
    else if(email === '')
    {
        alert('Email Field cannot be empty');
    }
    else if(password === '')
    {
        alert('provide your password');
    }
    else if(email !== 'nusrat@gmail.com'){
        alert('provide your valid email');
    }
    else if(password !== '12345'){
        alert('you have forgotten your password');
    }
    else{
        alert('you are not a user');
    }





    // emailField.value='';
    // passwordField.value='';
})
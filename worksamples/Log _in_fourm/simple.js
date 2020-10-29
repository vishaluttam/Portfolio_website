const from = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//Check for valid email
function isValidEmail(email)
{
    const re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }
    else{
        showError(input,'Email is not valid'); 
    }
}

//Show input erroe message
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//event listeners
form.addEventListener('submit',function(e) {
    e.preventDefault();

    if(username.value === ''){
        showError(username,'Username is required');
    }
    else{
        showSuccess(username);
    }

    if(email.value === ''){
        showError(email,'Email is required');
    }
    else if(!isValidEmail(email.value))
    {
        showError(email,'Invalid Email Address');
    }
    else{
        showSuccess(email);
    }

    if(password.value === ''){
        showError(password,'Password is required');
    }
    else{
        showSuccess(password);
    }

    if(password2.value === ''){
        showError(password2,'Confirm your Password');
    }
    else{
        showSuccess(password2);
    }
   

    
});
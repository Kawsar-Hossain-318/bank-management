// login part here
document.getElementById('login-btn').addEventListener('click', function(){
    const inputEmail = document.getElementById('input-email');
    const inputEmailValue = inputEmail.value;
    const inputPass = document.getElementById('input-password');
    const inputPassValue = inputPass.value;

    if(inputEmailValue == 'kawsar@gmail.com' && inputPassValue == '1234'){
        window.location.href = 'banking.html';
    }
    else{
        const error = document.getElementById('text');
        error.innerHTML = `<p class="text-red-500">There is an mistake in your input try to figure out !<p>`;

    }

    // claering value
    inputEmail.value = '';
    inputPass.value = '';
});

// sign up part here
document.getElementById('no-account').addEventListener('click', function(){
    window.location.href = './sign-up.html';
});

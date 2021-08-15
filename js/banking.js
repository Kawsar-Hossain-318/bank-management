// deposit amount here
document.getElementById('deposit-btn').addEventListener('click', function(){
    // getting deposit new input value 
    const depositInput = document.getElementById('input-deposit');
    const depositInputValue = depositInput.value;
    const depositInputNumber = parseFloat(depositInputValue);

    // getting previous amount and making addition with the new one
    const depositAmount = document.getElementById('deposit-amount'); 
    const depositAmountText = depositAmount.innerText;
    const depositAmountNumber = parseFloat(depositAmountText); 
    const newDepositamount = depositInputNumber + depositAmountNumber;
    depositAmount.innerText = newDepositamount;

    // addition with the balance
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountText = balanceAmount.innerText;
    const balanceAmountNumber = parseFloat(balanceAmountText);
    const newBalanceAmount = depositInputNumber + balanceAmountNumber;
    balanceAmount.innerText = newBalanceAmount;

    // claer input
    depositInput.value = ''; 
});

// withdraw amount here
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // getting withdraw input value form here
    const withdrawInput = document.getElementById('input-withdraw');
    const withdrawInputValue = withdrawInput.value;
    const withdrawInputNumber = parseFloat(withdrawInputValue);

    // getting previous amount and making addition with the new one
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountText = withdrawAmount.innerText;
    const withdrawAmountNumber = parseFloat(withdrawAmountText);
    const newWithdrawAmonut = withdrawInputNumber + withdrawAmountNumber;
    withdrawAmount.innerText = newWithdrawAmonut;

    // substraction with the balance
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountText = balanceAmount.innerText;
    const balanceAmountNumber = parseFloat(balanceAmountText);
    const newBalanceAmount = balanceAmountNumber - withdrawInputNumber;
    balanceAmount.innerText = newBalanceAmount;

    // clear input 
    withdrawInput.value = '';
});
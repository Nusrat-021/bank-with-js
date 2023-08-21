document.getElementById('btn-withdraw').addEventListener('click',function(){

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawString);


    // validation
    if(isNaN(newWithdrawAmount)){
        alert('Provide some value to withdraw');
        return;
    }
    if(newWithdrawAmount < 0)
    {
        alert('Negative number is not allowed');
        return;
    }

    const withdrawElement = document.getElementById('withdraw-total');
    console.log(withdrawElement);
    const previousWithdrawTotalString = withdrawElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    const balanceElement = document.getElementById('total-balance');

    const previousBalanceString = balanceElement.innerText;
    const previousBalanceWithdraw = parseFloat(previousBalanceString);
    console.log(previousBalanceWithdraw);

    if(newWithdrawAmount > previousBalanceWithdraw)
    {
        alert('You do not have that much balance');
        return;
    }

    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;

    withdrawElement.innerText = currentWithdrawTotal;

    const newBalanceFromWithdraw = previousBalanceWithdraw - newWithdrawAmount;

    balanceElement.innerText = newBalanceFromWithdraw;

    withdrawField.innerText='';
})
document.getElementById('btn-deposit').addEventListener('click',function(){
    // deposit input field value
    const depositField = document.getElementById('deposit-field');
    
    const newDepositAmount = parseFloat(depositField.value);
    console.log(newDepositAmount);
    
    // validation the value of the deposit input field
    
    if(isNaN(newDepositAmount)){
        alert('Please provide valid number to deposit');
        return;
    }

    if(newDepositAmount < 0)
    {
        alert('Negative numbers are not allowed');
        return;
    }

    // previous deposit amount
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // console.log(previousDepositTotal);
    
    // previous deposit amount and new deposit amount added
    const currentDepositTotal = parseFloat((newDepositAmount + previousDepositTotal).toFixed(2));
    // console.log(currentDepositTotal);

    // set new deposit amount
    depositTotalElement.innerText=currentDepositTotal;


    // total balance increase
    
    const balanceElement = document.getElementById('total-balance');

    const previousBalanceString = balanceElement.innerText;
    const previousBalanceDeposit = parseFloat(previousBalanceString);


    const newBalanceFromDeposit = parseFloat((newDepositAmount + previousBalanceDeposit).toFixed(2));
    console.log(newBalanceFromDeposit);

    balanceElement.innerText = newBalanceFromDeposit;

    depositField.value='';
})
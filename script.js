    let = loginArea = document.getElementById('login-area'),
    let = dashboard = document.getElementById('dashboard'),
    let = deposit = document.getElementById('deposit'),
    let = withdraw = document.getElementById('withdraw'),
    let = balance = document.getElementById('balance'),
    let = depositInput = document.getElementById('deposit-input'),
    let = withdrawInput = document.getElementById('withdraw-input'),
    let = depositBtn = document.getElementById('deposit-btn'),
    let = withdrawBtn = document.getElementById('withdraw-btn'),
    let = submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
    loginArea.style.display = 'none';
    dashboard.classList.remove('d-none');
})

depositBtn.addEventListener('click', () => {
    const value = depositInput.value;
    if(Number(value) <= 0){
        alert("Negative value not allowed");
    }else{const depositValue = Number(deposit.innerText) + Number(value);
        const balanceValue = Number(balance.innerText) + Number(value);
        deposit.innerText = depositValue;
        balance.innerText = balanceValue;
        depositInput.value = '';
    }  
})

withdrawBtn.addEventListener('click', () => {
    const value = withdrawInput.value;
    if (Number(value) === 0) {
        alert("Enter amount");
    }else if(Number(value) <= 0){
        alert("Negative value not allowed");
    }
     else if (Number(value) > Number(balance.innerText)) {
        alert("You don't have that much balance to withdraw");
    } else {
        const balanceValue = Number(balance.innerText) - Number(value);
        const withdrawValue = Number(withdraw.innerText) + Number(value);
        withdraw.innerText = withdrawValue;
        balance.innerText = balanceValue;
        withdrawInput.value = '';
    }
})
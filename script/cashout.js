document.getElementById('cashout-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const cashoutPin = document.getElementById('cashout-pin').value;
    const convertedCashoutPin = parseInt(cashoutPin);
    const cashoutAmount = document.getElementById('cashout-amount').value;
    const convertedCashoutAmount = parseFloat(cashoutAmount);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedBalance = parseFloat(mainBalance);
    if (convertedCashoutPin === 1234) {
        if (convertedCashoutAmount > convertedBalance) {
            alert('Insufficient Balance');
            return;
        }
        const difference = convertedBalance - convertedCashoutAmount;
        document.getElementById('main-balance').innerText = difference;
    } else {
        alert('Enter correct PIN')
    }







});
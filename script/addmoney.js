document.getElementById('logout-btn').addEventListener('click', function(event) {
    window.location.href = './index.html'
});
document.getElementById('add-money').addEventListener('click', function(event) {
    event.preventDefault();
    const bank = document.getElementById('bank-select').value;
    if (bank === "") {
        alert('Please select a bank')
        return;
    }
    const accountNumber = document.getElementById('Account-Number').value;
    if (accountNumber === '') {
        alert('Account number must be 11 digits')
        return;
    }
    const addAmount = document.getElementById('amount').value;
    if (addAmount === '') {
        alert('Please enter a valid amount to add')
        return;
    }
    const amount = document.getElementById('amount').value
    const convertedAmount = parseFloat(amount);
    const pinNumber = document.getElementById('PIN-Number').value;
    const convertedPin = parseInt(pinNumber);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedBalance = parseFloat(mainBalance);


    if (convertedPin === 1234) {
        const sum = convertedBalance + convertedAmount;
        document.getElementById('main-balance').innerText = sum;
    } else {
        alert('Enter correct PIN')
    }

})
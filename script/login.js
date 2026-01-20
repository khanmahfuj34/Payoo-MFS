document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const accountNumber = document.getElementById('Account-Number').value;
    const pinNumber = document.getElementById('PIN-Number').value;
    const correctAccountNumber = "01234567891";
    const correctPin = "1234";

    if (accountNumber.length !== 11) {
        alert('Account Number must be 11 digits long.');
        return;
    }
    if (accountNumber !== correctAccountNumber) {
        alert('Incorrect Account Number.');
        return;
    }
    if (pinNumber === correctPin) {
        // alert('Login Successful!');
        window.location.href = './main.html';
    } else {
        alert('Incorrect PIN. Please try again.');
    }
});
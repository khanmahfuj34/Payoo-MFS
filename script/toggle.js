document.getElementById('Cashout').style.display = 'none';
document.getElementById('addmoney').style.display = 'none';
document.getElementById('add-money-box').addEventListener('click', function() {
    document.getElementById('addmoney').style.display = 'block';
    document.getElementById('Cashout').style.display = 'none';
})
document.getElementById('cashout-box').addEventListener('click', function() {
    document.getElementById('Cashout').style.display = 'block';
    document.getElementById('addmoney').style.display = 'none';
})
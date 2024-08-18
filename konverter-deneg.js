const exchangeRates = {
    USD: {
        EUR: 0.92,
        RUB: 85,
        USD: 1
    },
    EUR: {
        RUB: 93,
        USD: 1.09,
        EUR: 1
    },
    RUB: {
        USD: 0.012,
        EUR: 0.011,
        RUB: 1
    }

};  

document.getElementById('btn').addEventListener('click', function(){
    let num = parseInt(document.getElementById('num').value);
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let out = document.getElementById('out');

    if(!isNaN(num)) {
        let converter = num * exchangeRates[from][to];
        out.innerHTML = num + ' ' + from + "=" + converter.toFixed(2) + ' ' + to;
    }else {
        out.innerHTML = "пожалуйста, коректную сумму";
    }
});
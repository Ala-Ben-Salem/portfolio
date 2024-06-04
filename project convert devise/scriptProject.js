function convert(){
    var amount = document.getElementById("amount").value;
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;
    var url = "https://api.exchangerate-api.com/v4/latest/" + fromCurrency;

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var rate = data.rates[toCurrency];
            var convertAmount = amount * rate;
            document.getElementById("result").innerHTML = amount + " " + fromCurrency + " = " + convertAmount + " " + toCurrency;
        })
        .catch(function(error) {
            console.log("ERROR: ", error);
        });

        var resultDiv = document.getElementById("result");
        resultDiv.style.color = "red";
        resultDiv.style.fontWeight = "bold";
    }
    
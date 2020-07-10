var url = "https://api.exchangeratesapi.io/latest?base="

async function convert(){
    var base = document.getElementById('base').value;
    var out = document.getElementById('out').value;
    var amount = document.getElementById('amount').value;
    var final;
    let response = await fetch(`${url}${base}`,{method:'GET'})
    let data = await response.json()
    final = data.rates
    final = final[out]*parseFloat(amount)
    var result = `Converted value of ${amount} ${base} is ${final} ${out}`
    document.getElementById('output').innerText=result
}

//es5
/*function convert(){
    var base = document.getElementById('base').value;
    var out = document.getElementById('out').value;
    var amount = document.getElementById('amount').value;
    var final;
    fetch(`${url}${base}`,{method:'GET'})
    .then((response) => response.json())
    .then((data) => {
        final = data.rates
        final = final[out]*parseFloat(amount)
        var result = `Converted value of ${amount} ${base} is ${final} ${out}`
        document.getElementById('output').innerText=result
    })
}*/
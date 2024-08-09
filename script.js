document.getElementById("calculate").addEventListener("click", function(){
    const value = document.getElementById("value").value
    const interest = (document.getElementById("interest-rate").value) / 100
    const time = document.getElementById("time").value

    const total = value * (1 + interest)**time

    document.getElementById("total").innerHTML = ("&euro;" + total.toFixed(2)).replace(".", ",")
})
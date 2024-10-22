const celsius = document.getElementById('celsius')
const farenheit = document.getElementById('fahrenheit')

function CalcCelsius(){
    celsius.value = 5/9 * (parseFloat(farenheit.value) - 32)
}

function CalcFahrenheit(){
    farenheit.value = parseFloat(celsius.value) * 1.8 + 32
}
const temps = [20,30,40,50,60, 70];

const celsiusToFahrenheit = (valor) => (valor * 9/5) + 32


function arrayFahrenheit(temps) {
    const tConvertidas = new Map();
    temps.forEach(e => {
        tConvertidas.set(e, celsiusToFahrenheit(e));
    });
    return tConvertidas;
}

for(let [key, value] of arrayFahrenheit(temps)) {
    console.log( key + " "+ value)
}
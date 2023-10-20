const actualTemp = prompt("What is the current temperature?"); //human dies at 106F -> heat stroke, lowest is -26F
const desiredTemp = 77; //room temperature


if (actualTemp < desiredTemp) {
    console.log("Run heat");
} else if (actualTemp > desiredTemp) {
    console.log("Run A/C");
} else (console.log(actualTemp == desiredTemp, "Standby")); {
}


const tempCelsius = prompt("What is the current temperature?")
const celcius = parseInt(tempCelsius);
const targetUnit = prompt ("which unit of temperature would you like to convert to? (K, C, F)")
const kelvin = 273.15;
const fahrenheit = 32;


switch (targetUnit) {
    case "K": 
    console.log(celcius + kelvin + " °K")
    break; 
    case "C":
    console.log(celcius + " °C")
    break;
    case "F":
    console.log(((celcius * 9/5) + fahrenheit) + " °F")
    break;
}


//0°C + 273.15 = 273.15K
//(0°C × 9/5) + 32 = 32°F



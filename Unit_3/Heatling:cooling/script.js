const actualTemp = prompt("What is the current temperature?"); //human dies at 106F -> heat stroke, lowest is -26F
const desiredTemp = 77; //room temperature


if (actualTemp < desiredTemp) {
    console.log("Run heat");
} else if (actualTemp > desiredTemp) {
    console.log("Run A/C");
} else if (actualTemp === desiredTemp) {
    console.log("Standby"); 
}


const tempCelsius = prompt("What is the current temperature?")
const celcius = parseInt(tempCelsius);
const targetUnit = prompt ("which unit of temperature would you like to convert to? (K, C, F)")

switch (targetUnit) {
    case "K": 
    console.log(celcius + 273.15 + " °K")
    break; 
    case "C":
    console.log(celcius + " °C")
    break;
    case "F":
    console.log(((celcius * 9/5) + 32) + " °F")
    break;
}




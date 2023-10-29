{ 
let position = 0;
let direction = 1;

// function moveForward(distance) {

// }

const moveForward = (distance) => {
    position += direction * distance;
    console.log(position);
}

const moveBackward = (distance) => {
    position -= direction * distance;
}

const turnAround = () => {
    direction *= -1;
}

function printLocation () {
    console.log(position); 
}

console.log(`start at 0, move forward by 5`)
moveForward(5)
console.log(`move back from 5, 3 positions`)
moveBackward(3)
console.log(`location`)
printLocation()

}
//extended 

let positioN = 0; //North
let positionE = 0; //East

let direction = "N"

function moveForward(distance) {
    switch(direction) {
        case "N":
            position += distance;
            break;
        case "E":
            position += distance; 
            break;
        case "S":
            position += distance; 
            break;
        case "W":
            position += distance; 
            break;
    }
}

function moveBackward(distance) {
    moveForward(-distance);
}

function turnLeft() {
    switch(direction) {
        case "N":
            position += distance;
            break;
        case "E":
            position += distance; 
            break;
        case "S":
            position += distance; 
            break;
        case "W":
            position += distance; 
            break;
    }
}

function turnRight() {
    switch(direction) {
        case "N":
            position += distance;
            break;
        case "E":
            position += distance; 
            break;
        case "S":
            position += distance; 
            break;
        case "W":
            position += distance; 
            break;
    }
}

function printLocation () {
    console.log(`${positioN} N, ${positionE} E`);
}

moveForward(5);
printLocation();
turnRight();
moveForward(2);
printLocation();

